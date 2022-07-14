import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import RegisterPage from "./pages/registerPage/RegisterPage";
import FeaturesPage from "./pages/FeaturesPage/FeaturesPage";
import Aboutpage from "./pages/AboutPage/AboutPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/features" element={<FeaturesPage />} />
        <Route path="/about" element={<Aboutpage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
