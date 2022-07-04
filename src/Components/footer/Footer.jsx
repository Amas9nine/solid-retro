import css from "./footer.module.scss";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

const Footer = () => {
  const { t } = useTranslation();
  return (
    <footer>
      <div className={css.logo}>
        <div className={css.logoImg}>
          <img src="	https://easyretro.io/_nuxt/img/logo-icon.94610e6.png" alt="" />
          <h3>
            {t("footer.helpedTeams")} <br />
            <span style={{ color: "#2e70f9" }}>1,000,000 </span> {t("footer.retrospective")}
          </h3>
        </div>
      </div>
      <div className={css.menu}>
        <legend>{t("footer.menu.Menu")}</legend>
        <ul>
          <li>
            <Link to="#">{t("footer.menu.About")}</Link>
          </li>
          <li>
            <Link to="#">{t("footer.menu.Pricing")}</Link>
          </li>
          <li>
            <Link to="#">{t("footer.menu.Features")}</Link>
          </li>
          <li>
            <Link to="#">{t("footer.menu.FAQ")}</Link>
          </li>
          <li>
            <Link to="#">{t("footer.menu.WallofLove")}</Link>
          </li>
          <li>
            <Link to="#">{t("footer.menu.Feature")}</Link>
          </li>
          <li>
            <Link to="#">{t("footer.menu.SavePlanet")}</Link>
          </li>
        </ul>
      </div>
      <div className={css.resources}>
        <legend>{t("footer.resources.Resources")}</legend>
        <ul>
          <li>
            <Link to="#">{t("footer.resources.Templates")}</Link>
          </li>
          <li>
            <Link to="#">{t("footer.resources.Academy")}</Link>
          </li>
          <li>
            <Link to="#">{t("footer.resources.Blog")}</Link>
          </li>
          <li>
            <Link to="#">{t("footer.resources.Online")}</Link>
          </li>
          <li>
            <Link to="#">{t("footer.resources.OnlineScrum")}</Link>
          </li>
          <li>
            <Link to="#">{t("footer.resources.Brainstorm")}</Link>
          </li>
        </ul>
      </div>
      <div className={css.tools}>
        <legend>{t("footer.tools.Tools")}</legend>
        <ul>
          <li>
            <Link to="#">{t("footer.tools.Meeting")}</Link>
          </li>
          <li>
            <Link to="#">{t("footer.tools.Minutes")}</Link>
          </li>
          <li>
            <Link to="#">{t("footer.tools.Time")}</Link>
          </li>
          <li>
            <Link to="#">{t("footer.tools.Team")}</Link>
          </li>
          <li>
            <Link to="#">{t("footer.tools.Burndown")}</Link>
          </li>
          <li>
            <Link to="#">{t("footer.tools.Easy")}</Link>
          </li>
          <li>
            <Link to="#">{t("footer.tools.Moving")}</Link>
          </li>
        </ul>
      </div>
      <div className={css.terms}>
        <legend>{t("footer.terms.Terms")}</legend>
        <ul>
          <li>
            <Link to="#">{t("footer.terms.Conditions")}</Link>
          </li>
          <li>
            <Link to="#">{t("footer.terms.Privacy")}</Link>
          </li>
          <li>
            <Link to="#">{t("footer.terms.Security")}</Link>
          </li>
          <li>
            <Link to="#">{t("footer.terms.Affllate")}</Link>
          </li>
        </ul>
      </div>
      <div className={css.followUs}>
        <legend>{t("footer.follow.Follow")}</legend>
        <ul>
          <li>
            <Link to="#">{t("footer.follow.Twitter")}</Link>
          </li>
          <li>
            <Link to="#">{t("footer.follow.Instagram")}</Link>
          </li>
          <li>
            <Link to="#">{t("footer.follow.LinkedIn")}</Link>
          </li>
          <li>
            <Link to="#">{t("footer.follow.YouTube")}</Link>
          </li>
          <li>
            <Link to="#">{t("footer.follow.Contact")}</Link>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
