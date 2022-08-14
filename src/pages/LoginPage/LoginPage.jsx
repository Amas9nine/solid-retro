import css from "./LoginPage.module.scss";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { useState } from "react";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useDispatch } from "react-redux";
import { setUser } from "../../store/slices/userSlice";
import firebase from "firebase/compat/app";
import ReCAPTCHA from "react-google-recaptcha";
export default function LoginPage() {
  const { t } = useTranslation();
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [error, setError] = useState("");
  const [captcha, setCaptcha] = useState(false);
  const auth = getAuth();
  const dispatch = useDispatch();
  const signInWithgoogle = () => {
    let google_provider = new firebase.auth.GoogleAuthProvider();
    firebase
      .auth()
      .signInWithPopup(google_provider)
      .then((userCredential) => {
        const user = userCredential.user._delegate;
        dispatch(setUser({ email: user.email, token: user.accessToken, id: user.uid }));
        localStorage.setItem("user", JSON.stringify(user));
      })
      .catch((err) => {
        setError(err.message);
      });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, pass)
      .then((userCredential) => {
        const user = userCredential.user;
        dispatch(setUser({ email: user.email, token: user.accessToken, id: user.uid }));
        localStorage.setItem("user", JSON.stringify(user));
      })
      .catch((err) => {
        setError(err.message);
      });
  };
  return (
    <div className={css.global}>
      <img
        className={css.easy_retro}
        src="./images/registerPage/easy_retro_logo.svg"
        alt="easy retro logo"
      />
      <form className={css.main} onSubmit={handleSubmit}>
        <h5>{t("login.login")}</h5>
        {error ? (
          <div className={css.error}>
            <p>{error}</p>
          </div>
        ) : (
          ""
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
        <label>
          {t("login.password")}
          <input
            type="password"
            placeholder={t("login.password")}
            required
            value={pass}
            onChange={(e) => setPass(e.target.value)}
          />
        </label>
        <div className={css.recap}>
          <ReCAPTCHA
            sitekey="6LfQQkohAAAAAH5coI75ZApxmylS0mQ9hvxwg9wQ"
            onErrored={() => alert("Check your internet connection")}
            onChange={() => setCaptcha(!captcha)}
          />
        </div>
        <button className={captcha ? css.loginBtn : css.logBtn}>{t("login.login_btn")}</button>
        <button className={css.signInBtn} onClick={signInWithgoogle}>
          <img src="./images/registerPage/google_icon.png" alt="google icon" />
          <span>{t("login.sign_in_btn")}</span>
        </button>
        <div className={css.forgot_password}>
          <Link to="/password">{t("login.forgot_password")}</Link>
        </div>
        <hr />
        <div className={css.register}>
          <span>{t("login.account")}</span>
          <Link to="/register"> {t("login.register")}</Link>
        </div>
      </form>
    </div>
  );
}
