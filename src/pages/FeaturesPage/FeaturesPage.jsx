import css from "./features.module.scss";
import { Blocks } from "./Blocks";
import { useTranslation } from "react-i18next";
import { useState, useEffect } from "react";
import firebase from "../../firebase/Firebase";

const Featurespage = () => {
  const { t } = useTranslation();
  const [features,setFeatures] = useState([])
  function getData() {
    ref.onSnapshot((querySnapshot) => {
      const items = [];
      querySnapshot.forEach((doc) => {
        items.push(doc.data());
      });
      setFeatures(items);
    });
  }
  useEffect(() => {
    getData();
  }, []);
  const ref = firebase.firestore().collection("featuresPage").orderBy("id","asc");
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
