import { useContext } from "react";
import { Helmet } from "react-helmet";
import { useForm } from "react-hook-form";
import { AuthContext } from "../AuthProvider/AuthProvider";
import Swal from 'sweetalert2'
import { useLoaderData, useNavigate } from "react-router-dom";

const UpdateFood = () => {
    const navigate=useNavigate()
    const food = useLoaderData();

    const {
        _id,
        food_name,
        food_image,
        food_category,
        price,
        quantity,
        
        food_origin,
        description
    } = food;



    const { userInfo } = useContext(AuthContext);
    const name = userInfo.displayName;
    const email = userInfo.email;
    const added_by = { name, email }
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm()
    const onSubmit = data => {
        const info = { ...data, added_by }

        fetch(`${import.meta.env.VITE_API_URL}/foods/${_id}`,{credentials:'include'}, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(info)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.modifiedCount>0) {
                    Swal.fire({
                        title: "success",
                        text: "Food Updated Successfully ",
                        icon: "success"

                    });
                }
                navigate('/my-food')
            })

    }

    return (
        <div>
            <Helmet><title>Flavor Fusion | Update Food</title></Helmet>
            <form onSubmit={handleSubmit(onSubmit)} className="container p-10 my-12 rounded-2xl bg-base-200 mx-auto">
                <h2 className="text-3xl mb-3 text-center font-bold">Update Your Food Item</h2>
                <div className="grid grid-cols-6  mx-auto gap-4">

                    <div className="col-span-full md:col-span-3">
                        <label htmlFor="firstname">Food Name</label>
                        <input id="firstname" type="text" defaultValue={food_name} className="w-full rounded-md focus:ring focus:ring-opacity-75 p-2" {...register("food_name", { required: true })} />
                        {errors.food_name && <span className="text-red-500 text-sm">This field is required</span>}
                    </div>
                    <div className="col-span-full md:col-span-3">
                        <label htmlFor="firstname">Food Category</label>
                        <input id="firstname" type="text" defaultValue={food_category} className="w-full rounded-md focus:ring focus:ring-opacity-75 p-2" {...register("food_category", { required: true })} />
                        {errors.food_category && <span className="text-red-500 test-sm">This field is required</span>}
                    </div>

                    <div className="col-span-full md:col-span-4">
                        <label htmlFor="firstname">Image URL</label>
                        <input id="firstname" type="text" defaultValue={food_image} className="w-full rounded-md focus:ring focus:ring-opacity-75 p-2" {...register("food_image", { required: true })} />
                        {errors.food_image && <span className="text-red-500 text-sm">This field is required</span>}
                    </div>


                    <div className="col-span-full">
                        <label htmlFor="firstname">Short Description</label>
                        <input id="firstname" type="text" defaultValue={description} className="w-full rounded-md focus:ring focus:ring-opacity-75 p-2" {...register("description", { required: true })} />
                        {errors.description && <span className="text-red-500 test-sm">This field is required</span>}
                    </div>
                    <div className="col-span-full md:col-span-2">
                        <label htmlFor="firstname">Food Origin (Country)</label>
                        <input id="firstname" type="text" defaultValue={food_origin} className="w-full rounded-md focus:ring focus:ring-opacity-75 p-2" {...register("food_origin", { required: true })} />
                        {errors.food_origin && <span className="text-red-500 test-sm">This field is required</span>}
                    </div>
                    <div className="col-span-full md:col-span-2">
                        <label htmlFor="firstname">Price</label>
                        <input id="firstname" type="text" defaultValue={price} className="w-full rounded-md focus:ring focus:ring-opacity-75 p-2" {...register("price", { required: true })} />
                        {errors.price && <span className="text-red-500 test-sm">This field is required</span>}
                    </div>

                    <div className="col-span-full md:col-span-2">
                        <label htmlFor="firstname">Quantity</label>
                        <input id="firstname" type="text" defaultValue={quantity} className="w-full rounded-md focus:ring focus:ring-opacity-75 p-2" {...register("quantity", { required: true })} />
                        {errors.quantity && <span className="text-red-500 test-sm">This field is required</span>}
                    </div>


                    <div className="col-span-full">
                        <input value="Update Food" className="btn w-full bg-primary hover:bg-secondary text-white" type="submit" />
                    </div>
                </div>
            </form>

        </div>
    );
};

export default UpdateFood;