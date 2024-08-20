import React from "react";
import Slider from "react-slick";
import { useEffect } from "react";
import { useState } from "react";
import img1 from "../../assets/images/fashion.jpg";
import img2 from "../../assets/images/counters-bg.jpg";
import img3 from "../../assets/images/slider-2.jpeg";
import img4 from "../../assets/images/defacto.png";
import img5 from "../../assets/images/fashion1.jpg";
export default function MainSlider() {
  var settings = {
    autoplay:true,
    autoplaySpeed:1500,
    arrows: false,
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <>
      <div className="row flex justify-center">
        <div className="w-full md:w-[80%] mt-24">
          <Slider {...settings}>
            <img src={img2} className="w-full h-[450px]" />
            <img src={img3} className="w-full h-[450px]" />
            <img src={img1} className="w-full h-[450px]" />
          </Slider>
        </div>

        <div className="hidden md:block w-[20%] mt-10">
          <img src={img4} className="w-full h-[225px]" />
          <img src={img5} className="w-full h-[225px]" />
        </div>
      </div>
    </>
  );
}
