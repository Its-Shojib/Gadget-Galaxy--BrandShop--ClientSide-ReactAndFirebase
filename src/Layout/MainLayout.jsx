import { Outlet } from "react-router-dom";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";


const MainLayout = () => {
    return (
        <div>
            <div className="max-w-screen-2xl mx-auto px-4">
                <Navbar></Navbar>
            </div>
            <div className="max-w-screen-2xl mx-auto px-4">
                <Outlet></Outlet>
            </div>
            <div className="max-w-screen-2xl mx-auto px-4">
                <Footer></Footer>
            </div>
        </div>
    );
};

export default MainLayout;