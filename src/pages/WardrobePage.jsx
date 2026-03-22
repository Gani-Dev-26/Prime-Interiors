import React, { useState } from "react";
import "./SofaPage.css"; // using same modal/card styling

const WardrobePage = () => {
  const wardrobes = [
    {
      name: "2-Door Wooden Wardrobe",
      price: "Rs 14,999",
      oldPrice: "Rs 18,999",
      images: ["/w11.webp", "/w11_1.jpg", "/w11_2.jpg"],
      description: "Classic 2-door wardrobe with premium wooden finish.",
      specifications: [
        "Material: Engineered Wood",
        "Doors: 2",
        "Shelves: 4 Compartments",
        "Warranty: 1 Year"
      ],
      rating: 4.4,
    },
    {
      name: "3-Door Mirror Wardrobe",
      price: "Rs 21,499",
      oldPrice: "Rs 26,999",
      images: ["/w22.jpeg", "/w22_1.jpg", "/w22_2.jpg"],
      description: "Spacious wardrobe with mirror panel and extra storage.",
      specifications: [
        "Material: Premium MDF",
        "Doors: 3 with Mirror",
        "Shelves: 6 Compartments",
        "Warranty: 1 Year"
      ],
      rating: 4.5,
    },
    {
      name: "Sliding Door Wardrobe",
      price: "Rs 28,999",
      oldPrice: "Rs 33,499",
      images: ["/w33.webp", "/w33_1.jpg", "/w33_2.jpg"],
      description: "Smooth-rolling sliding wardrobe for modern bedrooms.",
      specifications: [
        "Material: Engineered Wood",
        "Type: Sliding Doors",
        "Shelves: 5 Compartments",
        "Warranty: 2 Years"
      ],
      rating: 4.6,
    },
    {
      name: "Modern Modular Wardrobe",
      price: "Rs 34,999",
      oldPrice: "Rs 40,999",
      images: ["/w4.webp", "/w4_1.jpg", "/w4_2.jpg"],
      description: "Large modular wardrobe designed for modern storage needs.",
      specifications: [
        "Material: HDHMR Board",
        "Type: Modular",
        "Customization: Available",
        "Warranty: 2 Years"
      ],
      rating: 4.7,
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
      <section className="sofa-page-section py-5">
        <div className="container">

          {/* Title */}
          <div className="text-center mb-5">
            <h2 className="sofa-title">Wardrobe Collections</h2>
            <p className="sofa-subtitle">Organize your space with modern designs</p>
          </div>

          {/* Cards */}
          <div className="row g-4">
            {wardrobes.map((item, index) => (
              <div className="col-lg-3 col-md-6 col-6" key={index}>
                <div className="sofa-card">

                  <img src={item.images[0]} alt={item.name} className="sofa-img" />

                  <div className="sofa-info p-3">
                    <h5 className="sofa-name">{item.name}</h5>

                    <p className="sofa-price">
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

      {/* ========= MODAL ========= */}
      {selectedItem && (
        <div className="modal-overlay" onClick={() => setSelectedItem(null)}>
          <div className="modal-box wide-box" onClick={(e) => e.stopPropagation()}>

            <button className="close-btn" onClick={() => setSelectedItem(null)}>×</button>

            {/* LEFT PANEL */}
            <div className="left-panel">
              <div className="carousel-wrapper">
                <img
                  src={selectedItem.images[imageIndex]}
                  className="big-img"
                  alt="wardrobe"
                />

                <button className="carousel-btn left" onClick={prevImage}>❮</button>
                <button className="carousel-btn right" onClick={nextImage}>❯</button>
              </div>

              {/* thumbnails */}
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

export default WardrobePage;
