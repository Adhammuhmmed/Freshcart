import { useContext, useEffect } from "react";
import { useState } from "react";
import RecentProducts from "../RecentProducts/RecentProducts";
import CategoriesSlider from "../CategoriesSlider/CategoriesSlider";
import MainSlider from "../MainSlider/MainSlider";

export default function Home() {
  return (
    <>
      <MainSlider />
      <CategoriesSlider />

      <div className="container">
        <div className="p-5">
          <h1 className="text-green-700 font-bold py-3 text-2xl">
            Welcome to Fresh cart, your ultimate online shopping destination!
          </h1>

          <p className="text-gray-600">
            We are here to offer you an exceptional shopping experience that
            combines convenience and variety. At fresh cart, we strive to meet
            all your needs with a wide range of products, from the latest trends
            to top brands. Whether you’re looking for clothing, electronics, or
            home essentials, we have everything you need under one roof.
          </p>

          <h2 className="text-green-600 font-semibold py-5">
            Why choose fresh cart ?
          </h2>

          <p className="text-gray-600 py-1">
            <span className="font-semibold">Product Variety:</span> Discover our
            extensive collections that cater to every taste and need.
          </p>
          <p className="text-gray-600 py-1">
            <span className="font-semibold">Competitive Prices:</span> Enjoy the
            best deals and discounts.
          </p>
          <p className="text-gray-600 py-1">
            <span className="font-semibold">Customer Service: </span> Our team
            is always ready to assist you and address your inquiries.
          </p>
          <p className="text-gray-600 py-1">
            <span className="font-semibold">
              Easy and Secure Shopping Experience:
            </span>
            Browse, buy, and enjoy a hassle-free shopping.
          </p>
        </div>
      </div>
    </>
  );
}
