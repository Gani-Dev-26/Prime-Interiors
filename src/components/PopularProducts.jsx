import React from "react";
import { useNavigate } from "react-router-dom";
import "./PopularProducts.css";

const categories = [
  { name: "Sofa", img: "/s1.png", old: "Rs 1499", new: "Rs 1099", path: "/sofa" },
  { name: "Chairs", img: "/c1.jpg", old: "Rs 1299", new: "Rs 999", path: "/chairs" },
  { name: "Dining Table", img: "/d1.png", old: "Rs 3999", new: "Rs 3499", path: "/dining" },
  { name: "Bedroom", img: "/b1.png", old: "Rs 4999", new: "Rs 4299", path: "/bedroom" },
  { name: "Office", img: "/o1.jpg", old: "Rs 1999", new: "Rs 1599", path: "/office" },
  { name: "Living Room", img: "/l1.webp", old: "Rs 2599", new: "Rs 2099", path: "/living" },
  { name: "Tables", img: "/t1.png", old: "Rs 1499", new: "Rs 1099", path: "/tables" },
  { name: "Bathroom", img: "/b3.webp", old: "Rs 999", new: "Rs 799", path: "/bathroom" },
  { name: "Wardrobe", img: "/w2.png", old: "Rs 1099", new: "Rs 999", path: "/wardrobe" },
];

const PopularProducts = () => {
  const navigate = useNavigate();

  return (
    <section className="popular-products-section py-5">
      <div className="container">

        <div className="text-center mb-5">
          <h2 className="section-title">POPULAR CATEGORIES</h2>
          <p className="section-subtitle">Explore furniture essentials</p>
        </div>

        <div className="row g-4">

          {categories.map((item, index) => (
            <div className="col-lg-4 col-md-6 col-6 d-flex" key={index}>
              <div
                className="product-card p-3 w-100"
                onClick={() => navigate(item.path)}
                style={{ cursor: "pointer" }}
              >
                <div className="product-info">
                  <h4 className="product-name">{item.name}</h4>
                  <p>
                    <del>{item.old},</del>{" "}
                    <span className="price">{item.new}</span>
                  </p>
                </div>

                <div className="product-img-wrapper">
                  <img
                    src={item.img}
                    className="product-img"
                    alt={item.name}
                  />
                </div>
              </div>
            </div>
          ))}

        </div>

        {/* Small center text */}
        <div className="text-center mt-3">
          <p className="view-all-text" style={{ cursor: "pointer" }}>
            View All →
          </p>
        </div>

      </div>
    </section>
  );
};

export default PopularProducts;
