import React, { useState } from "react";
import "./BedroomPage.css";

const BedroomPage = () => {
  const beds = [
    {
      name: "Queen Size Wooden Cot",
      price: "Rs 14,999",
      oldPrice: "Rs 18,499",
      images: ["/r1.jpg", "/r1_1.jpg", "/r1_2.jpg"],
      description: "Premium queen-sized cot with solid wood and durable build.",
      specifications: [
        "Material: Solid Sheesham Wood",
        "Size: Queen",
        "Storage: No",
        "Warranty: 1 Year"
      ],
      rating: 4.4,
    },
    {
      name: "King Size Upholstered Bed",
      price: "Rs 24,999",
      oldPrice: "Rs 29,999",
      images: ["/r2.jpg", "/r2_1.jpg", "/r2_2.jpg"],
      description: "Luxury king-size bed with cushioned headboard and premium fabric.",
      specifications: [
        "Material: Fabric + Wood",
        "Size: King",
        "Upholstery: Soft Padded",
        "Warranty: 1 Year"
      ],
      rating: 4.7,
    },
    {
      name: "Storage Hydraulic Bed",
      price: "Rs 19,499",
      oldPrice: "Rs 23,999",
      images: ["/r3.jpg", "/r3_1.jpg"],
      description: "Hydraulic lift storage bed ideal for compact rooms.",
      specifications: [
        "Material: Engineered Wood",
        "Storage: Hydraulic Lift",
        "Size: Queen",
        "Warranty: 2 Years"
      ],
      rating: 4.6,
    },
    {
      name: "Single Cot for Kids",
      price: "Rs 7,999",
      oldPrice: "Rs 9,999",
      images: ["/r1.jpg", "/r1_1.jpg"],
      description: "Cute single cot perfect for kids' bedrooms.",
      specifications: [
        "Material: Solid Wood",
        "Size: Single",
        "Safety: Child-Friendly Design",
        "Warranty: 6 Months"
      ],
      rating: 4.3,
    },
  ];

  const [selectedItem, setSelectedItem] = useState(null);
  const [imageIndex, setImageIndex] = useState(0);

  const nextImage = () => {
    setImageIndex((prev) =>
      prev === selectedItem.images.length - 1 ? 0 : prev + 1
    );
  };

  const prevImage = () => {
    setImageIndex((prev) =>
      prev === 0 ? selectedItem.images.length - 1 : prev - 1
    );
  };

  return (
    <>
      <section className="bedroom-page-section py-5">
        <div className="container">

          <div className="text-center mb-5">
            <h2 className="bedroom-title">Bedroom Collections</h2>
            <p className="bedroom-subtitle">Premium cot designs for restful sleep</p>
          </div>

          <div className="row g-4">
            {beds.map((item, index) => (
              <div className="col-lg-3 col-md-6 col-6" key={index}>
                <div className="bedroom-card">
                  <img src={item.images[0]} alt={item.name} className="bedroom-img" />

                  <div className="bedroom-info p-3">
                    <h5 className="bedroom-name">{item.name}</h5>
                    <p className="bedroom-price">
                      <del>{item.oldPrice}</del> &nbsp;
                      <span className="new-price">{item.price}</span>
                    </p>

                    <button
                      className="btn btn-warning w-100 mt-2"
                      onClick={() => {
                        setSelectedItem(item);
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

      {/* -------- MODAL POPUP -------- */}
      {selectedItem && (
        <div className="modal-overlay" onClick={() => setSelectedItem(null)}>
          <div className="modal-box wide-box" onClick={(e) => e.stopPropagation()}>

            {/* Close Button */}
            <button className="close-btn" onClick={() => setSelectedItem(null)}>
              ×
            </button>

            {/* LEFT PANEL */}
            <div className="left-panel">

              {/* Big Image */}
              <div className="carousel-wrapper">
                <img
                  src={selectedItem.images[imageIndex]}
                  className="big-img"
                  alt="cot"
                />

                <button className="carousel-btn left" onClick={prevImage}>❮</button>
                <button className="carousel-btn right" onClick={nextImage}>❯</button>
              </div>

              {/* Thumbnails */}
              <div className="thumbnail-row">
                {selectedItem.images.map((img, i) => (
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
              <h3 className="modal-title">{selectedItem.name}</h3>

              <p className="modal-price">
                <del>{selectedItem.oldPrice}</del> &nbsp;
                <span className="new-price">{selectedItem.price}</span>
              </p>

              <p className="modal-rating">⭐ {selectedItem.rating} / 5</p>

              <p className="modal-desc">{selectedItem.description}</p>

              <h5 className="spec-title">Specifications:</h5>
              <ul className="spec-list">
                {selectedItem.specifications.map((spec, i) => (
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

export default BedroomPage;
