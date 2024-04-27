import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "./ProviderContext";

const NavBar = () => {
    const { user, logOut } = useContext(AuthContext)


    const handleSignOut = () => {
        logOut()
            .then(result => {
                console.log(result.user)
            })
            .catch(error => {
                // toast.success('User Log out')
                console.log(error)
            })
    }


    const navLinks = <>
        <li><NavLink className={({ isActive }) => isActive ? 'text-pink-700  border  border-pink-700 font-bold  rounded-md ' : 'font-bold text-black '} to={'/'}>Home</NavLink></li>

        <li><NavLink className={({ isActive }) => isActive ? 'text-pink-700 border border-pink-700 font-bold  rounded-md ' : 'font-bold text-black'} to={'/allcraft'}>All Art & craft</NavLink></li>

        <li><NavLink className={({ isActive }) => isActive ? 'text-pink-700 border border-pink-700 font-bold  rounded-md ' : 'font-bold text-black'} to={'/addCraft'}>Add Craft</NavLink></li>

        <li><NavLink className={({ isActive }) => isActive ? 'text-pink-700 border border-pink-700 font-bold  rounded-md ' : 'font-bold text-black'} to={'/mycraft'}>My Art&Craft</NavLink></li>

        {/* <li><NavLink className={({ isActive }) => isActive ? 'text-[#23BE0A] border border-[#23BE0A] font-bold  rounded-md ' : 'font-bold text-black'} to={'/register'}>Register</NavLink></li> */}

    </>
    return (
        <div>
            <div className="navbar bg-base-100 ">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            {navLinks}
                        </ul>
                    </div>
                    <a className="btn btn-ghost text-3xl">Daisy UI</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {navLinks}
                    </ul>
                </div>
                <div className="navbar-end flex gap-4">
                    {/* <Link to={'/login'}> <button className="btn">Login</button> </Link>
                   <Link to={'/register'}> <button className="btn">Register</button> </Link> */}

                    {
                        user ?
                            <>
                                <div className="tooltip tooltip-left " data-tip={user.displayName}>
                                    <img className={`rounded-full h-10 w-10  `} src={user?.photoURL || 'https://ibb.co/WxjPyWc'} alt="" />

                                </div>
                                <button className="btn ml-6 bg-[#f29c94] " onClick={handleSignOut}>Log out</button>
                            </>
                            :
                            <Link to={'/login'} className="btn bg-[#f29c94] ">Login</Link>
                    }
                </div>
            </div>
        </div>
    );
};

export default NavBar;