import React, { useState } from "react";
import "./OfficePage.css";

const OfficePage = () => {
  const officeItems = [
    {
      name: "Ergonomic Office Chair",
      price: "Rs 6,499",
      oldPrice: "Rs 8,299",
      images: ["/o11.webp", "/office1_1.jpg", "/office1_2.jpg"],
      description: "Comfortable ergonomic chair designed for long working hours.",
      specifications: [
        "Material: Mesh + Cushion",
        "Adjustable Height: Yes",
        "Recline: 120° Tilt",
        "Warranty: 1 Year"
      ],
      rating: 4.4,
    },
    {
      name: "Complete Work From Home Setup",
      price: "Rs 14,999",
      oldPrice: "Rs 18,499",
      images: ["/o22.jpeg", "/office2_1.jpg", "/office2_2.jpg"],
      description: "All-in-one WFH setup with table, chair, and storage units.",
      specifications: [
        "Includes: Table + Chair + Rack",
        "Material: Engineered Wood",
        "Ergonomic: Yes",
        "Warranty: 1 Year"
      ],
      rating: 4.5,
    },
    {
      name: "Modern Computer Table",
      price: "Rs 4,199",
      oldPrice: "Rs 5,499",
      images: ["/o33.jpg", "/office3_1.jpg", "/office3_2.jpg"],
      description: "Stylish office table with storage and cable management.",
      specifications: [
        "Material: Wood + Metal",
        "Storage: 2 Compartments",
        "Capacity: Up to 40kg",
        "Warranty: 6 Months"
      ],
      rating: 4.2,
    },
    {
      name: "Office Storage Cabinet",
      price: "Rs 3,999",
      oldPrice: "Rs 4,899",
      images: ["/o4.webp", "/office4_1.jpg", "/office4_2.jpg"],
      description: "Compact office cabinet perfect for files and documents.",
      specifications: [
        "Material: Engineered Wood",
        "Shelves: 3-Layer",
        "Mount: Free Standing",
        "Warranty: 1 Year"
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
      <section className="office-page-section py-5">
        <div className="container">

          <div className="text-center mb-5">
            <h2 className="office-title">Office Furniture Collections</h2>
            <p className="office-subtitle">Stylish & productive workspace essentials</p>
          </div>

          <div className="row g-4">
            {officeItems.map((item, index) => (
              <div className="col-lg-3 col-md-6 col-6" key={index}>
                <div className="office-card">
                  <img src={item.images[0]} alt={item.name} className="office-img" />

                  <div className="office-info p-3">
                    <h5 className="office-name">{item.name}</h5>
                    <p className="office-price">
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

export default OfficePage;
