import { initializeApp } from "firebase/app";
import firebaseConfig from "./firebase.Config";

const initAuth = () => {
    initializeApp(firebaseConfig);
}

export default initAuth;