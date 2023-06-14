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
      <div className="hero h-[350px]" >
        <div className="hero-overlay bg-opacity-60 bg-red-300"></div>
        <div className="hero-content text-center text-neutral-content text-black">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold">Popular Instructor</h1>
            <p className="mb-5">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
          </div>
        </div>
      </div>
      {/* popular section */}
      <div className="popins-card mt-3">
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