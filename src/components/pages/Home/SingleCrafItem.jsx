/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";

const SingleCrafItem = ({ item }) => {
    // console.log(item)


    // eslint-disable-next-line no-unused-vars
    const { _id, name, photo, price, ratings, description, stock } = item

    return (
        <div>
            <div className=" p-6 rounded-md shadow-md dark:bg-gray-50 dark:text-gray-900">
                <img src={photo} alt="" className="object-cover object-center w-full rounded-md h-72 dark:bg-gray-500" />
                <div className="mt-6 mb-2">
                    <span className="block text-xs font-medium tracking-widest uppercase dark:text-violet-600">{stock}</span>
                    <h2 className="text-xl font-semibold tracking-wide">{name}</h2>
                </div>
                <p className="dark:text-gray-800">{description}</p>
                <Link to={`/details/${_id}`}>
                    <button className="btn w-full mt-3 bg-[#f29c94]">View Details</button>
                </Link>
            </div>
        </div>
    );
};

export default SingleCrafItem;