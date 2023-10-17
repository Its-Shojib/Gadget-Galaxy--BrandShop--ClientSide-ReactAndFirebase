import { Outlet } from "react-router-dom";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";


const MainLayout = () => {
    return (
        <div>
            <div className="max-w-screen-2xl mx-auto">
                <Navbar></Navbar>
            </div>
            <div className="max-w-screen-2xl mx-auto">
                <Outlet></Outlet>
            </div>
            <div className="max-w-screen-2xl mx-auto">
                <Footer></Footer>
            </div>
        </div>
    );
};

export default MainLayout;