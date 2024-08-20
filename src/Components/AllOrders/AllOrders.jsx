import axios from "axios";
import { jwtDecode } from "jwt-decode";
import React, { useContext, useEffect, useState } from "react";
import { CartContext } from "../../Context/CartContext";

export default function AllOrders() {
  let { clearcart } = useContext(CartContext);
    let userId = ''
  if(localStorage.getItem('userToken')) {
    let { id } = jwtDecode(localStorage.getItem("userToken"));
    userId = id
  }
  
  async function getOrders() {
    try {
      let { data } = await axios.get(
        `https://ecommerce.routemisr.com/api/v1/orders/user/${userId}`
      );
      clearcart();
    } catch (error) {}
  }

  useEffect(() => {
    getOrders();
  }, []);

  return (
    <div className="md:mt-36 md:mb-7 my-5">
      <h1 className="text-center font-semibold text-4xl text-red-600">
        No orders now!
      </h1>
    </div>
  );
}
