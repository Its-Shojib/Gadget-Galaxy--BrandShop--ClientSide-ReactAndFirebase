
import { BiArrowBack } from 'react-icons/bi';
import { Link, useLoaderData, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

const UpdateProduct = () => {

    let navigate = useNavigate()
    let product = useLoaderData();
    let { _id, name, type, price, details, rating, img } = product;

    let handleUpdateProduct = e => {
        e.preventDefault();
        let form = e.target;
        let name = form.name.value;
        let brand = form.brand.value;
        let type = form.type.value;
        let price = form.price.value;
        let details = form.details.value;
        let rating = form.rating.value;
        let img = form.img.value;
        let updatedProduct = { name, brand, type, price, details, rating, img }

        // Send data to server
        fetch(`http://localhost:5000/product/${_id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updatedProduct)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    Swal.fire({
                        title: 'Success!',
                        text: 'Product Updated Successfully',
                        icon: 'success',
                        confirmButtonText: 'Cool'
                    })
                    navigate('/')
                }
            })
    }
    return (
        <div>
            <div className='w-full md:w-8/12 mx-auto px-4'>
                <Link to='/'>
                    <div className='flex items-center gap-3 text-2xl font-lobster'>
                        <BiArrowBack />
                        <p>Back to home</p>
                    </div>
                </Link>
                <div className='bg-[#beb496] space-y-5 my-5 font-lobster py-8'>
                    <div className=' space-y-5'>
                        <h1 className='text-3xl text-center'>Update Product</h1>
                    </div>
                    <div className='px-4 md:px-24'>
                        <form onSubmit={handleUpdateProduct}>
                            <div className='flex flex-col md:flex-row gap-10 mb-5'>
                                <div className='flex-1'>
                                    <p className='text-xl'>Product Name</p>
                                    <input className="w-full p-2" type="text" name="name" id="" defaultValue={name} />
                                </div>
                                <div className='flex-1'>
                                    <p className='text-xl'>Brand Name</p>
                                    <select className='w-full p-2' name="brand" id="">
                                        <option value="apple">Apple</option>
                                        <option value="google">Google</option>
                                        <option value="intel">Intel</option>
                                        <option value="samsung">SamSung</option>
                                        <option value="oneplus">One-Plus</option>
                                        <option value="microsoft">Microsoft</option>
                                    </select>
                                </div>
                            </div>
                            <div className='flex flex-col md:flex-row gap-10 mb-5'>
                                <div className='flex-1'>
                                    <p className='text-xl'>Type</p>
                                    <input className="w-full p-2" type="text" name="type" id="" defaultValue={type} />
                                </div>
                                <div className='flex-1'>
                                    <p className='text-xl'>Price</p>
                                    <input className="w-full p-2" type="text" name="price" id="" defaultValue={price} />
                                </div>
                            </div>
                            <div className='flex flex-col md:flex-row gap-10 mb-5'>
                                <div className='flex-1'>
                                    <p className='text-xl'>Rating</p>
                                    <input className="w-full p-2" type="text" name="rating" id="" defaultValue={rating} />
                                </div>
                                <div className='flex-1'>
                                    <p className='text-xl'>Short Description</p>
                                    <input className="w-full p-2" type="text" name="details" id="" defaultValue={details} />
                                </div>
                            </div>
                            <div className='w-full mb-5'>
                                <p className='text-xl'>Image URL</p>
                                <input className="w-full p-2" type="text" name="img" id="" defaultValue={img} />
                            </div>

                            <button className='w-full text-center text-white bg-[#0e0d0d] py-2 text-2xl mb-5' type="submit">Update Product</button>

                        </form>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default UpdateProduct;