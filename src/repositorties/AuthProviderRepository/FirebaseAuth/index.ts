import { FirebaseEmailAuth } from './email';

export class FirebaseAuth {
    public firebaseEmailAuth: FirebaseEmailAuth;


    constructor() {
        this.firebaseEmailAuth = new FirebaseEmailAuth();

    }
}