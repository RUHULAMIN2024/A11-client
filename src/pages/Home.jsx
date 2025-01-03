import { useState } from "react";
import { Helmet } from "react-helmet";
import { Link, useLoaderData } from "react-router-dom";
import Banner from "../components/Banner";
import ContactUs from "../components/ContactUs";
import Featurs from "../components/Features";
import FoodCard from "../components/FoodCard";

const Home = () => {

    const foods = useLoaderData()
    const [items, setItems]=useState(foods)
    items.sort((a, b) => {
        return parseFloat(b.count) - parseFloat(a.count)
    });

    return (
        <div className="container mx-auto">
            <Helmet><title>Flavor Fusion | Home</title></Helmet>
            <Banner></Banner>
            <h2 className="text-2xl md:text-4xl text-center pt-12 my-10 font-bold">Top Foods</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                {
                    items.slice(0,6).map(food => <FoodCard food={food} key={food._id}></FoodCard>)
                }
            </div>
            <div className="text-center mt-10">
            <Link to='/all-foods' className="btn font-bold text-xl md:text-2xl text-white hover:text-primary bg-primary w-1/2 md:w-3/12 ">See All</Link>
            </div>
            <Featurs></Featurs>
            <ContactUs></ContactUs>
        </div>
    );
};

export default Home;