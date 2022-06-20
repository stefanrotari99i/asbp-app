import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAuNFZI5vXu90Ez3ZpFjW6hReE2HzdbEO8",
  authDomain: "drink-mate.firebaseapp.com",
  databaseURL: "https://drink-mate-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "drink-mate",
  storageBucket: "drink-mate.appspot.com",
  messagingSenderId: "328255996501",
  appId: "1:328255996501:web:7b6a08eb4c1ecce4ec0adc",
  measurementId: "G-CBD5TP42PK"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth();
const db = getFirestore();

export { db, auth};


