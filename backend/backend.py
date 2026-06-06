# import torch
# import pickle
# import numpy as np
# import requests
# from fastapi import FastAPI
# from pydantic import BaseModel
# import torch.nn as nn
# from fastapi.middleware.cors import CORSMiddleware

# # AUTH IMPORTS
# from sqlalchemy import create_engine, Column, Integer, String
# from sqlalchemy.orm import sessionmaker, declarative_base
# from passlib.context import CryptContext

# app = FastAPI()

# # CACHE (FOR FAST RESPONSE)

# market_cache = {}

# # CORS

# app.add_middleware(
#     CORSMiddleware,
#     allow_origins=["*"],
#     allow_credentials=True,
#     allow_methods=["*"],
#     allow_headers=["*"],
# )

# # DATABASE SETUP

# DATABASE_URL = "sqlite:///./users.db"

# engine = create_engine(
#     DATABASE_URL,
#     connect_args={"check_same_thread": False}
# )

# SessionLocal = sessionmaker(bind=engine)
# Base = declarative_base()

# pwd_context = CryptContext(
#     schemes=["bcrypt"],
#     deprecated="auto"
# )

# # USER TABLE

# class User(Base):
#     __tablename__ = "users"

#     id = Column(Integer, primary_key=True, index=True)
#     username = Column(String, unique=True, index=True)
#     email = Column(String, unique=True, index=True)
#     password = Column(String)

# # SUPPORT TABLE (NEW)

# class SupportMessage(Base):
#     __tablename__ = "support_messages"

#     id = Column(Integer, primary_key=True, index=True)
#     name = Column(String)
#     email = Column(String)
#     subject = Column(String)
#     message = Column(String)

# Base.metadata.create_all(bind=engine)

# # MODEL ARCHITECTURE

# class MLPNet(nn.Module):
#     def __init__(self, in_dim, num_classes):
#         super().__init__()
#         self.net = nn.Sequential(
#             nn.Linear(in_dim, 256),
#             nn.ReLU(),
#             nn.LayerNorm(256),
#             nn.Dropout(0.2),
#             nn.Linear(256, 256),
#             nn.ReLU(),
#             nn.LayerNorm(256),
#             nn.Dropout(0.2),
#             nn.Linear(256, num_classes)
#         )

#     def forward(self, x):
#         return self.net(x)

# # LOAD MODEL FILES

# with open("outputs/scaler.pkl", "rb") as f:
#     scaler = pickle.load(f)

# with open("outputs/label_encoder.pkl", "rb") as f:
#     label_encoder = pickle.load(f)

# input_size = 7
# num_classes = len(label_encoder.classes_)

# model = MLPNet(input_size, num_classes)
# model.load_state_dict(
#     torch.load("outputs/model_mlp.pt", map_location=torch.device("cpu"))
# )
# model.eval()

# # AUTH MODELS

# class RegisterInput(BaseModel):
#     username: str
#     email: str
#     password: str

# class LoginInput(BaseModel):
#     username: str
#     password: str

# # SUPPORT INPUT MODEL (NEW)

# class SupportInput(BaseModel):
#     name: str
#     email: str
#     subject: str
#     message: str

# # REGISTER ENDPOINT

# @app.post("/register")
# def register(user: RegisterInput):

#     db = SessionLocal()

#     existing_user = db.query(User).filter(
#         (User.username == user.username) |
#         (User.email == user.email)
#     ).first()

#     if existing_user:
#         db.close()
#         return {"message": "User already exists"}

#     safe_password = user.password[:72]
#     hashed_password = pwd_context.hash(safe_password)

#     new_user = User(
#         username=user.username,
#         email=user.email,
#         password=hashed_password
#     )

#     db.add(new_user)
#     db.commit()
#     db.close()

#     return {"message": "User registered successfully"}

# # LOGIN ENDPOINT

# @app.post("/login")
# def login(user: LoginInput):

#     db = SessionLocal()

#     db_user = db.query(User).filter(
#         User.username == user.username
#     ).first()

#     if not db_user:
#         db.close()
#         return {"message": "User not found"}

#     safe_password = user.password[:72]

#     if not pwd_context.verify(safe_password, db_user.password):
#         db.close()
#         return {"message": "Incorrect password"}

#     db.close()
#     return {"message": "Login successful"}

# # SUPPORT MESSAGE ENDPOINT

# @app.post("/support")
# def send_support_message(data: SupportInput):

#     db = SessionLocal()

#     new_message = SupportMessage(
#         name=data.name,
#         email=data.email,
#         subject=data.subject,
#         message=data.message
#     )

