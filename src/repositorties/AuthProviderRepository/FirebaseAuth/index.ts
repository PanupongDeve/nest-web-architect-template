import { FirebaseEmailAuth } from './email';
import { FirebaseFacebookProviderAuth } from './facebook';
import { FirebaseGoogleProviderAuth } from './google';

export class FirebaseAuth {
    public FirebaseEmailAuth: FirebaseEmailAuth;
    public FirebaseFacebookProviderAuth: FirebaseFacebookProviderAuth;
    public FirebaseGoogleProviderAuth: FirebaseGoogleProviderAuth;

    public firebaseEmailAuth: FirebaseEmailAuth;
    public firebaseFacebookProviderAuth: FirebaseFacebookProviderAuth;
    public firebaseGoogleProviderAuth: FirebaseGoogleProviderAuth;


    constructor() {
        this.firebaseEmailAuth = new FirebaseEmailAuth();
        this.firebaseFacebookProviderAuth = new FirebaseFacebookProviderAuth();
        this.firebaseGoogleProviderAuth = new FirebaseGoogleProviderAuth();
    }
}