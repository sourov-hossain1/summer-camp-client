import { useQuery } from "@tanstack/react-query";
import './ManageClass.css'

const ManageClass = () => {
  const { data: adds = [], refetch } = useQuery(['adds'], async () => {
    const res = await fetch('http://localhost:5000/adds')
    return res.json();
  });
  return (
    <div className="w-full ps-10">
      <h2 className="text-3xl text-center my-6">Total Classes: {adds.length}</h2>
      <div className="add-item">
        {
          adds.map(item => <div key={item._id} className="card card-side bg-base-100 shadow-xl">
            <figure><img className="h-full w-[350px]" src={item.classImg} alt="Movie" /></figure>
            <div className="card-body">
              <h2 className="card-title">Class: {item.className}</h2>
              <p>Instructor: {item.insName}</p>
              <p>Email: {item.email}</p>
              <div className="flex">
                <p>Seats: {item.seats}</p>
                <p>Price: {item.price} $</p>
              </div>
              {/* <button className="bg-primary text-white w-1/4 rounded-md py-1">Pending</button> */}
              <div className="card-actions justify-end">
                <button className="btn btn-outline border-0 border-b-4 mt-2">Contact</button>
              </div>
            </div>
          </div>)
        }
      </div>
    </div>
  );
};

export default ManageClass;