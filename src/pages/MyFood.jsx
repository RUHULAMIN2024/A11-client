import { useState } from "react";
import { useContext, useEffect } from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "../AuthProvider/AuthProvider";


const MyFood = () => {
    const [items, setItems] = useState([])
    const { userInfo } = useContext(AuthContext);
    const userEmail = userInfo?.email;
    useEffect(() => {
        fetch(`${import.meta.env.VITE_API_URL}/foods/${userEmail}`,{credentials:'include'})
            .then(res => res.json())
            .then(data => {
                setItems(data)
            })
    }, [items])


    const handleDelete = id => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`${import.meta.env.VITE_API_URL}/foods/${id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json)
                    .then(data => {
                        if (data.deletedCount > 0) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your Food has been deleted.",
                                icon: "success"
                            });
                        }
                    })

            }
        });
    }
    return (
        <div className="container my-10 mx-auto">
            <Helmet><title>Flavor Fusion | My Food</title></Helmet>
            <h2 className="text-3xl mb-5 text-center font-bold">My Added Food Items</h2>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead className="text-lg">
                        <tr>
                            <th>Image</th>
                            <th>Food Name</th>
                            <th>Food Category</th>
                            <th> Price</th>
                            <th></th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            items.map(item => (
                                <tr key={item._id}>
                                    <td><div className="avatar">
                                        <div className="mask mask-squircle w-12 h-12">
                                            <img src={item.food_image} alt=''/>
                                        </div>
                                    </div></td>
                                    <td>{item.food_name}</td>
                                    <td>{item.food_category}</td>
                                    <td>{item.price}</td>
                                    <td><Link to={`/update-food/${item._id}`} className="btn bg-primary btn-sm text-white hover:text-primary">Edit</Link></td>
                                    <td><button onClick={() => handleDelete(item._id)} className="btn bg-secondary btn-sm text-white hover:text-red-500">Delete</button></td>
                                </tr>
                            ))
                        }


                    </tbody>
                </table>
            </div>

        </div>
    );
};

export default MyFood;