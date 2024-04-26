import { useEffect, useState } from "react";
import SingleCrafItem from "./Home/SingleCrafItem";

const AllCraft = () => {

    const [items, setItems] = useState([])
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
                    items.map(item => <SingleCrafItem key={item._id} item={item}></SingleCrafItem>)
                }
            </div>
        </div>
    );
};

export default AllCraft;