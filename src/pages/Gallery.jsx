import { useContext } from "react";
import { Helmet } from "react-helmet";
import { useLoaderData, useNavigate } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";
import Swal from "sweetalert2";


const Gallery = () => {
    const navigate = useNavigate()

    const { loding, userInfo } = useContext(AuthContext);
    const gallery = useLoaderData()

    const handleModal = () => {
        if (loding) {
            return (
                <div className="text-center mx-auto my-48">
                    <span className="loading loading-bars loading-xs"></span>
                    <span className="loading loading-bars loading-sm"></span>
                    <span className="loading loading-bars loading-md"></span>
                    <span className="loading loading-bars loading-lg"></span>
                </div>
            )
        }
        else if (userInfo) {
            return document.getElementById('my_modal_5').showModal()
        }
        navigate('/login')

    }
    const handleAdd = (e) => {
        e.preventDefault()
        const photo = e.target.photo.value
        const feedback = e.target.feedback.value
        const name = e.target.name.value

        const info = { photo, feedback, name }

        fetch(`${import.meta.env.VITE_API_URL}/gallery`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(info)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    console.log(data)
                    Swal.fire({
                        title: "success",
                        text: "Feedback Added Successfully ",
                        icon: "success"

                    });
                    e.target.reset()
                    navigate('/gallery')
                }
            })



    }

    return (
        <div className="container mx-auto">
            <Helmet><title>Flavor Fusion | Gallery</title></Helmet>
            <h2 className="text-2xl md:text-4xl text-center my-12 font-bold">Gallery</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                {
                    gallery.map(item => (
                        <div key={item._id} style={{ backgroundImage: `url(${item.photo})` }} className=" bg-cover h-72">
                            {/* <div className="hero-overlay opacity-60"></div> */}

                            <div className="text-white hover:hero-overlay hover:bg-opacity-60  opacity-0 transition-all duration-500 hover:opacity-100 w-full h-full flex flex-col items-center justify-center">
                                <h2 className="text-3xl text-center my-3 font-bold">{item.name}</h2>
                                <p>Feedback: {item.feedback}</p>
                            </div>
                        </div>
                    ))
                }
            </div>



            <div className='flex justify-end my-6'>
                <button onClick={handleModal} className='btn bg-primary px-10 text-white hover:text-primary'> Add </button>
            </div>

            {/* Open the modal using document.getElementById('ID').showModal() method */}
            <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                    <form onSubmit={handleAdd} action="">
                        <div>
                            <label className='text-gray-700 ' htmlFor='photo'>
                                Photo URL
                            </label>
                            <input
                                id='photo'
                                type='text'
                                required
                                name='photo'
                                className='block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md   focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring'
                            />
                        </div>
                        <div>
                            <label className='text-gray-700 ' htmlFor='feedback'>
                                Your Feedback
                            </label>
                            <input
                                id='feedback'
                                type='text'
                                required
                                name='feedback'
                                className='block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md   focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring'
                            />
                        </div>
                        <div>
                            <label className='text-gray-700 ' htmlFor='name'>
                                Your Name
                            </label>
                            <input
                                id='name'
                                type='text'
                                disabled
                                defaultValue={userInfo?.displayName}
                                name='name'
                                className='block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md   focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring'
                            />
                        </div>
                        

                        <div className="modal-action">
                            <button className="btn">Add</button>
                            <form action="" method="dialog">
                                <button className="btn">Close</button>
                            </form>

                        </div>
                    </form>

                </div>
            </dialog>
        </div>
    );
};

export default Gallery;