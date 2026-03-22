import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handleScroll);

    const checkScreen = () => setIsMobile(window.innerWidth <= 768);
    checkScreen();
    window.addEventListener("resize", checkScreen);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", checkScreen);
    };
  }, []);

  const goTo = (path) => {
    navigate(path);

    // CLOSE MOBILE NAV AFTER CLICK
    const navCollapse = document.getElementById("mainNav");
    if (isMobile && navCollapse.classList.contains("show")) {
      navCollapse.classList.remove("show");
    }
  };

  return (
    <header className={`main-header ${scrolled ? "scrolled" : ""}`}>
      
      {/* TOP STRIP */}
      <div className={`top-strip ${scrolled ? "hide" : ""}`}>
        <div className="container d-flex justify-content-end gap-4">
          <span className="text-warning">ENG</span>
          <i className="bi bi-person text-warning"></i>
          <i className="bi bi-search text-warning"></i>
        </div>
      </div>

      {/* NAVBAR */}
      <nav className="navbar navbar-expand-lg">
        <div className="container">

          {/* LOGO */}
          <a className="navbar-brand d-flex align-items-center gap-2" role="button" onClick={() => navigate("/")}>
            <img src="/logo2.png" alt="Logo" className="logo-img" />
          </a>

          {/* MOBILE TOGGLER */}
          <button
            className="navbar-toggler custom-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#mainNav"
          >
            <i className="bi bi-list text-white fs-1"></i>
          </button>

          {/* MENU */}
          <div className="collapse navbar-collapse" id="mainNav">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0 gap-3">

              <li className="nav-item">
                <span className="nav-link" onClick={() => goTo("/")}>HOME</span>
              </li>

              {/* PRODUCTS DROPDOWN */}
              <li className="nav-item dropdown">
                <span
                  className="nav-link dropdown-toggle"
                  role="button"
                  data-bs-toggle="dropdown"
                >
                  Products
                </span>

                <ul className="dropdown-menu p-2">

                  <li><button className="dropdown-item d-flex align-items-center gap-2" onClick={() => goTo("/sofa")}>
                    <i className="fa-solid fa-couch"></i> Sofa
                  </button></li>

                  <li><button className="dropdown-item d-flex align-items-center gap-2" onClick={() => goTo("/chairs")}>
                    <i className="fa-solid fa-chair"></i> Chairs
                  </button></li>

                  <li><button className="dropdown-item d-flex align-items-center gap-2" onClick={() => goTo("/dining")}>
                    <i className="fa-solid fa-utensils"></i> Dining Tables
                  </button></li>

                  <li><button className="dropdown-item d-flex align-items-center gap-2" onClick={() => goTo("/tables")}>
                    <i className="fa-solid fa-table"></i> Tables
                  </button></li>

                  <li><button className="dropdown-item d-flex align-items-center gap-2" onClick={() => goTo("/bedroom")}>
                    <i className="fa-solid fa-bed"></i> Bedroom
                  </button></li>

                  <li><button className="dropdown-item d-flex align-items-center gap-2" onClick={() => goTo("/bathroom")}>
                    <i className="fa-solid fa-bath"></i> Bathroom
                  </button></li>

                  <li><button className="dropdown-item d-flex align-items-center gap-2" onClick={() => goTo("/office")}>
                    <i className="fa-solid fa-briefcase"></i> Office
                  </button></li>

                  <li><button className="dropdown-item d-flex align-items-center gap-2" onClick={() => goTo("/living")}>
                    <i className="fa-solid fa-home"></i> Living Room
                  </button></li>

                  <li><button className="dropdown-item d-flex align-items-center gap-2" onClick={() => goTo("/wardrobe")}>
                    <i className="fa-solid fa-shirt"></i> Wardrobe
                  </button></li>

                </ul>
              </li>

              <li className="nav-item">
                <span className="nav-link" onClick={() => goTo("/about")}>ABOUT</span>
              </li>

              <li className="nav-item">
                <span className="nav-link" onClick={() => goTo("/contact")}>CONTACT</span>
              </li>

            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
