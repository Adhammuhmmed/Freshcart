import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Navigate } from "react-router-dom";

export default function ProductedRoute(props) {
  let x = localStorage.getItem("userToken");
  if (localStorage.getItem("userToken")) {
    return props.children;
  } else {
    return <Navigate to={"/login"} />;
  }
  return <></>;
}
