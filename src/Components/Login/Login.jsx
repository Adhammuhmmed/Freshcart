import axios, { Axios } from "axios";
import { useFormik } from "formik";
import React, { useContext } from "react";
import { useEffect } from "react";
import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";
import * as Yup from "yup";
import { UserContext } from "../../Context/UserContext";

export default function Login() {
  let { setUserLogin } = useContext(UserContext);
  let [isLoading, setIsLoading] = useState(false);
  let validationSchema = Yup.object().shape({
    email: Yup.string()
      .email("Please enter a valid email address.")
      .required("Email address is required."),
    password: Yup.string()
      .matches(
        /^[A-Z][a-z0-9]{5,10}$/,
        'The password must start with an uppercase letter, followed by lowercase letters or numbers."'
      )
      .required("Password is required"),
  });
  let navigate = useNavigate();
  function handleLogin(formValues) {
    setIsLoading(true);
    axios
      .post(`https://ecommerce.routemisr.com/api/v1/auth/signin`, formValues)
      .then((apiResponse) => {
        setIsLoading(false);
        toast.success(apiResponse.data.message);
        if (apiResponse.data.message === "success") {
          setUserLogin(apiResponse.data.token);
          localStorage.setItem("userToken", apiResponse.data.token);
        }
        navigate("/");
      })
      .catch((apiResponse) => {
        setIsLoading(false);
        toast.error(apiResponse?.response?.data?.message);
      });
  }
  let formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: validationSchema,
    onSubmit: handleLogin,
  });
  return (
    <>
      <div className="continar mx-auto py-16 md:mt-20 p-4">
        <div className="max-w-md md:max-w-lg mx-auto">
          <h2 className="mb-10 text-green-600 text-3xl font-bold">
            Login Now:
          </h2>
          <form className="" onSubmit={formik.handleSubmit}>
            <div className="relative z-0 w-full mb-5 mt-5 group">
              <input
                value={formik.values.email}
                onBlur={formik.handleBlur}
                onChange={formik.handleChange}
                type="email"
                name="email"
                id="email"
                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  dark:border-gray-600 dark:focus:border-green-500 focus:outline-none focus:ring-0 focus:border-green-600 peer"
                placeholder=" "
              />
              <label
                htmlFor="email"
                className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-green-600 peer-focus:dark:text-green-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Email:
              </label>
            </div>

            {formik.errors.email && formik.touched.email ? (
              <div
                className="p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400"
                role="alert"
              >
                {formik.errors.email}
              </div>
            ) : null}

            <div className="relative z-0 w-full mb-5 mt-5 group">
              <input
                value={formik.values.password}
                onBlur={formik.handleBlur}
                onChange={formik.handleChange}
                type="password"
                name="password"
                id="password"
                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  dark:border-gray-600 dark:focus:border-green-500 focus:outline-none focus:ring-0 focus:border-green-600 peer"
                placeholder=" "
              />
              <label
                htmlFor="passwrod"
                className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-green-600 peer-focus:dark:text-green-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Password:
              </label>
            </div>
            {formik.errors.password && formik.touched.password ? (
              <div
                className="p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400"
                role="alert"
              >
                {formik.errors.password}
              </div>
            ) : null}

            <div className="flex flex-col items-center sm:flex-row">
              <button
                type="submit"
                className="text-white my-2 bg-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
              >
                {isLoading ? (
                  <i className="fa-solid fa-spinner fa-spin"></i>
                ) : (
                  "Login"
                )}
              </button>

              <p className="ps-2">
                You have an account?
                <Link className="font-semibold" to={"/register"}>
                  Register Now
                </Link>
              </p>
            </div>
            <Link
              className="font-semibold text-green-600 pt-5 block"
              to={"/forgetpassword"}
            >
              Forget password?
            </Link>
          </form>
        </div>
      </div>
    </>
  );
}
