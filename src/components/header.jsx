import React from "react";
import scss from "./header.module.scss";
const Header = () => {
  return (
    // <div className="container">
    //   <div className={scss.container}>
    //     <div className={scss.img}>
    //       <img src="https://easyretro.io/_nuxt/e467cce5c7f784bb97bef20dd03e50fa.svg" alt="" />
    //     </div>
    //     <div className={scss.about}>
    //       <ul className="nav">
    //         <li className="nav-item">
    //           <a className="nav-link active" aria-current="page" href="#">
    //             About
    //           </a>
    //         </li>
    //         <li className="nav-item">
    //           <a className="nav-link" href="#">
    //             Pricing
    //           </a>
    //         </li>
    //         <li className="nav-item">
    //           <a className="nav-link" href="#">
    //             Features
    //           </a>
    //         </li>
    //         <li className="nav-item">
    //           <a className="nav-link">Login</a>
    //         </li>
    //         <li className="nav-item">
    //           <a className="nav-link" href="#">
    //             Register
    //           </a>
    //         </li>
    //       </ul>
    //       <select>
    //         <option value="">EN</option>
    //         <option value="">RU</option>
    //       </select>
    //     </div>
    //   </div>
    // </div>
    <div className="container">
      <section class={scss.top_nav}>
        <div className={scss.img}>
          <img src="/images/header/logo.svg" alt="" />
        </div>
        <input id={scss.menu_toggle} type="checkbox" />
        <label class={scss.menu_button_container} for={scss.menu_toggle}>
          <div class={scss.menu_button}></div>
        </label>
        <ul class={scss.menu}>
          <li>About</li>
          <li>Pricing</li>
          <li>Features</li>
          <li>Login</li>
          <li>Register</li>
        </ul>
      </section>
    </div>
  );
};

export default Header;