#     db.add(new_message)
#     db.commit()
#     db.close()

#     return {"message": "Support message sent successfully"}

# # GET ALL SUPPORT MESSAGES

# @app.get("/support/messages")
# def get_support_messages():

#     db = SessionLocal()
#     messages = db.query(SupportMessage).all()
#     db.close()

#     return messages

# # PREDICTION INPUT MODEL

# class SoilInput(BaseModel):
#     nitrogen: float
#     phosphorus: float
#     potassium: float
#     temperature: float
#     humidity: float
#     ph: float
#     rainfall: float

# # PREDICTION ENDPOINT

# @app.post("/predict")
# def predict(data: SoilInput):

#     values = np.array([[
#         data.nitrogen,
#         data.phosphorus,
#         data.potassium,
#         data.temperature,
#         data.humidity,
#         data.ph,
#         data.rainfall
#     ]])

#     scaled = scaler.transform(values)

#     tensor_input = torch.tensor(scaled, dtype=torch.float32)

#     with torch.no_grad():
#         outputs = model(tensor_input)
#         predicted_index = torch.argmax(outputs, dim=1).item()

#     crop_name = label_encoder.inverse_transform([predicted_index])[0]

#     return {
#         "recommended_crop": crop_name
#     }

# # MANDI API SETTINGS

# API_KEY = "YOUR_API_KEY"

# API_URL = "https://api.data.gov.in/resource/9ef84268-d588-465a-a308-a864a43d0070"

# crop_mapping = {
#     "rice": "Rice",
#     "maize": "Maize",
#     "chickpea": "Gram",
#     "pigeonpeas": "Tur",
#     "mungbean": "Moong",
#     "blackgram": "Urad",
#     "lentil": "Masoor",
#     "banana": "Banana",
#     "mango": "Mango",
#     "orange": "Orange",
#     "papaya": "Papaya",
#     "pomegranate": "Pomegranate",
#     "grapes": "Grapes",
#     "apple": "Apple",
#     "watermelon": "Water Melon",
#     "muskmelon": "Musk Melon",
#     "coconut": "Coconut",
#     "coffee": "Coffee",
#     "cotton": "Cotton",
#     "jute": "Rice"
# }

# # FETCH MARKET DATA

# def fetch_mandi_price(crop_name):

#     mandi_crop = crop_mapping.get(crop_name, crop_name)

#     params = {
#         "api-key": API_KEY,
#         "format": "json",
#         "filters[commodity]": mandi_crop,
#         "limit": 20
#     }

#     try:
#         response = requests.get(API_URL, params=params, timeout=5)
#         data = response.json()

#         records = data.get("records", [])

#         prices = []

#         for r in records:
#             modal_price = r.get("modal_price")

#             try:
#                 prices.append(float(modal_price))
#             except:
#                 continue

#         if not prices:
#             return None

#         avg_price = sum(prices) / len(prices)

#         return round(avg_price / 10, 2)

#     except Exception as e:
#         print("Mandi API error:", e)
#         return None

# # MARKET ANALYSIS ENDPOINT

# @app.get("/market/{crop_name}")
# def get_market_data(crop_name: str):

#     crop_name = crop_name.lower()

#     if crop_name in market_cache:
#         return market_cache[crop_name]

#     real_price = fetch_mandi_price(crop_name)

#     if real_price is None:
#         real_price = 250

#     crops_list = [
#         {
#             "rank": 1,
#             "name": crop_name.capitalize(),
#             "price": real_price,
#             "change": round(np.random.uniform(-5, 15), 2),
#             "status": "buy",
#             "recommended": True
#         }
#     ]

#     sample_crops = ["Rice","Maize","Gram","Banana","Mango"]

#     rank = 2

#     for crop in sample_crops:

#         if rank > 6:
#             break

#         crops_list.append({
#             "rank": rank,
#             "name": crop,
#             "price": round(real_price * np.random.uniform(0.8,1.2),2),
#             "change": round(np.random.uniform(-5,10),2),
#             "status": "buy",
#             "recommended": False
#         })

#         rank += 1

#     result = {

#         "average_price": real_price,
#         "market_volume": "1.2M",
#         "active_traders": 8547,

#         "price_trend": [
#             {"day":"Mon","price":real_price*0.9},
#             {"day":"Tue","price":real_price*0.92},
#             {"day":"Wed","price":real_price*0.95},
#             {"day":"Thu","price":real_price*0.97},
#             {"day":"Fri","price":real_price},
#             {"day":"Sat","price":real_price*1.02},
#             {"day":"Sun","price":real_price*1.05},
#         ],

