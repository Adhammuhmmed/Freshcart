import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./Components/Layout/Layout";
import Home from "./Components/Home/Home";
import Brands from "./Components/Brands/Brands";
import Cart from "./Components/Cart/Cart";
import Categories from "./Components/Categories/Categories";
import Login from "./Components/Login/Login";
import Register from "./Components/Register/Register";
import Products from "./Components/Products/Products";
import { Toaster } from "react-hot-toast";
import { UserContextProvider } from "./Context/UserContext";
import ProductedRoute from "./Components/ProductedRoute/ProductedRoute";
import ProductDetails from "./Components/ProductDetails/ProductDetails";
import { QueryClient, QueryClientProvider } from "react-query";
import { CartcontextProvider } from "./Context/CartContext";
import AllOrders from "./Components/AllOrders/AllOrders";
import CheckOut from "./Components/CheckOut/CheckOut";
import { WishListContextProvider } from "./Context/WishListContext";
import WishList from "./Components/WishList/WishList";
import ForgetPassword from "./Components/ForgetPassword/ForgetPassword";
import ResetCode from "./Components/ResetCode/ResetCode";
import ResetPassword from "./Components/ResetPassword/ResetPassword";
import PageNotFound from "./Components/PageNotFound/PageNotFound";

function App() {
  let queryClient = new QueryClient();
  let routers = createBrowserRouter([
    {
      path: "",
      element: <Layout />,
      children: [
        {
          index: true,
          element: (
            <ProductedRoute>
              <Home />
            </ProductedRoute>
          ),
        },
        {
          path: "brands",
          element: (
            <ProductedRoute>
              <Brands />
            </ProductedRoute>
          ),
        },
        {
          path: "forgetpassword",
          element: <ForgetPassword />,
        },
        {
          path: "*",
          element: <PageNotFound />,
        },

        {
          path: "resetcode",
          element: <ResetCode />,
        },
        {
          path: "resetpassword",
          element: <ResetPassword />,
        },
        {
          path: "cart",
          element: (
            <ProductedRoute>
              <Cart />
            </ProductedRoute>
          ),
        },
        {
          path: "categories/",
          element: (
            <ProductedRoute>
              <Categories />
            </ProductedRoute>
          ),
        },
        {
          path: "wishlist/",
          element: (
            <ProductedRoute>
              <WishList />
            </ProductedRoute>
          ),
        },
        {
          path: "checkout/",
          element: (
            <ProductedRoute>
              <CheckOut />
            </ProductedRoute>
          ),
        },
        {
          path: "allorders/",
          element: (
            <ProductedRoute>
              <AllOrders />
            </ProductedRoute>
          ),
        },
        {
          path: "products",
          element: (
            <ProductedRoute>
              {" "}
              <Products />{" "}
            </ProductedRoute>
          ),
        },
        {
          path: "productdetails/:id/:category",
          element: (
            <ProductedRoute>
              {" "}
              <ProductDetails />{" "}
            </ProductedRoute>
          ),
        },
        { path: "login", element: <Login /> },
        { path: "register", element: <Register /> },
      ],
    },
  ]);

  return (
    <>
      <QueryClientProvider client={queryClient}>
        <WishListContextProvider>
          <CartcontextProvider>
            <UserContextProvider>
              <RouterProvider router={routers}></RouterProvider>
              <Toaster />
            </UserContextProvider>
          </CartcontextProvider>
        </WishListContextProvider>
      </QueryClientProvider>
    </>
  );
}

export default App;
