import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import Slider from "react-slick";
import { CartContext } from "../../Context/CartContext";
import React, { useContext } from "react";
import { WishListContext } from "../../Context/WishListContext";

export default function ProductDetails() {
  let { addToCart } = useContext(CartContext);
  let { addProduct } = useContext(WishListContext);

  let { id, category } = useParams();
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  };
  let [productDetails, setProductDetails] = useState(null);
  let [productRelatedCategory, setRelatedCategory] = useState([]);

  function getProductsDetails(id) {
    axios
      .get(`https://ecommerce.routemisr.com/api/v1/products/${id}`)
      .then(({ data }) => {
        setProductDetails(data.data);
      });
  }

  function getRelatedProducts(category) {
    axios
      .get(`https://ecommerce.routemisr.com/api/v1/products`)
      .then(({ data }) => {
        let AllProducts = data.data;
        let related = AllProducts.filter(
          (product) => product.category.name == category
        );
        setRelatedCategory(related);
      });
  }

  function heartColor() {
    let hearts = document.querySelectorAll(".heart");

    hearts.forEach((icon) => {
      icon.addEventListener("click", () => {
        if (icon.classList.contains("text-green-700")) {
          icon.classList.remove("text-green-700");
          icon.classList.add("text-red-700");
        }
      });
    });
  }

  function cartColor() {
    let carts = document.querySelectorAll(".cart");

    carts.forEach((icon) => {
      icon.addEventListener("click", () => {
        if (icon.classList.contains("text-green-700")) {
          icon.classList.remove("text-green-700");
          icon.classList.add("text-red-700");
        }
      });
    });
  }

  useEffect(() => {
    getProductsDetails(id);
    getRelatedProducts(category);
  }, [id, category]);

  return (
    <>
      <div className="row flex-col sm:flex-row md:mt-20 py-3">
        <div className="  w-1/4">
          <Slider {...settings}>
            {productDetails?.images.map((src) => (
              <img
                className="w-full"
                key={id}
                src={src}
                alt={productDetails?.title}
              />
            ))}
          </Slider>
        </div>
        <div className="w-3/4 px-5 py-3">
          <p className="font-semibold text-gray-800">{productDetails?.title}</p>
          <p className="font-normal  text-gray-600">
            {productDetails?.description}
          </p>
          <div className="flex justify-between items-center py-5">
            <div className="flex items-center justify-between border-t pt-3 w-full ">
              <p className="">{productDetails?.price}EGP</p>
              <p className="text-gray-400">
                <span>
                  <i className="fa-solid fa-star text-yellow-500"></i>
                </span>
                {productDetails?.ratingsAverage}
              </p>
            </div>
          </div>
          <div className="flex items-center justify-between border-t p-3">
            <button
              onClick={() => {
                addToCart(id);
                cartColor()
              }}
              type="button"
              className="text-center"
            >
              <span>
                <i className="cart fa-solid fa-cart-shopping text-green-700 text-3xl cart-icon"></i>
              </span>
            </button>
            <button
              onClick={() => {
                addProduct(id)
                heartColor()
              }}
              type="button"
              className="text-center"
            >
              {" "}
              <span>
                <i className="heart fa-solid fa-heart text-green-700 text-3xl wish-icon"></i>
              </span>
            </button>
          </div>
        </div>
      </div>

      <div className="row mt-4">
        {productRelatedCategory.map((product) => (
          <div key={product._id} className="  w-1/2  md:w-1/5 lg:w-1/5 p-4">
            <Link
              to={`/Productdetails/${product._id}/${product.category.name}`}
            >
              <div className="product hover:scale-110 duration-500">
                <img
                  src={product.imageCover}
                  alt={product.title}
                  className="w-full rounded-md"
                />
                <div className="info">
                  <div className="">
                    <h3 className="text-green-600 font-semibold text-sm py-1">
                      {product.category.name}
                    </h3>
                    <p className="text-gray-800 font-normal pb-1">
                      {product.title.split(" ").slice(0, 2).join("")}
                    </p>
                  </div>

                  <div className="flex justify-between items-center  py-3  border-t">
                    <p className="">{product.price}EGP</p>
                    <p className="text-gray-400">
                      <span>
                        <i className="fa-solid fa-star text-yellow-500"></i>
                      </span>
                      {product.ratingsAverage}
                    </p>
                  </div>
                </div>
              </div>
            </Link>
            <div className="flex items-center justify-between border-t p-3 my-3">
              <button
                onClick={() => {
                  addToCart(product._id);
                  cartColor();
                }}
                type="button"
                className="text-center"
              >
                <span>
                  <i className="cart fa-solid fa-cart-shopping text-green-700 text-2xl cart-icon"></i>
                </span>
              </button>
              <button
                onClick={() => {
                  addProduct(product._id);
                  heartColor();
                }}
                type="button"
                className="text-center"
              >
                {" "}
                <span>
                  <i className="heart fa-solid fa-heart text-green-700 text-2xl wish-icon"></i>
                </span>
              </button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
