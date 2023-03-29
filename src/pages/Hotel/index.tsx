import "./style.css";
const Hotel = () => {
  return (
    <div className="container">
      <div className="container__login">
        <img
          className="container__login__svg container__login__svg--top"
          src="/assests/svg/hotel.svg"
        />
        <h1 className="container__login__title">Login</h1>
        <h3 className="container__login__text">
          Welcome to BOTSHOT Admin Panel
          <img
            className="container__login__svg container__login__svg--middle"
            src="/assests/svg/hotel.svg"
          />
        </h3>
        <form className="container__login__form">
          <label className="container__login__form__label" htmlFor="email">
            Email Address
          </label>
          <input
            type="text"
            name="email"
            id="email"
            className="container__login__form__input"
          />
          <label className="container__login__form__label" htmlFor="password">
            Password
          </label>

          <input
            type="password"
            id="password"
            className="container__login__form__input container__login__form__input--password"
          />
          <span className="material-symbols-outlined container__login__icon">
            visibility_off
          </span>
        </form>
        <a href="#" className="container__login__forgot">
          Forgot Password?
        </a>
        <button className="container__login__button">Login</button>
        <img
          className="container__login__svg container__login__svg--bottom"
          src="/assests/svg/hotel.svg"
        />
        <p className="container__login__terms">
          I hereby agree to
          <a className="link" href="#">
            Terms and Condtions
          </a>
        </p>
      </div>

      <div className="container__menu">
        <div className="container__menu__link">
          <a
            href="#"
            className="container__menu__link__anchor container__menu__link__anchor--about"
          >
            About Us
          </a>
          <a
            href="#"
            className="container__menu__link__anchor container__menu__link__anchor--policy"
          >
            Privacy Policy
          </a>
        </div>
        <div>
          <h1 className="container__menu__heading">
            Managing Hotel is Now Easy
          </h1>
          <p className="container__menu__list container__menu__list--dashboard">
            <span className="material-symbols-outlined container__menu__icons">
              dashboard{" "}
            </span>
            Live Dashboard
          </p>
          <p className="container__menu__list container__menu__list--filter">
            <span className="material-symbols-outlined container__menu__icons">
              tune{" "}
            </span>
            Filters as per Journeys
          </p>
          <br />
          <br />
          <br />
          <p className="container__menu__list container__menu__list--analytics">
            <span className="material-symbols-outlined container__menu__icons">
              leaderboard{" "}
            </span>
            Analytics
          </p>
          <p className="container__menu__list container__menu__list--request">
            <span className="material-symbols-outlined container__menu__icons">
              live_help{" "}
            </span>
            Live Request Handling
          </p>
          <p className="container__menu__list container__menu__list--search">
            <span className="material-symbols-outlined container__menu__icons">
              search
            </span>
            Universal Search
          </p>
        </div>

        <div className="container__menu__image">
          <img src="/assests/png/bot-logo.png" />
        </div>
        <p className="container__menu__copyright">
          {/* <!-- <span className="material-symbols-outlined"> copyright </span> --> */}
          &#169; 2022, Botshot. All Right Reserved
        </p>
      </div>
    </div>
  );
};
export default Hotel;
