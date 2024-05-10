import { Helmet } from "react-helmet";
import { useLoaderData } from "react-router-dom";

const Details = () => {

    const food = useLoaderData();

    const {
        food_name,
        food_image,
        food_category,
        price,
        quantity,
        added_by,
        food_origin,
        description
    } = food;

    return (
        <div className="container mx-auto my-12">

            <Helmet><title>Flavor Fusion | Details</title></Helmet>

            <div className="flex flex-col overflow-hidden rounded-md shadow-sm lg:flex-row">
                <img src={food_image} alt="" className="max-h-80 dark:bg-gray-500 aspect-video" />
                <div className="flex flex-col justify-center flex-1 px-6 dark:bg-gray-50">
                    <h3 className="text-3xl font-bold">{food_name}</h3>
                    <p><span className="text-primary font-bold">Added By:</span> {added_by.name}</p>

                    <p className="my-6 dark:text-gray-600">{description}</p>

                    <div className="pt-3 mb-3 flex-col md:flex-row border-t flex justify-between">
                        <p ><span className=" font-bold">Food Category: </span>{food_category} </p>
                        <p ><span className=" font-bold">Food Origin: </span>{food_origin} </p>
                    </div>


                    <div className="flex flex-col md:flex-row justify-between">
                        <p><span className="font-bold"> Price: </span>{price} </p>
                        <p><span className="font-bold">Quantity: </span>{quantity} </p>
                    </div>
                    <button className="w-full bg-primary hover:text-primary text-white btn mt-5">Purchase</button>
                </div>
            </div>

        </div>
    );
};

export default Details;