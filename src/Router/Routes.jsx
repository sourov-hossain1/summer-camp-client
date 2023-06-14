import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import Instractor from "../Pages/Instractors/Instractor";
import Dashboard from "../Layout/Dashboard";
import SelectClass from "../Pages/Dashboard/SelectClass";
import EnrolledClass from "../Pages/Dashboard/EnrolledClass";
import Payment from "../Pages/Dashboard/Payment";
import Classes from "../Pages/Classes/Classes";
import ManageUsers from "../Pages/Dashboard/ManageUsers/ManageUsers";
import ManageClass from "../Pages/Dashboard/ManageUsers/ManageClass";
import AddClass from "../Pages/Dashboard/Instructor/AddClass";
import MyClass from "../Pages/Dashboard/Instructor/MyClass";
import NotFound from "../Pages/NotFound/NotFound";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path: '/instractors',
                element:<Instractor></Instractor>
            },
            {
                path: '/classes',
                element: <Classes></Classes>
            }
        ]
    },
    {
        path: '/*',
        element: <NotFound></NotFound>
    },
    {
        path: '/dashboard',
        element: <Dashboard></Dashboard>,
        children: [
            {
                path: 'selectclass',
                element: <SelectClass></SelectClass>
            },
            {
                path: 'enrolledclass',
                element: <EnrolledClass></EnrolledClass>
            },
            {
                path: 'payment',
                element: <Payment></Payment>
            },
            {
                path: 'musers',
                element: <ManageUsers></ManageUsers>
            },
            {
                path: 'mclasses',
                element: <ManageClass></ManageClass>
            },
            {
                path: 'additem',
                element: <AddClass></AddClass>
            },
            {
                path: 'myclass',
                element: <MyClass></MyClass>
            }
        ]
    }
]);

export default router;