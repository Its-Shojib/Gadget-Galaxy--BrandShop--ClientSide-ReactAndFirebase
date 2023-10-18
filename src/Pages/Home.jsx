import { useLoaderData } from "react-router-dom";
import Banner from "../Components/Banner";

const Home = () => {
    let brands = useLoaderData();
    console.log(brands);
    return (
        <div>
            <Banner></Banner>
        </div>
    );
};

export default Home;