import passport from 'passport';
import {  OAuth2Strategy as GoogleStrategy } from 'passport-google-oauth';

export class PassportJS {
    private static instance: PassportJS;

    public static getInstance(): PassportJS {
        if (!PassportJS.instance) {
            PassportJS.instance = new PassportJS();
        }

        return PassportJS.instance;
    }

    initialize() {
        console.log('Passport Registered!')
        return passport.initialize();
    }

    session() {
        return passport.session();
    }

    googleConfig() {
        passport.use(new GoogleStrategy({
            clientID: '909177195774-ngpqpq785h1ubimjhogq4a0t7akfj0ie.apps.googleusercontent.com',
            clientSecret: 'OedMh9a_c9vhFVcC4AKrerDk',
            callbackURL: "http://localhost:3001/auth/google/callback"
        }, 
            function(accessToken, refreshToken, profile, done) {
                done({
                    accessToken,
                    refreshToken,
                    profile
                })
           }
        ));
    }

    getAuthenticate() {
        return passport.authenticate;
    }
}


export const passportJS = PassportJS.getInstance();