import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

const CardDetails = () => {
    // eslint-disable-next-line no-unused-vars
    const { id } = useParams()

    const [item, setItem] = useState({})
    console.log(item)


    useEffect(() => {

        fetch(`http://localhost:5000/textileArt/${id}`)
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setItem(data)
            })
    }, [id]);

    return (
        <div className="hero mt-20 lg:p-20 rounded-lg bg-gradient-to-r from-[#f5d3d0] to-[#f29c94]">
            <div className="hero-content flex-col lg:flex-row">
                <img src={item.photo} className="lg:w-[600px] lg:h-[500px] rounded-lg shadow-2xl" />
                <div>
                    <h1 className="text-3xl font-bold">{item.name}</h1>
                    <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    <hr />
                    <div>
                        <div className="overflow-x-auto">
                            <table className="table">
                                {/* head */}
                                
                                <tbody>
                                    
                                    {/* row 2 */}
                                    <tr className="hover">
                                        <td>Price: </td>
                                        <td>{item.price}</td>
                                    </tr>
                                    {/* row 3 */}
                                    <tr>
                                        <td>Ratings:</td>
                                        <td>{item.ratings}</td>
                                    </tr>
                                    <tr>
                                        <td>Processing_Time:</td>
                                        <td>{item.processing}</td>
                                    </tr>
                                    <tr>
                                        <td>Stock_Status:</td>
                                        <td>{item.stock}</td>
                                    </tr>
                                </tbody>
                            </table>
                            <hr />
                        </div>
                    </div>
                    <div className="overflow-x-auto">
                            <table className="table">
                                {/* head */}
                                
                                <tbody>
                                    
                                    {/* row 2 */}
                                    <tr className="hover">
                                        <td>Email: </td>
                                        <td>{item.email}</td>
                                    </tr>
                                    <tr className="hover">
                                        <td>User Name: </td>
                                        <td>{item.userName}</td>
                                    </tr>
                                   
                                    
                                </tbody>
                            </table>
                        </div>
                    <Link to={'/'}><button className="btn mt-4 bg-gradient-to-r from-[#f5d3d0] to-[#f29c94]">Go to Home</button></Link>
                </div>
            </div>
        </div>
    );
};

export default CardDetails;