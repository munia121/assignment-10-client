/* eslint-disable react/jsx-key */
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const AllCraft = () => {

    const [items, setItems] = useState([])
    useEffect(() => {
        fetch('https://assignment-10-server-mu-liart.vercel.app/textileArt')
            .then(res => res.json())
            .then(data => {
                setItems(data)
            })
    }, [])
    return (
        // items.map(item => <TableCraft key={item._id} item={item}></TableCraft>)
        < div className="">
            <div className="overflow-x-auto mt-20">
                <table className="table border p-20">
                    {/* head */}
                    <thead>
                        <tr className="font-bold">
                            <th className="font-bold text-lg">No:</th>
                            <th className="font-bold text-lg">Item Name</th>
                            <th className="font-bold text-lg">Price</th>
                            <th className="font-bold text-lg"> Ratings</th>
                            <th className="font-bold text-lg">Processing</th>
                            <th className="font-bold text-lg">Details</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        {
                            items.map((item, index) => {
                                return <tr>
                                    <th >{index + 1}</th>
                                    <td>{item.name}</td>
                                    <td>{item.price}</td>
                                    <td>{item.ratings}</td>
                                    <td>{item.processing}</td>
                                    <Link to={`/details/${item._id}`}>
                                        <button className="btn btn-sm">View Details</button>
                                    </Link>
                                </tr>
                            })
                        }
                    </tbody>
                </table>
            </div>
        </div >
    );
};

export default AllCraft;