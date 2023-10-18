import { useLoaderData } from "react-router-dom";
import ProductCard from "../Components/ProductCard";

const Intel = () => {
    let products = useLoaderData();
    console.log(products);
    return (
        <div className="my-10 px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                {
                    products.map(product=> <ProductCard 
                        key={product._id}
                        product ={product}
                        ></ProductCard>)
                }
            </div>
        </div>
    );
};

export default Intel;