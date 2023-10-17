import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";


const Profile = () => {
    let { user } = useContext(AuthContext)
    return (
        <div className="my-10 mb-20 relative md:w-8/12 mx-auto">
            <img className="h-[300px] w-full" src="/cover.jpg" alt="" />
            <div className=" w-5/12 md:w-2/12 mx-auto">
                <img src={user.photoURL} alt="" className="rounded-full w-44 absolute bottom-28" />
            </div>
            <div className="mt-32 text-center">
                <h2 className="text-2xl font-bold">Name: {user.displayName}</h2>
                <p>Email: {user.email}</p>
            </div>

        </div>
    );
};

export default Profile;