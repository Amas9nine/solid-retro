import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import FeaturesPage from "./pages/FeaturesPage/FeaturesPage";
import Footer from "./Components/footer/Footer";
import Aboutpage from "./pages/AboutPage/AboutPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/features" element={<FeaturesPage />} />
        <Route path="/about" element={<Aboutpage />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
