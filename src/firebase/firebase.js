import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getStorage } from 'firebase/storage';
import { getFirestore } from 'firebase/firestore'; // Import Firestore

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBUd2cCZPdL__evYylzJVL-l7X8CmLgHjY",
  authDomain: "todoapp-chrisrw.firebaseapp.com",
  projectId: "todoapp-chrisrw",
  storageBucket: "todoapp-chrisrw.appspot.com",
  messagingSenderId: "599928806843",
  appId: "1:599928806843:web:2c6031b21c1e2e6468789e",
  measurementId: "G-RHBKKSE1CZ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
const storage = getStorage(app);
const db = getFirestore(app); // Initialize Firestore

export { app, auth, storage, db }; // Export the Firestore instance