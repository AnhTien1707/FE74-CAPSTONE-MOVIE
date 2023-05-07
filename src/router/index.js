import React from "react";
import { useRoutes } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/Home";
import Booking from "../pages/BookingTicket/Booking";
import RegisterBg from "../pages/RegisterBg";
import Detail from "../pages/Detail";

const Router = (props) => {
  const element = useRoutes([
    {
      path: "/",
      element: <MainLayout />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/home",
          element: <Home />,
        },
        {
          path: "/moviedetail/:id",
          element: <Detail/>,
        },
        {
          path: "/booking/:id",
          element: <Booking />,
        },
        {
          path: "/signUp-signIn",
          element: <RegisterBg />,
        },
      ],
    },
  ]);
  return element;
};

export default Router;
