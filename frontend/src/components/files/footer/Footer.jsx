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
          <section className="footer-info__terms">Terms and Conditions</section>
          <section className="footer-info__contact">Contact Us</section>
        </section>

        <section className="footer-info-center">
          <p>Designed and Maintained by Meteors</p>
            </section> 
          
       
        <section className="footer-info-right">
          <section className="footer-info__social-media">
            Follow us on:
            <a href="/" target="_blank" rel="">
              Instagram
            </a>
           
            <a href="/" target="_blank" rel="">
              Twitter
            </a>
          
            <a href="/" target="_blank" rel="r">
              Facebook
            </a>
          </section>
        </section>

      </section>
    </section>
  );
}

export default Footer;
