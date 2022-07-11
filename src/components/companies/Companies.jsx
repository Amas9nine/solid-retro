import css from "./Companies.module.scss";
import { useTranslation } from "react-i18next";
export default function Companies() {
  const { t } = useTranslation();
  return (
    <div className={css.global}>
      <div className="container">
        <h2>{t("companies.title")}</h2>
        <div className={css.icons}>
          <img className={css.intercomIcon} src="./images/companies/intercom.png" alt="intercom" />
          <img
            className={css.vividseatsIcon}
            src="./images/companies/vividseats.png"
            alt="vividseats"
          />
          <img className={css.xingIcon} src="./images/companies/xing.png" alt="xing" />
          <img className={css.ambienzIcon} src="./images/companies/ambienz.png" alt="ambienz" />
        </div>
      </div>
    </div>
  );
}
