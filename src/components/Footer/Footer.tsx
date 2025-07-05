import { ReactElement } from "react";
import { FaTelegram, FaFacebook, FaWhatsapp } from "react-icons/fa";
import "./style.scss";

export const Footer = (): ReactElement => {
  return (
    <footer className="footer">
      <div className="footer__container">
        <div className="footer__columns">
          <div className="footer__column">
            <h3 className="footer__title">W-BOZONE</h3>
            <p className="footer__description">
              The best marketplace for your purchases and sales
            </p>
          </div>
          <div className="footer__column">
            <h3 className="footer__title">For Buyers</h3>
            <ul className="footer__list">
              <li>
                <a href="#" className="footer__link">
                  How to Order
                </a>
              </li>
              <li>
                <a href="#" className="footer__link">
                  Delivery
                </a>
              </li>
              <li>
                <a href="#" className="footer__link">
                  Payment
                </a>
              </li>
              <li>
                <a href="#" className="footer__link">
                  Returns
                </a>
              </li>
            </ul>
          </div>
          <div className="footer__column">
            <h3 className="footer__title">For Sellers</h3>
            <ul className="footer__list">
              <li>
                <a href="#" className="footer__link">
                  How to Sell
                </a>
              </li>
              <li>
                <a href="#" className="footer__link">
                  Pricing
                </a>
              </li>
              <li>
                <a href="#" className="footer__link">
                  Marketplace Rules
                </a>
              </li>
              <li>
                <a href="#" className="footer__link">
                  Help Center
                </a>
              </li>
            </ul>
          </div>
          <div className="footer__column">
            <h3 className="footer__title">Contact Us</h3>
            <ul className="footer__list">
              <li>+1 (XXX) XXX-XXXX</li>
              <li>support@w-bozone.com</li>
              <li>123 Example St, San Francisco, CA</li>
              <li>
                <div className="footer__socials">
                  <a href="#">
                    <FaTelegram size={"2em"} />
                  </a>
                  <a href="#">
                    <FaFacebook size={"2em"} />
                  </a>
                  <a href="#">
                    <FaWhatsapp size={"2em"} />
                  </a>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer__bottom">
          <div className="footer__copyright">
            © {new Date().getFullYear()} W-BOZONE. All rights reserved. Created
            by: <a href="https://github.com/MSLadanov">MSLadanov</a>
          </div>
          <div className="footer__legal">
            <a href="#" className="footer__legal-link">
              Privacy Policy
            </a>
            <a href="#" className="footer__legal-link">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
