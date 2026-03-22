import React from "react";
import "./App.css";

import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import PopularProducts from "./components/PopularProducts";
import ExpandingCategories from "./components/ExpandingCategories";
import InteriorIdeas from "./components/InteriorIdeas";
import OurStory from "./components/OurStory";
import GalleryStrip from "./components/GalleryStrip";
import Footer from "./components/Footer";

import SofaPage from "./pages/SofaPage";
import ChairPage from "./pages/ChairsPage";
import DiningPage from "./pages/DiningPage";
import TablePage from "./pages/TablePage";
import BedroomPage from "./pages/BedroomPage";
import BathroomPage from "./pages/BathroomPage";
import OfficePage from "./pages/OfficePage";
import LivingRoomPage from "./pages/LivingRoomPage";
import WardrobePage from "./pages/WardrobePage";


function App() {
  return (
    <>
    
      <Navbar />

      <Routes>

  
        <Route
          path="/"
          element={
            <>
              <HeroSection />
              <PopularProducts />
              <ExpandingCategories />
              <InteriorIdeas />
              <OurStory />
              <GalleryStrip />

              {/* SOCIAL ICONS */}
              <div className="social-fixed">
                <a className="whatsapp" href="https://wa.me/91" target="_blank">
                  <i className="bi bi-whatsapp"></i>
                </a>

                <a className="phone" href="tel:+91">
                  <i className="bi bi-telephone-fill"></i>
                </a>

                <a className="instagram" href="https://instagram.com" target="_blank">
                  <i className="bi bi-instagram"></i>
                </a>

                <a className="facebook" href="https://facebook.com" target="_blank">
                  <i className="bi bi-facebook"></i>
                </a>
              </div>
            </>
          }
        />

  
        <Route path="/sofa" element={<SofaPage />} />
        <Route path="/chairs" element={<ChairPage />} />
         <Route path="/dining" element={<DiningPage/>} />
          <Route path="/tables" element={<TablePage/>} />
          <Route path="/bedroom" element={<BedroomPage/>} />
            <Route path="/bathroom" element={<BathroomPage/>} />
             <Route path="/office" element={<OfficePage/>} />
              <Route path="/living" element={<LivingRoomPage/>} />
               <Route path="/wardrobe" element={<WardrobePage/>} />

      </Routes>

   
      <Footer />
    </>
  );
}

export default App;
