import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer-wrapper">

      {/* Top section */}
      <div className="container mb-5">
        <div className="row align-items-center">

          <div className="col-lg-8">
            <h2 className="footer-showroom-heading">VISIT OUR SHOWROOM</h2>

            <p className="footer-text">200 12th cross, karnataka, India</p>
            <p className="footer-text">
              Mon – Sat: 10 am - 6 pm &nbsp; | &nbsp; Sun: 12 pm - 2 pm
            </p>
          </div>

          <div className="col-lg-4 text-lg-end mt-4 mt-lg-0">
            <button className="footer-btn me-3">
              <i className="bi bi-geo-alt"></i> Get directions
            </button>

            <span className="footer-phone">
              <i className="bi bi-telephone me-2"></i>
              6363292527
            </span>
          </div>

        </div>

        <hr className="footer-divider mt-4" />
      </div>

      {/* Bottom columns */}
      <div className="container">
        <div className="row">

          <div className="col-md-3 col-6 mb-4">
            <h5 className="footer-title">BROWSE BY</h5>
            <p className="footer-text">Brand</p>
            <p className="footer-text">Product</p>
            <p className="footer-text">Category</p>
          </div>

          <div className="col-md-3 col-6 mb-4">
            <h5 className="footer-title">RESOURCES</h5>
            <p className="footer-text">Design</p>
            <p className="footer-text">Projects</p>
            <p className="footer-text">Sales</p>
          </div>

          <div className="col-md-3 col-6 mb-4">
            <h5 className="footer-title">OUR COMPANY</h5>
            <p className="footer-text">About</p>
            <p className="footer-text">News</p>
            <p className="footer-text">Contact</p>
          </div>

          <div className="col-md-3 col-6 mb-4">
            <h5 className="footer-title">MAINTAINED BY</h5>
            <p className="footer-text">Zentro.core</p>
          </div>

        </div>
      </div>

    </footer>
  );
};

export default Footer;
