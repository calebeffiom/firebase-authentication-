// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js";
import { getAuth, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-auth.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD8Tpm4LcQVzYdH2IONRj93ISZJpF0X6_I",
  authDomain: "authentication-6b1b5.firebaseapp.com",
  databaseURL: "https://authentication-6b1b5-default-rtdb.firebaseio.com",
  projectId: "authentication-6b1b5",
  storageBucket: "authentication-6b1b5.appspot.com",
  messagingSenderId: "575733331809",
  appId: "1:575733331809:web:9a96b631131ccb1fa73720",
  measurementId: "G-XEYFDTJDVN"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);




import {getDatabase, set, get, update, remove, ref, child} from "https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js";


const db = getDatabase();
const auth = getAuth();

let btn1 = document.getElementById("btn");


function allowAccess(){
    let email = document.getElementById("email").value;
let password = document.getElementById("passcode").value;
signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    get(ref(db,"people/" + user.uid)),{
        email: email,
        password: password
    }
    alert("success")
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    alert(errorMessage)
  });
}


  btn1.addEventListener("click", allowAccess);