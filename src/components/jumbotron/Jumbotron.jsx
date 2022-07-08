import css from "./Jumbotron.module.scss";
// import { useTranslation } from "react-i18next";
export default function Jumbotron() {
  // const { t, i18n } = useTranslation();
  // const changeLanguage = (lang) => {
  //   i18n.changeLang(lang);
  // };
  return (
    <div className={css.global}>
      <div className={css.left}>
        <div>
          <div className={css.textFire}>
            <h1 className={css.leftText}>Improve with Fun Sprint Retrospectives</h1>
            {/* <h1 className={css.leftText}>{t("about.title")}</h1> */}
            <img
              className={css.fire}
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/FireIcon.svg/1200px-FireIcon.svg.png"
            />
          </div>
          <p>
            Collaborate with your remote team and get better at what you do with a simple, intuitive
            and beautiful tool
          </p>
          <button className={css.getStartedBtn}>Get Started for Free</button>
        </div>
      </div>
      <div className={css.right}>
        {/* <button onClick={() => changeLanguage("ru")}>RU</button>
        <button onClick={() => changeLanguage("en")}>ENG</button> */}
        <img src="./images/jumbotron.png" />
      </div>
    </div>
  );
}
