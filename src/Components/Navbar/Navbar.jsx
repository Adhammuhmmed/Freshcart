import React, { useContext, useEffect, useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import logo from "../../assets/images/freshcart-logo.svg";
import { UserContext } from "../../Context/UserContext";
import { CartContext } from "../../Context/CartContext";
import toast from "react-hot-toast";
import { jwtDecode } from "jwt-decode";

export default function Navbar() {
  let { cartItemsCount } = useContext(CartContext);

  let navgite = useNavigate();
  function logOut() {
    localStorage.removeItem("userToken");
    setUserLogin(null);
    navgite("/login");
    toast("Good Bye!");
  }

  let userName = "";

  if (localStorage.getItem("userToken")) {
    let { name } = jwtDecode(localStorage.getItem("userToken"));
    userName = name;
  }
  let { userLogin, setUserLogin } = useContext(UserContext);
  return (
    <>
      <nav className="nav py-2 bg-white relative top-0 left-0 right-0 z-50 md:fixed px-2 overflow-hidden">
        <div className="container py-4 md:flex  items-center justify-between mx-auto">
          <div className="flex items-center">
            {" "}
            <img width={125} src={logo} alt="" />
          </div>

          <div className="md:flex items-center md:mx-auto">
            <ul className="links mx-3 md:flex gap-4">
              {userLogin !== null ? (
                <>
                  {" "}
                  <li>
                    <NavLink className="text-slate-700 font-semibold" to="">
                      Home
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      className="text-slate-700 font-semibold"
                      to="products"
                    >
                      Products
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      className="text-slate-700 font-semibold"
                      to="categories"
                    >
                      Categories
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      className="text-slate-700 font-semibold"
                      to="brands"
                    >
                      Brands
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      className="text-slate-700 font-semibold "
                      to="wishlist"
                    >
                      Favorites
                    </NavLink>
                  </li>
                  <Link to="cart">
                    <li>
                      <i className="fa-solid fa-cart-shopping text-green-600 text-xl" />

                      <span className="text-gray-800 font-semibold">
                        {" "}
                        {cartItemsCount}
                      </span>
                    </li>
                  </Link>
                </>
              ) : null}
            </ul>
          </div>
          <ul className="mx-3 md:flex  gap-4">
            {userLogin == null ? (
              <>
                <li>
                  <NavLink
                    className="text-slate-700 font-semibold hover:text-green-600 duration-500"
                    to="register"
                  >
                    Register
                  </NavLink>
                </li>

                <li>
                  <NavLink
                    className="text-slate-700 font-semibold hover:text-green-600 duration-500"
                    to="login"
                  >
                    Login
                  </NavLink>
                </li>
              </>
            ) : (
              <>
                <li>
                  <span className="user-name font-semibold w-fit text-gray-700">
                    {userName}
                  </span>
                </li>

                <li>
                  <span
                    onClick={logOut}
                    className="cursor-pointer text-slate-700 font-semibold hover:text-red-500 duration-500 transition-colors"
                  >
                    Logout
                  </span>
                </li>
              </>
            )}
          </ul>
        </div>
      </nav>
    </>
  );
}
