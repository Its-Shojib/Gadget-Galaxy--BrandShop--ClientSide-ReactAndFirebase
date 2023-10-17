// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD-ISJlbRsCLX7kK6i0oigvBeIyKX2g3SY",
  authDomain: "gadget-galaxy-8b55a.firebaseapp.com",
  projectId: "gadget-galaxy-8b55a",
  storageBucket: "gadget-galaxy-8b55a.appspot.com",
  messagingSenderId: "198361532588",
  appId: "1:198361532588:web:ec0f77eab92b518f9cb709"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;