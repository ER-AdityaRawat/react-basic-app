import "./style.css";
import { NavLink } from "react-router-dom";
import HeaderButton from "../../components/common/Button/HeaderButton";
import { useEffect } from "react";

const Header = () => {
  useEffect(() => {
    document.addEventListener("scroll", () => {
      const header = document.querySelector("header");
      if (window.scrollY > 0) {
        header!.classList.add("scrolled");
      } else {
        header!.classList.remove("scrolled");
      }
    });
  }, []);

  return (
    <header className="Header">
      <NavLink to="/">
        <img className="Header__logo" src="/assests/png/logo.png" />
      </NavLink>
      <div>
        <ul className="Header__menu">
          <li className="Header__menu__list">
            <NavLink to="/" className="link">
              Home
            </NavLink>
          </li>
          <li className="Header__menu__list">
            <NavLink to="/productsPage" className="link">
              Company
            </NavLink>
            {/* <ul className="Header__menu__list__dropdown">
              <li className="item">About Us</li>
              <li className="item">Life at Big Oh!</li>
              <li className="item">Become a Partner</li>
            </ul> */}
          </li>
          <li className="Header__menu__list">
            <NavLink to="/offerings" className="link">
              Offerings
            </NavLink>
            {/* <ul className="Header__menu__list__dropdown">
              <li className="item">About Us</li>
              <li className="item">Life at Big Oh!</li>
              <li className="item">Become a Partner</li>
            </ul> */}
          </li>
          <li className="Header__menu__list">
            <NavLink to="/knowledgeCenter" className="link">
              Knowledge Centre
            </NavLink>
          </li>
          <li className="Header__menu__list">
            <NavLink to="/caseStudies" className="link">
              Case Studies
            </NavLink>
          </li>
        </ul>
      </div>
      <div>
        {/* <button className="Header__button">Get Started</button> */}
        <NavLink to="/form">
          <HeaderButton />
        </NavLink>
      </div>
    </header>
  );
};

export default Header;
