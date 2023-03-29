import "./style.css";

const Section = () => {
  return (
    <div>
      <div className="containerrr">
        <div className="containerrr__left">
          <div className="containerrr__left__contact">
            <h2>CONTACT US</h2>
          </div>
          <div className="containerrr__left__text">
            <span className="material-symbols-outlined"> apartment </span>
            <p className="containerrr__left__text__item">
              <span> Unit No.- A-1002,1oth Floor, Tower A, Plot No.7, </span>
              <span>Advant Navis Buisness Park, Sector-142, </span>
              <span>Greater Noida Express Way,Noida -201305</span>
            </p>
          </div>
          <div className="containerrr__left__text">
            <span className="material-symbols-outlined"> language </span>
            <p>www.nldsl.in</p>
          </div>
          <div className="containerrr__left__text">
            <span className="material-symbols-outlined"> call </span>
            <p>1800-572-8314</p>
          </div>
          <div className="containerrr__left__text">
            <span className="material-symbols-outlined"> mail </span>
            <p>helpdesk@ldb.co.in</p>
          </div>
          <div className="containerrr__left__text">
            <span className="material-symbols-outlined"> schedule </span>
            <p>9:00 to 17:00 Hours IST (Monday to Friday)</p>
          </div>
        </div>

        <div className="containerrr__right">
          <h2 className="containerrr__right__heading">CONTACT FORM</h2>
          <form action="" className="containerrr__right__form">
            <div className="containerrr__right__form__left">
              <label htmlFor="name">Your Name</label>
              <input
                className="input"
                type="text"
                id="name"
                placeholder="Minimum 4 characters (only alphabets)"
              />
              <label htmlFor="organization">Organization Name</label>
              <input
                className="input"
                type="text"
                id="organization"
                placeholder="Minimum 2 characters(only alphanumeric)"
              />
              <label htmlFor="message"> Message </label>
              <textarea
                className="input input--text"
                id="message"
                placeholder="Minimum 15 characters(alphanumeric with special chracters)"
              ></textarea>
              <button className="button cursor">SEND MESSAGE</button>
            </div>
            <div className="containerrr__right__form__right">
              <label htmlFor="number">Your Number</label>
              <input
                className="input"
                type="tel"
                id="number"
                placeholder="Minimum 10 digits"
              />
              <label htmlFor="email">Email Id</label>
              <input
                className="input"
                type="email"
                id="email"
                placeholder="Localpart@domain"
              />
              <div className="captcha">
                <input className="captcha__checkbox" type="checkbox" />
                <span className="captcha__text">I'm not a robot</span>
              </div>
            </div>
          </form>
        </div>
      </div>
      <div className="footer">
        <div>
          <h5 className="footer__heading">FOLLOW US ON</h5>
          <a href="https://twitter.com">
            <img
              className="footer__icons cursor"
              src="assests/png/twitter1.png"
            />
          </a>
          <a href="https://facebook.com ">
            <img
              className="footer__icons cursor"
              src="assests/png/facebook1.png"
            />
          </a>
          <a href="https://linkedin.com ">
            <img
              className="footer__icons cursor"
              src="assests/png/linkedin1.png"
            />
          </a>
          <a href="https://youtube.com ">
            <img
              className="footer__icons cursor"
              src="assests/png/youtube1.png"
            />
          </a>
          <p className="footer__copyright">
            &#169;Since 2016. NLDSL All Rights Reserved
          </p>
        </div>

        <div className="footer__download">
          <img
            className="footer__download__android cursor"
            src="assests/png/5a902dbf7f96951c82922875.png"
          />
          <img
            className="footer__download__apple cursor"
            src="assests/png/apple.png"
          />
        </div>
        <div className="footer__visitors">
          <h1 className="footer__heading">90,377,485</h1>
          <h4 className="footer__subheading">Visitors Count</h4>
        </div>
        <div className="footer__bot"></div>
      </div>
    </div>
  );
};
export default Section;
