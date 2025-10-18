// src/components/About/AboutSection.jsx
import React from "react";
import "./AboutSection.css";
import aboutImg from "../../assets/About-us-sideimg.png";
import aboutBg from "../../assets/About-us-bg-img.jpg";

const AboutSection = () => {
  return (

<>

   
   
   
    <section
      className="about-section"
      style={{ backgroundImage: `url(${aboutBg})` }}
    >
      <div className="about-overlay">
        <div className="about-container">
          {/* Left Side - Text */}
          <div className="about-text">
            <h2>ABOUT US</h2>
            <p>
              Rabbit’s Foot Brewing is built on a simple idea: great beer, great food, and genuine community. Rooted in Utah pride, we celebrate local culture through warm hospitality, thoughtful
               connections, and a welcoming space for all.
            </p>
             <p>
            Our mission is to craft approachable, high-quality beers and pair them with exceptional food and friendly, attentive service. We strive to reflect the spirit and diversity of our community—creating a place where neighbors gather, 
            stories are shared, and everyone feels at home.
            </p>

          <p>
           We proudly collaborate with local makers and vendors to highlight the best of what our region has to offer. At Rabbit’s Foot, we’re not just brewing beer—we’re brewing connection, creativity, and community pride.
            </p>

          </div>

          {/* Right Side - Image */}
          <div className="about-image">
            <img src={aboutImg} alt="About Rabbit Foot" />
          </div>
        </div>
      </div>
    </section>

    </>


  );
};

export default AboutSection;
