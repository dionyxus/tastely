import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <section className="footer">
      <hr className="footer-seperator" />

      <section className="footer-info">
        <section className="footer-info-left">
          <section className="footer-info__about">About Us</section>
          <section className="footer-policy">Privacy Policy</section>
        </section>
        <section className="footer-info-center">
          {/* <section className="footer-design">
              Designed by meteors
            </section> */}
          <section className="footer-info__terms">Terms and Conditions</section>
          <section className="footer-info__contact">Contact Us</section>
        </section>
        <section className="footer-info-right">
          <section className="footer-info__social-media">
            Follow us on &nbsp;
            <a href="/" target="_blank" rel="">
              Instagram
            </a>
            &nbsp;
            <a href="/" target="_blank" rel="">
              Twitter
            </a>
            &nbsp;
            <a href="/" target="_blank" rel="r">
              Facebook
            </a>
          </section>
        </section>
      </section>
      {/* <hr className="footer-seperator" /> */}
    </section>
  );
}

export default Footer;
