// src/components/MenuSection/MenuSection.jsx
import React from "react";
import "./MenuSection.css";

import brunchImg from "../../assets/brunch.png";
import dinnerImg from "../../assets/dinner.png";
import eventImg from "../../assets/event.png";
import menuBg from "../../assets/MenuSection-bg-img.jpg"

const MenuSection = () => {
  const menuItems = [
    {
      img: brunchImg,
      title: "Brunch Menu",
      link: "#",
    },
    {
      img: dinnerImg,
      title: "Lunch & Dinner Menu",
      link: "#",
    },
    {
      img: eventImg,
      title: "Special Event Menu",
      link: "#",
    },
  ];

  return (
    <section className="menu-section" style={{ backgroundImage: `url(${menuBg})` }}>
      <div className="menu-header">
        <h2>GET A TASTE OF WHAT WE’RE SERVING</h2>
        <p>
          From bold brews and crave-worthy burgers to fresh brunch plates and
          seasonal specials, there’s always something new to try at Rabbit’s
          Foot.
        </p>
      </div>

      <div className="menu-grid">
        {menuItems.map((item, index) => (
          <div key={index} className="menu-card">
            <img src={item.img} alt={item.title} className="menu-image" />
            <div className="menu-card-text">
              <a href={item.link} className="menu-link">
                {item.title}
                
              </a>
              <a href={item.link} className="menu-link"><span className="arrow">→</span></a>
              
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default MenuSection;
