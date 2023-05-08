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

import firebase from "firebase";

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

const db = firebaseApp.firestore()
const auth = firebaseApp.auth()
const storage = firebaseApp.storage()

export {db, auth, storage}