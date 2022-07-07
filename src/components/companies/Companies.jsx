import css from "./Companies.module.scss";
export default function Companies() {
  return (
    <div className={css.global}>
      <div className={css.container}>
        <h2>Trusted by thousands of companies worldwide</h2>
        <div className={css.icons}>
          <img src="https://easyretro.io/_nuxt/img/intercom.0f23390.png" alt="" />
          <img src="https://easyretro.io/_nuxt/img/vividseats.00d18ce.png" alt="img" />
          <img src="https://easyretro.io/_nuxt/img/xing.54cbf82.png" alt="img" />
          <img src="https://easyretro.io/_nuxt/img/ambienz.e1191a3.png" alt="img" />
        </div>
      </div>
    </div>
  );
}
