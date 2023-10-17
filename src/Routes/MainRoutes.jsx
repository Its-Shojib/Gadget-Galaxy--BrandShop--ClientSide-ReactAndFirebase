import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Error from "../Pages/Error";
import Home from "../Pages/Home";
import AddProduct from './../Pages/AddProduct';
import MyCart from "../Pages/MyCart";
import Login from "../Pages/Login";

const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout></MainLayout>,
        errorElement: <Error></Error>,
        children:[
            {
                path: "/",
                element: <Home></Home>,
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

        ]
    },
]);

export default router;