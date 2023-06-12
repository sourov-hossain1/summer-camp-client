import { useContext, useEffect, useState } from "react";
import './Classes.css'
import useCart from "../../Hooks/useCart";
import { AuthContext } from "../../Providers/AuthProviders";

const Classes = () => {
    const [learns, setLearns] = useState([]);
    const [, refetch] = useCart(); 
    const {user} = useContext(AuthContext);


    const handleAddToCart = item =>{
        // console.log(item);
        const { _id,name, image, instructor, seats, price} = item;
        const classItem = {classItemId: _id,name, instructor, image, price,seats, email: user.email}
        fetch('http://localhost:5000/carts', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(classItem)
            
        })
        .then(res => res.json())
        .then(data => {
            refetch();
            console.log(data)
        })
    }

    useEffect(() => {
        fetch('http://localhost:5000/classes')
            .then(res => res.json())
            .then(data => {
                setLearns(data)
            })
    }, [])
    return (
        <>
            <div className="class-card">
                {
                    learns.map(learn => <div key={learn._id} className="card card-side bg-base-100 shadow-xl">
                        <figure><img className="h-[220px] w-[220px]" src={learn.image} alt="Movie" /></figure>
                        <div className="card-body">
                            <h2 className="card-title">{learn.name}</h2>
                            <p>Instructor: {learn.instructor}</p>
                            <p>Available seats: {learn.seats}</p>
                            <p>Price: ${learn.price}</p>
                            <div className="card-actions justify-end">
                                <button onClick={()=> handleAddToCart(learn)} className="btn btn-outline border-0 border-b-4 mt-2">Select</button>
                            </div>
                        </div>
                    </div>)
                }
            </div>
        </>
    );
};

export default Classes;