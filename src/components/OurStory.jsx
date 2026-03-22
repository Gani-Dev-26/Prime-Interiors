import React from "react";
import "./OurStory.css";

const OurStory = () => {
  return (
    <section className="story-section">
      <div className="story-overlay"></div>

      <div className="story-content text-center">
        <h2 className="story-title">OUR STORY</h2>
        <p className="story-text">
          We believe in creativity as one of the major forces of progress. 
          With this idea, we traveled throughout Italy to find exceptional 
          artisans and bring their unique handcrafted objects to 
          connoisseurs everywhere.
        </p>

        <button className="btn btn-outline-light story-btn">
          Read full story
        </button>
      </div>
    </section>
  );
};

export default OurStory;
