import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import { useTranslation } from 'react-i18next';
import { Trans, } from 'react-i18next';
import React from 'react'
import {useSelector,useDispatch} from 'react-redux'
import {helloWorld} from './reduxToolkit/reducer'


function App() {
const {t , i18n} = useTranslation();

const changeLanguage = (language) =>{
  i18n.changeLanguage(language)
}

  const show = useSelector(state => state.toolkit.hello)
  const dispatch = useDispatch()
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/aboutUs" element={<h1>About us</h1>}/>
        </Routes>


        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    </BrowserRouter>
    <>
    <button onClick={()=> changeLanguage("en") } >EN</button>
      <button onClick={()=> changeLanguage("ru") } >RU</button>
      <hr/>
      <Trans i18nKey="description.part1">
         To get started , edit <code>src/App.js</code> and saveto reload
       </Trans>
       <div>{t("description.part2")}</div>
    {show} <button onClick = {()=>dispatch (helloWorld())}></button>
</>
  );
}

export default App;
