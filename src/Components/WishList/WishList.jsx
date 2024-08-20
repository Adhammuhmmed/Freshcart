import React, { useContext, useEffect, useState } from "react";
import { WishListContext } from "../../Context/WishListContext";
import { Watch } from "react-loader-spinner";

export default function WishList() {
  let { getProducts, deleteProduct } = useContext(WishListContext);
  let [products, setProudcts] = useState(null);
  let [loading, setLoading] = useState(false);

  async function getProductsWish() {
    setLoading(true);
    let response = await getProducts();
    setProudcts(response?.data);
    setLoading(false);
  }
  async function removeProduct(id) {
    setLoading(true);
    let response = await deleteProduct(id);
    setProudcts(response?.data);
    setLoading(false);
  }

  useEffect(() => {
    getProductsWish();
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
        <div className="md:my-32">
          <div className="md:w-3/4 mx-auto my-8 ">
            <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
              <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                  <tr>
                    <th scope="col" className="px-6 py-3">
                      Product
                    </th>
                    <th scope="col" className="px-6 py-3"></th>
                    <th scope="col" className="px-6 py-3">
                      Price
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Action
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {products?.map((item) => (
                    <tr
                      key={item?.id}
                      className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
                    >
                      <td className="p-4">
                        <img
                          src={item?.imageCover}
                          className="w-16 md:w-32 max-w-full max-h-full"
                        />
                      </td>
                      <td className="px-6 py-4 font-semibold text-gray-900 dark:text-white">
                        {item?.category?.name}
                      </td>

                      <td className="px-6 py-4 font-semibold text-gray-900 dark:text-white">
                        {item?.price}EGP
                      </td>
                      <td className="px-6 py-4">
                        <button
                          onClick={() => {
                            removeProduct(item?.id);
                          }}
                          type="button"
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
          </div>
        </div>
      )}
    </>
  );
}
