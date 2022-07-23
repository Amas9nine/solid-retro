import css from "./RegisterPage.module.scss";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
export default function RegisterPage() {
  const { t } = useTranslation();
  return (
    <div className={css.global}>
      <img
        className={css.easy_retro}
        src="./images/registerPage/easy_retro_logo.svg"
        alt="easy retro logo"
      />
      <form className={css.main}>
        <h5>{t("register.register")}</h5>
        <label>
          {t("register.name")}
          <input type="text" placeholder={t("register.name")} required />
        </label>
        <label>
          {t("register.email")}
          <input type="email" placeholder={t("register.placeholder_email")} required />
        </label>
        <label>
          {t("register.password")}
          <input type="password" placeholder={t("register.placeholder_password")} required />
        </label>
        <p> {t("register.password_requirements")}</p>
        <div className={css.checkbox}>
          <input type="checkbox" />
          <span>
            {t("register.checkbox")}
            <a href=""> {t("register.terms")} </a>
            {t("register.and")}
            <a href=""> {t("register.privacy")} </a>
          </span>
        </div>
        <div className={css.checkbox}>
          <input type="checkbox" />
          <span>{t("register.checkbox2")} </span>
        </div>
        <button className={css.createAc}>{t("register.create_account")}</button>
        <button className={css.signInBtn}>
          <img src="./images/registerPage/google_icon.png" alt="google icon" />
          <span>{t("register.sign_in")}</span>
        </button>
        <hr />
        <span className={css.spanAccount}>
          {t("register.account")}
          <Link to="/login"> {t("register.login")}</Link>
        </span>
      </form>
    </div>
  );
}
