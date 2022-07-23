import css from "./RegisterPage.module.scss";
import { useTranslation } from "react-i18next";
import { useState } from "react";
import firebase from "firebase/compat/app";
export default function RegisterPage() {
  const { t } = useTranslation();
  const [credintials, setCredintials] = useState({ email: "", name: "", password: "" });
  const auth = firebase.auth();
  const handleSignUpRequest = (e) => {
    e.preventDefault();
    auth
      .createUserWithEmailAndPassword(credintials.email, credintials.password)
      .then((userCredentials) => {
        const user = userCredentials.user;
        alert("User Created ");
        console.log(user);
      })
      .catch(() => {
        alert("your account already created");
      });
  };
  const handleUserInputChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    setCredintials((prev) => {
      return { ...prev, [name]: value };
    });
  };
  return (
    <div className={css.global}>
      <img
        className={css.easy_retro}
        src="./images/registerPage/easy_retro_logo.svg"
        alt="easy retro logo"
      />
      <div className={css.main}>
        <h5>{t("register.register")}</h5>
        <label>
          {t("register.name")}
          <input
            type="text"
            placeholder={t("register.name")}
            name="name"
            value={credintials.name}
            onChange={handleUserInputChange}
          />
        </label>
        <label>
          {t("register.email")}
          <input
            type="email"
            placeholder={t("register.placeholder_email")}
            name="email"
            value={credintials.email}
            onChange={handleUserInputChange}
          />
        </label>
        <label>
          {t("register.password")}
          <input
            type="password"
            placeholder={t("register.placeholder_password")}
            name="password"
            value={credintials.password}
            onChange={handleUserInputChange}
          />
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
        <button onClick={handleSignUpRequest} className={css.createAc}>
          {t("register.create_account")}
        </button>
        <button className={css.signInBtn}>
          <img src="./images/registerPage/google_icon.png" alt="google icon" />
          <span>{t("register.sign_in")}</span>
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
