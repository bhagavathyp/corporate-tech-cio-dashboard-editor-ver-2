import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCnXB5knBGAMOj4FwkzwC50pzXJRdmTAnY",
  authDomain: "cio-dashboard-firestore-v2.firebaseapp.com",
  projectId: "cio-dashboard-firestore-v2",
  storageBucket: "cio-dashboard-firestore-v2.firebasestorage.app",
  messagingSenderId: "947233443677",
  appId: "1:947233443677:web:86150b20c6dec5e12e62b4"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
