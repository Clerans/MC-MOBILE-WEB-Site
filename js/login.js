// Import the necessary Firebase functions
import { signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.22.2/firebase-auth.js";
import { auth } from './firebase-config.js';

// Get elements from the DOM
const loginForm = document.getElementById('login-form');
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');

// Listen for the form submission
loginForm.addEventListener('submit', async (event) => {
    // Prevent the default form refresh
    event.preventDefault();

    // Get user inputs
    const email = emailInput.value;
    const password = passwordInput.value;

    try {
        // Use Firebase to sign in the user with their email and password
        const userCredential = await signInWithEmailAndPassword(auth, email, password);
        
        // The user has been signed in successfully
        const user = userCredential.user;
        console.log('Successfully logged in!', user);

        // Show a success message and redirect to the homepage
        alert('Welcome back! You have been successfully logged in.');
        window.location.href = 'index.html'; // Redirect to the main homepage

    } catch (error) {
        // Handle any errors that occurred during login
        const errorCode = error.code;
        const errorMessage = error.message;

        console.error('Login Error:', errorCode, errorMessage);
        
        // Display a user-friendly error message
        // Example: if the user is not found or the password is wrong
        alert(`Login failed: ${errorMessage}`);
    }
});
