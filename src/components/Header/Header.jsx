import { NavLink } from "react-router-dom";
import './Header.css'

const Header = () => {
    const navLinks = <>
        <NavLink to="/" className='text-xl'>Home</NavLink>
        <NavLink to="/register" className='text-xl'>Register</NavLink>
        <NavLink to="/login" className='text-xl'>Login</NavLink>
    
    </>

    return (
        <div className=" bg-slate-300">
            <div className="navbar text-black max-w-7xl mx-auto">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-stone-400 text-center rounded-box w-40 gap-8">
                            {navLinks}
                        </ul>
                    </div>
                    <a className=" font-semibold normal-case text-4xl">Email auth</a>
                </div>
                <div className="navbar-end hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 gap-8">
                       {navLinks}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Header;