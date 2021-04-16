import { createContext } from "react";
import app from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import "firebase/storage";
import firebaseConfig from "../../firebase/config";

const FirebaseContext = createContext();

class Firebase {
    constructor() {
        if (!app.apps.length) {
            app.initializeApp(firebaseConfig);
        }
        this.auth = app.auth();
        this.db = app.firestore();
        this.storage = app.storage();
    }

    async login(email, password) {
        return await this.auth.signInWithEmailAndPassword(email, password);
    }
}

const firebase = new Firebase();

export { FirebaseContext };

export default firebase;
