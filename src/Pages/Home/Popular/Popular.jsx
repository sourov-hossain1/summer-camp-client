import { useEffect, useState } from "react";
import './Popular.css'
import Design from "../Design/Design";

const Popular = () => {
  const [popular, setPopular] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/popular')
      .then(res => res.json())
      .then(data => {
        const TopStudents = data.filter(number => number.students > 25);
        setPopular(TopStudents)
      })
  }, [])
  return (
    <>
    <Design></Design>
      <div className="popular-card mt-3">
        {
          popular.map(popularClass => <div key={popularClass._id} className="card me-4 mb-4 w-[331px] bg-base-100 shadow-xl">
            <figure><img src={popularClass.image} alt="Shoes" /></figure>
            <div className="card-body">
              <h2 className="card-title">{popularClass.name}</h2>
              <p className="font-bold">Class: {popularClass.class}</p>
              <p className="font-bold">Total Students: {popularClass.students}</p>
              <p>{popularClass.description}</p>
              <div className="card-actions justify-end">
                  <button className="btn btn-outline border-0 border-b-4 mt-2">Enroll Now</button>
              </div>
            </div>
          </div>)
        }
      </div>
    </>
  );
};

export default Popular;