#         "monthly_prices": [
#             {"month":"Sep","price":real_price*0.8},
#             {"month":"Oct","price":real_price*0.85},
#             {"month":"Nov","price":real_price*0.9},
#             {"month":"Dec","price":real_price*0.95},
#             {"month":"Jan","price":real_price},
#             {"month":"Feb","price":real_price*1.05},
#         ],

#         "commodity_status": crops_list
#     }

#     market_cache[crop_name] = result

#     return result


import torch
import pickle
import numpy as np
import requests
from fastapi import FastAPI
from pydantic import BaseModel
import torch.nn as nn
from fastapi.middleware.cors import CORSMiddleware

# AUTH IMPORTS
from sqlalchemy import create_engine, Column, Integer, String
from sqlalchemy.orm import sessionmaker, declarative_base
from passlib.context import CryptContext

app = FastAPI()

# CACHE (FOR FAST RESPONSE)
market_cache = {}

# CORS
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# DATABASE SETUP
DATABASE_URL = "sqlite:///./users.db"

engine = create_engine(
    DATABASE_URL,
    connect_args={"check_same_thread": False}
)

SessionLocal = sessionmaker(bind=engine)
Base = declarative_base()

pwd_context = CryptContext(
    schemes=["bcrypt"],
    deprecated="auto"
)

# USER TABLE
class User(Base):
    __tablename__ = "users"

    id = Column(Integer, primary_key=True, index=True)
    username = Column(String, unique=True, index=True)
    email = Column(String, unique=True, index=True)
    password = Column(String)

# SUPPORT TABLE
class SupportMessage(Base):
    __tablename__ = "support_messages"

    id = Column(Integer, primary_key=True, index=True)
    name = Column(String)
    email = Column(String)
    subject = Column(String)
    message = Column(String)

Base.metadata.create_all(bind=engine)

# MODEL ARCHITECTURE
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

# LOAD MODEL FILES
with open("outputs/scaler.pkl", "rb") as f:
    scaler = pickle.load(f)

with open("outputs/label_encoder.pkl", "rb") as f:
    label_encoder = pickle.load(f)

input_size = 7
num_classes = len(label_encoder.classes_)

model = MLPNet(input_size, num_classes)
model.load_state_dict(
    torch.load("outputs/model_mlp.pt", map_location=torch.device("cpu"))
)
model.eval()

# AUTH MODELS
class RegisterInput(BaseModel):
    username: str
    email: str
    password: str

class LoginInput(BaseModel):
    username: str
    password: str

# SUPPORT INPUT MODEL
class SupportInput(BaseModel):
    name: str
    email: str
    subject: str
    message: str

# REGISTER
@app.post("/register")
def register(user: RegisterInput):

    db = SessionLocal()

    existing_user = db.query(User).filter(
        (User.username == user.username) |
        (User.email == user.email)
    ).first()

    if existing_user:
        db.close()
        return {"message": "User already exists"}

    safe_password = user.password[:72]
    hashed_password = pwd_context.hash(safe_password)

    new_user = User(
        username=user.username,
        email=user.email,
        password=hashed_password
    )

    db.add(new_user)
    db.commit()
    db.close()

    return {"message": "User registered successfully"}

# LOGIN
@app.post("/login")
def login(user: LoginInput):

    db = SessionLocal()

    db_user = db.query(User).filter(
        User.username == user.username
    ).first()

    if not db_user:
        db.close()
        return {"message": "User not found"}

    safe_password = user.password[:72]

    if not pwd_context.verify(safe_password, db_user.password):
        db.close()
        return {"message": "Incorrect password"}

    db.close()
    return {"message": "Login successful"}

# SUPPORT MESSAGE
@app.post("/support")
def send_support_message(data: SupportInput):

    db = SessionLocal()

    new_message = SupportMessage(
        name=data.name,
        email=data.email,
        subject=data.subject,
        message=data.message
    )

    db.add(new_message)
    db.commit()
    db.close()

    return {"message": "Support message sent successfully"}

# GET SUPPORT MESSAGES
@app.get("/support/messages")
def get_support_messages():

    db = SessionLocal()
    messages = db.query(SupportMessage).all()
    db.close()

    return messages

# PREDICTION INPUT
class SoilInput(BaseModel):
    nitrogen: float
    phosphorus: float
    potassium: float
    temperature: float
    humidity: float
    ph: float
    rainfall: float

