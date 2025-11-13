// Import the necessary Firebase functions
import { createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.22.2/firebase-auth.js";
import { auth } from './firebase-config.js';

// Get elements from the DOM
const registerForm = document.getElementById('register-form');
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');
const fullnameInput = document.getElementById('fullname');

// Listen for the form submission
registerForm.addEventListener('submit', async (event) => {
    // Prevent the default form refresh
    event.preventDefault();

    // Get user inputs
    const email = emailInput.value;
    const password = passwordInput.value;
    const fullname = fullnameInput.value; // We get the full name, but don't use it for auth

    try {
        // Use Firebase to create a new user with email and password
        const userCredential = await createUserWithEmailAndPassword(auth, email, password);
        
        // The user has been created successfully
        const user = userCredential.user;
        console.log('Successfully registered!', user);

        // You can add logic here to save the fullname to your database (Firestore) if needed

        // Show a success message and redirect to the login page
        alert(`Welcome, ${fullname}! Your account has been created successfully. Please log in.`);
        window.location.href = 'login.html';

    } catch (error) {
        // Handle any errors that occurred during registration
        const errorCode = error.code;
        const errorMessage = error.message;

        console.error('Registration Error:', errorCode, errorMessage);
        
        // Display a user-friendly error message
        alert(`Error: ${errorMessage}`);
    }
});
