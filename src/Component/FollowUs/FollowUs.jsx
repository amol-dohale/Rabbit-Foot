import React, { useState, useEffect } from "react";
import "./FollowUs.css";

import instaimg1 from "../../assets/insta-img1.jpg";
import instaimg2 from "../../assets/insta-img2.jpg";
import instaimg3 from "../../assets/insta-img3.jpg";
import instaimg4 from "../../assets/insta-img4.jpg";

// ✅ Move outside the component
const IMAGES = [instaimg1, instaimg2, instaimg3, instaimg4];

const FollowUs = () => {
  const [slidesPerView, setSlidesPerView] = useState(4);
  const [pages, setPages] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);

  // ✅ Update slidesPerView based on viewport width
  useEffect(() => {
    const updateSpv = () => {
      const w = window.innerWidth;
      if (w <= 600) setSlidesPerView(1);
      else if (w <= 1024) setSlidesPerView(2);
      else setSlidesPerView(4);
    };

    updateSpv();
    window.addEventListener("resize", updateSpv);
    return () => window.removeEventListener("resize", updateSpv);
  }, []);

  // ✅ Recreate pages only when slidesPerView changes
  useEffect(() => {
    const pg = [];
    for (let i = 0; i < IMAGES.length; i += slidesPerView) {
      pg.push(IMAGES.slice(i, i + slidesPerView));
    }
    setPages(pg);
    setCurrentPage((c) => Math.min(c, Math.max(0, pg.length - 1)));
  }, [slidesPerView]); // ❌ removed images

  const goToPage = (index) => setCurrentPage(index);

  return (
    <section className="follow-section">
      <h2 className="follow-title">FOLLOW US ON INSTAGRAM</h2>

      <div className="slider-container">
        <div
          className="slider-track"
          style={{ transform: `translateX(-${currentPage * 100}%)` }}
        >
          {pages.map((page, pageIndex) => (
            <div className="slide-page" key={pageIndex}>
              {page.map((src, i) => (
                <div
                  className="slide-item"
                  key={i}
                  style={{ flex: `0 0 ${100 / slidesPerView}%` }}
                >
                  <img src={src} alt={`instagram-${pageIndex}-${i}`} />
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>

      {pages.length > 1 && (
        <div className="dots-container">
          {pages.map((_, idx) => (
            <button
              key={idx}
              className={`dot ${currentPage === idx ? "active" : ""}`}
              onClick={() => goToPage(idx)}
              aria-label={`Go to page ${idx + 1}`}
            />
          ))}
        </div>
      )}
    </section>
  );
};

export default FollowUs;
