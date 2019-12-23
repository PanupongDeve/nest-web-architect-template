import * as firebase from "firebase/app";
import 'firebase/auth';

import { firebaseConfig } from './firebaseConfig';


export class FirebaseProvider {
    private static instance: FirebaseProvider;
    private firebaseApp: firebase.app.App;
    private constructor() { }

    public static getInstance(): FirebaseProvider {
        if (!FirebaseProvider.instance) {
            FirebaseProvider.instance = new FirebaseProvider();
        }

        return FirebaseProvider.instance;
    }

    initializeApp() {
        console.log('Firebase Registered!');
        this.firebaseApp = firebase.initializeApp(firebaseConfig);
    }

    getFirebaseAuth(): firebase.auth.Auth {
        return this.firebaseApp.auth();
    }
}

export { firebase }