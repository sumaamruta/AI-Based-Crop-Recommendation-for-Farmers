import { createBrowserRouter } from "react-router-dom";
import { Layout } from "./components/Layout";
import { LoginPage } from "./pages/LoginPage";
import { RegisterPage } from "./pages/RegisterPage";
import { WelcomePage } from "./pages/WelcomePage";
import { LanguagePicker } from "./pages/LanguagePicker";
import { InputForm } from "./pages/InputForm";
import { CropRecommendation } from "./pages/CropRecommendation";
import { MarketAnalysis } from "./pages/MarketAnalysis";
import { SupportPage } from "./pages/SupportPage";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Layout,
    children: [
      {
        index: true,
        Component: LoginPage,
      },
      {
        path: "login",
        Component: LoginPage,
      },
      {
        path: "register",
        Component: RegisterPage,
      },
      {
        path: "welcome",
        Component: WelcomePage,
      },
      {
        path: "language",
        Component: LanguagePicker,
      },
      {
        path: "input",
        Component: InputForm,
      },
      {
        path: "recommendation",
        Component: CropRecommendation,
      },
      {
        path: "market",
        Component: MarketAnalysis,
      },
      {
        path: "support",
        Component: SupportPage,
      },
    ],
  },
]);





