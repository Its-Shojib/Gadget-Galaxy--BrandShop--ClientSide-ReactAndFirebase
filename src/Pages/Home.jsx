import { useLoaderData } from "react-router-dom";
import Banner from "../Components/Banner";
import BrandCard from "../Components/BrandCard";
import CustomerReview from "../Components/CustomerReview";

const Home = () => {
    let brands = useLoaderData();
    console.log(brands);
    return (
        <div>
            <Banner></Banner>
            <div className="my-10">
                <h1 className="text-center text-4xl font-bold font-rancho my-5">Grabs Our <span className="text-rose-800">Products</span></h1>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 bg-teal-950 p-5">
                    {
                        brands.map(brand => <BrandCard key={brand.id} brand={brand}></BrandCard>)
                    }
                </div>
            </div>
            <CustomerReview></CustomerReview>
        </div>
    );
};

export default Home;