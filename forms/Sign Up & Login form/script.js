// Import Firebase SDK
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.2.0/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, sendPasswordResetEmail } from "https://www.gstatic.com/firebasejs/11.2.0/firebase-auth.js";

// Your Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBHMynCLkdrg-a4r8pHg8dr59sYsEq54Mk",
    authDomain: "house-price-prediction-7ca89.firebaseapp.com",
    projectId: "house-price-prediction-7ca89",
    storageBucket: "house-price-prediction-7ca89.appspot.com",
    messagingSenderId: "898100168116",
    appId: "1:898100168116:web:856b8f7869b4cdfaf75ee1",
    measurementId: "G-56239BRPSZ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// Get elements
const signupBtn = document.getElementById("signupBtn");
const signinBtn = document.getElementById("signinBtn");
const resetPasswordLink = document.getElementById("resetPassword");
const nameField = document.getElementById("nameField");
const title = document.getElementById("title");

// Toggle between Sign In and Sign Up
signinBtn.onclick = () => {
    toggleForm("Sign In", "0", true, false);
};

signupBtn.onclick = () => {
    toggleForm("Sign Up", "60px", false, true);
};

function toggleForm(titleText, nameFieldHeight, signupDisabled, signinDisabled) {
    nameField.style.maxHeight = nameFieldHeight;
    title.innerHTML = titleText;

    signupBtn.classList.toggle("disable", signupDisabled);
    signinBtn.classList.toggle("disable", signinDisabled);
}

// Sign Up Function (Redirects to Sign In Page)
signupBtn.addEventListener("click", () => {
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    if (!email || !password || !name) {
        alert("Please fill in all fields");
        return;
    }

    createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            alert("User registered successfully! Please sign in.");
            window.location.reload(); // Refresh the page to show Sign In form
        })
        .catch((error) => {
            alert(error.message);
        });
});

// Sign In Function (Redirects to Dashboard)
signinBtn.addEventListener("click", () => {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    if (!email || !password) {
        alert("Please enter email and password");
        return;
    }

    signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            alert("Login successful!");
            window.location.href = "../Dashboard/index.html"; // Redirect to Dashboard
        })
        .catch((error) => {
            alert(error.message);
        });
});

// Password Reset Function
resetPasswordLink.addEventListener("click", () => {
    const email = document.getElementById("email").value;
    if (!email) {
        alert("Please enter your email to reset password");
        return;
    }

    sendPasswordResetEmail(auth, email)
        .then(() => {
            alert("Password reset email sent!");
        })
        .catch((error) => {
            alert(error.message);
        });
});













// // Get elements
// const signupBtn = document.getElementById("signupBtn");
// const signinBtn = document.getElementById("signinBtn");
// const nameField = document.getElementById("nameField");
// const title = document.getElementById("title");

// // Sign In Button Click Event
// signinBtn.onclick = () => {
//     toggleForm("Sign In", "0", true, false);
// };

// // Sign Up Button Click Event
// signupBtn.onclick = () => {
//     toggleForm("Sign Up", "60px", false, true);
// };

// // Function to Toggle Form
// function toggleForm(titleText, nameFieldHeight, signupDisabled, signinDisabled) {
//     nameField.style.maxHeight = nameFieldHeight;
//     title.innerHTML = titleText;

//     // Toggle button disable classes
//     signupBtn.classList.toggle("disable", signupDisabled);
//     signinBtn.classList.toggle("disable", signinDisabled);

//     // Toggle nested <a> disable classes
//     signupBtn.querySelector('a').classList.toggle("disable", signupDisabled);
//     signinBtn.querySelector('a').classList.toggle("disable", signinDisabled);
// }
