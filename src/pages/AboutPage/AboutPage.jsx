import css from "../AboutPage/aboutPage.module.scss";
import { Container } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import { title, devs } from "../../constants/aboutPage";

const Aboutpage = () => {
  const { t } = useTranslation();
  return (
    <div>
      <Container>
        <h1 className={css.sectionHeader}>{t("about.aboutUs")}</h1>
        <div className={css.aboutText}>
          {title.map((item) => (
            <p key={item.id}>{t(item.title)}</p>
          ))}
        </div>
        <h2 className={css.whoIs}>{t("about.whoIs")}</h2>
        <div className={css.devs}>
          {devs.map((item) => (
            <div className={css.devsCard}>
              <img src={item.img} alt="Devs" />
              <h4>{t(item.name)}</h4>
              <p>{t(item.job)}</p>
            </div>
          ))}
        </div>
        <p className={css.ourMission}>{t("about.OurMission")}</p>
        <div className={css.bottom}>
          <h4>{t("about.KeepInTuch")}</h4>
          <div className={css.imgs}>
            <a href="https://www.instagram.com/easyretro/">
              <img src="/images/login/003-instagram.png" alt="" />
            </a>
            <a href="https://twitter.com/easyretrohq/">
              <img src="/images/login/002-twitter.png" alt="" />
            </a>
            <a href="https://easyretro.io/contact-us/">
              <img src="/images/login/004-envelope.png" alt="" />
            </a>
            <a href="https://www.linkedin.com/company/easyretro">
              <img src="/images/login/001-linkedin.png" alt="" />
            </a>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Aboutpage;
