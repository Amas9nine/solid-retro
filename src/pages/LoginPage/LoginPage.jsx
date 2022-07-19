import css from "./LoginPage.module.scss";
import { useTranslation } from "react-i18next";
export default function LoginPage() {
  const { t } = useTranslation();
  return (
    <div className={css.global}>
      <img
        className={css.easy_retro}
        src="./images/registerPage/easy_retro_logo.svg"
        alt="easy retro logo"
      />
      <div className={css.main}>
        <h5>{t("login.login")}</h5>
        <label>
          {t("login.email")}
          <input type="email" placeholder={t("login.placeholder_email")} />
        </label>
        <label>
          {t("login.password")}
          <input type="password" placeholder={t("login.password")} />
        </label>
        <button className={css.loginBtn}>{t("login.login_btn")}</button>
        <button className={css.signInBtn}>
          <img src="./images/registerPage/google_icon.png" alt="google icon" />
          <span>{t("login.sign_in_btn")}</span>
        </button>
        <div className={css.forgot_password}>
          <a href="">{t("login.forgot_password")}</a>
        </div>
        <hr />
        <div className={css.register}>
          <span>{t("login.account")}</span>
          <a href=""> {t("login.register")}</a>
        </div>
      </div>
    </div>
  );
}
