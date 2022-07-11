import css from "./features.module.scss";
import { features } from "../../constants/features";
import { Blocks } from "./Blocks";
import { useTranslation } from "react-i18next";

const Featurespage = () => {
  const { t } = useTranslation();
  return (
    <div className={css.amazingFeatures}>
      <h1>{t("features.title")}</h1>
      <div className={css.blocks}>
        {features.map((item, index) => (
          <Blocks key={item.id} isOdd={(index + 1) % 2 === 0} item={item} />
        ))}
      </div>
    </div>
  );
};

export default Featurespage;
