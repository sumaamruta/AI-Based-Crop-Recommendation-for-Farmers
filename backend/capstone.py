import os, random, numpy as np, pandas as pd
import matplotlib.pyplot as plt
import torch
import torch.nn as nn
import torch.nn.functional as F
from torch.utils.data import DataLoader, TensorDataset
from sklearn.model_selection import train_test_split
from sklearn.preprocessing import StandardScaler, LabelEncoder
from sklearn.metrics import accuracy_score, f1_score, confusion_matrix
import pickle

# -------------------- Reproducibility --------------------
seed = 42
random.seed(seed)
np.random.seed(seed)
torch.manual_seed(seed)

# -------------------- Output Directory --------------------
output_dir = "outputs"
os.makedirs(output_dir, exist_ok=True)

# -------------------- Load Dataset --------------------
csv_file = "dataset/Crop_recommendation.csv"

if os.path.exists(csv_file):
    df = pd.read_csv(csv_file)
else:
    # Synthetic fallback
    n = 2200
    rng = np.random.default_rng(123)

    df = pd.DataFrame({
        'N': rng.normal(70, 20, n).clip(0, 140),
        'P': rng.normal(50, 18, n).clip(0, 120),
        'K': rng.normal(48, 20, n).clip(0, 140),
        'temperature': rng.normal(24, 6, n).clip(5, 40),
        'humidity': rng.normal(65, 15, n).clip(20, 100),
        'ph': rng.normal(6.5, 0.7, n).clip(3.5, 8.5),
        'rainfall': rng.normal(100, 60, n).clip(0, 300),
        'label': [f"crop_{i%22}" for i in range(n)]
    })

# -------------------- Preprocessing --------------------
feature_cols = ['N','P','K','temperature','humidity','ph','rainfall']
X = df[feature_cols].values.astype('float32')

le = LabelEncoder()
y = le.fit_transform(df['label'])
num_classes = len(le.classes_)

X_train, X_temp, y_train, y_temp = train_test_split(
    X, y, test_size=0.3, random_state=seed, stratify=y
)
X_val, X_test, y_val, y_test = train_test_split(
    X_temp, y_temp, test_size=0.5, random_state=seed, stratify=y_temp
)

scaler = StandardScaler().fit(X_train)
X_train = scaler.transform(X_train).astype('float32')
X_val   = scaler.transform(X_val).astype('float32')
X_test  = scaler.transform(X_test).astype('float32')

train_loader = DataLoader(
    TensorDataset(torch.tensor(X_train), torch.tensor(y_train)),
    batch_size=128, shuffle=True
)
val_loader = DataLoader(
    TensorDataset(torch.tensor(X_val), torch.tensor(y_val)),
    batch_size=256
)
test_loader = DataLoader(
    TensorDataset(torch.tensor(X_test), torch.tensor(y_test)),
    batch_size=256
)

# -------------------- MLP Model --------------------
class MLPNet(nn.Module):
    def __init__(self, in_dim, num_classes):
        super().__init__()
        self.net = nn.Sequential(
            nn.Linear(in_dim, 256),
            nn.ReLU(),
            nn.LayerNorm(256),
            nn.Dropout(0.2),
            nn.Linear(256, 256),
            nn.ReLU(),
            nn.LayerNorm(256),
            nn.Dropout(0.2),
            nn.Linear(256, num_classes)
        )

    def forward(self, x):
        return self.net(x)

# -------------------- Training Function --------------------
def train_model(model, train_loader, val_loader, epochs=100, lr=1e-3):
    device = 'cuda' if torch.cuda.is_available() else 'cpu'
    model.to(device)

    optimizer = torch.optim.Adam(model.parameters(), lr=lr)
    criterion = nn.CrossEntropyLoss()

    best_val = 0
    best_state = model.state_dict()

    for epoch in range(epochs):
        model.train()
        correct, total = 0, 0

        for xb, yb in train_loader:
            xb, yb = xb.to(device), yb.to(device)
            logits = model(xb)
            loss = criterion(logits, yb)

            optimizer.zero_grad()
            loss.backward()
            optimizer.step()

            pred = logits.argmax(1)
            correct += (pred == yb).sum().item()
            total += yb.size(0)

        train_acc = correct / total

        # Validation
        model.eval()
        correct, total = 0, 0
        with torch.no_grad():
            for xb, yb in val_loader:
                xb, yb = xb.to(device), yb.to(device)
                pred = model(xb).argmax(1)
                correct += (pred == yb).sum().item()
                total += yb.size(0)

        val_acc = correct / total

        if val_acc > best_val:
            best_val = val_acc
            best_state = model.state_dict()

        if epoch % 10 == 0:
            print(f"Epoch {epoch}: Train={train_acc:.4f} Val={val_acc:.4f}")

    model.load_state_dict(best_state)
    return model

# -------------------- Train Model --------------------
mlp = MLPNet(len(feature_cols), num_classes)
mlp = train_model(mlp, train_loader, val_loader)

# -------------------- Evaluation --------------------
def evaluate(model, loader):
    device = 'cuda' if torch.cuda.is_available() else 'cpu'
    model.eval()
    y_true, y_pred = [], []

    with torch.no_grad():
        for xb, yb in loader:
            xb = xb.to(device)
            pred = model(xb).argmax(1).cpu().numpy()
            y_pred.extend(pred)
            y_true.extend(yb.numpy())

    acc = accuracy_score(y_true, y_pred)
    f1 = f1_score(y_true, y_pred, average='macro')
    return acc, f1, y_true, y_pred

acc, f1, y_true, y_pred = evaluate(mlp, test_loader)
print("Test Accuracy:", acc)
print("Macro F1:", f1)

# -------------------- Confusion Matrix --------------------
cm = confusion_matrix(y_true, y_pred)
plt.figure()
plt.imshow(cm)
plt.title("Confusion Matrix")
plt.xlabel("Predicted")
plt.ylabel("True")
plt.tight_layout()
plt.savefig(os.path.join(output_dir, "confusion_matrix.png"))
plt.close()

# -------------------- Save Artifacts --------------------
torch.save(mlp.state_dict(), os.path.join(output_dir, "model_mlp.pt"))

with open(os.path.join(output_dir, "scaler.pkl"), "wb") as f:
    pickle.dump(scaler, f)

with open(os.path.join(output_dir, "label_encoder.pkl"), "wb") as f:
    pickle.dump(le, f)

print("\nAll files saved inside 'outputs/' folder")