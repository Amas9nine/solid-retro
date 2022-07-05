import css from "../bottomCompanies/bottom.module.scss";
import { useTranslation } from "react-i18next";
import Footer from "../footer/Footer";

export default function BottomCompanies() {
  const { t } = useTranslation();
  return (
    <div className={css.footerAndSecion}>
      <div className={css.upFooterSection}>
        <div className={css.logos}>
          <img src={"/images/footer/Intercomm.svg"} alt="INTERCOM" />
          <img src={"/images/footer/vividseats.png"} alt="VIVIDSEATS" />
          <img src={"/images/footer/intercom.svg"} alt="AMBIENZ" />
          <img src={"/images/footer/xing.svg"} alt="XING" />
        </div>
        <div className={css.text}>
          <h2>{t("componies")}</h2>
        </div>
        <div className={css.btn}>
          <button>{t("GetStartedForFree")}</button>
        </div>
      </div>
      <Footer />
    </div>
  );
}
