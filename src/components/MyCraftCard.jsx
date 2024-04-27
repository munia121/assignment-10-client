/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

const MyCraftCard = ({ item }) => {
    const { _id, name, photo, price, ratings, description, stock, customize } = item
    return (
        <div>
           
            <div className=" p-6 rounded-md mt-20 shadow-md dark:bg-gray-50 dark:text-gray-900">
                <img src={photo} alt="" className="object-cover object-center w-full rounded-md h-72 dark:bg-gray-500" />
                <div className="mt-6 mb-2">
                    <span className="block text-xs font-medium tracking-widest uppercase dark:text-violet-600">Customize: {customize}</span>
                    <h2 className="text-xl font-semibold tracking-wide">{name}</h2>
                </div>

                <div className="mt-4">
                    <p className="font-bold">Price: {price}</p>
                    <p className="font-bold">Ratings: {ratings}</p>
                </div>
                <div className="flex mt-3 gap-10">
                    <Link >
                        <a className="relative inline-block px-4 py-2 font-medium group">
                            <span className="absolute inset-0 w-full h-full transition duration-200 ease-out transform translate-x-1 translate-y-1 bg-[#f29c94] group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
                            <span className="absolute inset-0 w-full h-full bg-white border-2 border-black group-hover:bg-black"></span>
                            <span className="relative text-black group-hover:text-white">Update</span>
                        </a>
                    </Link>


                    {/* <button className="btn font-bold bg-[#f29c94]">Remove</button> */}
                    <a className="relative inline-block px-4 py-2 font-medium group">
                        <span className="absolute inset-0 w-full h-full transition duration-200 ease-out transform translate-x-1 translate-y-1 bg-[#f29c94] group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
                        <span className="absolute inset-0 w-full h-full bg-white border-2 border-black group-hover:bg-black"></span>
                        <span className="relative text-black group-hover:text-white">Remove</span>
                    </a>
                </div>
            </div>
        </div>
    );
};

export default MyCraftCard;