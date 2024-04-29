/* eslint-disable react/jsx-key */
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const AllCraft = () => {

    const [items, setItems] = useState([])
    // const [dataLength, setDataLength] = useState(6)
    // console.log(items)

    useEffect(() => {
        fetch('http://localhost:5000/textileArt')
            .then(res => res.json())
            .then(data => {
                setItems(data)
            })
    }, [])
    return (
        // items.map(item => <TableCraft key={item._id} item={item}></TableCraft>)
        < div >
            <div className="overflow-x-auto mt-20">
                <table className="table border p-5">
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