import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const ProductCard = ({ product }) => {
    let { brand, img, name, price, rating, type, _id } = product;

    return (
        <div>
            <div className="card h-[500px] bg-gray-400">
                <figure className="px-10 pt-10">
                    <img src={img} alt="Product" className="h-[300px] w-full" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">Name: {name}</h2>
                    <div className="flex gap-3">
                        <p>Brand: {brand}</p>
                        <p>Type: {type}</p>
                    </div>
                    <div className="flex gap-3">
                        <p>Rating: {rating}</p>
                        <p>Price: {price}</p>
                    </div>
                    <div className="card-actions">
                        
                        <Link to={`/productDetails/${_id}`}>
                            <button className="bg-teal-800 text-white px-3 py-2 rounded-md">Details!</button>
                        </Link>
                        <Link to={`/updateProduct/${_id}`}>
                            <button className="bg-sky-800 text-white px-3 py-2 rounded-md">Update Now!</button>
                        </Link>
                        
                    </div>
                </div>
            </div>
        </div>
    );
};
ProductCard.propTypes = {
    product: PropTypes.object,
}
export default ProductCard;