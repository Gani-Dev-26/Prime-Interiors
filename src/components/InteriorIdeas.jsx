import React from "react";
import { useNavigate } from "react-router-dom";
import "./InteriorIdeas.css";

const InteriorIdeas = () => {
  const navigate = useNavigate();
  const posts = [
    {
      date: "28 Mart 2025",
      title: "Creating the Perfect Gallery Wall",
      image: "/bed.jpg",
    },
    {
      date: "25 Mart 2025",
      title: "Making the Most Out of Your Kids Old Bedroom",
      image: "/kids.jpg",
    },
    {
      date: "28 Mart 2025",
      title: "Have a look at our new projects!",
      image: "/newbed.png",
    },
  ];

  return (
    <section className="ideas-section py-5">
      <div className="container">

        {/* Title */}
        <div className="text-center mb-4">
          <h2 className="ideas-title">INTERIOR IDEAS</h2>
          <p className="ideas-subtitle">Keeping things minimal</p>
        </div>

     
        <div className="row g-5 justify-content-center">
          {posts.map((post, i) => (
            <div className="col-lg-4 col-md-6 col-12" key={i}>
              <div className="idea-card">
                <img src={post.image} alt="img" className="idea-img" />
                <div className="idea-overlay">
                  <p className="idea-date">{post.date}</p>
                  <h4 className="idea-heading">{post.title}</h4>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Button */}
        <div className="text-center mt-4">
          <button className="btn btn-warning px-4 py-2" onClick={() => navigate("/")}>View all posts</button>
        </div>

      </div>
    </section>
  );
};

export default InteriorIdeas;
