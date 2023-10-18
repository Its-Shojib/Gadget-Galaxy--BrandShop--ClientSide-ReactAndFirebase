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
import UpdateProduct from "../Pages/UpdateProduct";

const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout></MainLayout>,
        errorElement: <Error></Error>,
        children: [
            {
                path: "/",
                element: <Home></Home>,
                loader: () => fetch('/data.json')
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
                path: "/apple",
                element: <Apple></Apple>,
                loader: () => fetch('http://localhost:5000/product/apple')
            },
            {
                path: "/google",
                element: <Google></Google>,
                loader: () => fetch('http://localhost:5000/product/google')
            },
            {
                path: "/intel",
                element: <Intel></Intel>,
                loader: () => fetch('http://localhost:5000/product/intel')
            },
            {
                path: "/microsoft",
                element: <Microsoft></Microsoft>,
                loader: () => fetch('http://localhost:5000/product/microsoft')
            },
            {
                path: "/oneplus",
                element: <OnePlus></OnePlus>,
                loader: () => fetch('http://localhost:5000/product/oneplus')
            },
            {
                path: "/samsung",
                element: <Samsung></Samsung>,
                loader: () => fetch('http://localhost:5000/product/samsung')
            },
            {
                path: "/updateProduct/:id",
                element: <PrivateRoutes><UpdateProduct></UpdateProduct></PrivateRoutes>,
                loader: ({ params }) => fetch(`http://localhost:5000/product/${params.id}`)
            },

        ]
    },
]);

export default router;