import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";


const UpdatePage = () => {

    const data = useLoaderData()
    const {_id, name,category, photo, price, ratings, description, stock, processing, customize } = data
    console.log(data)

    const handlerUpdateCraft = (event) => {
        event.preventDefault()
        const form = event.target;

        const name = form.name.value;
        const category = form.category.value;
        const price = form.price.value;
        const ratings = form.ratings.value;
        const description = form.description.value;
        const customize = form.customize.value;
        const processing = form.processing.value;
        const stock = form.stock.value;
        const photo = form.photo.value;

        const updateCraft = { name, category, price, ratings, description, customize, processing, stock, photo }
        console.log(updateCraft)

        // send data to the server

        fetch(`https://assignment-10-server-mu-liart.vercel.app/textileArt/${_id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updateCraft)

        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.modifiedCount) {
                    form.reset()
                    Swal.fire({
                        title: 'Success',
                        text: 'Data Added Successfully',
                        icon: 'success',
                        confirmButtonText: 'Ok'
                    })
                }

            })
    }



    return (
        <div>
            <div className=" mt-20 p-2 lg:p-24">
                <h2 className="text-3xl font-extrabold text-center text-[#f29c94]">Update Your Craft</h2>

                <form  onSubmit={handlerUpdateCraft} className="border rounded-lg border-y-4 border-x-4 mt-10  border-[#f29c94] p-10">
                    {/* form name and quanity row */}
                    <div className="md:flex mt-10 gap-16">
                        <div className="md:w-1/2">
                            <label className=" form-control ">
                                <div className="label">
                                    <span className="label-text font-bold text-[#f29c94] text-lg">Item Name</span>
                                </div>
                                <input type="text" name="name" placeholder="item name" defaultValue={name} className="input input-bordered w-full " />
                            </label>
                        </div>
                        <div className="md:w-1/2">
                            <label className="form-control w-full ">
                                <div className="label">
                                    <span className="label-text font-bold text-[#f29c94] text-lg">Subcategory_Name</span>
                                </div>
                                <input type="text" name="category" defaultValue={category} placeholder="category" className="input input-bordered w-full " />
                            </label>
                        </div>
                    </div>
                    {/* form supplier row */}
                    <div className="md:flex mt-10 gap-16">
                        <div className="md:w-1/2">
                            <label className=" form-control">
                                <div className="label">
                                    <span className="label-text font-bold text-[#f29c94] text-lg">Price</span>
                                </div>
                                <input type="text" name="price" defaultValue={price} placeholder="price" className="input input-bordered w-full " />
                            </label>
                        </div>
                        <div className="md:w-1/2">
                            <label className="form-control w-full ">
                                <div className="label">
                                    <span className="label-text font-bold text-[#f29c94] text-lg">Ratings</span>
                                </div>
                                <input type="text" name="ratings" defaultValue={ratings} placeholder="ratings" className="input input-bordered w-full " />
                            </label>
                        </div>
                    </div>
                    {/* form category and details row */}
                    <div className="md:flex mt-10 gap-16">
                        <div className="md:w-1/2">
                            <label className=" form-control ">
                                <div className="label">
                                    <span className="label-text font-bold text-[#f29c94] text-lg">Short Description</span>
                                </div>
                                <input type="text" name="description" defaultValue={description} placeholder="description" className="input input-bordered w-full " />
                            </label>
                        </div>
                        <div className="md:w-1/2">
                            <label className="form-control w-full ">
                                <div className="label">
                                    <span className="label-text font-bold text-[#f29c94] text-lg">Customization</span>
                                </div>
                                <input type="text" name="customize" defaultValue={customize} placeholder="Yes/No" className="input input-bordered w-full " />
                            </label>
                        </div>
                    </div>
                    {/* **************** */}
                    <div className="md:flex mt-10 gap-16">
                        <div className="md:w-1/2">
                            <label className=" form-control ">
                                <div className="label">
                                    <span className="label-text font-bold text-[#f29c94] text-lg">Processing_time</span>
                                </div>
                                <input type="text" name="processing" defaultValue={processing} placeholder="processing_time" className="input input-bordered w-full " />
                            </label>
                        </div>
                        <div className="md:w-1/2">
                            <label className="form-control w-full ">
                                <div className="label">
                                    <span className="label-text font-bold text-[#f29c94] text-lg">Stock_Status</span>
                                </div>
                                <input type="text" name="stock" defaultValue={stock} placeholder="stock" className="input input-bordered w-full " />
                            </label>
                        </div>
                    </div>
                    {/* ******************* */}
                    
                    
                    {/* ***** form photo url */}
                    <div className="w-full mt-8">
                        <label className="form-control w-full ">
                            <div className="label">
                                <span className="label-text font-bold text-[#f29c94] text-lg">Photo URL</span>
                            </div>
                            <input type="text" name="photo" defaultValue={photo} placeholder="Photo URL" className="input input-bordered w-full " />
                        </label>
                    </div>
                    <input type="submit" value="Update Craft" className="btn btn-block mt-8 bg-[#f29c94] text-white" />
                </form>
            </div>
        </div>
    );
};

export default UpdatePage;