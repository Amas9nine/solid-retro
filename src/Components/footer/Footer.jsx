import css from "./footer.module.scss";

const Footer = () => {
  return (
    <div className={css.footerAndSecion}>
      <div className={css.upFooterSection}>
        <div className={css.logos}>
          <img src="https://easyretro.io/_nuxt/img/intercom-white.ee67581.png" alt="INTERCOM" />
          <img src="https://easyretro.io/_nuxt/img/vividseats-white.9dcaec1.png" alt="VIVIDSEATS" />
          <img src="https://easyretro.io/_nuxt/img/ambienz-white.fd56aae.png" alt="AMBIENZ" />
          <img src="https://easyretro.io/_nuxt/img/xing-white.bb30b9b.png" alt="XING" />
        </div>

        <div className={css.text}>
          <h2>Join a thousands of other companies to improve your team</h2>
        </div>
        <div className={css.btn}>
          <button>Get Started for Free</button>
        </div>
      </div>
      <footer>
        <div className={css.logo}>
          <div className={css.logoImg}>
            <img src="	https://easyretro.io/_nuxt/img/logo-icon.94610e6.png" alt="" />
            <h3>
              We`ve helped teams improve in more <br /> than{" "}
              <span style={{ color: "#2e70f9" }}>1,000,000 </span> retrospective
            </h3>
          </div>
        </div>
        <div className={css.menu}>
          <legend>Menu</legend>
          <ul>
            <li>
              <a href="">About</a>
            </li>
            <li>
              <a href="">Pricing</a>
            </li>
            <li>
              <a href="">Features</a>
            </li>
            <li>
              <a href="">FAQ</a>
            </li>
            <li>
              <a href="">Wall of Love</a>
            </li>
            <li>
              <a href="">Feature Requests</a>
            </li>
            <li>
              <a href=""> Save the Planet</a>
            </li>
          </ul>
        </div>
        <div className={css.resources}>
          <legend>Resources</legend>
          <ul>
            <li>
              <a href="">Retrospective Templates</a>
            </li>
            <li>
              <a href="">Retrospective Academy</a>
            </li>
            <li>
              <a href="">Blog</a>
            </li>
            <li>
              <a href=""> Online Sticky Notes</a>
            </li>
            <li>
              <a href="">Online Scrum Board</a>
            </li>
            <li>
              <a href="">Online Brainstorm</a>
            </li>
          </ul>
        </div>
        <div className={css.tools}>
          <legend>Tools</legend>
          <ul>
            <li>
              <a href="">Meeting Agenda tool</a>
            </li>
            <li>
              <a href="">Meeting Minutes tool</a>
            </li>
            <li>
              <a href="">Meeting Timer tool</a>
            </li>
            <li>
              <a href="">Team Name generator</a>
            </li>
            <li>
              <a href="">Burndown Chart generator</a>
            </li>
            <li>
              <a href=""> Easy Kudos</a>
            </li>
            <li>
              <a href="">Moving Motivators tool</a>
            </li>
          </ul>
        </div>
        <div className={css.terms}>
          <legend>Terms</legend>
          <ul>
            <li>
              <a href="">Terms and Conditions</a>
            </li>
            <li>
              <a href=""> Privacy Policy</a>
            </li>
            <li>
              <a href=""> Security</a>
            </li>
            <li>
              <a href=""> Affiliate Program </a>
            </li>
          </ul>
        </div>
        <div className={css.followUs}>
          <legend>Follow Us</legend>
          <ul>
            <li>
              <a href="">Twitter</a>
            </li>
            <li>
              <a href="">Instagram</a>
            </li>
            <li>
              <a href=""> LinkedIn</a>
            </li>
            <li>
              <a href="">YouTube</a>
            </li>
            <li>
              <a href=""> Contact us </a>
            </li>
          </ul>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
