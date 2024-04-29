import { useEffect, useState } from "react";
import SingleCrafItem from "./SingleCrafItem";

const CraftItems = () => {
    const [items, setItems] = useState([])
    // console.log(items)

    useEffect(() =>{
        fetch('https://assignment-10-server-mu-liart.vercel.app/textileArt')
        .then(res => res.json())
        .then(data =>{
            setItems(data)
        })
    },[])

    return (
        <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-10">
            {
                items.slice(0,6).map(item => <SingleCrafItem  key={item._id} item={item}></SingleCrafItem>)
            }
        </div>
    );
};

export default CraftItems;