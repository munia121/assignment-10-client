import Swal from "sweetalert2";

const AddCraft = () => {

    const handlerAddCraft = (event) => {
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
        const email = form.email.value;
        const userName = form.userName.value;
        const photo = form.photo.value;

        const newCraft = { name,category, price, ratings, description, customize, processing, stock,email, userName, photo }
        console.log(newCraft)

        // send data to the server

        // fetch('https://coffee-store-server-gamma-nine.vercel.app/coffee', {
        //     method: 'POST',
        //     headers: {
        //         'content-type': 'application/json'
        //     },
        //     body: JSON.stringify(newCoffee)

        // })
        //     .then(res => res.json())
        //     .then(data => {
        //         console.log(data);
        //         if (data.insertedId) {
        //             Swal.fire({
        //                 title: 'Success',
        //                 text: 'User Added Successfully',
        //                 icon: 'success',
        //                 confirmButtonText: 'Ok'
        //             })
        //         }

        //     })
    }



    return (
        <div>
            <div className=" mt-20 p-24">
                <h2 className="text-3xl font-extrabold text-center">Please Add A Craft</h2>

                <form onSubmit={handlerAddCraft}>
                    {/* form name and quanity row */}
                    <div className="md:flex mt-10 gap-16">
                        <div className="md:w-1/2">
                            <label className=" form-control ">
                                <div className="label">
                                    <span className="label-text">Item Name</span>
                                </div>
                                <input type="text" name="name" placeholder="item name" className="input input-bordered w-full " />
                            </label>
                        </div>
                        <div className="md:w-1/2">
                            <label className="form-control w-full ">
                                <div className="label">
                                    <span className="label-text">Subcategory_Name</span>
                                </div>
                                <input type="text" name="category" placeholder="category" className="input input-bordered w-full " />
                            </label>
                        </div>
                    </div>
                    {/* form supplier row */}
                    <div className="md:flex mt-10 gap-16">
                        <div className="md:w-1/2">
                            <label className=" form-control">
                                <div className="label">
                                    <span className="label-text">Price</span>
                                </div>
                                <input type="text" name="price" placeholder="price" className="input input-bordered w-full " />
                            </label>
                        </div>
                        <div className="md:w-1/2">
                            <label className="form-control w-full ">
                                <div className="label">
                                    <span className="label-text">Ratings</span>
                                </div>
                                <input type="text" name="ratings" placeholder="ratings" className="input input-bordered w-full " />
                            </label>
                        </div>
                    </div>
                    {/* form category and details row */}
                    <div className="md:flex mt-10 gap-16">
                        <div className="md:w-1/2">
                            <label className=" form-control ">
                                <div className="label">
                                    <span className="label-text">Short Description</span>
                                </div>
                                <input type="text" name="description" placeholder="description" className="input input-bordered w-full " />
                            </label>
                        </div>
                        <div className="md:w-1/2">
                            <label className="form-control w-full ">
                                <div className="label">
                                    <span className="label-text">Customization</span>
                                </div>
                                <input type="text" name="customize" placeholder="Yes/No" className="input input-bordered w-full " />
                            </label>
                        </div>
                    </div>
                    {/* **************** */}
                    <div className="md:flex mt-10 gap-16">
                        <div className="md:w-1/2">
                            <label className=" form-control ">
                                <div className="label">
                                    <span className="label-text">Processing_time</span>
                                </div>
                                <input type="text" name="processing" placeholder="processing_time" className="input input-bordered w-full " />
                            </label>
                        </div>
                        <div className="md:w-1/2">
                            <label className="form-control w-full ">
                                <div className="label">
                                    <span className="label-text">Stock_Status</span>
                                </div>
                                <input type="text" name="stock" placeholder="stock" className="input input-bordered w-full " />
                            </label>
                        </div>
                    </div>
                    {/* ******************* */}
                    <div className="md:flex mt-10 gap-16">
                        <div className="md:w-1/2">
                            <label className=" form-control ">
                                <div className="label">
                                    <span className="label-text">User Email</span>
                                </div>
                                <input type="text" name="email" placeholder="user email" className="input input-bordered w-full " />
                            </label>
                        </div>
                        <div className="md:w-1/2">
                            <label className="form-control w-full ">
                                <div className="label">
                                    <span className="label-text">User Name</span>
                                </div>
                                <input type="text" name="userName" placeholder="user name" className="input input-bordered w-full " />
                            </label>
                        </div>
                    </div>
                    {/* ***** form photo url */}
                    <div className="w-full mt-8">
                        <label className="form-control w-full ">
                            <div className="label">
                                <span className="label-text">Photo URL</span>
                            </div>
                            <input type="text" name="photo" placeholder="Photo URL" className="input input-bordered w-full " />
                        </label>
                    </div>
                    <input type="submit" value="Add Craft" className="btn btn-block mt-8 bg-black text-white" />
                </form>
            </div>
        </div>
    );
};

export default AddCraft;