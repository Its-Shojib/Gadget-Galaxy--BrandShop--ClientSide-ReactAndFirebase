import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";
import { useContext, useEffect, useState } from "react";
import { AiOutlineShoppingCart } from 'react-icons/ai'


const Navbar = () => {
    let [theme,setTheme] = useState(localStorage.getItem('theme')? localStorage.getItem('theme') :'light')

    useEffect(()=>{
        localStorage.setItem('theme',theme);
        let localTheme = localStorage.getItem('theme');
        document.querySelector('html').setAttribute("data-theme",localTheme)
    },[theme])

    let handleToggle= (e)=>{
        if(e.target.checked){
            setTheme('dark');
        }
        else{
            setTheme('light')
        }

    }

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
                    <div className="pr-3 text-white">
                        <label className="swap swap-rotate">

                            <input 
                            type="checkbox" 
                            onChange={handleToggle}
                            checked={theme == 'light' ? false : true}
                            />
                            <svg className="swap-on fill-current w-10 h-10" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" /></svg>

                            <svg className="swap-off fill-current w-10 h-10" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" /></svg>
                        </label>
                    </div>
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
                                        <li><Link to='/profile'>{user.displayName}</Link></li>
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