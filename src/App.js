import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import RegisterPage from "./pages/registerPage/RegisterPage";
import FeaturesPage from "./pages/FeaturesPage/FeaturesPage";
import Aboutpage from "./pages/AboutPage/AboutPage";
import LoginPage from "./pages/LoginPage/LoginPage";
import PricingPage from "./pages/PricingPage/PricingPage";
import PasswordResetPage from "./pages/PasswordResetPage/PasswordResetPage";
import { PublicRoute } from "../src/routes";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/register" element={<PublicRoute Component={RegisterPage} />} />
        <Route path="/features" element={<PublicRoute Component={FeaturesPage} />} />
        <Route path="/about" element={<PublicRoute Component={Aboutpage} />} />
        <Route path="/login" element={<PublicRoute Component={LoginPage} />} />
        <Route path="/pricing" element={<PublicRoute Component={PricingPage} />} />
        <Route path="/password" element={<PublicRoute Component={PasswordResetPage} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
