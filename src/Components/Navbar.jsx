import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";
import { useContext } from "react";


const Navbar = () => {
    let { user, Logout } = useContext(AuthContext)
    let links = <>
        <li><NavLink to='/'>Home</NavLink></li>
        {
            user && <>
                <li><NavLink to='/addProduct'>Add Product</NavLink></li>
                <li><NavLink to='/myCart'>My Cart</NavLink></li>
                <li><NavLink to='/profile'>Profile</NavLink></li>
            </>
        }
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
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            {links}
                        </ul>
                    </div>
                </div>
                <div className="navbar-center md:navbar-start">
                    <img className="w-52" src="/logo.png" alt="" />
                </div>
                <div className="navbar-center hidden md:flex">
                    <ul className="menu menu-horizontal px-1 text-lg font-semibold text-white">
                        {links}
                    </ul>
                </div>
                <div className="navbar-end">
                    {
                        user ? <>
                            <div className="flex gap-4 items-center">
                                <p className="text-xl font-bold hidden md:inline-block">{user.displayName}</p>
                                <div className="dropdown dropdown-end">
                                    <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                                        <div className="w-10 rounded-full">
                                            <img src={user.photoURL} />
                                        </div>
                                    </label>
                                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow rounded-box bg-slate-300">
                                        <li><p className="text-sm md:hidden">{user.displayName}</p></li>
                                        <li><Link to='/profile'>Profile</Link></li>
                                        <li><button onClick={handleLogout}>Logout</button></li>

                                    </ul>
                                </div>
                            </div>
                        </> : <Link className="bg-green-600 px-3 py-2 rounded-md text-white" to='/login'>Login</Link>
                    }
                </div>
            </div>
        </div>
    );
};

export default Navbar;