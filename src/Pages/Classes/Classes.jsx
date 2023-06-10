import { useEffect, useState } from "react";
import './Classes.css'

const Classes = () => {
    const [learns, setLearns] = useState([]);

    useEffect(() => {
        fetch('classes.json')
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
                                <button className="btn btn-outline border-0 border-b-4 mt-2">Select</button>
                            </div>
                        </div>
                    </div>)
                }
            </div>
        </>
    );
};

export default Classes;