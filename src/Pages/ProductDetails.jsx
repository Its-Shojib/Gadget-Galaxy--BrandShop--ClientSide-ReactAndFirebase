import { useLoaderData } from "react-router-dom";


const ProductDetails = () => {
    let product = useLoaderData();
    let { _id, name, type, price, details, rating, img } = product;
    return (
        <div>
            <p>Hello! i am {name}</p>
        </div>
    );
};

export default ProductDetails;