import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useQuery } from "react-query";
import { FallingLines, Watch } from "react-loader-spinner";
import { CartContext } from "../../Context/CartContext";
import { WishListContext } from "../../Context/WishListContext";

export default function RecentProducts() {
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

  let { addToCart } = useContext(CartContext);
  let { addProduct, getProducts } = useContext(WishListContext);
  async function getRecentProducts() {
    return await axios.get(`https://ecommerce.routemisr.com/api/v1/products`);
  }

  let { data, isLoading } = useQuery("products", getRecentProducts, {
    refetchOnMount: false,
    refetchInterval: 5000,
  });

  if (isLoading) {
    return (
      <>
        <div className="h-screen flex flex-wrap justify-center items-center fixed start-0 top-0 w-full z-50 bg-white">
          <Watch
            visible={true}
            height="120"
            width="120"
            radius="48"
            color="#4fa94d"
            ariaLabel="watch-loading"
            wrapperStyle={{}}
            wrapperClass=""
          />
        </div>
      </>
    );
  }

  return (
    <>
      <div className="row md:mt-24">
        {data?.data.data.map((product) => (
          <div key={product._id} className="  w-full md:w-1/4 lg:w-1/5 p-4">
            <Link
              to={`/Productdetails/${product._id}/${product.category.name}`}
            >
              <div className="product  hover:scale-110 duration-500">
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
                    <p className="text-gray-800 font-normal">
                      {product.title.split(" ").slice(0, 2).join("")}
                    </p>
                  </div>
                  <div className="flex justify-between items-center py-3  border-t ">
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
                  <i className="heart fa-solid fa-heart  text-green-700 text-2xl wish-icon"></i>
                </span>
              </button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
