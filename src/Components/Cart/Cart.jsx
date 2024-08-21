import React, { useContext, useEffect } from "react";
import { useState } from "react";
import { CartContext } from "../../Context/CartContext";
import { Link } from "react-router-dom";
import { Watch } from "react-loader-spinner";

export default function Cart() {
  let { getLoggedCart, updateQty, deleteFromCart } = useContext(CartContext);
  let [cartItems, setCartItems] = useState(null);
  let [loading, setLoading] = useState(false);

  async function getCart() {
    setLoading(true);
    let response = await getLoggedCart();
    setCartItems(response?.data);
    setLoading(false);
  }
  async function updateQtyCart(id, count) {
    if (count > 0) {
      setLoading(true);
      let response = await updateQty(id, count);
      setCartItems(response?.data);
      setLoading(false);
    } else if (count == 0) {
      deleteItem(id);
    }
  }
  async function deleteItem(id) {
    setLoading(true);
    let response = await deleteFromCart(id);
    setCartItems(response?.data);
    setLoading(false);
  }

  useEffect(() => {
    getCart();
  }, []);

  return (
    <>
      {loading ? (
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
      ) : (
        <div className="md:my-20">
          <div className=" md:w-3/4 mx-auto ">
            <div className="relative overflow-x-auto  rounded-md text-center ">
              <table className="mt-16  w-full text-sm text-center rtl:text-center text-gray-500 dark:text-gray-400">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                  <tr>
                    <th scope="col" className="px-16 py-3">
                      <span className="sr-only">Image</span>
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Product
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Qty
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Price
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Action
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {cartItems?.products.map((product) => (
                    <tr
                      key={product?._id}
                      className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
                    >
                      <td className="p-4">
                        <img
                          src={product?.product.imageCover}
                          className="w-16 md:w-32 max-w-full max-h-full"
                          alt={product?.name}
                        />
                      </td>
                      <td className="px-6 py-4 font-semibold text-gray-900 dark:text-white">
                        {product?.name}
                      </td>
                      <td className="px-6 py-4">
                        <div className="flex items-center">
                          <button
                            onClick={() => {
                              updateQtyCart(
                                product?.product.id,
                                product.count - 1
                              );
                            }}
                            className="inline-flex items-center justify-center p-1 me-3 text-sm font-medium h-6 w-6 text-gray-500 bg-white border border-gray-300 rounded-full focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
                            type="button"
                          >
                            <span className="sr-only">Quantity button</span>
                            <svg
                              className="w-3 h-3"
                              aria-hidden="true"
                              xmlns="http:www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 18 2"
                            >
                              <path
                                stroke="currentColor"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M1 1h16"
                              />
                            </svg>
                          </button>
                          <div>
                            <span>{product.count}</span>
                          </div>
                          <button
                            onClick={() => {
                              updateQtyCart(
                                product?.product.id,
                                product.count + 1
                              );
                            }}
                            className="inline-flex items-center justify-center h-6 w-6 p-1 ms-3 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-full focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
                            type="button"
                          >
                            <span className="sr-only">Quantity button</span>
                            <svg
                              className="w-3 h-3"
                              aria-hidden="true"
                              xmlns="http:www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 18 18"
                            >
                              <path
                                stroke="currentColor"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M9 1v16M1 9h16"
                              />
                            </svg>
                          </button>
                        </div>
                      </td>
                      <td className="px-6 py-4 font-semibold text-gray-900 dark:text-white">
                        {product?.price}EGP
                      </td>
                      <td className="px-6 py-4">
                        <button
                          onClick={() => {
                            deleteItem(product?.product.id);
                          }}
                          className="font-medium text-red-600 dark:text-red-500 hover:underline"
                        >
                          Remove
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="flex justify-between items-center mx-8 my-4 font-bold">
              <span>Total</span>
              <span>{cartItems?.totalCartPrice}EGP</span>
            </div>
            <button
              type="button"
              className=" mb-8 focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
            >
              <Link to={"/checkout"}>Check Out</Link>
            </button>
          </div>
        </div>
      )}
    </>
  );
}
