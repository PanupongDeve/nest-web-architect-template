import * as firebase from "firebase/app";
import 'firebase/auth';

import { firebaseConfig } from './firebaseConfig';


export class FirebaseProvider {

    initializeApp() {
        console.log('Firebase Registered!');
        firebase.initializeApp(firebaseConfig);
    }
}