import css from "../bottomCompanies/bottom.module.scss";
import { useTranslation } from "react-i18next";
import Footer from "../footer/Footer";
import Intercom from "../../images/footer/Intercomm.svg";
import Vividseats from "../../images/footer/vividseats.png";
import Ambienz from "../../images/footer/intercom.svg";
import Xing from "../../images/footer/xing.svg";

export default function BottomCompanies() {
  const { t } = useTranslation();
  return (
    <div className={css.footerAndSecion}>
      <div className={css.upFooterSection}>
        <div className={css.logos}>
          <img src={Intercom} alt="INTERCOM" />
          <img src={Vividseats} alt="VIVIDSEATS" />
          <img src={Ambienz} alt="AMBIENZ" />
          <img src={Xing} alt="XING" />
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
