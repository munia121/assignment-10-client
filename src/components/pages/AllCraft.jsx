import { useEffect, useState } from "react";
import SingleCrafItem from "./Home/SingleCrafItem";

const AllCraft = () => {

    const [items, setItems] = useState([])
    const [dataLength, setDataLength] = useState(6)
    // console.log(items)

    useEffect(() => {
        fetch('http://localhost:5000/textileArt')
            .then(res => res.json())
            .then(data => {
                setItems(data)
            })
    }, [])
    return (
        <div>
            <div className="grid grid-cols-1 mt-20 lg:grid-cols-3 md:grid-cols-2 gap-10">
                {
                    items.slice(0, dataLength).map(item => <SingleCrafItem key={item._id} item={item}></SingleCrafItem>)
                }
            </div>
            <div className="text-center mt-6">
                <div className={dataLength === items.length && 'hidden'} >
                    <button onClick={() => setDataLength(items.length)} className="btn text-center">See More</button>
                </div>
            </div>
        </div>
    );
};

export default AllCraft;