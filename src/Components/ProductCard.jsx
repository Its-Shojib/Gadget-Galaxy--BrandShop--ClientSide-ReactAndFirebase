import PropTypes from 'prop-types';

const ProductCard = ({ product }) => {
    let { brand, img, name, price, rating, type, } = product;
    return (
        <div>
            <div className="card h-[500px] bg-gray-400">
                <figure className="px-10 pt-10">
                    <img  src={img} alt="Product" className="h-[300px] w-full" />
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
                        <button className="btn btn-primary">Details</button>
                        <button className="btn btn-primary">Update Now!</button>
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