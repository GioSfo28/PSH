
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";



const firebaseConfig = {
    apiKey: "AIzaSyCAau7Jbnt8cOMHjuYtaOiEd7Gs5xtdLD8",
    authDomain: "psh-materiale.firebaseapp.com",
    databaseURL: "https://psh-materiale-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "psh-materiale",
    storageBucket: "psh-materiale.appspot.com",
    messagingSenderId: "55872588764",
    appId: "1:55872588764:web:9edeed15d552f30a9d1d19",
    measurementId: "G-2XML9LR2CM"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const database = getAuth(app);
