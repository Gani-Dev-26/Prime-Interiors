import React from "react";
import "./GalleryStrip.css";

const GalleryStrip = () => {
  const images = [
    "/kids.jpg",
    "/bed.jpg",
    "/living.jpeg",
    "/newbed.png",
    "/gallery.jpg",
   
  ];

  return (
   
    <section className="gallery-strip-section">
  <div class="container-fluid bg-white py-5 text-center">
  <h2 class="fw-bold mb-0">Showcase</h2>
</div>

      <div className="d-flex gallery-strip-container">
        {images.map((item, index) => (
          <div className="gallery-item" key={index}>
            <img src={item} className="gallery-img" alt="gallery" />
          </div>
        ))}
      </div>
    </section>
  );
};

export default GalleryStrip;
