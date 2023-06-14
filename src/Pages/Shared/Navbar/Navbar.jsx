import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../Providers/AuthProviders";


const Navbar = () => {
    const { logOut, user } = useContext(AuthContext);

    const handleLogout = () => {
        logOut()
            .then(() => { })
            .catch(error => console.log(error))
    }
    
    const mystyle = {
        color: "white",
        backgroundColor: "dark",
      };

    function myFunction() {
        const element = document.body;
        element.classList.toggle(mystyle);
    }


    const navOption = <>
        <li><Link to='/' className="font-bold">Home</Link></li>
        <li><Link to='/instractors' className="font-bold">Instructors</Link></li>
        <li><Link to='/classes' className="font-bold">Classes</Link></li>
        <li><Link to='/dashboard/selectclass' className="font-bold">Dashboard</Link></li>
        <li><button className="font-bold" onClick={myFunction}>Dark mode</button>
        </li>
    </>

    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        {navOption}
                    </ul>
                </div>
                <div className="w-[90px] h-[60px] flex">
                    <img src="https://t4.ftcdn.net/jpg/01/92/97/85/360_F_192978595_AOzpIW423K5kdlTWuqJXoyLN0z0FXixY.jpg" alt="" />
                    <a className="btn btn-ghost normal-case text-xl">Sports</a>
                </div>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {navOption}
                </ul>
            </div>
            <div className="navbar-end">
                {
                    user? <> <button onClick={handleLogout} className="me-2 font-bold">LogOut</button>
                    <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                    <div className="w-10 rounded-full">
                        <img src={user?.photoURL} />
                    </div>
                </label></> :<Link className="font-bold" to='/login'>Login</Link>
                }
                
                
                
            </div>
        </div>
    );
};

export default Navbar;