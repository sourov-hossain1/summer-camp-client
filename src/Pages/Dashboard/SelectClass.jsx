// import { useEffect, useState } from "react";
import useCart from "../../Hooks/useCart";
import Swal from "sweetalert2";


const SelectClass = () => {
  // const [carts, setCarts] = useState([]);
  const [cart, refetch] = useCart();

  // useEffect(() => {
  //   fetch('https://summer-camp-server-sourov-hossain1.vercel.app/carts')
  //     .then(res => res.json())
  //     .then(data => {
  //       setCarts(data)
  //     })
  // }, [])

  const handleDelete = item => {
    Swal.fire({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
        if (result.isConfirmed) {
            fetch(`https://summer-camp-server-sourov-hossain1.vercel.app/carts/${item._id}`, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        // refetch();
                        Swal.fire(
                            'Deleted!',
                            'Your file has been deleted.',
                            'success'
                        )
                    }
                })
        }
    })
}

  return (
    <div className="w-full">
      <h2 className="text-2xl text-center my-5">My selected class: {cart.length}</h2>
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
            {cart.map((scart, index) =>  <tr key={scart._id}>
              <td>
                {index + 1}
              </td>
              <td>
                <div className="flex items-center space-x-3">
                  <div className="avatar">
                    <div className="mask mask-squircle w-12 h-12">
                      <img src={scart.image} alt="Avatar Tailwind CSS Component" />
                    </div>
                  </div>
                  <div>
                    <div className="font-bold">{scart.name}</div>
                    <div className="text-sm opacity-50">{scart.seats}</div>
                  </div>
                </div>
              </td>
              <td>
                {scart.seats}
              </td>
              <td>$ {scart.price}</td>
              <td>
                <button onClick={() => handleDelete(scart)} className="btn btn-ghost btn-xs">delete</button>
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