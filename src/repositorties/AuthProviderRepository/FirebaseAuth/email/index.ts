import { FirebaseProvider, firebase } from '../../../../DataAccessLayer/Firebase';


export class FirebaseEmailAuth {

    async signUp(email: string, password: string): Promise<firebase.auth.UserCredential> {
        try {
            const firebaseAuth: firebase.auth.Auth = FirebaseProvider.getInstance().getFirebaseAuth();
            return await firebaseAuth.createUserWithEmailAndPassword(email, password);
        } catch (error) {
            console.log(error);
            return error;
        }
       
    }

    async login(email: string, password: string) {
        try {
            const firebaseAuth: firebase.auth.Auth = FirebaseProvider.getInstance().getFirebaseAuth();
            return await firebaseAuth.signInWithEmailAndPassword(email, password);
        } catch (error) {
            console.log(error);
            return error;
        }
    }

    me() {

    }


    verifyToken() {

    }
}


