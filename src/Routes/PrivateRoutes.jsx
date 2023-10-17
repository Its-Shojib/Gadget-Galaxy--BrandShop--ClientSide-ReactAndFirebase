import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import PropTypes from 'prop-types';
import { AuthContext } from "../Provider/AuthProvider";


const PrivateRoute = ({ children }) => {
    let { user, loading } = useContext(AuthContext);
    let location = useLocation();
    if (loading) {
        return <div className="flex justify-center items-center min-h-[600px]">
            <span className="loading loading-spinner loading-lg"></span>
        </div>
    }
    if(user){
        return children;
    }
    return <Navigate state={location.pathname} to='/login'></Navigate>
};
PrivateRoute.propTypes = {
    children: PropTypes.node,
}
export default PrivateRoute;