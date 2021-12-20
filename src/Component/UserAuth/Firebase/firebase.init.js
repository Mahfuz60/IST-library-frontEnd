import { initializeApp } from "firebase/app";
import firebaseConfig from "./firebase.Config";


const initializationFirebase = () => {
    initializeApp(firebaseConfig)
}

export default initializationFirebase;