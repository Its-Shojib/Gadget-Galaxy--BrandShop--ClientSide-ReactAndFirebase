
import { Link, useNavigate } from "react-router-dom";
import { AiOutlineMail } from 'react-icons/ai';
import { RiLockPasswordFill } from 'react-icons/ri';
import { BsFillPersonFill, BsFillFileImageFill } from 'react-icons/bs';
import { useContext, useState } from "react";
import { FaEyeSlash, FaEye } from 'react-icons/fa';
import Swal from 'sweetalert2';
import { AuthContext } from '../Provider/AuthProvider';


const Register = () => {

    let [showPassword, setShowPassword] = useState(false);
    let { createUser, googleSignIn, githubSignIn } = useContext(AuthContext)

    let navigate = useNavigate()
    let handleCreateUser = (e) => {
        e.preventDefault();
        // let myname = e.target.name.value;
        // let myphoto = e.target.image.value;
        let email = e.target.email.value;
        let password = e.target.password.value;

        if (password.length < 6) {
            Swal.fire('SweetAlert2 is working!')
            return;
        }
        else if (!/[A-Z]/.test(password)) {
            Swal.fire('SweetAlert2 is working!')
            return;
        }
        // eslint-disable-next-line no-useless-escape
        else if (!/.*[!@#$%^&*()_+{}\[\]:;<>,.?~\\-].*/.test(password)) {
            Swal.fire('SweetAlert2 is working!')
            return;
        }


        createUser(email, password)
            .then(result => {
                console.log(result.user);
                Swal.fire('SweetAlert2 is working!')
                e.target.reset();
                navigate('/')
            })
            .catch(error => {
                console.log(error);
                Swal.fire('SweetAlert2 is working!')
            })

        
    }
    let handleGoogleLogin = () => {
        googleSignIn()
            .then(result => {
                console.log(result.user);
                Swal.fire('SweetAlert2 is working!')
                navigate('/')
            })
            .catch(error => {
                console.log(error);
                Swal.fire('SweetAlert2 is working!')
            })

    }
    let handleGithubLogin = () => {
        githubSignIn()
            .then(result => {
                console.log(result.user);
                Swal.fire('SweetAlert2 is working!')
                navigate('/')
            })
            .catch(error => {
                console.log(error);
                Swal.fire('SweetAlert2 is working!')
            })

    }
    return (
        <div className="bg-gradient-to-r from-fuchsia-500 to-violet-500 flex justify-center items-center min-h-[646px]">
            <div className="bg-gray-400 w-8/12 md:w-4/12 text-center p-10 rounded-lg">
                <h2 className="text-3xl font-bold mb-2">Register Now!</h2>
                <form onSubmit={handleCreateUser}>
                    <div className="relative">
                        <p className="text-left text-lg font-semibold">User Name</p>
                        <BsFillPersonFill className="absolute bottom-4 left-2"></BsFillPersonFill>
                        <input className="w-full p-2 pl-7 text-black rounded-lg my-1"
                            type="text"
                            name="name"
                            placeholder="Type your name"

                        />
                    </div>
                    <hr className="my-3" />
                    <div className="relative">
                        <p className="text-left text-lg font-semibold">Image Url</p>
                        <BsFillFileImageFill className="absolute bottom-4 left-2"></BsFillFileImageFill>
                        <input className="w-full p-2 pl-7 text-black rounded-lg my-1"
                            type="text"
                            name="image"
                            placeholder="Paste Image Url"
                        />
                    </div>
                    <hr className="my-3" />
                    <div className="relative">
                        <p className="text-left text-lg font-semibold">User Email</p>
                        <AiOutlineMail className="absolute bottom-4 left-2"></AiOutlineMail>
                        <input className="w-full p-2 pl-7 text-black rounded-lg my-1"
                            type="email"
                            name="email"
                            placeholder="Type your email"
                            required />
                    </div>
                    <hr className="my-3" />
                    <div className="relative">
                        <p className="text-left text-lg font-semibold">Password</p>
                        <RiLockPasswordFill className="absolute bottom-4 left-2"></RiLockPasswordFill>
                        <input className="w-full p-2 pl-6 text-black rounded-lg my-1"
                            type={showPassword ? 'text' : 'password'}
                            name="password"
                            placeholder="Type your password"
                        />
                        <span onClick={() => setShowPassword(!showPassword)} className="absolute right-3 bottom-4">{showPassword ? <FaEyeSlash></FaEyeSlash> : <FaEye></FaEye>}</span>
                    </div>
                    <hr className="my-3" />
                    <button
                        className="bg-gradient-to-r from-violet-500 to-fuchsia-500 w-full py-2 text-white font-semibold text-lg rounded-xl" type="submit">
                        Register</button>

                </form>

                <p className="mt-5">Or Sign up using</p>
                <div className="flex gap-3 justify-center my-3">
                    <img onClick={handleGoogleLogin} className="w-8 cursor-pointer" src="/google.jpg" alt="" />
                    <img onClick={handleGithubLogin} className="w-8 cursor-pointer" src="/GitHub-Mark.png" alt="" />
                </div>
                <div className="flex gap-3 justify-center mt-8">
                    <p>Already have an account?</p>
                    <Link className="underline text-lg text-blue-600" to='/login'>Login now</Link>
                </div>
            </div>
        </div>
    );
};

export default Register;