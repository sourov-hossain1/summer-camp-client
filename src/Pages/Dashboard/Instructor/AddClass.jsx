import { useForm } from "react-hook-form";

const AddClass = () => {

    const { register, handleSubmit, formState: { errors } } = useForm();
    console.log(errors)

    const onSubmit = data => {
        // console.log(data);

        fetch('http://localhost:5000/adds', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
        })
    }


    return (
        <div className="w-full">
            <h2 className="text-2xl text-center my-4">Add an Item</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="form-control w-full max-w-md mx-auto my-2">
                    <label className="label">
                        <span className="label-text font-semibold">Class Name</span>
                    </label>
                    <input type="text" {...register("className")} placeholder="Type here" className="input input-bordered w-full" />
                </div>
                <div className="form-control w-full max-w-md mx-auto my-2">
                    <label className="label">
                        <span className="label-text font-semibold">Class Image</span>
                    </label>
                    <input type="text" {...register("classImg")} placeholder="Type here" className="input input-bordered w-full" />
                </div>
                <div className="form-control w-full max-w-md mx-auto my-2">
                    <label className="label">
                        <span className="label-text font-semibold">Instructor Name</span>
                    </label>
                    <input type="text" {...register("insName")} placeholder="Type here" className="input input-bordered w-full" />
                </div>
                <div className="form-control w-full max-w-md mx-auto my-2">
                    <label className="label">
                        <span className="label-text font-semibold">Instructor Email</span>
                    </label>
                    <input type="email" {...register("email")} placeholder="Type here" className="input input-bordered w-full" />
                </div>
                <div className="form-control w-full max-w-md mx-auto my-2">
                    <label className="label">
                        <span className="label-text font-semibold">Available Seats</span>
                    </label>
                    <input type="number" {...register("seats")} placeholder="Type here" className="input input-bordered w-full" />
                </div>
                <div className="form-control w-full max-w-md mx-auto my-2">
                    <label className="label">
                        <span className="label-text font-semibold">Price</span>
                    </label>
                    <input type="number" {...register("price")} placeholder="Type here" className="input input-bordered w-full" />
                </div>
                <div className="form-control mt-3 mb-7">
                    <input className="btn btn-primary w-[445px] mx-auto" type="submit" value="Add" />
                </div>
            </form>
        </div>
    );
};

export default AddClass;