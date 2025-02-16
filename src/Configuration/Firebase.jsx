/** @format */

// Import the functions you need    from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage'; // Import Firebase Storage
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCAqX2azcDZkGdm4u3_uFpSeCvLfAqrpJM",
  authDomain: "jp-lms0.firebaseapp.com",
  projectId: "jp-lms0",
  storageBucket: "jp-lms0.firebasestorage.app",
  messagingSenderId: "76973343532",
  appId: "1:76973343532:web:9436c988fece77122d6289",
  measurementId: "G-GW7Z9M1HVV"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);

// Initialize Cloud Firestore and get a reference to the service
const database = getFirestore(app);

// Initialize Firebase Storage
const storage = getStorage(app);

export { auth, database, storage };
