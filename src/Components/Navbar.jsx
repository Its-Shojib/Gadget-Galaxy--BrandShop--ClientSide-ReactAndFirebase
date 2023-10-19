import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";
import { useContext } from "react";
import { AiOutlineShoppingCart } from 'react-icons/ai'


const Navbar = () => {
    let { user, Logout } = useContext(AuthContext)
    let links = <>
        <li><NavLink to='/'>Home</NavLink></li>
        <li><NavLink to='/addProduct'>Add Product</NavLink></li>
        <li><NavLink to='/myCart'><AiOutlineShoppingCart />My Cart</NavLink></li>
    </>
    let handleLogout = () => {
        Logout()
            .then()
            .catch()
    }

    return (
        <div>
            <div className="navbar bg-blue-500">
                <div className="navbar-start md:hidden">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost ">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[999] p-2 shadow bg-base-100 rounded-box ">
                            {links}
                        </ul>
                    </div>
                </div>
                <div className="navbar-center md:navbar-start max-w-[350px]">
                    <img className="max-w-[250px]" src="/logo.png" alt="" />
                </div>
                <div className="md:navbar-end hidden md:flex ">
                    <ul className="menu menu-horizontal px-1 text-lg font-semibold text-black">
                        {links}
                    </ul>
                </div>
                <div className="navbar-end z-[999]">
                    {
                        user ? <>
                            <div className="flex gap-3 items-center">
                                <div className="dropdown dropdown-end">
                                    <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                                        <div className="w-10 rounded-full">
                                            <img src={user.photoURL} />
                                        </div>
                                    </label>
                                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow rounded-box bg-slate-300">
                                        <li><Link to='/profile'>Profile</Link></li>
                                        <li><p className="font-semibold">{user.displayName}</p></li>
                                        <li><button className="md:hidden" onClick={handleLogout}>Logout</button></li>
                                    </ul>
                                </div>
                                <button className="bg-red-600 text-white px-3 py-2 rounded-md hidden md:inline-block" onClick={handleLogout}>Logout</button>
                            </div>
                        </> : <Link className="bg-green-600 px-3 py-2 rounded-md text-white" to='/login'>Login</Link>
                    }
                </div>
            </div>
        </div>
    );
};

export default Navbar;