import { initializeApp } from "https://www.gstatic.com/firebasejs/11.2.0/firebase-app.js";
import {
    getAuth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
} from "https://www.gstatic.com/firebasejs/11.2.0/firebase-auth.js";

// Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDe5oyDTNvyj8uABVRIrd3u7m7fu-7dJRA",
    authDomain: "uniskills-d07fc.firebaseapp.com",
    projectId: "uniskills-d07fc",
    storageBucket: "uniskills-d07fc.appspot.com",
    messagingSenderId: "375691507795",
    appId: "1:375691507795:web:ac16ec1f9589cf22592ea6",
    measurementId: "G-5T64DBXTR7",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// Sign-up event listener
document.getElementById("signup").addEventListener("submit", function (event) {
    event.preventDefault();

    // Get input values
    const email = document.getElementById("signup-email").value;
    const password = document.getElementById("signup-password").value;
    const confirmPassword = document.getElementById("confirm-password").value;

    // Check if passwords match
    if (password !== confirmPassword) {
        alert("Passwords do not match!");
        return;
    }

    // Create user
    createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            alert("Account created successfully!");
            console.log("User:", userCredential.user);
            // Optionally, redirect the user to another page
        })
        .catch((error) => {
            alert(error.message);
        });
});

// Login event listener
document.getElementById("login").addEventListener("submit", function (event) {
    event.preventDefault();

    // Get input values
    const email = document.getElementById("login-email").value;
    const password = document.getElementById("login-password").value;

    // Sign in user
    signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            alert("Logged in successfully!");
            console.log("User:", userCredential.user);
            // Optionally, redirect the user to another page
        })
        .catch((error) => {
            alert(error.message);
        });
});