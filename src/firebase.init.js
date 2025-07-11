// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from 'firebase/auth'
// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyB7THEGwbAuMlO8_Lu8ZorJiG5shCx_3eM",
    authDomain: "boxwood-night-461403-u1.firebaseapp.com",
    projectId: "boxwood-night-461403-u1",
    storageBucket: "boxwood-night-461403-u1.firebasestorage.app",
    messagingSenderId: "1045994183933",
    appId: "1:1045994183933:web:6e8ba53c333d86a4fcf294"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);