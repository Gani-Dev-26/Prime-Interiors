import React, { useState } from "react";
import "./SofaPage.css";

const SofaPage = () => {
  const sofas = [
    {
      name: "Modern L-Shaped Sofa",
      price: "Rs 18,999",
      oldPrice: "Rs 22,999",
      images: ["/s2.png", "/s2_1.jpg", "/s2_2.jpg"],
      description: "A premium L-shaped sofa with soft fabric and durable wooden frame.",
      specifications: [
        "Material: Cotton Fabric",
        "Frame: Solid Wood",
        "Seating: 5-Seater",
        "Warranty: 1 Year"
      ],
      rating: 4.5,
    },
    {
      name: "3-Seater Fabric Sofa",
      price: "Rs 12,999",
      oldPrice: "Rs 15,499",
      images: ["/s3.webp", "/s3_1.jpg", "/s3_2.jpg"],
      description: "Comfortable 3-seater sofa with smooth fabric and ergonomic design.",
      specifications: [
        "Material: Soft Fabric",
        "Frame: Teak Wood",
        "Seating: 3-Seater",
        "Warranty: 6 Months"
      ],
      rating: 4.2,
    },
    {
      name: "Chesterfield Sofa",
      price: "Rs 24,999",
      oldPrice: "Rs 28,499",
      images: ["/s4.webp", "/s4_1.jpg","/s4_1.jpg"],
      description: "Classic Chesterfield design with deep button tufting.",
      specifications: [
        "Material: Leatherette",
        "Frame: Solid Wood",
        "Seating: 3-Seater",
        "Warranty: 1 Year"
      ],
      rating: 4.8,
    },
    {
      name: "Recliner Sofa",
      price: "Rs 29,999",
      oldPrice: "Rs 34,999",
      images: ["/s5.jpg", "/s5_1.jpg","/s4_1.jpg"],
      description: "Comfort recliner sofa with push-back mechanism.",
      specifications: [
        "Material: Premium Leather",
        "Recliner: Yes",
        "Seating: 1-Seater",
        "Warranty: 2 Years"
      ],
      rating: 4.6,
    },
  ];

  const [selectedSofa, setSelectedSofa] = useState(null);
  const [imageIndex, setImageIndex] = useState(0);

  const nextImage = () => {
    setImageIndex((prev) =>
      prev === selectedSofa.images.length - 1 ? 0 : prev + 1
    );
  };

  const prevImage = () => {
    setImageIndex((prev) =>
      prev === 0 ? selectedSofa.images.length - 1 : prev - 1
    );
  };

  return (
    <>
      <section className="sofa-page-section py-5">
        <div className="container">

          <div className="text-center mb-5">
            <h2 className="sofa-title">Sofa Collections</h2>
            <p className="sofa-subtitle">Choose your perfect comfort style</p>
          </div>

          <div className="row g-4">
            {sofas.map((sofa, index) => (
              <div className="col-lg-3 col-md-6 col-6" key={index}>
                <div className="sofa-card">
                  <img src={sofa.images[0]} alt={sofa.name} className="sofa-img" />

                  <div className="sofa-info p-3">
                    <h5 className="sofa-name">{sofa.name}</h5>
                    <p className="sofa-price">
                      <del>{sofa.oldPrice}</del> &nbsp;
                      <span className="new-price">{sofa.price}</span>
                    </p>

                    <button
                      className="btn btn-warning w-100 mt-2"
                      onClick={() => {
                        setSelectedSofa(sofa);
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
      {selectedSofa && (
        <div className="modal-overlay" onClick={() => setSelectedSofa(null)}>
          <div className="modal-box wide-box" onClick={(e) => e.stopPropagation()}>

            {/* Close Button */}
            <button className="close-btn" onClick={() => setSelectedSofa(null)}>
              ×
            </button>

            {/* -------- LEFT PANEL (Images) -------- */}
            <div className="left-panel">

              {/* Main Large Image */}
              <div className="carousel-wrapper">
                <img
                  src={selectedSofa.images[imageIndex]}
                  className="big-img"
                  alt="product"
                />

                <button className="carousel-btn left" onClick={prevImage}>❮</button>
                <button className="carousel-btn right" onClick={nextImage}>❯</button>
              </div>

              {/* Thumbnail Images */}
              <div className="thumbnail-row">
                {selectedSofa.images.map((img, i) => (
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

            {/* -------- RIGHT PANEL (Details) -------- */}
            <div className="right-panel">
              <h3 className="modal-title">{selectedSofa.name}</h3>

              <p className="modal-price">
                <del>{selectedSofa.oldPrice}</del> &nbsp;
                <span className="new-price">{selectedSofa.price}</span>
              </p>

              <p className="modal-rating">⭐ {selectedSofa.rating} / 5</p>

              <p className="modal-desc">{selectedSofa.description}</p>

              <h5 className="spec-title">Specifications:</h5>
              <ul className="spec-list">
                {selectedSofa.specifications.map((spec, i) => (
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

export default SofaPage;
