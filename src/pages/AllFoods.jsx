import { useState } from "react";
import { Helmet } from "react-helmet";
import { useLoaderData } from "react-router-dom";
import FoodCard from "../components/FoodCard";

const AllFoods = () => {
    const foods = useLoaderData()
    const [allFood, setAllFood]=useState(foods)

    const handleSubmit=e=>{
        e.preventDefault()
        const value=e.target.search.value
    }

    return (
        <div className="py-12">
            <Helmet><title>Flavor Fusion | All Foods</title></Helmet>
            <h2 className="text-2xl md:text-4xl text-center my-12 font-bold">All Foods</h2>
            <form onSubmit={handleSubmit}>
                <div className='flex p-1 overflow-hidden space-x-5  w-96 mx-auto'>
                    <input
                        className='px-6 border rounded-lg py-2 bg-white outline-none'
                        type='text'
                        name='search'
                        placeholder='Enter Food Name'
                        aria-label='Enter Food Name'
                    />

                    <button className='px-1 md:px-4 py-3 text-sm font-medium bg-primary text-white  uppercase  rounded-md '>
                        Search
                    </button>
                </div>
            </form>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
                {
                    foods.map(food => <FoodCard food={food} key={food._id}></FoodCard>)
                }
            </div>

        </div>
    );
};

export default AllFoods;