# PREDICT
@app.post("/predict")
def predict(data: SoilInput):

    values = np.array([[
        data.nitrogen,
        data.phosphorus,
        data.potassium,
        data.temperature,
        data.humidity,
        data.ph,
        data.rainfall
    ]])

    scaled = scaler.transform(values)
    tensor_input = torch.tensor(scaled, dtype=torch.float32)

    with torch.no_grad():
        outputs = model(tensor_input)
        predicted_index = torch.argmax(outputs, dim=1).item()

    crop_name = label_encoder.inverse_transform([predicted_index])[0]

    return {
        "recommended_crop": crop_name
    }

# =========================
# MANDI API SETTINGS (UPDATED)
# =========================

API_KEY = "579b464db66ec23bdd000001e8f3630d4b07407072121675f01feb13"

API_URL = "https://api.data.gov.in/resource/9ef84268-d588-465a-a308-a864a43d0070"

crop_mapping = {
    "rice": "Rice",
    "maize": "Maize",
    "chickpea": "Gram",
    "pigeonpeas": "Tur",
    "mungbean": "Moong",
    "blackgram": "Urad",
    "lentil": "Masoor",
    "banana": "Banana",
    "mango": "Mango",
    "orange": "Orange",
    "papaya": "Papaya",
    "pomegranate": "Pomegranate",
    "grapes": "Grapes",
    "apple": "Apple",
    "watermelon": "Water Melon",
    "muskmelon": "Musk Melon",
    "coconut": "Coconut",
    "coffee": "Coffee",
    "cotton": "Cotton",
    "jute": "Rice"
}

# =========================
# FETCH MARKET DATA
# =========================

def fetch_mandi_price(crop_name):

    params = {
        "api-key": API_KEY,
        "format": "json",
        "limit": 20
    }

    try:
        response = requests.get(API_URL, params=params, timeout=5)
        data = response.json()

        print("API RESPONSE:", data)

        records = data.get("records", [])
        prices = []

        for r in records:
            modal_price = r.get("modal_price")

            try:
                prices.append(float(modal_price))
            except:
                continue

        if not prices:
            return None

        avg_price = sum(prices) / len(prices)

        return round(avg_price / 10, 2)

    except Exception as e:
        print("Mandi API error:", e)
        return None


# =========================
# MARKET ENDPOINT
# =========================

@app.get("/market/{crop_name}")
def get_market_data(crop_name: str):

    crop_name = crop_name.lower()

    real_price = fetch_mandi_price(crop_name)

    if real_price is None:
        real_price = round(np.random.uniform(180, 400), 2)

    crops_list = [
        {
            "rank": 1,
            "name": crop_name.capitalize(),
            "price": real_price,
            "change": round(np.random.uniform(-5, 15), 2),
            "status": "buy",
            "recommended": True
        }
    ]

    sample_crops = ["Rice", "Maize", "Gram", "Banana", "Mango"]

    rank = 2

    for crop in sample_crops:

        if rank > 6:
            break

        crops_list.append({
            "rank": rank,
            "name": crop,
            "price": round(real_price * np.random.uniform(0.8, 1.2), 2),
            "change": round(np.random.uniform(-5, 10), 2),
            "status": "buy",
            "recommended": False
        })

        rank += 1

    result = {

        "average_price": real_price,

        "market_volume": f"{round(np.random.uniform(0.5, 2.5), 1)}M",

        "active_traders": np.random.randint(3000, 20000),

        "price_trend": [
            {"day":"Mon","price":round(real_price*np.random.uniform(0.85,1.05),2)},
            {"day":"Tue","price":round(real_price*np.random.uniform(0.85,1.05),2)},
            {"day":"Wed","price":round(real_price*np.random.uniform(0.85,1.05),2)},
            {"day":"Thu","price":round(real_price*np.random.uniform(0.85,1.05),2)},
            {"day":"Fri","price":round(real_price*np.random.uniform(0.85,1.05),2)},
            {"day":"Sat","price":round(real_price*np.random.uniform(0.85,1.05),2)},
            {"day":"Sun","price":round(real_price*np.random.uniform(0.85,1.05),2)},
        ],

        "monthly_prices": [
    {"month":"Dec","price":round(real_price*np.random.uniform(0.7,0.9),2)},
    {"month":"Jan","price":round(real_price*np.random.uniform(0.8,1.0),2)},
    {"month":"Feb","price":round(real_price*np.random.uniform(0.85,1.05),2)},
    {"month":"Mar","price":round(real_price*np.random.uniform(0.9,1.1),2)},
    {"month":"Apr","price":round(real_price*np.random.uniform(0.95,1.15),2)},
    {"month":"May","price":round(real_price*np.random.uniform(1.0,1.2),2)},
],

        "commodity_status": crops_list
    }

    return result