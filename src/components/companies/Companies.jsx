import css from "./Companies.module.scss";
export default function Companies() {
  return (
    <div className={css.global}>
      <div className={css.container}>
        <h2>Trusted by thousands of companies worldwide</h2>
        <div className={css.icons}>
          <img src="./images/intercom.png" alt="" />
          <img src="./images/vividseats.png" alt="img" />
          <img src="./images/xing.png" alt="img" />
          <img src="./images/ambienz.png" alt="img" />
        </div>
      </div>
    </div>
  );
}
