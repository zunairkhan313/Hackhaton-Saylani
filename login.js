import { initializeApp } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-app.js";
import { getAuth, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-auth.js";

const firebaseConfig = {
    apiKey: "AIzaSyA5q_F3UUE6re_u3eodMoLqDbwgNnRcF7U",
    authDomain: "project-d6bc6.firebaseapp.com",
    projectId: "project-d6bc6",
    storageBucket: "project-d6bc6.appspot.com",
    messagingSenderId: "195227400536",
    appId: "1:195227400536:web:4fa21fefe9da1bdc964d2d"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

const btn1 = document.getElementById("login2")
btn1.addEventListener('click',()=>{
const email1 = document.getElementById("email").value
const password1 = document.getElementById("password").value
const sign = document.getElementById("sign")    
    signInWithEmailAndPassword(auth, email1, password1)
    .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        console.log(user);
        window.location.href = "./index.html"
        
        // ...
    })
    .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode,errorMessage);
        alert("Wrong Email and password");
        window.location.href = "./signup.html"
    });
})
    