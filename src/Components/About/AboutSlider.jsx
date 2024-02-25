import React, { Component } from "react";
import Slider from "react-slick";
import './aboutslider.css'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

class AutoPlayMethods extends Component {
  constructor(props) {
    super(props);
    this.play = this.play.bind(this);
    this.pause = this.pause.bind(this);
  }
  play() {
    this.slider.slickPlay();
  }
  pause() {
    this.slider.slickPause();
  }
  render() {
    const settings = {
      dots: true,
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2000
    };
    return (
      <div className="crousel">
        <Slider ref={slider => (this.slider = slider)} {...settings}>
        <div className="box">
<img src="/" alt="" style={{width:'150px',border:'1px solid black' , borderRadius:'100%',height:'150px',background:'white'}} />
            </div>
            <div className="box">
            <img src="/ " alt="" style={{width:'150px',border:'1px solid black' , borderRadius:'100%',height:'150px',background:'white'}} />
            </div>
            <div className="box">
            <img src="/" alt="" style={{width:'150px',border:'1px solid black' , borderRadius:'100%',height:'150px',background:'white'}}/>

            </div>
            <div className="box">
            <img src="/" alt="" style={{width:'150px',border:'1px solid black' , borderRadius:'100%',height:'150px',background:'white'}}/>


            </div>
            <div className="box">
            <img src="/" alt="" style={{width:'150px',border:'1px solid black' , borderRadius:'100%',height:'150px',background:'white'}}/>

            </div>
            <div className="box">
            <img src="/" alt="" style={{width:'150px',border:'1px solid black' , borderRadius:'100%',height:'150px',background:'white'}}/>

            </div>
        </Slider>
      
      </div>
    );
  }
}