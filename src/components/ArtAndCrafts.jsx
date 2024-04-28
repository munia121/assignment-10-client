import { useState } from "react";
import { Link, useParams } from "react-router-dom";


const ArtAndCrafts = () => {
   
    const [data, setData] = useState([]);
    console.log(data)

    // useState(() =>{
    //     // fetch(`http://localhost:5000/allCategory  `)
    //     .then(res => res.json())
    //     .then(data =>{
    //         setData(data)
    //     })
    // }, [])



    return (
        <div>
            <div>
                <div className='grid gap-6 grid-cols-4'>
                    <Link to={`category/`}>
                        <img className='w-[400px]' src="https://i.ibb.co/4gXZ0nN/3238745-e940-4.jpg" alt="" />
                        <button>Embroidery </button>
                    </Link>
                    <img className='w-[400px]' src="https://i.ibb.co/4gXZ0nN/3238745-e940-4.jpg" alt="" />
                    <img className='w-[400px]' src="https://i.ibb.co/4gXZ0nN/3238745-e940-4.jpg" alt="" />
                    <img className='w-[400px]' src="https://i.ibb.co/4gXZ0nN/3238745-e940-4.jpg" alt="" />
                </div>
            </div>
        </div>
    );
};

export default ArtAndCrafts;