import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, signInWithEmailAndPassword , createUserWithEmailAndPassword } from "firebase/auth";


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
  

export default class API{
    constructor(){
    };

    Auth(email,password){
    const app = initializeApp(firebaseConfig);
    const auth = getAuth();
    signInWithEmailAndPassword(auth,email,password)
    .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    // ...
  })
  .catch((error) => {
  });
};



     SIGNUP(email,password){
    const app = initializeApp(firebaseConfig);
    const auth = getAuth();
    signInWithEmailAndPassword(auth,email,password)
    .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;

  })
  .catch((error) => {
  });
};



}
