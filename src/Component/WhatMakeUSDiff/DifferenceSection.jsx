// src/components/Features/FeaturesSection.jsx
import React from "react";
import "./DifferenceSection.css";
import feature1 from "../../assets/Difference-feature1.png";
import feature2 from "../../assets/Difference-feature2.png";
import feature3 from "../../assets/Difference-feature3.png";

const DifferenceSection = () => {
  const features = [
    {
      img: feature1,
      title: "Unique Brews",
      desc: "Crafted with care and rooted in local flavor, our beers are approachable, high-quality, and always fresh. Whether you're into crisp lagers or bold IPAs, there's something on tap for everyone.",
    },
    {
      img: feature2,
      title: "Cozy Environment",
      desc: "From our lively bar and game room to the sunny outdoor patio, Rabbit’s Foot is built for comfort, connection, and good times. It’s your go-to neighborhood spot to relax, hang out, and feel right at home.",
    },
    {
      img: feature3,
      title: "Elevated Eats",
      desc: "Brought to you by one of the minds behind Lucky 13, our kitchen goes beyond just legendary burgers. Think hearty brunches, satisfying dinners, and exclusive eats crafted for special events—all made to pair perfectly with your pint.",
    },
  ];

  return (
    <section className="features-section">
      <h2 className="features-title">What Makes Us Different</h2>

      <div className="features-container">
        {features.map((item, index) => (
          <div className="feature-card" key={index}>
            <img src={item.img} alt={item.title} />
            <h3>{item.title}</h3>
            <p>{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default DifferenceSection;
