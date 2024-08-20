import { data } from "autoprefixer";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { createContext } from "react";
import toast from "react-hot-toast";

export let WishListContext = createContext(0);
export function WishListContextProvider({ children }) {
  let headers = {
    token: localStorage.getItem("userToken"),
  };
  async function addProduct(productId) {
    try {
      let { data } = await axios.post(
        `https://ecommerce.routemisr.com/api/v1/wishlist`,
        {
          productId,
        },
        { headers }
      );
      toast.success("Product added successfully tou your favorites");


      
    } catch (error) {}

    return data;
  }

  async function getProducts() {
    try {
      let { data } = await axios.get(
        `https://ecommerce.routemisr.com/api/v1/wishlist`,
        {
          headers,
        }
      );

      return data;
    } catch (error) {}
  }

  async function deleteProduct(id) {
    try {
      let { data } = await axios.delete(
        `https://ecommerce.routemisr.com/api/v1/wishlist/${id}`,
        { headers }
      );
      toast.success("Product removed successfully tou your favorites");
      return data;
    } catch (error) {}
  }
  return (
    <>
      <WishListContext.Provider
        value={{ addProduct, getProducts, deleteProduct }}
      >
        {children}
      </WishListContext.Provider>
    </>
  );
}
