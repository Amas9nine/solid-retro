import css from "./EasyRetroLogo.module.scss";
import { Link } from "react-router-dom";

export default function EasyRetroLogo() {
  return (
    <div>
      <Link to="/">
        <img
          className={css.easy_retro}
          src="./images/registerPage/easy_retro_logo.svg"
          alt="easy retro logo"
        />
      </Link>
    </div>
  );
}
