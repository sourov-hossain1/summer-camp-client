import { useEffect, useState } from "react";

const PopIns = () => {

    const [instractors, setInstractors] = useState([]);

  useEffect(() => {
    fetch('instractors.json')
      .then(res => res.json())
      .then(data => {
        setInstractors(data)
      })
  }, [])
    return (
        <>
            <h2 className="text-3xl text-center my-5">Popular Instractors</h2>
            {/* <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTrhJD7Hs9U6cdpHDrcSVdY6_R0eQBkPfRbA&usqp=CAU" alt="" /> */}
            {
                instractors.map(instractor => <p key={instractor._id}>{instractor.name}</p>)
            }
        </>
    );
};

export default PopIns;