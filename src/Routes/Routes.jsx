import {
    createBrowserRouter,   
  } from "react-router-dom";
import Main from "../Layout/Main.Jsx";
import Home from "../pages/Home/Home";
import Menu from "../pages/Home/Menu";
import Order from "../pages/order/Order/Order";
import Login from "../pages/Login/Login";
import SingUp from "../pages/SingUp/SingUp";
import PrivateRouter from "./PrivateRouter";
import Secret from "../pages/Shared/Secret";

  

  export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
            path: '/',
            element: <Home></Home>
        },
        {
            path: '/menu',
            element: <Menu></Menu>
        },
        {
            path: '/order/:category',
            element: <Order></Order>
        },
        {
            path: '/login',
            element: <Login></Login>
        },
        {
            path: '/signUp',
            element: <SingUp></SingUp>
        },
        {
            path: '/secret',
            element: <PrivateRouter><Secret></Secret></PrivateRouter>
        },
      ]
     
    },
  ]);