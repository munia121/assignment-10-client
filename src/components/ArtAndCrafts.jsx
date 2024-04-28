/* eslint-disable react/prop-types */

import { Link, useParams } from "react-router-dom";



const ArtAndCrafts = ({data}) => {
    const {photo, category} = data;
    const {categorys} = useParams()

    
   
    return (
        <Link to={`/category/${category}`}>
            <div className="mt-20">
               <img className="w-[400px] mx-auto h-[200px] rounded-lg" src={photo} alt="" />
               <p  className="font-bold text-3xl text-center">{category}</p>
            </div>
        </Link>
    );
};

export default ArtAndCrafts;