import { useEffect, useState } from "react";
import './popIns.css'

const PopIns = () => {

  const [instractors, setInstractors] = useState([]);

  useEffect(() => {
    fetch('popIns.json')
      .then(res => res.json())
      .then(data => {
        setInstractors(data)
      })
  }, [])
  return (
    <>
      <h2 className="text-3xl text-center my-5">Popular Instractors</h2>
      <p className="border-0 border-b-4 mb-5 w-1/4 mx-auto"></p>
      <div className="popins-card">
        {
          instractors.map(instractor => <div key={instractor._id} className="card card-side bg-base-100 shadow-xl">
            <figure><img className="h-[200px] w-[300px]" src={instractor.image} alt="Movie" /></figure>
            <div className="card-body">
              <h2 className="card-title">{instractor.name}</h2>
              <p>Click the button to watch on Jetflix app.</p>
              <div className="card-actions justify-end">
                <button className="btn btn-outline border-0 border-b-4 mt-2">Contact</button>
              </div>
            </div>
          </div>)
        }
      </div>
    </>
  );
};

export default PopIns;