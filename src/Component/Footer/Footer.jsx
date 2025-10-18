import React from "react";
import "./Footer.css";
import tiktok from "../../assets/tiktok.png";
import facebook from "../../assets/facebook.png";
import instagram from "../../assets/instagram.png";
import address from "../../assets/address.png";
import time from "../../assets/time.png";
import phone from "../../assets/phone.png";
import footerLogo from"../..//assets/RABBIT’s-FOOT-BREWING-footer-logo.png"

const Footer = () => {
  return (
    <footer className="footer-section">
      <div className="footer-container">
        {/* 1️⃣ About Rabbit */}
        <div className="footer-column about">
          <h3>About Rabbit</h3>
          <p>
            Founded by three friends, Rabbit's Foot Brewing is where craft beer
            and community meet. Come visit us in Salt Lake City—let’s brew some
            memories together!
          </p>
          <div className="social-icons">
            <img src={instagram} alt="Instagram" className="icon" />
            <img src={facebook} alt="Facebook" className="icon" />
            <img src={tiktok} alt="TikTok" className="icon" />
          </div>
        </div>

        {/* 2️⃣ Quick Links */}
        <div className="footer-column quick-links">
          <h3>Quick Links</h3>
          <ul>
            <li>Home</li>
            <li>Brewery</li>
            <li>Events</li>
            <li>Brunch Menu</li>
            <li>Lunch & Dinner Menu</li>
            <li>Special Events Menu</li>
            <li>Contact Us</li>
          </ul>
        </div>

        {/* 3️⃣ Contact Info */}
        <div className="footer-column contact">
          <h3>Contact Us</h3>
          <p style={{display:"flex"}} >
            <img src={address} alt="Address" className="contact-icon" />
            <span>3318 S Decker Lake Drive<br />
            West Valley City, UT 84119</span>
          </p>
          <p>
            <img src={phone} alt="Phone" className="contact-icon" />
            (801) 972-7001
          </p>
          <p>
            <img src={time} alt="Time" className="contact-icon" />
            Open Daily 10am–1am
          </p>
        </div>

        {/* 4️⃣ Google Map */}
        <div className="footer-column map">
          <iframe
            title="Rabbit Foot Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3010.736509992195!2d-111.95414258458935!3d40.69951907933381!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x87528a6e8f8946ef%3A0x63cf829b12e63e8a!2s3318%20S%20Decker%20Lake%20Dr%2C%20West%20Valley%20City%2C%20UT%2084119!5e0!3m2!1sen!2sin!4v1709400000000!5m2!1sen!2sin"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>

      <p style={{textAlign:"center", fontSize:12, color:"#949494", margin:10}}>Must Be 21+ To Enter...Sorry, No Kids Allowed</p>

      {/* Footer Bottom */}
      <div className="footer-web-title">
        <img src={footerLogo} alt="" />
      </div>


    <div className="copyright">
        <p>© COPYRIGHT 2025 ALL RIGHTS RESERVED</p>
        <p>DESIGNED & DEVELOPED BY VIBE MEDIA</p>
    </div>


    </footer>
  );
};

export default Footer;
