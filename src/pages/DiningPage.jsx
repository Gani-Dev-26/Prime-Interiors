import React, { useState } from "react";
import "./DiningPage.css";

const DiningPage = () => {
  const diningSets = [
    {
      name: "4-Seater Wooden Dining Set",
      price: "Rs 15,999",
      oldPrice: "Rs 18,499",
      images: ["/d2.jpg", "/d2_1.jpg", "/d2_2.jpg"],
      description: "A durable 4-seater dining set crafted from strong teak wood.",
      specifications: [
        "Material: Teak Wood",
        "Seating: 4-Seater",
        "Finish: Matte Polish",
        "Warranty: 1 Year"
      ],
      rating: 4.4,
    },
    {
      name: "6-Seater Glass Top Dining Set",
      price: "Rs 22,999",
      oldPrice: "Rs 27,999",
      images: ["/d3.webp", "/d3_1.jpg", "/d3_2.jpg"],
      description: "A luxurious 6-seater dining table with a premium tempered glass top.",
      specifications: [
        "Material: Tempered Glass + Metal",
        "Seating: 6-Seater",
        "Glass Thickness: 10mm",
        "Warranty: 6 Months"
      ],
      rating: 4.6,
    },
    {
      name: "Compact 2-Seater Dining Table",
      price: "Rs 7,499",
      oldPrice: "Rs 9,499",
      images: ["/d4.jpg", "/d4_1.jpg"],
      description: "A space-saving 2-seater dining table ideal for small rooms.",
      specifications: [
        "Material: Engineered Wood",
        "Seating: 2-Seater",
        "Compact Design",
        "Warranty: 6 Months"
      ],
      rating: 4.2,
    },
    {
      name: "Luxury Marble Dining Set",
      price: "Rs 39,999",
      oldPrice: "Rs 45,999",
      images: ["/d5.jpg", "/d5_1.jpg"],
      description: "Premium luxury dining set with polished white marble top.",
      specifications: [
        "Material: Italian Marble",
        "Seating: 6-Seater",
        "Frame: Steel",
        "Warranty: 1.5 Years"
      ],
      rating: 4.8,
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
      <section className="dining-page-section py-5">
        <div className="container">

          <div className="text-center mb-5">
            <h2 className="dining-title">Dining Collections</h2>
            <p className="dining-subtitle">Beautiful dining sets for every home</p>
          </div>

          <div className="row g-4">
            {diningSets.map((item, index) => (
              <div className="col-lg-3 col-md-6 col-6" key={index}>
                <div className="dining-card">
                  <img src={item.images[0]} alt={item.name} className="dining-img" />

                  <div className="dining-info p-3">
                    <h5 className="dining-name">{item.name}</h5>
                    <p className="dining-price">
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

      {/* ---------------- POPUP MODAL ---------------- */}
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
                  alt="product"
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

export default DiningPage;
