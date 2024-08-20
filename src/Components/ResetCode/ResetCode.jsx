import { data } from "autoprefixer";
import axios from "axios";
import { Formik, useFormik, validateYupSchema } from "formik";
import React, { useState } from "react";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";
import * as Yup from "yup";

export default function ResetCode() {
  let [loading, setLoading] = useState(false);

  async function verifyResetCode(formValues) {
    try {
      setLoading(true);
      let { data } = await axios.post(
        `https://ecommerce.routemisr.com/api/v1/auth/verifyResetCode`,
        formValues
      );
      toast.success(data?.status);
      setLoading(false);
             window.location.href = './resetpassword'
    } catch (error) {
      toast.error(error.response.data.message);
      setLoading(false);
    }
  }

  let formik = useFormik({
    initialValues: {
      resetCode: "",
    },
    onSubmit: verifyResetCode,
  });
  return (
    <>
      <div className="md:my-24 p-5 max-w-md md:max-w-lg mx-auto">
        <h1 className="font-semibold text-green-600">
          Please enter your Reset Code
        </h1>

        <form className="" onSubmit={formik.handleSubmit}>
          <div className="relative z-0 w-full mb-5 mt-5 group">
            <input
              value={formik.values.resetCode}
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              type="text"
              name="resetCode"
              id="resetCode"
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  dark:border-gray-600 dark:focus:border-green-500 focus:outline-none focus:ring-0 focus:border-green-600 peer"
              placeholder=" "
            />
            <label
              htmlFor="resetCode"
              className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-green-600 peer-focus:dark:text-green-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Code:
            </label>
          </div>

          <div className="flex flex-col items-center sm:flex-row">
            <button
              type="submit"
              className="text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
            >
              {loading ? (
                <i className="fa-solid fa-spinner fa-spin"></i>
              ) : (
                "Verify"
              )}
            </button>
          </div>
        </form>
      </div>
    </>
  );
}
