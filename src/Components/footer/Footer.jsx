import css from "./footer.module.scss";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { menu, resources, tools, terms, followUs } from "../../constants/footerData";

const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer>
      <div className={css.logo}>
        <div className={css.logoImg}>
          <img src={"/images/footer/logo.svg"} alt="" />
          <h3>
            {t("footer.helpedTeams")} <br />
            <span style={{ color: "#2e70f9" }}>1,000,000 </span> {t("footer.retrospective")}
          </h3>
        </div>
      </div>
      <div className={css.menu}>
        <legend>{t("footer.menu.Menu")}</legend>
        <ul>
          {menu.map((item) => (
            <li key={item.id}>
              <Link to="#">{t(item.title)}</Link>
            </li>
          ))}
        </ul>
      </div>
      <div className={css.resources}>
        <legend>{t("footer.resources.Resources")}</legend>
        <ul>
          {resources.map((item) => (
            <li key={item.id}>
              <Link to="#">{t(item.title)}</Link>
            </li>
          ))}
        </ul>
      </div>
      <div className={css.tools}>
        <legend>{t("footer.tools.Tools")}</legend>
        <ul>
          {tools.map((item) => (
            <li key={item.id}>
              <Link to="#">{t(item.title)}</Link>
            </li>
          ))}
        </ul>
      </div>
      <div className={css.terms}>
        <legend>{t("footer.terms.Terms")}</legend>
        <ul>
          {terms.map((item) => (
            <li key={item.id}>
              <Link to="#">{t(item.title)}</Link>
            </li>
          ))}
        </ul>
      </div>
      <div className={css.followUs}>
        <legend>{t("footer.follow.Follow")}</legend>
        <ul>
          {followUs.map((item) => (
            <li key={item.id}>
              <Link to="#">{t(item.title)}</Link>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
