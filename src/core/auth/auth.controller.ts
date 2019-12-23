import { Controller, Get, Post, Req, Patch, Param, Delete, Body } from '@nestjs/common';
import { AuthProviderRepository } from '../../repositorties/AuthProviderRepository';
import { UtilsHelpers } from '../../Helpers/UtilsHelpers';
import { Request } from 'express';


@Controller('auth')
export class AuthController {
    constructor(
        private readonly authProviderRepository: AuthProviderRepository,
        private readonly utilsHelpers: UtilsHelpers
    ) { }

    @Post('/email/signup')
    async signUpWithEmail(@Body() body) {
        const { email, password } = body;
        const response = await this.authProviderRepository.firebaseAuth.firebaseEmailAuth.signUp(email, password);
        return response;
    }

    @Post('/email/signin')
    async signInWithEmail(@Body() body) {
        const { email, password } = body;
        const response = await this.authProviderRepository.firebaseAuth.firebaseEmailAuth.login(email, password);
        return response;
    }

    @Get('/google')
    authGoogle() {
        const authenticate = this.utilsHelpers.getPassportjs().getAuthenticate();
        authenticate('google', { scope: ['https://www.googleapis.com/auth/plus.login'] });
    }

  
}
