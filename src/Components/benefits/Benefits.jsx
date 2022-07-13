import { Container } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import css from "../benefits/benefits.module.scss";
import { cards, benefitCards } from "../../constants/benefitsData";
import { Link } from "react-router-dom";

const Benefits = () => {
  const { t } = useTranslation();
  return (
    <>
      <Container>
        <h2 className={css.retrospective}>{t("benefits.WhatIsAFun")}</h2>
        <div className={css.WhatIsAFun}>
          <div className={css.left}>
            <img src="https://easyretro.io/_nuxt/img/board-example.c436564.webp" alt="" />
          </div>
          <div className={css.right}>
            <p>{t("benefits.text.Aretrospective")}</p>
            <ul>
              <li>{t("benefits.text.WhatWorkedWell")}</li>
              <li>{t("benefits.text.WhatDidnt")}</li>
              <li>{t("benefits.text.WhatActionable")}</li>
            </ul>
            <p className={css.Ltext}>{t("benefits.text.Ltext")}</p>
            <p>{t("benefits.text.Stext")}</p>
          </div>
        </div>
        <h2 className={css.retrospective}>{t("benefits.WhatPeopleSay")}</h2>
        <div className={css.WhatPeople}>
          {cards.map((item, index) => (
            <div className={css.card} key={index}>
              <header>
                <img src={item.img ? item.img : "/images/benefits/avatar.png"} alt="AVATAR" />
                <div className={css.blockName}>
                  <h2>{t(item.name)}</h2>
                  <p>{t(item.job)}</p>
                </div>
              </header>
              <div className={css.cardtext}>{t(item.comment)}</div>
              <div className={css.data}>{t(item.data)}</div>
            </div>
          ))}
        </div>
        <span className={css.clickhere}>
          <span>
            <Link to="#">{t("benefits.ClickHere.link")}</Link>
            {t("benefits.ClickHere.text")}
          </span>
        </span>
      </Container>
      <section className={css.gettingStarted}>
        <h2>{t("benefits.GettingStart.title")}</h2>
        <p>{t("benefits.GettingStart.first")}</p>
        <p>{t("benefits.GettingStart.second")}</p>
        <p>{t("benefits.GettingStart.thirth")}</p>
        <p>
          <span>
            {t("benefits.GettingStart.until")}
            <span className={css.link}>
              <Link to="#">{t("benefits.GettingStart.fourthLink")}</Link>
            </span>
          </span>
          {t("benefits.GettingStart.fourth")}
        </p>
        <p>{t("benefits.GettingStart.fifth")}</p>
      </section>
      <section className={css.whatBenefits}>
        <h2>{t("benefits.WhatBenifits.title")}</h2>
        <p>{t("benefits.WhatBenifits.first")}</p>
        <p>{t("benefits.WhatBenifits.second")}</p>
        <p>{t("benefits.WhatBenifits.thirth")}</p>
      </section>
      <Container>
        <div className={css.cards}>
          <ul>
            {benefitCards.map((item, index) => (
              <li key={index}>
                <div>
                  <img src={item.img} alt="IMG" />
                </div>
                {t(item.name)}
              </li>
            ))}
          </ul>
        </div>
        <div className={css.receive}>
          <h2>{t("benefits.Receive.title")}</h2>
          <p>{t("benefits.Receive.first")}</p>
          <p>{t("benefits.Receive.second")}</p>
          <p>{t("benefits.Receive.thirth")}</p>
          <div className={css.center}>
            <Link to="#">{t("benefits.subscribe")}</Link>
          </div>
        </div>
      </Container>
    </>
  );
};

export default Benefits;
