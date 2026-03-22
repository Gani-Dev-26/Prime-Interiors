import React from "react";
import { useNavigate } from "react-router-dom";
import "./HeroSection.css";

const HeroSection = () => {
  const navigate = useNavigate();

  const goTo = (path) => navigate(path);

  return (
    <section className="hero-wrapper">

      {/* Background Carousel */}
      <div
        id="heroBgCarousel"
        className="carousel slide"
        data-bs-ride="carousel"
        data-bs-interval="3200"
      >
        <div className="carousel-inner">

          <div className="carousel-item active">
            <img src="/hero1.jpg" className="hero-bg" alt="background 1" />
          </div>

          <div className="carousel-item">
            <img src="/hero21.jpg" className="hero-bg" alt="background 2" />
          </div>

          <div className="carousel-item">
            <img src="/hero2.jpg" className="hero-bg" alt="background 3" />
          </div>

        </div>

        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#heroBgCarousel"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon"></span>
        </button>

        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#heroBgCarousel"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon"></span>
        </button>
      </div>

    {/* ICON CAROUSEL */}
<div className="icon-carousel-wrapper">
  <div
    id="iconCarousel"
    className="carousel slide"
    data-bs-ride="carousel"
    data-bs-interval="3000"
  >
    <div className="carousel-inner">

      {/* Slide 1 */}
      <div className="carousel-item active">
        <div className="icon-row">
          <div className="icon-box" onClick={() => goTo("/sofa")}>
            <i className="fa-solid fa-couch"></i>
            <p>Sofa</p>
          </div>

          <div className="icon-box" onClick={() => goTo("/chairs")}>
            <i className="fa-solid fa-chair"></i>
            <p>Chairs</p>
          </div>

          <div className="icon-box" onClick={() => goTo("/dining")}>
            <i className="fa-solid fa-utensils"></i>
            <p>Dining</p>
          </div>
        </div>
      </div>

      {/* Slide 2 */}
      <div className="carousel-item">
        <div className="icon-row">
          <div className="icon-box" onClick={() => goTo("/bedroom")}>
            <i className="fa-solid fa-bed"></i>
            <p>Bedroom</p>
          </div>

          <div className="icon-box" onClick={() => goTo("/wardrobe")}>
            <i className="fa-solid fa-shirt"></i>
            <p>Wardrobe</p>
          </div>

          <div className="icon-box" onClick={() => goTo("/office")}>
            <i className="fa-solid fa-briefcase"></i>
            <p>Office</p>
          </div>
        </div>
      </div>

      {/* Slide 3 */}
      <div className="carousel-item">
        <div className="icon-row">
          <div className="icon-box" onClick={() => goTo("/living")}>
            <i className="fa-solid fa-tv"></i>
            <p>Living Room</p>
          </div>

          <div className="icon-box" onClick={() => goTo("/tables")}>
            <i className="fa-solid fa-table"></i>
            <p>Tables</p>
          </div>

          <div className="icon-box" onClick={() => goTo("/bathroom")}>
            <i className="fa-solid fa-bath"></i>
            <p>Bathroom</p>
          </div>
        </div>
      </div>

    </div>
  </div>
</div>


    </section>
  );
};

export default HeroSection;
