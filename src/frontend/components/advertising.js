import React, { useState } from 'react';
import uovaPasqua from "../../img/uovaPasqua.jpg";
import pizzaPasqua from "../../img/pizzaPasqua.jpg";
import colombaPasqua from "../../img/colombaPasqua.jpg";

function Advertising() {

  const [currentSlide, setCurrentSlide] = useState(0);

  const handlePrev = () => {
    setCurrentSlide((prevSlide) => (prevSlide === 0 ? 2 : prevSlide - 1));
  };

  const handleNext = () => {
    setCurrentSlide((prevSlide) => (prevSlide === 2 ? 0 : prevSlide + 1));
  };

  return (
    <div>
      <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
        <div className="carousel-inner">
          <div className={`carousel-item ${currentSlide === 0 ? 'active' : ''}`}>
            <img className="d-block w-100" src={uovaPasqua} alt="First slide" />
            <div className="carousel-caption d-none d-md-block">
              <h5>UOVA DI PASQUA IN ARRIVO</h5>
              <p>Sono incredibili</p>
            </div>
          </div>
          <div className={`carousel-item ${currentSlide === 1 ? 'active' : ''}`}>
            <img className="d-block w-100" src={pizzaPasqua} alt="Second slide" />
            <div className="carousel-caption d-none d-md-block">
              <h5>PIZZA DI PASQUA IN ARRIVO</h5>
              <p>Bontà tutta da scoprire</p>
            </div>
          </div>
          <div className={`carousel-item ${currentSlide === 2 ? 'active' : ''}`}>
            <img className="d-block w-100" src={colombaPasqua} alt="Third slide" />
            <div className="carousel-caption d-none d-md-block">
              <h5>COLOMBA DI PASQUA IN ARRIVO</h5>
              <p>Da prendere al volo</p>
            </div>
          </div>
        </div>
        <div className="carousel-control-prev" onClick={handlePrev}>
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        </div>
        <div className="carousel-control-next" onClick={handleNext}>
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
        </div>
      </div>
    </div>
  );
} 
  export default Advertising;
  