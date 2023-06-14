import { Link, Outlet } from "react-router-dom";
import useAdmin from "../Hooks/useAdmin";

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
                <ul className="menu p-4 w-80 h-full bg-base-200 text-base-content">
                    {/* Sidebar content here */}
                    {
                        isAdmin ? <>
                            <li><Link to='/dashboard/mclasses'>Manage Classes</Link></li>
                            <li><Link to='/dashboard/musers'>Manage Users</Link></li>
                        </> : <>
                            <li><Link to='/dashboard/selectclass'>My Selected Classes</Link></li>
                            <li><Link to='/dashboard/enrolledclass'>My Enrolled Classes</Link></li>
                            <li><Link to='/dashboard/payment'>Payment</Link></li>
                        </>
                    }
                    <div className="divider"></div>
                    {/* ------------------------instructor dashboard--------------------------- */}
                    <h2 className="text-lg">Instructor Dashboard</h2>
                    <li><Link to='/dashboard/additem'>Add a Class</Link></li>
                    <li><Link to='/dashboard/myclass'>My Classes</Link></li>

                    <div className="divider"></div>
                    <li><Link to='/'>Home</Link></li>
                    <li><Link to='/instractors'>Instractors</Link></li>
                    <li><Link to='/classes'>Classes</Link></li>
                </ul>
            </div>
        </div>
    );
};

export default Dashboard;