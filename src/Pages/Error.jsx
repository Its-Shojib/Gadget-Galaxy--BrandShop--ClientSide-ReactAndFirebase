import { Link } from "react-router-dom";

const Error = () => {
    return (
        <div className="min-h-screen flex justify-center items-center">
            <div className="space-y-5">
                <img className="w-full md:w-4/6 mx-auto" src="/000-404.png" alt="" />
                <div className="flex justify-center items-center">
                    <Link className="bg-green-500 text-white px-4 py-2 rounded-md" to='/'>Back to Home</Link>
                </div>
            </div>

        </div>
    );
};

export default Error;