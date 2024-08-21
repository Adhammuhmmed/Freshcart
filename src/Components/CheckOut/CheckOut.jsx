import axios from "axios";
import React, { useContext, useState } from "react";
import { CartContext } from "../../Context/CartContext";

export default function CheckOut() {
  let [details, setDetails] = useState("");
  let [tel, setTel] = useState("");
  let [city, setCity] = useState("");
  let { headers, cartId, clearcart } = useContext(CartContext);
  let shippingAddress = {
    details,
    tel,
    city,
  };

  async function checkoutSession() {
    try {
      let { data } = await axios.post(
        `https://ecommerce.routemisr.com/api/v1/orders/checkout-session/${cartId}?url=http://localhost:5173`,
        {
          shippingAddress,
        },
        {
          headers,
        }
      );

      if (data.status == "success") {
        window.location.href = data.session.url;
      }
    } catch (error) {}
  }

  return (
    <>
      <div className="continar md:my-20 px-4 mx-auto py-16 ">
        <div className="max-w-md md:max-w-lg mx-auto">
          <h2 className="mb-10 text-green-600 text-3xl font-bold">
            Checkout Now:
          </h2>

          <div className="relative z-0 w-full mb-5 mt-5 group">
            <input
              onChange={(e) => setDetails(e.target.value)}
              type="text"
              name="details"
              id="details"
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  dark:border-gray-600 dark:focus:border-green-500 focus:outline-none focus:ring-0 focus:border-green-600 peer"
              placeholder=" "
            />
            <label
              htmlFor="details"
              className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-green-600 peer-focus:dark:text-green-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Details:
            </label>
          </div>

          <div className="relative z-0 w-full mb-5 mt-5 group">
            <input
              onChange={(e) => setTel(e.target.value)}
              type="tel"
              name="phone"
              id="phone"
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  dark:border-gray-600 dark:focus:border-green-500 focus:outline-none focus:ring-0 focus:border-green-600 peer"
              placeholder=" "
            />
            <label
              htmlFor="phone"
              className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-green-600 peer-focus:dark:text-green-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Phone:
            </label>
          </div>

          <div className="relative z-0 w-full mb-5 mt-5 group">
            <input
              onChange={(e) => setCity(e.target.value)}
              type="text"
              name="city"
              id="city"
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  dark:border-gray-600 dark:focus:border-green-500 focus:outline-none focus:ring-0 focus:border-green-600 peer"
              placeholder=" "
            />
            <label
              htmlFor="city"
              className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-green-600 peer-focus:dark:text-green-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              City:
            </label>
          </div>

          <button
            onClick={() => {
              checkoutSession();
            }}
            type="button"
            className="text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
          >
            Payment
          </button>
        </div>
      </div>
    </>
  );
}
