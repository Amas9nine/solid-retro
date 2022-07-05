import css from "./Jumbotron.module.css";
export default function Jumbotron() {
  return (
    <div className={css.global}>
      <div className={css.left}>
        <div>
          <div className={css.textFire}>
            <h1 className={css.leftText}>Improve with Fun Sprint Retrospectives</h1>
            <img
              className={css.fire}
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/FireIcon.svg/1200px-FireIcon.svg.png"
            />
          </div>
          <p>
            Collaborate with your remote team and get better at what you do with a simple, intuitive
            and beautiful tool
          </p>
          <button className={css.getStartedBtn}>Get Started for Free</button>
        </div>
      </div>
      <div className={css.right}>
        <img src="https://conceptboard.com/wp-content/uploads/Header_retro_article_V2-01.png" />
      </div>
    </div>
  );
}
