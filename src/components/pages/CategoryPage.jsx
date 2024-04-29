// import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import SingleCrafItem from "./Home/SingleCrafItem";

const CategoryPage = () => {

    // const { category } = useParams()
    const loadedData = useLoaderData()
    console.log(loadedData)



    return (
        <div className="grid mt-10 lg:mt-20 grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-10">
            {
                loadedData.map(item => <SingleCrafItem key={item._id} item={item}></SingleCrafItem>)
            }
        </div>
    );
};

export default CategoryPage;