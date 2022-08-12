import css from "./PasswordResetPage.module.scss";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { useState } from "react";
import firebase from "firebase/compat/app";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
export default function PasswordResetPage() {
  const { t } = useTranslation();
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const auth = firebase.auth();
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    await auth
      .sendPasswordResetEmail(email)
      .then(() => {
        setEmail("");
        setLoading(false);
        const notify = () => toast(t("password.toast_success"));
        notify();
      })
      .catch(() => {
        setLoading(false);
        const notify = () => toast(t("password.toast_error"));
        notify();
      });
  };
  return (
    <div className={css.global}>
      <img
        className={css.easy_retro}
        src="./images/registerPage/easy_retro_logo.svg"
        alt="easy retro logo"
      />
      <ToastContainer />
      <form onSubmit={handleSubmit} className={css.main}>
        {loading ? (
          <h5 className={css.loading}>{t("password.loading")}</h5>
        ) : (
          <h5>{t("password.password_reset_title")}</h5>
        )}
        <label>
          {t("password.email")}
          <input
            type="email"
            placeholder={t("password.email_placeholder")}
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
