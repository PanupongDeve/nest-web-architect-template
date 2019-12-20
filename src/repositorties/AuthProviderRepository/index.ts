import { FirebaseAuth } from './FirebaseAuth';

export class AuthProviderRepository {
    public FirebaseAuth: FirebaseAuth;
    public firebaseAuth: FirebaseAuth;


    constructor() {
        this.firebaseAuth = new FirebaseAuth();
    }

}