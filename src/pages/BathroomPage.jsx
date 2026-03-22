import React, { useState } from "react";
import "./BathroomPage.css";

const BathroomPage = () => {
  const bathroomItems = [
    {
      name: "Modern Wash Basin Cabinet",
      price: "Rs 7,999",
      oldPrice: "Rs 9,499",
      images: ["/bt1.jpg", "/bt1_1.jpg", "/bt1_2.jpg"],
      description: "A stylish bathroom cabinet with premium basin and large storage.",
      specifications: [
        "Material: Waterproof Wood",
        "Includes: Basin + Cabinet",
        "Mount: Floor Standing",
        "Warranty: 1 Year"
      ],
      rating: 4.4,
    },
    {
      name: "Wall Mounted Bathroom Mirror",
      price: "Rs 2,499",
      oldPrice: "Rs 3,299",
      images: ["/bt2.webp", "/bt2_1.jpg", "/bt2_2.jpeg"],
      description: "Elegant frameless bathroom mirror suitable for all wall types.",
      specifications: [
        "Type: Wall Mounted",
        "Glass: Anti-fog Mirror",
        "Shape: Rectangle",
        "Warranty: 6 Months"
      ],
      rating: 4.1,
    },
    {
      name: "Premium Bathroom Storage Rack",
      price: "Rs 1,899",
      oldPrice: "Rs 2,499",
      images: ["/bt3.jpg", "/bt3_1.jpg", "/bt3_2.jpg"],
      description: "Multipurpose storage rack for modern bathroom essentials.",
      specifications: [
        "Material: Stainless Steel",
        "Rust-Proof: Yes",
        "Shelves: 3-Tier",
        "Warranty: 1 Year"
      ],
      rating: 4.3,
    },
    {
      name: "Shower Panel Set",
      price: "Rs 5,499",
      oldPrice: "Rs 6,799",
      images: ["/bt5", "/bt5_1.jpg", "/bt5_2.jpg"],
      description: "Luxury shower panel with multiple water flow options.",
      specifications: [
        "Material: Steel + ABS",
        "Features: Multi Jet Spray",
        "Mount: Wall Mounted",
        "Warranty: 1 Year"
      ],
      rating: 4.5,
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
      <section className="bathroom-page-section py-5">
        <div className="container">

          <div className="text-center mb-5">
            <h2 className="bathroom-title">Bathroom Collections</h2>
            <p className="bathroom-subtitle">Modern essentials for your bathroom</p>
          </div>

          <div className="row g-4">
            {bathroomItems.map((item, index) => (
              <div className="col-lg-3 col-md-6 col-6" key={index}>
                <div className="bathroom-card">
                  <img src={item.images[0]} alt={item.name} className="bathroom-img" />

                  <div className="bathroom-info p-3">
                    <h5 className="bathroom-name">{item.name}</h5>
                    <p className="bathroom-price">
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
                  alt="product"
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

export default BathroomPage;
