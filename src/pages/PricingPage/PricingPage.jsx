import { useTranslation } from "react-i18next";
import css from "./pricingPage.module.scss";
import { useState } from "react";
import { Container } from "react-bootstrap";
import { pricing } from "../../constants/pricingPage";

export default function PricingPage() {
  const [head, setHead] = useState(false);
  const { t, i18n } = useTranslation();
  return (
    <>
      <div className={css.backColor}></div>
      <div className={css.background}></div>
      <Container>
        <div className={css.sectionHeader}>
          {head ? <h1>{t("pricing.TryEasy")}</h1> : <h1>{t("pricing.TwoMounth")}</h1>}
          <div className={css.toggleHeader}>
            <span>{t("pricing.Showannual")}</span>
            <div className={css.toggleBox}>
              <span className={head ? css.active : ""} onClick={() => setHead(true)}>
                {t("pricing.no")}
              </span>
              <span className={!head ? css.active : ""} onClick={() => setHead(false)}>
                {t("pricing.yes")}
              </span>
            </div>
          </div>
        </div>
        <div className={css.sectionMain}>
          <div className={css.table}>
            <div className={css.tableHeader}></div>
            <div className={head ? css.first : css.activeFirst}></div>
            <div className={css.second}>{t("pricing.priceList.publick")}</div>
            <div className={css.thirth}>{t("pricing.priceList.number")}</div>
            <div className={css.fourth}>{t("pricing.priceList.surveys")}</div>
            <div className={css.fifth}>{t("pricing.priceList.unlimited")}</div>
            <div className={css.sixth}>{t("pricing.priceList.unlimitedTeam")}</div>
            <div className={head ? css.seventh : css.activeSeven}></div>
          </div>
          {pricing.map((item) => (
            <div key={item.id} className={item.popular ? css.popular : css.PriceTable}>
              <div className={css.tableHeader}>{t(item.popular)}</div>
              <div className={css.first}>
                <span className={css.tag}>{t(item.whatFor)}</span>
                <span style={{ fontWeight: 300, fontSize: 24 }}>
                  {t(head ? item.price : item.secPrice)}
                </span>
                <span>{t(item.per)}</span>
                <p>{t(head ? "" : item.us)}</p>
                <p>{t(head ? "" : "pricing.first.billed")}</p>
              </div>
              <div className={css.second}>{t(item.publick)}</div>
              <div className={css.thirth}>{t(item.numberOfTeam)}</div>
              <div className={css.fourth}>{t(item.surveys)}</div>
              <div className={css.fifth}>
                <span className={css.tag}>{t(item.unlimitedTeam)}</span>
              </div>
              <div className={css.sixth}>
                <span className={css.tag}>{t(item.unlimitedTeamMem)}</span>
              </div>
              <div className={css.seventh}>
                <button className={css.startBtn}>{t(item.start)}</button>
              </div>
            </div>
          ))}
        </div>
      </Container>
      <div className={css.contactUs}>
        <span>
          {t("pricing.forMore")}
          <a href="">{t("pricing.contact")}</a>
        </span>
      </div>
      <button onClick={() => i18n.changeLanguage("ru")}>trans</button>
    </>
  );
}
