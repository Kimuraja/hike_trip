import React from "react";
import Lists from "./Lists";
import "./_Footer.scss";
import Instagram from '../../media/Instagram.png';
import Facebook from '../../media/Facebook.png';
import Twitter from '../../media/Twitter.png';
import WhatsApp from '../../media/WhatsApp.png';


const About = [
  "History",
  "Our Team",
  "Brand Guidelines",
  "Terms & Condition",
  "Privacy Policy",
];
const Services = [
  "How to Order",
  "Our Product",
  "Order Status",
  "Promo",
  "Payment Method",
];
const Other = [
  "Contact Us", 
  "Help", 
  "Privacy"
]; 

const Footer: React.FC = () => {
  return (
    <section className="container-fluid">
      <div className="row">
        <div className="col">
          <div className="footer">
            <div className="footer__space-top"></div>
            <div className="footer__content">
              <div className="col footer__description">
                <h3 className="footer__heading">Title Here</h3>
                <p className="footer__text">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at dignissim nunc, id maximus ex. Etiam nec dignissim elit, at dignissim enim. 
                </p>
                <img src={Instagram} className="footer__icon"/>
                <img src={Facebook} className="footer__icon"/>
                <img src={Twitter} className="footer__icon"/>
                <img src={WhatsApp} className="footer__icon"/>

              </div>
              <div className="col footer__list">
                <Lists title="About" items={About} />
                <Lists title="Services" items={Services} />
                <Lists title="Other" items={Other} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
