import { Link } from "react-router-dom";

const NotFound = () => {
    return (
        <div>
            <div className="ms-28 mt-8">
                <Link to='/'><button className="btn btn-success">Home</button></Link>
            </div>
            <img className="mx-auto mt-10 w-[800px] h-[500px]" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNO2PJ1bUifnY_RQbtzdwzFrWK1ekm7rOK6Q&usqp=CAU" alt="" />
        </div>
    );
};

export default NotFound;