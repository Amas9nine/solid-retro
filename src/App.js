import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/homePage/HomePage";


function App() {
  return (
    <BrowserRouter>
      <div className="App">

        <Routes>
          <Route path="/homePage" element={<HomePage />}/>
        </Routes>

      </div>
    </BrowserRouter>
  );
}

export default App;
