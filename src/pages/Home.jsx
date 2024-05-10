import { Helmet } from "react-helmet";
import { Link, useLoaderData } from "react-router-dom";
import ContactUs from "../components/ContactUs";
import Featurs from "../components/Features";
import FoodCard from "../components/FoodCard";
import Slider from "../components/Slider";

const Home = () => {

    const foods = useLoaderData()

    return (
        <div className="container mx-auto">
            <Helmet><title>Flavor Fusion | Home</title></Helmet>
            <Slider></Slider>
            <h2 className="text-2xl md:text-4xl text-center my-12 font-bold">Top Foods</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
                {
                    foods.slice(0,6).map(food => <FoodCard food={food} key={food._id}></FoodCard>)
                }
            </div>
            <div className="text-center mt-10">
            <Link to='/all-foods' className="btn font-bold text-xl md:text-2xl text-white hover:text-secondary bg-secondary w-1/2 ">See All</Link>
            </div>
            <Featurs></Featurs>
            <ContactUs></ContactUs>
        </div>
    );
};

export default Home;