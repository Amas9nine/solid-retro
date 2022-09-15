import scss from "./dashboard.module.scss";
import { Link } from "react-router-dom";

function DashboardHeaderInside() {
  return (
    <>
      <div className={scss.back}>
        <section className={scss.section}>
          <div>
            <Link to="/" className={scss.imgLeft}>
              <img src="/images/header/logo.svg" alt="" />
            </Link>
          </div>
          <div className={scss.menu}>
            <nav className={scss.nav}>
              <Link to="/" className={scss.img}>
                <img src="/images/header/1.png" alt="" />
                <div>Dashboard</div>
              </Link>
              <Link to="/" className={scss.img}>
                <img src="/images/header/2.jfif" alt="" />
                <div>Teams</div>
              </Link>
              <Link to="/" className={scss.img}>
                <img src="/images/header/3.png" alt="" />
                <div>Analytics</div>
              </Link>
              <Link to="/" className={scss.img}>
                <img src="/images/header/4.jfif" alt="" />
                <div>Action Items</div>
              </Link>
              <Link to="/" className={scss.img}>
                <img src="/images/header/5.png" alt="" />
                <div>Integrations</div>
              </Link>
              <Link to="/" className={scss.img}>
                <img src="/images/header/6.png" alt="" />
                <div>Billing</div>
              </Link>
              <Link to="/" className={scss.img}>
                <div>name</div>
                <img src="/images/header/profile.png" alt="" />
              </Link>
            </nav>
          </div>
        </section>
      </div>
    </>
  );
}

export default DashboardHeaderInside;
