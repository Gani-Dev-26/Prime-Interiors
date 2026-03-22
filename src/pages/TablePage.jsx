import React, { useState } from "react";
import "./TablePage.css";

const TablePage = () => {
  const tables = [
    {
      name: "Classic Wooden Center Table",
      price: "Rs 4,499",
      oldPrice: "Rs 5,999",
      images: ["/t2.webp", "/t2_1.jpg", "/t2_2.jpg"],
      description: "Elegant center table made with premium teak wood and smooth finish.",
      specifications: [
        "Material: Teak Wood",
        "Shape: Rectangle",
        "Finish: Matte",
        "Warranty: 1 Year"
      ],
      rating: 4.3,
    },
    {
      name: "Glass Coffee Table",
      price: "Rs 3,799",
      oldPrice: "Rs 4,999",
      images: ["/t3.jpg", "/t3_1.jpg", "/t3_2.jpg"],
      description: "Stylish coffee table with a premium tempered glass top.",
      specifications: [
        "Material: Tempered Glass",
        "Glass Thickness: 8mm",
        "Frame: Steel",
        "Warranty: 6 Months"
      ],
      rating: 4.5,
    },
    {
      name: "Modern Study Table",
      price: "Rs 6,999",
      oldPrice: "Rs 8,499",
      images: ["/t4.jpg", "/t4_1.jpg"],
      description: "Spacious modern study table with storage compartments.",
      specifications: [
        "Material: Engineered Wood",
        "Storage: Yes",
        "Finish: Walnut",
        "Warranty: 1 Year"
      ],
      rating: 4.4,
    },
    {
      name: "Side Table / Bedside Table",
      price: "Rs 2,199",
      oldPrice: "Rs 2,999",
      images: ["/t5.webp", "/t5_1.jpg"],
      description: "Compact bedside table ideal for bedroom essentials.",
      specifications: [
        "Material: Solid Wood",
        "Storage: Drawer + Shelf",
        "Finish: Semi-Gloss",
        "Warranty: 6 Months"
      ],
      rating: 4.2,
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
      <section className="table-page-section py-5">
        <div className="container">

          <div className="text-center mb-5">
            <h2 className="table-title">Table Collections</h2>
            <p className="table-subtitle">Find the perfect table for any space</p>
          </div>

          <div className="row g-4">
            {tables.map((item, index) => (
              <div className="col-lg-3 col-md-6 col-6" key={index}>
                <div className="table-card">
                  <img src={item.images[0]} alt={item.name} className="table-img" />

                  <div className="table-info p-3">
                    <h5 className="table-name">{item.name}</h5>
                    <p className="table-price">
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

      {/* -------- MODAL -------- */}
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
                  alt="table"
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

export default TablePage;
