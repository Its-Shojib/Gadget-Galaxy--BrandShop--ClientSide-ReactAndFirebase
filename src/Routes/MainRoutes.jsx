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
import PrivateRoutes from "./PrivateRoutes";

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
                element: <PrivateRoutes><AddProduct></AddProduct></PrivateRoutes>, 
            },
            {
                path: "/myCart",
                element: <PrivateRoutes><MyCart></MyCart></PrivateRoutes>,
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
                element: <PrivateRoutes><Profile></Profile></PrivateRoutes>,
            },
            {
                path: "/product/1",
                element: <Apple></Apple>,
                loader: ()=> fetch('http://localhost:5000/product/apple')
            },
            {
                path: "/product/2",
                element: <Google></Google>,
                loader: ()=> fetch('http://localhost:5000/product/google')
            },
            {
                path: "/product/3",
                element: <Intel></Intel>,
                loader: ()=> fetch('http://localhost:5000/product/intel')
            },
            {
                path: "/product/4",
                element: <Microsoft></Microsoft>,
                loader: ()=> fetch('http://localhost:5000/product/microsoft')
            },
            {
                path: "/product/5",
                element: <OnePlus></OnePlus>,
                loader: ()=> fetch('http://localhost:5000/product/oneplus')
            },
            {
                path: "/product/6",
                element: <Samsung></Samsung>,
                loader: ()=> fetch('http://localhost:5000/product/samsung')
            },

        ]
    },
]);

export default router;