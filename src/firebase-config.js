import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCK1U4oBnsMVgaatj-Flza97l1DTeOscAk",
  authDomain: "urban-dealers-ng.firebaseapp.com",
  projectId: "urban-dealers-ng",
  storageBucket: "urban-dealers-ng.appspot.com",
  messagingSenderId: "995326006931",
  appId: "1:995326006931:web:bb980ce8b8a8163e201f66",
  measurementId: "G-PX1PP3C7J2",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
