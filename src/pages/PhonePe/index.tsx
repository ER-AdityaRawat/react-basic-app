import "./style.css";

const PhonePe = () => {
  return (
    <div>
      <div className="header">
        <nav className="header__navbar">
          <div className="header__navbar__logo">
            <img
              className="image"
              src="/assests/svg/phone pe.svg"
              alt=""
              height="45px"
              //   style="
              // padding-left :84px;
              // padding-top: 17px;"
            />
          </div>
          <div className="header__navbar__menu">
            {/* <!-- <ul> --> */}
            <a href="#" className="header__navbar__menu__items">
              BUISNESS SOLUTIONS
            </a>
            <a href="#" className="header__navbar__menu__items">
              PRESS
            </a>
            <a href="#" className="header__navbar__menu__items">
              CAREERS
            </a>
            <a href="#" className="header__navbar__menu__items">
              ABOUT US
            </a>
            <a href="#" className="header__navbar__menu__items">
              BLOG
            </a>
            <a href="#" className="header__navbar__menu__items">
              CONTACT US
            </a>
            <a href="#" className="header__navbar__menu__items">
              {" "}
              TRUST & SAFETY
            </a>
            {/* <!-- </ul> --> */}
          </div>
        </nav>
      </div>

      <div className="containerr">
        {/* <!-- <img src="Images/background.png" /> --> */}
        <div className="containerr__overlay">
          <h1 className="containerr__overlay__title">
            PhonePe<span className="span">Pulse</span>
          </h1>
          <h4 className="containerr__overlay__text">Beat Of Progress</h4>
          <p className="containerr__overlay__paragraph">
            Find out how money moves in a country of 140 Crore!
          </p>
          <p className="containerr__overlay__paragraph">
            Now updated with the latest data for Q4 2021(Oct-Dec)
          </p>
          <button className="containerr__overlay__button">Explore Now </button>
        </div>
      </div>
    </div>
  );
};

export default PhonePe;
