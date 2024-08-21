import axios from "axios";
import React, { useEffect, useState } from "react";
import Slider from "react-slick";

export default function CategoriesSlider() {
  let [category, setCategory] = useState([]);
  var settings = {
    autoplay: true,
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 3,
    autoplaySpeed: 1500,
  };

  function getCategories() {
    axios(`https://ecommerce.routemisr.com/api/v1/categories`).then(
      ({ data }) => {
        setCategory(data.data);
      }
    );
  }

  useEffect(() => {
    getCategories();
  }, []);
  return (
    <>
      <div className="py-5 px-3">
        <h2 className="text-gray-700 font-semibold py-4">Shop Popular categories</h2>
        <Slider {...settings}>
          {category.map((category) => (
            <div key={category._id}>
              <img src={category.image} alt="" className="slider-img w-full" />
              <h3 className="font-light text-gray-750 mt-3">
                {category.name}
              </h3>
            </div>
          ))}
        </Slider>
      </div>
    </>
  );
}
