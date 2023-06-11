import { useEffect, useState } from "react";


const SelectClass = () => {
    const [catrs, setCarts] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/carts')
      .then(res => res.json())
      .then(data => {
        setCarts(data)
      })
  }, [])

    return (
        <div>
            <h2>My selected class: {catrs.length}</h2>
            {
                catrs.map(cart => <p key={cart._id}>{cart.name}</p>)
            }
        </div>
    );
};

export default SelectClass;