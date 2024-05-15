import { useState } from "react";
import { Helmet } from "react-helmet";
import { useLoaderData } from "react-router-dom";
import FoodCard from "../components/FoodCard";

const AllFoods = () => {
    const foods = useLoaderData()
    const [allFood, setAllFood] = useState(foods)

    const handleSubmit = e => {
        e.preventDefault()
        const value = e.target.search.value

        fetch(`${import.meta.env.VITE_API_URL}/food-name/${value}`)
            .then(res => res.json())
            .then(data => {
                setAllFood(data)
            })

    }

    return (
        <div className="container mx-auto py-10">
            <Helmet><title>Flavor Fusion | All Foods</title></Helmet>
            <div className="bg-cover hero-overlay bg-opacity-60 flex-col bg-center mb-8 flex justify-center items-center space-y-5 w-full h-40 md:h-60" style={{ backgroundImage: 'url(https://i.ibb.co/WKCBVpW/1.jpg)' }}>
                <h2 className="text-3xl uppercase text-white md:text-5xl text-center font-bold">All Foods</h2>
                <form onSubmit={handleSubmit}>
                    <div className='flex justify-center p-1 overflow-hidden space-x-5  md:w-96 mx-auto'>
                        <input
                            className='md:px-6 px-3 py-1 border rounded-lg md:py-2 bg-white outline-none'
                            type='text'
                            name='search'
                            required
                            placeholder='Enter Food Name'
                            aria-label='Enter Food Name'
                        />

                        <button className='px-1 md:px-4 md:py-3 text-sm font-medium bg-secondary text-white  uppercase  rounded-md '>
                            Search
                        </button>
                    </div>
                </form>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                {
                    allFood?.map(food => <FoodCard food={food} key={food._id}></FoodCard>)
                }
            </div>

        </div>
    );
};

export default AllFoods;