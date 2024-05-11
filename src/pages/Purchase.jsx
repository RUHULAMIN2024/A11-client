import { useState } from "react";
import { useContext } from "react";
import { Helmet } from "react-helmet";
import { Link, useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "../AuthProvider/AuthProvider";

const Purchase = () => {
    const [date, setDate] = useState(new Date())
    const food = useLoaderData();
    const { userInfo } = useContext(AuthContext);


    const {
        _id,
        food_name,
        food_image,
        food_category,
        price,
        quantity,
        added_by,
        food_origin,
        description
    } = food;


    const handleSubmit = e => {
        e.preventDefault()
        const form = e.target
        const order_quantity = form.quantity.value
        const comment = form.comment.value
        const name = userInfo.displayName
        const email = userInfo.email

        const customer = { name, email }

        if(parseInt(quantity)===0){
            Swal.fire({
                title: 'Stock Over!',
                text: 'Item is not available',
                icon: 'error'
              })
              return
        }else if(quantity<order_quantity){
            Swal.fire({
                title: 'Invalid Request!',
                text: 'can not buy more than the available quantity',
                icon: 'error'
              })
              return
        }else if(added_by.email===email){
            Swal.fire({
                title: 'Invalid Request!',
                text: 'You wont be able to buy your own product',
                icon: 'error'
              })
            return
        }

        const info = {
            food_name,
            food_image,
            price,
            order_quantity,
            added_by,
            comment,
            customer,
            date,
        }
        console.log(info)
        fetch(`${import.meta.env.VITE_API_URL}/orders`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(info)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    Swal.fire({
                        title: "success",
                        text: "Orders Added Successfully ",
                        icon: "success"

                    });
                }
            })



    }
    return (
        <div className='flex flex-col md:flex-row justify-around gap-5  items-center my-10 container mx-auto '>
            <Helmet><title>Flavor Fusion | Purchase</title></Helmet>


            <div className='flex-1  px-4 py-7 bg-white rounded-md shadow-md md:min-h-[350px]'>
                <div className='flex items-center justify-between'>
                    <span className='text-sm font-light text-gray-800 '>
                        Food Category: {food_category}
                    </span>
                    <span className='px-4 py-1 text-xs text-blue-800 uppercase bg-blue-200 rounded-full '>
                        Food Origin: {food_origin}
                    </span>
                </div>

                <div>
                    <h1 className='mt-2 text-3xl font-semibold text-gray-800 '>
                        {food_name}
                    </h1>

                    <p title={description} className='mt-2 text-lg text-gray-600 '>
                        {description.substring(0, 65)}...
                    </p>

                    <div className='flex mt-6 items-center gap-5'>
                        <div className='rounded-md w-2/5'>
                            <img className="w-full h-36" src={food_image} alt='' />
                        </div>
                        <div className="w-3/5">
                            <p className='text-sm font-bold text-gray-600 '>
                                Added By:
                            </p>
                            <p className='mt-2 text-sm  text-gray-600 '>Name: {added_by.name}.</p>
                            <p className='mt-2 text-sm  text-gray-600 '>
                                Email: {added_by.email}
                            </p>
                            <div className='mt-6 text-lg font-bold text-gray-600 flex items-center justify-between'>
                                <span className=' '>
                                    Price: {price}
                                </span>
                                <span className=' '>
                                    Quantity: {quantity}
                                </span>
                            </div>
                        </div>

                    </div>


                </div>
            </div>
            {/* Place A Bid Form */}
            <section className='p-6 w-full  bg-white rounded-md shadow-md flex-1 md:min-h-[350px]'>
                <h2 className='text-lg font-semibold text-gray-700 capitalize '>
                    Place A Bid
                </h2>

                <form onSubmit={handleSubmit}>
                    <div className='grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2'>

                        <div>
                            <label className='text-gray-700 ' htmlFor='quantity'>
                                Quantity
                            </label>
                            <input
                                id='quantity'
                                type='number'
                                required
                                name='quantity'
                                className='block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md   focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring'
                            />
                        </div>

                        <div>
                            <label className='text-gray-700 ' htmlFor='comment'>
                                Comment
                            </label>
                            <input
                                id='comment'
                                name='comment'
                                type='text'
                                className='block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md   focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring'
                            />
                        </div>

                        <div>
                            <label className='text-gray-700 ' htmlFor='name'>
                                Name
                            </label>
                            <input
                                id='name'
                                type='text'
                                name='name'
                                disabled
                                defaultValue={userInfo.displayName}
                                className='block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md   focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring'
                            />
                        </div>
                        <div>
                            <label className='text-gray-700 ' htmlFor='emailAddress'>
                                Email Address
                            </label>
                            <input
                                id='emailAddress'
                                type='email'
                                name='email'
                                disabled
                                defaultValue={userInfo.email}
                                className='block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md   focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring'
                            />
                        </div>
                    </div>

                    <div className='flex justify-end mt-6'>
                        <button
                            type='submit'
                            className='btn bg-primary px-10 text-white hover:text-primary'
                        >
                            Purchase
                        </button>
                    </div>
                </form>
            </section>
        </div>
    );
};


export default Purchase;