// import { createRoot } from "react-dom/client";
// import { BrowserRouter } from "react-router-dom";
// import App from "./app/App.tsx";
// import "./styles/index.css";

// createRoot(document.getElementById("root")!).render(
//   <BrowserRouter>
//     <App />
//   </BrowserRouter>
// ); 


// import { createRoot } from "react-dom/client";
// import App from "./app/App";
// import "./styles/index.css";

// createRoot(document.getElementById("root")!).render(<App />);



import { createRoot } from "react-dom/client";
import App from "./app/App";
import "./styles/index.css";
import "./i18n/i18n";

createRoot(document.getElementById("root")!).render(<App />);