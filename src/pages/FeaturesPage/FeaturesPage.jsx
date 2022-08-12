import css from "./features.module.scss";
import { Blocks } from "./Blocks";
import { useTranslation } from "react-i18next";
import { useState, useEffect } from "react";
import { db } from "../../firebase/Firebase";

const Featurespage = () => {
  const { t } = useTranslation();
  const [features, setFeatures] = useState([]);
  useEffect(() => {
    db.collection("featuresPage")
      .orderBy("position", "asc")
      .get()
      .then((querySnapshot) => {
        const items = [];
        querySnapshot.forEach((doc) => {
          items.push({
            ...doc.data(),
            id: doc.id
          });
        });
        setFeatures(items);
      });
  }, []);
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
