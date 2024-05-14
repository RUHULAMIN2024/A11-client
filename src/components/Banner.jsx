import { Link } from "react-router-dom";

const Banner = () => {
    return (
        <div className="hero min-h-72 md:min-h-[550px]" style={{ backgroundImage: 'url(https://i.ibb.co/C7fqzZP/bb.jpg)' }}>
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-center text-neutral-content">
                <div className="max-w-md">
                    <h1 className="mb-5 text-3xl md:text-5xl font-bold">Welcome to Flavor Fusion</h1>
                    <p className="mb-5 hidden md:block">We are a well-known restaurant brand that is dedicated to providing our customers with exceptional food experiences. We not only offer delicious meals prepared ...</p>
                    <Link to='/all-foods' className="btn hover:text-primary bg-primary px-10 text-white">See All Food</Link>
                </div>
            </div>
        </div>
    );
};

export default Banner;