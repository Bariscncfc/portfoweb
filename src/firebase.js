import { initializeApp } from "firebase/app"
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
    apiKey: "AIzaSyAB_2L_e5eumUYhcvKQjpeg8TBNWyJqSng",
    authDomain: "portfoweb.firebaseapp.com",
    projectId: "portfoweb",
    storageBucket: "portfoweb.appspot.com",
    messagingSenderId: "103561783165",
    appId: "1:103561783165:web:e9fc8c92402e9a3c2dce14",
    measurementId: "G-DFSGBXB1BL"
};

const app = initializeApp(firebaseConfig)
const db = getFirestore(app)
export {db}