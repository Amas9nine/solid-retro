import { useTranslation } from 'react-i18next';
import { Trans, } from 'react-i18next';


function App() {

const {t , i18n} = useTranslation()

const changeLanguage = (language) =>{
  i18n.changeLanguage(language)
}

  return (
    <div className="App">
      <button onClick={()=> changeLanguage("en") } >EN</button>
      <button onClick={()=> changeLanguage("ru") } >RU</button>
      <hr/>
      <Trans i18nKey="description.part1">
      To get started , edit <code>src/App.js</code> and saveto reload
        </Trans>
        <div>{t("description.part2")}</div>
    </div>
  );
}

export default App;
