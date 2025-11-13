// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.22.2/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/9.22.2/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/9.22.2/firebase-firestore.js";

// Your Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCB3VJ0Il5gR9rPcqqE07hqAqZcM6rrp8k",
  authDomain: "mc-mobiles-website.firebaseapp.com",
  projectId: "mc-mobiles-website",
  storageBucket: "mc-mobiles-website.firebasestorage.app", // Corrected based on your screenshot
  messagingSenderId: "599278224401",
  appId: "1:599278224401:web:2173e46576264e8a92ddb0",
  measurementId: "G-2ZM0G2EZM6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize and export Firebase services
export const auth = getAuth(app);
export const db = getFirestore(app);

