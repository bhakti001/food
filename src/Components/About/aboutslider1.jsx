import React from "react";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { Container } from "reactstrap";
import { Link } from "react-router-dom";

import './aboutslider1.css'
const Aboutslider = () => {
  const settings = {
    fade: true,
    speed: 2000,
    autoplaySpeed: 3000,
    infinite: true,
    autoplay: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    pauseOnHover: false,
  };
  return (
    <Slider {...settings} className="hero__slider">
      <div className="slider__item slider__item-01 mt0">
        <Container>
          <div className="slider__content ">
            <h4 className="text-light mb-3" style={{color:'white'}}>Get Exclusive discount Every Day</h4>
            <h1 className="text-light mb-4">Delight your guests. Do what you love. Thrive.</h1>

            <button className="btn reserve__btn mt-4">
              <Link to="/cars">Reserve Now</Link>
            </button>
          </div>
        </Container>
      </div>
      <div className="slider__item slider__item-02 mt0">
        <Container>
          <div className="slider__content ">
            <h4 className="text-light mb-3" style={{color:'white'}}>Get Exclusive discount Every Day</h4>
            <h1 className="text-light mb-4">" food is as much about the moment, the occasion, the location and the company as it is about the taste.”</h1>

            <button className="btn reserve__btn mt-4">
              <Link to="/">Reserve Now</Link>
            </button>
          </div>
        </Container>
      </div>

      <div className="slider__item slider__item-03 mt0">
        <Container>
          <div className="slider__content ">
            <h4 className="text-light mb-3" style={{color:'white'}}>Get Exclusive discount Every Day</h4>
            <h1 className="text-light mb-4">“You don’t need a silver fork to eat good food.”</h1>
            <button className="btn reserve__btn mt-4">
              <Link to="/cars">Reserve Now</Link>
            </button>
          </div>
        </Container>
      </div>
    </Slider>
  );   
};
export default Aboutslider;
