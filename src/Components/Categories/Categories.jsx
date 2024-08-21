import axios from "axios";
import React from "react";
import { FallingLines, Watch } from "react-loader-spinner";
import { useQuery } from "react-query";
import { Link } from "react-router-dom";

export default function Categories() {
  async function getCategories() {
    return await axios.get(`https://ecommerce.routemisr.com/api/v1/categories`);
  }

  let { data, isLoading } = useQuery("categories", getCategories, {
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
      <div className="row md:mt-20">
        {data?.data.data.map((category) => (
          <div key={category._id} className="w-1/2 md:w-1/4 lg:w-1/6  p-4">
            <div className="product-category">
              <img
                src={category?.image}
                alt={category?.name}
                className="w-full"
              />

              <h3 className="text-green-600 font-semibold py-1">
                {category?.name}
              </h3>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
