
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBACE_API_KEY,
  authDomain: "tripmate-dcfb2.firebaseapp.com",
  projectId: "tripmate-dcfb2",
  storageBucket: "tripmate-dcfb2.firebasestorage.app",
  messagingSenderId: "513401225626",
  appId: "1:513401225626:web:681cc4c1d538d213a9fa23",
  measurementId: "G-8ETHCZDQM8"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
