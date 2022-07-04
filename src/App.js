import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import { useTranslation } from "react-i18next";
function App() {
  const { i18n } = useTranslation();
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes>
      </BrowserRouter>
      <button onClick={() => i18n.changeLanguage("ru")}>trans</button>
      <button onClick={() => i18n.changeLanguage("en")}>trans</button>
    </>
  );
}

export default App;
