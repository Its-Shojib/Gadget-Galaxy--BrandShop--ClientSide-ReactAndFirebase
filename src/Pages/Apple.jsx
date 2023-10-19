import { useLoaderData } from "react-router-dom";
import ProductCard from "../Components/ProductCard";
import Advertisement from "../Components/Advertisement";


const Apple = () => {
    let products = useLoaderData();
    console.log(products);

    return (
        <div className="my-5 px-4">
            <Advertisement></Advertisement>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                {
                    products?.map(product=> <ProductCard 
                        key={product._id}
                        product ={product}
                        ></ProductCard>)
                }
            </div>
        </div>
    );
};

export default Apple;