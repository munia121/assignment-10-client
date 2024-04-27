/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const MyCraftCard = ({ item, items, setItem }) => {
    const { _id, name, photo, price, ratings, description, stock, customize } = item;


    const handleDelete = (id) => {
        console.log(id)
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

                fetch(`http://localhost:5000/textileArt/${id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data)
                        if (data.deletedCount > 0) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your file has been deleted.",
                                icon: "success"
                            });

                            const remaining = items.filter(coffee => coffee._id !== id);
                            setItem(remaining)
                        }
                    })

                console.log('delete confirm')
            }
        });
    }


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
                    <Link to={`/update/${_id}`}>
                        <a className="relative inline-block px-4 py-2 font-medium group">
                            <span className="absolute inset-0 w-full h-full transition duration-200 ease-out transform translate-x-1 translate-y-1 bg-[#f29c94] group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
                            <span className="absolute inset-0 w-full h-full bg-white border-2 border-black group-hover:bg-black"></span>
                            <span className="relative text-black group-hover:text-white">Update</span>
                        </a>
                    </Link>


                    {/* <button className="btn font-bold bg-[#f29c94]">Remove</button> */}
                    <a onClick={()=>handleDelete(_id)} className="relative inline-block px-4 py-2 font-medium group">
                        <span className="absolute inset-0 w-full h-full transition duration-200 ease-out transform translate-x-1 translate-y-1 bg-[#f29c94] group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
                        <span className="absolute inset-0 w-full h-full bg-white border-2 border-black group-hover:bg-black"></span>
                        <span  className="relative text-black group-hover:text-white">Remove</span>
                    </a>
                </div>
            </div>
        </div>
    );
};

export default MyCraftCard;