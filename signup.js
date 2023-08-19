import { initializeApp } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-auth.js";
import {getFirestore,collection, addDoc } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-firestore.js";


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
const db = getFirestore(app);


const btn = document.getElementById("signup")
btn.addEventListener('click',async()=>{

  const email = document.getElementById("email").value
  const password = document.getElementById("password").value
    createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        console.log(user);
         window.location.href = "./login.html"
      })
      .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          // ..
          console.log(errorCode);
          console.log(errorMessage);
      });




      const fName = document.getElementById("first-name").value;
      const lname = document.getElementById("last-name").value;
      const useremail = document.getElementById("email").value;
      const userPass = document.getElementById("password").value;
      const conPass = document.getElementById("confirm-password").value;
 
      try {
         const docRef = await addDoc(collection(db, "zunair"), {
        firstName : fName,
        LastName : lname,
        UserEmail : useremail,
        UserPass : userPass,
        ConPass : conPass
         });
         console.log("Document written with ID: ", docRef.id);
       } catch (e) {
         console.error("Error adding document: ", e);
       }
  })