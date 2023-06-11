import { useEffect, useState } from "react";


const SelectClass = () => {
  const [carts, setCarts] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/carts')
      .then(res => res.json())
      .then(data => {
        setCarts(data)
      })
  }, [])

  return (
    <div>
      <h2 className="text-2xl text-center my-5">My selected class: {carts.length}</h2>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <td>
               #
              </td>
              <th>Name</th>
              <th>Available Seats</th>
              <th>Price</th>
              <th>Action</th>
              <th>Payment Option</th>
            </tr>
          </thead>
          <tbody>
            {carts.map((cart, index) =>  <tr key={cart._id}>
              <td>
                {index + 1}
              </td>
              <td>
                <div className="flex items-center space-x-3">
                  <div className="avatar">
                    <div className="mask mask-squircle w-12 h-12">
                      <img src={cart.image} alt="Avatar Tailwind CSS Component" />
                    </div>
                  </div>
                  <div>
                    <div className="font-bold">{cart.name}</div>
                    <div className="text-sm opacity-50">{cart.seats}</div>
                  </div>
                </div>
              </td>
              <td>
                {cart.seats}
              </td>
              <td>$ {cart.price}</td>
              <td>
                <button className="btn btn-ghost btn-xs">delete</button>
              </td>
              <td className="text-center">
                <button className="btn btn-ghost btn-xs">Pay</button>
              </td>
            </tr>)}
          </tbody>

        </table>
      </div>
    </div>
  );
};

export default SelectClass;