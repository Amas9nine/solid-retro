import { Container } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import css from "../FeaturesPage/blocks.module.scss";
export const Blocks = (props) => {
  const { t } = useTranslation();
  return (
    <Container>
      <div className={css.cards}>
        {!props.isOdd ? (
          <div className={css.left}>
            <img src={props.item.img} alt="" />
            <div className={css.content}>
              <h2>{t(props.item.name)}</h2>
              <p>{t(props.item.content)}</p>
            </div>
          </div>
        ) : (
          <div className={css.right}>
            <div className={css.content}>
              <h2>{t(props.item.name)}</h2>
              <p>{t(props.item.content)}</p>
            </div>
            <img src={props.item.img} alt="" />
          </div>
        )}
      </div>
    </Container>
  );
};
