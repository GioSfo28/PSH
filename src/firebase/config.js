
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getStorage } from "firebase/storage";
import { getAuth } from "firebase/auth";


const firebaseConfig = {
    apiKey: "AIzaSyDzscQe4-dgOg1aXwYztYItrsDABgrB79E",
    authDomain: "incontri-cristiani.firebaseapp.com",
    databaseURL: "https://incontri-cristiani-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "incontri-cristiani",
    storageBucket: "incontri-cristiani.appspot.com",
    messagingSenderId: "562629120220",
    appId: "1:562629120220:web:a2fcdfbe7f8dbb5809a419",
    measurementId: "G-0ZPC2BQFEN"
};


// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const storage = getStorage(app);
