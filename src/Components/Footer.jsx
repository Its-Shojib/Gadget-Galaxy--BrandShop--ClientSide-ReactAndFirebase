import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <div>
            <div className="footer p-5 bg-black text-white font-rancho text-xl">
                <Link to='/'>
                    <img className="w-56" src="/logo.png" alt="" />
                    <p>ACME Industries Ltd.<br />Providing reliable tech since 1992</p>
                </Link>
                <nav>
                    <header className="footer-title">Services</header>
                    <Link className="link link-hover">Branding</Link>
                    <Link className="link link-hover">Design</Link>
                    <Link className="link link-hover">Marketing</Link>
                    <Link className="link link-hover">Advertisement</Link>
                </nav>
                <nav>
                    <header className="footer-title">Company</header>
                    <Link className="link link-hover">About us</Link>
                    <Link className="link link-hover">Contact</Link>
                    <Link className="link link-hover">Jobs</Link>
                    <Link className="link link-hover">Press kit</Link>
                </nav>
                <nav>
                    <header className="footer-title">Legal</header>
                    <Link className="link link-hover">Terms of use</Link>
                    <Link className="link link-hover">Privacy policy</Link>
                    <Link className="link link-hover">Cookie policy</Link>
                </nav>
            </div>
            <div className="bg-black text-center text-white text-lg">
                All Rights Reserved by &copy;Gadget Galaxy || 2023
            </div>
        </div>
    );
};

export default Footer;