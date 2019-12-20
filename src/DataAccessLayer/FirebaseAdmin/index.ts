import * as admin from 'firebase-admin';
import serviceAccount from './serviceAccountKey.json';




export class FirebaseAdminProvider {

    initialzeApp = () => {
        try {
            console.log('Firebase Admin registed!');
            const accountConfig: any = serviceAccount;
            admin.initializeApp({
                credential: admin.credential.cert(accountConfig)
            });
        } catch (error) {
            console.log(error);
        }
    }
}

