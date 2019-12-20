import { Controller, Get, Post, Req, Patch, Param, Delete } from '@nestjs/common';
import { AuthProviderRepository} from '../../repositorties/AuthProviderRepository';
import { UtilsHelpers } from '../../Helpers/UtilsHelpers';
import { Request } from 'express';

@Controller('auth')
export class AuthController {
    constructor(
        private readonly authProviderRepository: AuthProviderRepository,
        private readonly utilsHelpers: UtilsHelpers
    ) {}

   
}
