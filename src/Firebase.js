//responsible for all of our firebase config
// const firebaseConfig = {
//     apiKey: "AIzaSyAGIQChvlp8M-PcgRem1SZIJBmliNTqp_Y",
//     authDomain: "instagram-clone-8990b.firebaseapp.com",
//     databaseURL: "https://instagram-clone-8990b-default-rtdb.firebaseio.com",
//     projectId: "instagram-clone-8990b",
//     storageBucket: "instagram-clone-8990b.appspot.com",
//     messagingSenderId: "596320504399",
//     appId: "1:596320504399:web:f94f02759b741dc4be383a",
//     measurementId: "G-2GTXT2YPZ4"
//   };
// having 2-way sync database (realtime nosql)
// requests and security (config) great with firebase

//import firebase from "firebase";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import "firebase/compat/storage";

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyAGIQChvlp8M-PcgRem1SZIJBmliNTqp_Y",
    authDomain: "instagram-clone-8990b.firebaseapp.com",
    databaseURL: "https://instagram-clone-8990b-default-rtdb.firebaseio.com",
    projectId: "instagram-clone-8990b",
    storageBucket: "instagram-clone-8990b.appspot.com",
    messagingSenderId: "596320504399",
    appId: "1:596320504399:web:f94f02759b741dc4be383a",
    measurementId: "G-2GTXT2YPZ4"
})
// grab three services from firebase and store them in three variables
const db = firebaseApp.firestore() // access the db
const auth = firebaseApp.auth() // access the authentication (log in, log out, create users, etc)
const storage = firebaseApp.storage() // upload pictures and stuff (don't have to worry about S3)

export {db, auth, storage}