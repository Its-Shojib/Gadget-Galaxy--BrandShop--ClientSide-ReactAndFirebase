import { useLoaderData } from "react-router-dom";
import Banner from "../Components/Banner";
import BrandCard from "../Components/BrandCard";
import CustomerReview from "../Components/CustomerReview";
import Marqu from "../Components/Marqu";

const Home = () => {
    let brands = useLoaderData();
    console.log(brands);
    return (
        <div>
            <Banner></Banner>

            <div className="my-10">
                <h1 className="text-center text-4xl font-bold my-5">Grabs Our <span className="text-rose-800">Products</span></h1>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16 bg-teal-950 p-8 ">
                    {
                        brands.map(brand => <BrandCard key={brand.id} brand={brand}></BrandCard>)
                    }
                </div>
            </div>
            <CustomerReview></CustomerReview>
            <Marqu></Marqu>
        </div>
    );
};

export default Home;