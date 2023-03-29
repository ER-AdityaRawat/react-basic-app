import "./style.css";

const Footer = () => {
  return (
    <div>
      <div className="section">
        <div className="section__logo">
          <a href="https://botshot.ai">
            <img
              className="section__logo__botshot"
              src="/assests/png/botshot_logo.png"
            />
          </a>
          <div>
            <a href="https://linkedin.com">
              <img
                className="section__logo__linkedin"
                src="/assests/png/linkedin.png "
              />
            </a>
            <a href="https://instagram.com">
              <img
                className="section__logo__facebook"
                src="/assests/png/facebook.png"
              />
            </a>

            <a href="https://instagram.com">
              <img
                className="section__logo__instagram"
                src="/assests/png/instagram.png"
              />
            </a>
          </div>
        </div>

        <div className="section__card">
          <h4 className="section__card__heading">AFFILIATE PROGRAM</h4>
          <h5 className="section__card__subheadings">Become a Affiliate</h5>
          <h5 className="section__card__subheadings">Affiliate Resources</h5>
          <h5 className="section__card__subheadings">Affiliate Terms</h5>
          <h4 className="section__card__heading">COMPLIANCES</h4>
          <h5 className="section__card__subheadings">GDPR</h5>
        </div>
        <div className="section__card">
          <h4 className="section__card__heading">GET CONNECTED</h4>
          <h5 className="section__card__subheadings">About Us</h5>
          <h5 className="section__card__subheadings">Contact Us</h5>
          <h5 className="section__card__subheadings">Know Our Pricing</h5>
          <h5 className="section__card__subheadings">Schedule A Demo</h5>
          <h5 className="section__card__subheadings">Blog</h5>
        </div>
        <div className="section__card">
          <h4 className="section__card__heading">RESOURCES</h4>
          <h5 className="section__card__subheadings">Chatbots for Hotels</h5>
          <h5 className="section__card__subheadings">
            Chatbots for Hotel Chain
          </h5>
          <h5 className="section__card__subheadings">Chatbots for Guests</h5>
          <h5 className="section__card__subheadings">
            Chatbots for Hospitality Industry
          </h5>
          <h5 className="section__card__subheadings">AI Chatbot</h5>
          <h5 className="section__card__subheadings">
            Enterprise Chatbot with Opera
          </h5>
          <h5 className="section__card__subheadings">
            Best Conversational Tools for Hotels
          </h5>
          <h5 className="section__card__subheadings">Automated Chatbots</h5>
          <h5 className="section__card__subheadings">Chatbot with CCAvenue</h5>
        </div>

        <div className="section__card">
          <h4 className="section__card__heading">COMPARE</h4>
          <h5 className="section__card__subheadings">Botshot Vs Hoperator</h5>
          <h5 className="section__card__subheadings">Botshot Vs Quicktext</h5>
          <h5 className="section__card__subheadings">Botshot Vs Zendesk</h5>
          <h5 className="section__card__subheadings">Botshot Vs Trilyo</h5>
          <h5 className="section__card__subheadings">Botshot Vs Bebot</h5>
        </div>
        <div className="section__card">
          <h4 className="section__card__heading">MORE</h4>
          <h5 className="section__card__subheadings">
            Hotel Chatbot Templates
          </h5>
          <h5 className="section__card__subheadings">Cutomized Theme Bots</h5>
          <h5 className="section__card__subheadings">NLP Bots</h5>
          <h5 className="section__card__subheadings">
            Artificial Intelligent Bots
          </h5>
          <h5 className="section__card__subheadings">Ask An Expert</h5>
          <h5 className="section__card__subheadings">FAQs</h5>
        </div>
      </div>

      <div className="foooter">
        <div className="foooter__left">
          <a className="foooter__left__link" href="#">
            Privacy Policy |{" "}
          </a>
          <a className="foooter__left__link" href="#">
            Terms of Uses |{" "}
          </a>
          <a className="foooter__left__link" href="#">
            Sitemap
          </a>
        </div>
        <div className="foooter__right">
          <p>&#169;Copyright 2022 Botshot</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
