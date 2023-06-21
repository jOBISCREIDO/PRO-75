import firebase from "firebase";
require("@firebase/firestore");

var firebaseConfig = {
    apiKey: "AIzaSyCunGCMIh6McLwjUmM1nsS9IXpyHJKfU10",
    authDomain: "pro-75-7ee29.firebaseapp.com",
    databaseURL: "https://pro-75-7ee29-default-rtdb.firebaseio.com",
    projectId: "pro-75-7ee29",
    storageBucket: "pro-75-7ee29.appspot.com",
    messagingSenderId: "442316912451",
    appId: "1:442316912451:web:bfd683f95127e78d5ca1f6"
};

firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
