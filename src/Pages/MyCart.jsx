import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import CartItem from "../Components/CartItem";


const MyCart = () => {
    let loadedCart = useLoaderData()
    let [myCart, setMyCart] = useState(loadedCart);
    return (
        <div className="bg-teal-900">
            <div className="min-h-screen grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 w-full px-4 md:w-10/12 mx-auto py-10">
                {
                    myCart.map(cartItem => <CartItem
                        key={cartItem._id}
                        cartItem={cartItem}
                        myCart={myCart}
                        setMyCart={setMyCart}
                    ></CartItem>)
                }
            </div>
        </div>
    );
};

export default MyCart;