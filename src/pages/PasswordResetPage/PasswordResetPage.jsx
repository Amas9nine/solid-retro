import css from "./PasswordResetPage.module.scss";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { Form } from "react-bootstrap";
export default function PasswordResetPage() {
  const { t } = useTranslation();
  return (
    <Form className={css.global}>
      <img
        className={css.easy_retro}
        src="./images/registerPage/easy_retro_logo.svg"
        alt="easy retro logo"
      />
      <div className={css.main}>
        <h5>{t("password.password_reset_title")}</h5>
        <label>
          {t("password.email")}
          <input type="email" placeholder={t("password.email_placeholder")} required />
        </label>
        <button className={css.reset_password_btn}>{t("password.reset_password_btn")}</button>
        <hr />
        <span className={css.back_to_login}>
          {t("password.or")}
          <Link to="/"> {t("password.back_to_login")}</Link>
        </span>
      </div>
    </Form>
  );
}
