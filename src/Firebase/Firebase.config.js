// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAjUEBxQU4i6Hx1FmDIFCIllyxoaWShpvk",
    authDomain: "dental-consultation-cd8c2.firebaseapp.com",
    projectId: "dental-consultation-cd8c2",
    storageBucket: "dental-consultation-cd8c2.appspot.com",
    messagingSenderId: "706408951781",
    appId: "1:706408951781:web:81bc22c94a17114b0dc90c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;