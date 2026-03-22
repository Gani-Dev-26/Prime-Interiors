import React from "react";
import { useNavigate } from "react-router-dom";
import "./ExpandingCategories.css";

const ExpandingCategories = () => {
  const navigate = useNavigate();
  const categories = [
    {
      title: "Bedroom",
      image: "/bed.jpg",
      icon: "fa-solid fa-bed",
      path: "/bedroom",
    },
    {
      title: "Living room",
      image: "/living.jpeg",
      icon: "fa-solid fa-couch",
      path: "/living",
    },
    {
      title: "Office",
      image: "/office.webp",
      icon: "fa-solid fa-briefcase",
      path: "/office",
    },
    {
      title: "Bathroom",
      image: "/bath.webp",
      icon: "fa-solid fa-bath",
      path: "/bathroom",
    },
  ];

  return (
    <section className="expanding-section">
      <div className="expanding-container">
        {categories.map((item, index) => (
          <div
            key={index}
            className="expanding-card"
            style={{ backgroundImage: `url(${item.image})`, cursor: "pointer" }}
            onClick={() => navigate(item.path)}
          >
            <div className="expanding-overlay">
              {/* Use Font Awesome icon */}
              <i className={`expanding-icon ${item.icon}`}></i>

              <p className="expanding-title">{item.title}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ExpandingCategories;
