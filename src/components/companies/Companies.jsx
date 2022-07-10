import css from "./Companies.module.scss";
export default function Companies() {
  return (
    <div className={css.global}>
      <div className="container">
        <h2>Trusted by thousands of companies worldwide</h2>
        <div className={css.icons}>
          <img src="./images/intercom.png" alt="intercom" />
          <img src="./images/vividseats.png" alt="vividseats" />
          <img src="./images/xing.png" alt="xing" />
          <img src="./images/ambienz.png" alt="ambienz" />
        </div>
      </div>
    </div>
  );
}
