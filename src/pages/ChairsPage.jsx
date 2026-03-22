import React, { useState } from "react";
import "./ChairsPage.css";

const ChairsPage = () => {
  const chairs = [
    {
      name: "Modern Wooden Chair",
      price: "Rs 3,499",
      oldPrice: "Rs 4,299",
      images: ["/c2.jpg", "/c2_1.jpg", "/c2_2.jpg"],
      description: "Elegant wooden chair built with durable teak wood and smooth finish.",
      specifications: [
        "Material: Teak Wood",
        "Finish: Matte Polish",
        "Weight Capacity: 120kg",
        "Warranty: 1 Year"
      ],
      rating: 4.3,
    },
    {
      name: "Revolving Office Chair",
      price: "Rs 5,999",
      oldPrice: "Rs 7,499",
      images: ["/c3.jpg", "/c3_1.jpg", "/c3_2.jpg"],
      description: "Ergonomic office chair with 360° rotation and comfortable padding.",
      specifications: [
        "Material: Mesh + Fiber",
        "Rotation: 360°",
        "Adjustable Height: Yes",
        "Warranty: 6 Months"
      ],
      rating: 4.5,
    },
    {
      name: "Comfortable Lounge Chair",
      price: "Rs 6,799",
      oldPrice: "Rs 8,299",
      images: ["/c4.jpg", "/c4_1.jpg"],
      description: "Luxury lounge chair with premium foam and modern design.",
      specifications: [
        "Material: Soft Fabric",
        "Cushion: Premium Foam",
        "Style: Modern Lounge",
        "Warranty: 1 Year"
      ],
      rating: 4.7,
    },
    {
      name: "Premium Dining Chair",
      price: "Rs 2,999",
      oldPrice: "Rs 3,699",
      images: ["/c5.webp", "/c5_1.jpg"],
      description: "Stylish dining chair with smooth finish and strong back support.",
      specifications: [
        "Material: Solid Wood",
        "Back Support: High",
        "Seat Material: Fabric",
        "Warranty: 1 Year"
      ],
      rating: 4.1,
    },
  ];

  const [selectedChair, setSelectedChair] = useState(null);
  const [imageIndex, setImageIndex] = useState(0);

  const nextImage = () => {
    setImageIndex((prev) =>
      prev === selectedChair.images.length - 1 ? 0 : prev + 1
    );
  };

  const prevImage = () => {
    setImageIndex((prev) =>
      prev === 0 ? selectedChair.images.length - 1 : prev - 1
    );
  };

  return (
    <>
      <section className="chairs-page-section py-5">
        <div className="container">

          <div className="text-center mb-5">
            <h2 className="chairs-title">Chairs Collection</h2>
            <p className="chairs-subtitle">Stylish & comfortable seating for your home</p>
          </div>

          <div className="row g-4">
            {chairs.map((chair, index) => (
              <div className="col-lg-3 col-md-6 col-6" key={index}>
                <div className="chairs-card">
                  <img src={chair.images[0]} alt={chair.name} className="chairs-img" />

                  <div className="chairs-info p-3">
                    <h5 className="chairs-name">{chair.name}</h5>
                    <p className="chairs-price">
                      <del>{chair.oldPrice}</del> &nbsp;
                      <span className="new-price">{chair.price}</span>
                    </p>

                    <button
                      className="btn btn-warning w-100 mt-2"
                      onClick={() => {
                        setSelectedChair(chair);
                        setImageIndex(0);
                      }}
                    >
                      View Details
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ---------------- POPUP MODAL ---------------- */}
      {selectedChair && (
        <div className="modal-overlay" onClick={() => setSelectedChair(null)}>
          <div className="modal-box wide-box" onClick={(e) => e.stopPropagation()}>

            {/* Close Button */}
            <button className="close-btn" onClick={() => setSelectedChair(null)}>
              ×
            </button>

            {/* LEFT PANEL */}
            <div className="left-panel">

              {/* Big Image */}
              <div className="carousel-wrapper">
                <img
                  src={selectedChair.images[imageIndex]}
                  className="big-img"
                  alt="product"
                />

                <button className="carousel-btn left" onClick={prevImage}>❮</button>
                <button className="carousel-btn right" onClick={nextImage}>❯</button>
              </div>

              {/* Thumbnail gallery */}
              <div className="thumbnail-row">
                {selectedChair.images.map((img, i) => (
                  <img
                    key={i}
                    src={img}
                    className={`thumb-img ${i === imageIndex ? "active-thumb" : ""}`}
                    onClick={() => setImageIndex(i)}
                    alt="thumb"
                  />
                ))}
              </div>
            </div>

            {/* RIGHT PANEL */}
            <div className="right-panel">
              <h3 className="modal-title">{selectedChair.name}</h3>

              <p className="modal-price">
                <del>{selectedChair.oldPrice}</del> &nbsp;
                <span className="new-price">{selectedChair.price}</span>
              </p>

              <p className="modal-rating">⭐ {selectedChair.rating} / 5</p>

              <p className="modal-desc">{selectedChair.description}</p>

              <h5 className="spec-title">Specifications:</h5>
              <ul className="spec-list">
                {selectedChair.specifications.map((spec, i) => (
                  <li key={i}>{spec}</li>
                ))}
              </ul>
            </div>

          </div>
        </div>
      )}
    </>
  );
};

export default ChairsPage;
