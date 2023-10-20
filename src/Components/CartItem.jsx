import PropTypes from 'prop-types';
import { AiFillDelete } from 'react-icons/ai';

import Swal from 'sweetalert2';

const CartItem = ({ cartItem, myCart, setMyCart }) => {
    let { _id, name, brand, price, img } = cartItem;

    let handleDelete = (_id) => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`https://brand-shop-server-8efm9746y.vercel.app/cart/${_id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount > 0) {
                            Swal.fire(
                                'Deleted!',
                                'Your Product has been deleted from Cart.',
                                'success'
                            )
                            let remaining = myCart.filter(cart => cart._id != _id)
                            setMyCart(remaining);
                        }
                    })
            }
        })
    }
    return (
        <div className="card bg-gray-500 max-h-[400px]">
            <figure className="px-5 pt-5">
                <img src={img} alt="product" className="rounded-xl h-52" />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title">Name: {name}</h2>
                <div className='flex items-center gap-10'>
                    <p>Brand: {brand}</p>
                    <p>Price: {price}</p>
                </div>
                <div className="card-actions mt-3">
                    <button onClick={() => handleDelete(_id)} className="mx-auto block px-4 py-2 text-white rounded-md bg-red-500 text-xl">Delete <AiFillDelete className='inline' /></button>
                </div>
            </div>
        </div>
    );
};
CartItem.propTypes = {
    cartItem: PropTypes.object,
    setMyCart: PropTypes.func,
    myCart: PropTypes.array,
}
export default CartItem;