import { Link } from "react-router-dom";

const FoodCard = ({ food }) => {
    const {_id,food_name, food_image,food_category, price, quantity }=food;

    return (

        <div className="card bg-base-100 shadow-xl">
            <figure className="px-10 pt-10">
                <img src={food_image} alt="Shoes" className="rounded-xl w-full h-52" />
            </figure>
            <div className="card-body">
                <h2 className="card-title">{food_name}</h2>
                <p className="pt-3 border-t">Food Category: {food_category}</p>
                <div className="flex justify-between">
                <span>Price: {price}</span>
                <span>Quantity: {quantity}</span>
                </div>
                <div className="mt-3 card-actions">
                    <Link to={`/single-food/${_id}`} className="btn w-full hover:text-primary text-white bg-primary">Details</Link>
                </div>
            </div>
        </div>

    );
};

export default FoodCard;