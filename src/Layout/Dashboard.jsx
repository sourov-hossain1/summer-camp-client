import { Link, Outlet } from "react-router-dom";
import useAdmin from "../Hooks/useAdmin";
import { FaChalkboardTeacher, FaHome, FaBookMedical, FaUserSlash, FaMoneyCheck } from 'react-icons/fa';

const Dashboard = () => {

    // TODO: load data from the server
    const [isAdmin] = useAdmin();

    return (
        <div className="drawer lg:drawer-open">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content flex flex-col items-center justify-center">
                {/* Page content here */}
                <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>
                <Outlet></Outlet>
            </div>
            <div className="drawer-side">
                <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                <ul className="menu p-4 w-80 h-full bg-pink-200  text-base-content">
                    {/* Sidebar content here bg-base-200*/}
                    {
                        isAdmin ? <>
                            <h2 className="text-lg">Admin Dashboard</h2>
                            <li><Link to='/dashboard/mclasses'><FaBookMedical></FaBookMedical>Manage Classes</Link></li>
                            <li><Link to='/dashboard/musers'><FaUserSlash></FaUserSlash> Manage Users</Link></li>
                        </> : <>
                            <h2 className="text-lg">Students Dashboard</h2>
                            <li><Link to='/dashboard/selectclass'><FaBookMedical></FaBookMedical>My Selected Classes</Link></li>
                            <li><Link to='/dashboard/enrolledclass'><FaBookMedical></FaBookMedical>My Enrolled Classes</Link></li>
                            <li><Link to='/dashboard/payment'><FaMoneyCheck></FaMoneyCheck> Payment</Link></li>
                        </>
                    }
                    <div className="divider"></div>
                    {/* ------------------------instructor dashboard--------------------------- */}
                    <h2 className="text-lg">Instructor Dashboard</h2>
                    <li><Link to='/dashboard/additem'><FaBookMedical></FaBookMedical> Add a Class</Link></li>
                    <li><Link to='/dashboard/myclass'><FaBookMedical></FaBookMedical> My Classes</Link></li>

                    <div className="divider"></div>
                    <li><Link to='/'><FaHome></FaHome> Home</Link></li>
                    <li><Link to='/instractors'><FaChalkboardTeacher></FaChalkboardTeacher> Instractors</Link></li>
                    <li><Link to='/classes'><FaBookMedical></FaBookMedical> Classes</Link></li>
                </ul>
            </div>
        </div>
    );
};

export default Dashboard;