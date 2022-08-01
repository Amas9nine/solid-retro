import ReactDOM from "react-dom/client";
import React from "react";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import "./i18n";
import { Provider } from "react-redux";
import { store } from "../src/store/index";
import "bootstrap/dist/css/bootstrap.min.css";
import "../src/firebase/Firebase";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);

reportWebVitals();
