import { createContext, useEffect, useState } from "react";
import PropTypes from 'prop-types';
import auth from "../Firebase/Firebase.config";
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut, GoogleAuthProvider, signInWithPopup, GithubAuthProvider  } from 'firebase/auth'

export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
    let [user, setUser] = useState(null);
    let [loading,setLoading] = useState(true);
    
    let googleProvider = new GoogleAuthProvider();
    let githubProvider = new GithubAuthProvider();


    let createUser = (email,password) =>{
        setLoading(true);
        return createUserWithEmailAndPassword(auth,email,password);
    }
    let SignInUser = (email,password) =>{
        setLoading(true);
        return signInWithEmailAndPassword(auth,email,password);
    }
    let Logout = ()=>{
        setLoading(true);
        return signOut(auth);
    }
    let googleSignIn = () =>{
        setLoading(true);
        return signInWithPopup(auth,googleProvider);
    }
    let githubSignIn = () =>{
        setLoading(true);

        return signInWithPopup(auth,githubProvider);
    }

    useEffect(()=>{
        let unSubscribe = onAuthStateChanged(auth,currentUser =>{
            setLoading(false);
            console.log('observing', currentUser)
            setUser(currentUser);
        })
        return () =>{
            unSubscribe();
        } 
    },[])


        let authInfo = {
            user,
            createUser,
            SignInUser,
            Logout,
            googleSignIn,
            githubSignIn,
            loading
        }
    return (
        <AuthContext.Provider value={authInfo}>
                {children}
        </AuthContext.Provider>
    );

};
AuthProvider.propTypes = {
    children: PropTypes.node,
}
export default AuthProvider;