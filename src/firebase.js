import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "",
  authDomain: "first-app-3c6f6.firebaseapp.com",
  projectId: "first-app-3c6f6",
  storageBucket: "first-app-3c6f6.firebasestorage.app",
  messagingSenderId: "821811516456",
  appId: "1:821811516456:web:9dfc8e9a13ec951251111d",
  measurementId: "G-GY1TJ443YH",
  databaseURL: "https://first-app-3c6f6-default-rtdb.firebaseio.com"
};

export const appFirebase = initializeApp(firebaseConfig);