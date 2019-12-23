import { Injectable } from '@nestjs/common';
import { FirebaseAuth } from './FirebaseAuth';

@Injectable()
export class AuthProviderRepository {
    public FirebaseAuth: FirebaseAuth;
    public firebaseAuth: FirebaseAuth;


    constructor() {
        this.firebaseAuth = new FirebaseAuth();
    }

}