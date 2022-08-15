import css from "./PasswordResetPage.module.scss";
import EasyRetroLogo from "./../../Components/easyRetroLogo/EasyRetroLogo";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { useState } from "react";
import firebase from "firebase/compat/app";

export default function PasswordResetPage() {
  const { t } = useTranslation();
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const auth = firebase.auth();
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    await auth
      .sendPasswordResetEmail(email)
      .then(() => {
        setEmail("");
        setLoading(false);
        setError(false);
        setSuccess("success");
      })
      .catch((err) => {
        setLoading(false);
        setSuccess(false);
        setError(err);
      });
  };
  return (
    <div className={css.global}>
      <EasyRetroLogo />
      <form onSubmit={handleSubmit} className={css.main}>
        {success ? <div className={css.success}>{t("password.success_message")}</div> : ""}
        {error ? <div className={css.error}>{t("password.error_message")}</div> : ""}
        {loading ? (
          <h5 className={css.loading}>{t("password.loading")}</h5>
        ) : (
          <h5>{t("password.password_reset_title")}</h5>
        )}
        <label>
          {t("login.email")}
          <input
            type="email"
            placeholder={t("login.placeholder_email")}
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>
        <button className={css.reset_password_btn} disabled={!email}>
          {t("password.reset_password_btn")}
        </button>
        <hr />
        <span className={css.back_to_login}>
          {t("password.or")}
          <Link to="/login"> {t("password.back_to_login")}</Link>
        </span>
      </form>
    </div>
  );
}
