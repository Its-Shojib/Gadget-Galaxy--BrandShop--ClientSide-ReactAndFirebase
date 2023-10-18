import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Error from "../Pages/Error";
import Home from "../Pages/Home";
import AddProduct from './../Pages/AddProduct';
import MyCart from "../Pages/MyCart";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import Profile from "../Pages/Profile";
import Apple from "../Pages/Apple";
import Google from "../Pages/Google";
import Intel from "../Pages/Intel";
import Microsoft from "../Pages/Microsoft";
import OnePlus from "../Pages/OnePlus";
import Samsung from "../Pages/Samsung";

const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout></MainLayout>,
        errorElement: <Error></Error>,
        children:[
            {
                path: "/",
                element: <Home></Home>,
                loader: ()=> fetch('/data.json')
            },
            {
                path: "/addProduct",
                element: <AddProduct></AddProduct>,
            },
            {
                path: "/myCart",
                element: <MyCart></MyCart>,
            },
            {
                path: "/login",
                element: <Login></Login>,
            },
            {
                path: "/register",
                element: <Register></Register>,
            },
            {
                path: "/profile",
                element: <Profile></Profile>,
            },
            {
                path: "/product/1",
                element: <Apple></Apple>,
            },
            {
                path: "/product/2",
                element: <Google></Google>,
            },
            {
                path: "/product/3",
                element: <Intel></Intel>,
            },
            {
                path: "/product/4",
                element: <Microsoft></Microsoft>,
            },
            {
                path: "/product/5",
                element: <OnePlus></OnePlus>,
            },
            {
                path: "/product/6",
                element: <Samsung></Samsung>,
            },

        ]
    },
]);

export default router;