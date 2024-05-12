import { Helmet } from "react-helmet";
import { Link, useLoaderData } from "react-router-dom";
import Banner from "../components/Banner";
import ContactUs from "../components/ContactUs";
import Featurs from "../components/Features";
import FoodCard from "../components/FoodCard";

const Home = () => {

    const foods = useLoaderData()

    return (
        <div className="container mx-auto">
            <Helmet><title>Flavor Fusion | Home</title></Helmet>
            <Banner></Banner>
            <h2 className="text-2xl md:text-4xl text-center pt-12 my-12 font-bold">Top Foods</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
                {
                    foods.slice(0,6).map(food => <FoodCard food={food} key={food._id}></FoodCard>)
                }
            </div>
            <div className="text-center mt-10">
            <Link to='/all-foods' className="btn font-bold text-xl md:text-2xl text-white hover:text-primary bg-primary w-3/12 ">See All</Link>
            </div>
            <Featurs></Featurs>
            <ContactUs></ContactUs>
        </div>
    );
};

export default Home;