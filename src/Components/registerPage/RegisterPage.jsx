import css from "./RegisterPage.module.scss";
export default function RegisterPage() {
  return (
    <div className={css.global}>
      <h1>Easy Retro</h1>
      <div className={css.main}>
        <h1>Register</h1>
        <label htmlFor="">Name</label> <br />
        <input type="text" placeholder="Name" /> <br />
        <label htmlFor="Email">Email</label> <br />
        <input type="email" placeholder="Your email" /> <br />
        <label htmlFor="Email">Type your password</label> <br />
        <input type="password" placeholder="Password" />
        <p> Should contain at least 8 chars, 1 number, 1 uppercase and 1 lowercase. </p>
        <div className={css.checkbox}>
          <input type="checkbox" />
          <span>By signing up you agree to our Terms and Privacy Policy</span> <br />
        </div>
        <div className={css.checkbox}>
          <input type="checkbox" />
          <span>I want to receive updates, promotions and tips in my inbox </span>
        </div>
        <br />
        <button className={css.createAc}>Create account</button> <br />
        <button className={css.signIn}>Sign in with Google</button> <br />
        <h5>Already have an account? Login</h5>
      </div>
    </div>
  );
}
