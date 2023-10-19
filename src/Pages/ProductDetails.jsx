import { useLoaderData } from "react-router-dom";
import Swal from 'sweetalert2'

const ProductDetails = () => {
    let product = useLoaderData();
    let { _id, name, brand, type, price, details, rating, img } = product;

    let handleAddToCart = (_id) => {
        let cart = {_id, name, brand, type, price, details, rating, img }

        // Send data to server
        fetch('http://localhost:5000/cart', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(cart)
        })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged) {
                    Swal.fire({
                        title: 'Success!',
                        text: 'Product Added to Cart Successfully',
                        icon: 'success',
                        confirmButtonText: 'Cool'
                    })
                }
            })
    }
    return (
        <div className="flex justify-center items-center min-h-screen mt-5">
            <div className="px-4">
                <div className="w-full md:w-9/12 mx-auto">
                    <img className="w-full" src={img} alt="" />
                </div>
                <div className="flex justify-center gap-10 my-5">
                    <h1><span className="text-2xl font-bold">Name:</span> <span className="text-rose-800">{name}</span></h1>
                    <h1><span className="text-2xl font-bold"></span>Brand Name: <span className="text-rose-800">{brand}</span></h1>
                </div>
                <div className="flex justify-center gap-10 my-5">
                    <h1><span className="text-xl font-bold">Product Type:</span> {type}</h1>
                    <h1><span className="text-xl font-bold">Price:</span> {price} Tk.</h1>
                </div>
                <div className="flex justify-center gap-10 my-5">
                    <h1><span className="text-xl font-bold">Rating:</span> {rating}</h1>
                </div>
                <div className="flex justify-center gap-10 my-5">
                    <p><span className="text-xl font-bold">Details:</span> {details}</p>
                </div>
                <div className="flex justify-center gap-10 my-5">
                    <button onClick={() => handleAddToCart(_id)} className="bg-amber-900 text-white px-8 py-2 rounded-md">Add to Cart</button>
                </div>

            </div>
        </div>
    );
};

export default ProductDetails;