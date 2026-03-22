import React, { useState } from "react";
import "./LivingRoomPage.css";

const LivingRoomPage = () => {
  const livingItems = [
    {
      name: "Modern TV Unit",
      price: "Rs 8,999",
      oldPrice: "Rs 10,999",
      images: ["/l11.jpg", "/living1_1.jpg", "/living1_2.jpg"],
      description: "Elegant and spacious TV unit designed for modern living rooms.",
      specifications: [
        "Material: Engineered Wood",
        "Storage: Shelves + Cabinets",
        "Mount: Floor Standing",
        "Warranty: 1 Year"
      ],
      rating: 4.5,
    },
    {
      name: "Center Coffee Table",
      price: "Rs 3,499",
      oldPrice: "Rs 4,299",
      images: ["/l2.png", "/living2_1.jpg", "/living2_2.jpg"],
      description: "Premium wooden coffee table for stylish living room setups.",
      specifications: [
        "Material: Solid Wood",
        "Design: Modern Minimal",
        "Shape: Rectangle",
        "Warranty: 6 Months"
      ],
      rating: 4.2,
    },
    {
      name: "Display & Bookshelf Rack",
      price: "Rs 5,799",
      oldPrice: "Rs 7,099",
      images: ["/l3.jpg", "/living3_1.jpg", "/living3_2.jpg"],
      description: "Spacious bookshelf for décor, books, and display items.",
      specifications: [
        "Material: Engineered Wood",
        "Shelves: 5 Tier",
        "Mount: Free Standing",
        "Warranty: 1 Year"
      ],
      rating: 4.3,
    },
    {
      name: "Accent Sofa Chair",
      price: "Rs 6,999",
      oldPrice: "Rs 8,499",
      images: ["/l4.webp", "/living4_1.jpg", "/living4_2.jpg"],
      description: "Beautiful accent chair that enhances your living space beautifully.",
      specifications: [
        "Material: Premium Fabric",
        "Seating: Single Seater",
        "Padding: High-Density Foam",
        "Warranty: 1 Year"
      ],
      rating: 4.4,
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
      <section className="living-page-section py-5">
        <div className="container">

          <div className="text-center mb-5">
            <h2 className="living-title">Living Room Collections</h2>
            <p className="living-subtitle">Enhance your living space with stylish essentials</p>
          </div>

          <div className="row g-4">
            {livingItems.map((item, index) => (
              <div className="col-lg-3 col-md-6 col-6" key={index}>
                <div className="living-card">
                  <img src={item.images[0]} alt={item.name} className="living-img" />

                  <div className="living-info p-3">
                    <h5 className="living-name">{item.name}</h5>
                    <p className="living-price">
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

      {/* MODAL */}
      {selectedItem && (
        <div className="modal-overlay" onClick={() => setSelectedItem(null)}>
          <div className="modal-box wide-box" onClick={(e) => e.stopPropagation()}>

            <button className="close-btn" onClick={() => setSelectedItem(null)}>
              ×
            </button>

            {/* LEFT PANEL */}
            <div className="left-panel">

              <div className="carousel-wrapper">
                <img
                  src={selectedItem.images[imageIndex]}
                  className="big-img"
                  alt="item"
                />

                <button className="carousel-btn left" onClick={prevImage}>❮</button>
                <button className="carousel-btn right" onClick={nextImage}>❯</button>
              </div>

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

export default LivingRoomPage;
