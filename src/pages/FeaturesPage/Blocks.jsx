import { Container } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import css from "../FeaturesPage/blocks.module.scss";
export const Blocks = ({ isOdd, ...item }) => {
  const { t } = useTranslation();
  return (
    <Container>
      <div className={css.cards}>
        {!isOdd ? (
          <div className={css.left}>
            <img src={item.img} alt="" />
            <div className={css.content}>
              <h2>{t(item.name)}</h2>
              <p>{t(item.content)}</p>
            </div>
          </div>
        ) : (
          <div className={css.right}>
            <div className={css.content}>
              <h2>{t(item.name)}</h2>
              <p>{t(item.content)}</p>
            </div>
            <img src={item.img} alt="" />
          </div>
        )}
      </div>
    </Container>
  );
};
