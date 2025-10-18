import React from "react";
import "./SpecialEvents.css";
// import { FaUsers, FaUtensils, FaGamepad, FaMusic } from "react-icons/fa";
import bar from "../../assets/bar.png";
import cake from "../../assets/cake.png"
import drink from "../../assets/drink.png"
import game from "../../assets/game.png"
import guiter from "../../assets/guiter.png"

const SpecialEvents = () => {
  return (
    <section className="special-events">
      <div className="events-container">
        {/* Left Image */}
        <div className="events-image">
          <img src={bar} alt="Special Events" />
        </div>

        {/* Right Content */}
        <div className="events-content">
          <h2>SPECIAL EVENTS</h2>
          <p className="events-subtitle">
            From Private Parties to Live Happenings—We’ve Got You Covered
          </p>

          <p>
            Planning a birthday bash, team happy hour, or private dinner?
            Rabbit’s Foot is the perfect place to host—offering flexible spaces,
            custom menus, and the kind of vibe your guests will remember.
          </p>

          <p>
            And if you're just looking for a good time, check out our{" "}
            <strong>live music nights, trivia events,</strong> and other
            happenings right here at the brewery. There’s always something
            brewing.
          </p>

             {/* 🔹 Icons Section */}
          <div className="events-features">
            <div className="feature-card-icon">
              <img src={cake} alt="Private Parties" />
              <p>Private parties or full venue buyouts</p>
            </div>
            <div className="feature-card-icon">
              <img src={drink} alt="Food & Drink" />
              <p>Custom food & drink packages available</p>
            </div>
            <div className="feature-card-icon">
              <img src={game} alt="Game Room" />
              <p>Game room, patio, and bar seating options</p>
            </div>
            <div className="feature-card-icon">
              <img src={guiter} alt="Live Music" />
              <p>Regular live music, themed nights & community events</p>
            </div>
          </div>

          {/* Buttons */}
          <div className="events-buttons">
            <button className="btn-gold">HOST YOUR EVENT</button>
            <button className="btn-outline">SEE WHAT’S HAPPENING</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SpecialEvents;
