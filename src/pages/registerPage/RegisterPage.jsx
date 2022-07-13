import css from "./RegisterPage.module.scss";
import { useTranslation } from "react-i18next";
export default function RegisterPage() {
  const { t } = useTranslation();
  return (
    <div className={css.global}>
      <img className={css.easy_retro} src="./images/registerPage/easy_retro_logo.svg" alt="" />
      <div className={css.main}>
        <h5>{t("register.register")}</h5>
        <label htmlFor="">{t("register.name")}</label> <br />
        <input type="text" placeholder={t("register.name")} /> <br />
        <label htmlFor="Email">{t("register.email")} </label> <br />
        <input type="email" placeholder={t("register.placeholder_email")} /> <br />
        <label htmlFor="Email">{t("register.password")} </label> <br />
        <input type="password" placeholder={t("register.placeholder_password")} />
        <p> {t("register.p")}</p>
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
        <br />
        <button className={css.createAc}>{t("register.create_account")}</button> <br />
        <button className={css.signInBtn}>
          <img src="./images/registerPage/google_icon.png" alt="" />
          <span>{t("register.sign_in")}</span> <br />
        </button>
        <hr />
        <span className={css.spanAccount}>
          {t("register.account")}
          <a href=""> {t("register.login")}</a>
        </span>
      </div>
    </div>
  );
}
