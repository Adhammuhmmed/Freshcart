import axios from "axios";
import React from "react";
import toast from "react-hot-toast";
import { Watch } from "react-loader-spinner";
import { useQuery } from "react-query";

export default function Brands() {
  async function getAllBrands() {
    return await axios.get(`https://ecommerce.routemisr.com/api/v1/brands`);
  }
  function clickBrand(name) {
    toast(name, {
      style: {
        color: "#16A34A",
        paddingInline: "15px",
      },
      duration: 1000,
    });
  }

  let { data, isLoading } = useQuery("brands", getAllBrands, {
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
        {data?.data.data.map((item) => (
          <div key={item._id} className="  w-1/2  md:w-1/4 lg:w-1/6  p-2">
            <div
              onClick={() => {
                clickBrand(item.name);
              }}
              className="product-brand border p-8 rounded-md text-center hover:shadow-xl transition-shadow duration-200"
            >
              <img src={item.image} alt={item.name} className="w-full" />
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
