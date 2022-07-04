import css from "../bottomCompanies/bottom.module.scss";
import { useTranslation } from "react-i18next";
import Footer from "../footer/Footer";
export default function BottomCompanies() {
  const { t } = useTranslation();
  return (
    <div className={css.footerAndSecion}>
      <div className={css.upFooterSection}>
        <div className={css.logos}>
          <img src="https://easyretro.io/_nuxt/img/intercom-white.ee67581.png" alt="INTERCOM" />
          <img src="https://easyretro.io/_nuxt/img/vividseats-white.9dcaec1.png" alt="VIVIDSEATS" />
          <img src="https://easyretro.io/_nuxt/img/ambienz-white.fd56aae.png" alt="AMBIENZ" />
          <img src="https://easyretro.io/_nuxt/img/xing-white.bb30b9b.png" alt="XING" />
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
