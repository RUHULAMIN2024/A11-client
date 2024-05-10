import { Helmet } from "react-helmet";
import { useLoaderData } from "react-router-dom";
import FoodCard from "../components/FoodCard";

const AllFoods = () => {
    const foods = useLoaderData()

    return (
        <div className="py-12">
            <Helmet><title>Flavor Fusion | All Foods</title></Helmet>
            <h2 className="text-2xl md:text-4xl text-center my-12 font-bold">All Foods</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
                {
                    foods.map(food => <FoodCard food={food} key={food._id}></FoodCard>)
                }
            </div>

        </div>
    );
};

export default AllFoods;