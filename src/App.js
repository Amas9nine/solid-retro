import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
    </BrowserRouter>
import { useTranslation } from "react-i18next";
import { Trans } from "react-i18next";
import { useSelector, useDispatch } from "react-redux";
import { helloWorld } from "./reduxToolkit/reducer";
import Container from "react-bootstrap/Container";

function App() {
  const { t, i18n } = useTranslation();

  const changeLanguage = (language) => {
    i18n.changeLanguage(language);
  };
  const show = useSelector((state) => state.toolkit.hello);
  const dispatch = useDispatch();
  return (
    <body>
      <Container>
        <div className="testContainer">
          <p>he</p>
          <p>hel</p>
          <p>hell</p>
          <p>hello</p>
          <i>hello</i>
        </div>
        <button onClick={() => changeLanguage("en")}>EN</button>
        <button onClick={() => changeLanguage("ru")}>RU</button>
        <hr />
        <Trans i18nKey="description.part1">
          To get started , edit <code>src/App.js</code> and saveto reload
        </Trans>
        <div>{t("description.part2")}</div>
        {show} <button onClick={() => dispatch(helloWorld())}></button>
      </Container>
    </body>
  );
}

export default App;
