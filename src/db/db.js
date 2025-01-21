import { getFirestore } from "firebase/firestore";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
    apiKey: "AIzaSyD773oyox__OZ8d9DWbvhnaormWCUIuRHg",
    authDomain: "ecommerce-1-6c81e.firebaseapp.com",
    projectId: "ecommerce-1-6c81e",
    storageBucket: "ecommerce-1-6c81e.firebasestorage.app",
    messagingSenderId: "236330078336",
    appId: "1:236330078336:web:f050824af3386dfaa6d665",
};

const app = initializeApp(firebaseConfig);

const db = getFirestore();

export default db