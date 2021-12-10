import { initializeApp } from "firebase/app";
import FirebaseConfig from "./Firebase.config";

const initAuth = () => {
    initializeApp(FirebaseConfig);
}

export default initAuth;