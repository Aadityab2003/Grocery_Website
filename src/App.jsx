import React from "react";
import Navbar from "./Component/Navbar/Navbar";
import Home from "./Component/Home/Home";
import Fruits from "./Component/Fruits/Fruits";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Dairy from "./Component/Dairy/Dairy";
import Seafood from "./Component/Seafood/Seafood";
import AllProducts from "./Component/AllProducts/AllProducts";
import Layout from "./Component/Layout/Layout";

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path:'/',
          element:<Home />
        },
        {
          path: "/Fruits",
          element: <Fruits />,
        },

        {
          path: "/Dairy",
          element: <Dairy />,
        },

        {
          path: "/Seafood",
          element: <Seafood />,
        },

        {
          path: "/AllProducts",
          element: <AllProducts />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
};

export default App;
