import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
const BrandCard = ({ brand }) => {
    let { id, brand_name, img } = brand;
    return (
        <div>
            <Link to={`/${id}`}>
                <div className="card bg-violet-300 h-[400px]">
                    <figure >
                        <img src={img} alt="brands img" className="w-full h-[300px]" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title text-black text-3xl font-lobster">{brand_name}</h2>
                    </div>
                </div>
            </Link>
        </div>
    );
};
BrandCard.propTypes = {
    brand: PropTypes.object,
}
export default BrandCard;