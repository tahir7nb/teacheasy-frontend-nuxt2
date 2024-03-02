// plugins/firebase.js

// Import the individual Firebase modules you need
import { initializeApp } from 'firebase/app';
import { getAuth, signInWithPopup } from 'firebase/auth';

const firebaseConfig = {
    // Your Firebase configuration
    apiKey: "AIzaSyBoDWsKS4H1n7p-sZEJzUSYpx05QHQhlLM",
    authDomain: "magic-school-99ef3.firebaseapp.com",
    projectId: "magic-school-99ef3",
    storageBucket: "magic-school-99ef3.appspot.com",
    messagingSenderId: "1047065101146",
    appId: "1:1047065101146:web:8c8ac3e4fd7cbf9da3e963",
    measurementId: "G-KH1G3MCVMM"
};

// Initialize Firebase app
const firebaseApp = initializeApp(firebaseConfig);

// Export the Firebase Authentication instance
export const auth = getAuth(firebaseApp);

// You can export other Firebase services as needed (e.g., Firestore, Storage, etc.)

// export default firebaseApp; // Export the initialized Firebase app if needed
