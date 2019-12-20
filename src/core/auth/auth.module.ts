import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthProviderRepository } from '../../repositorties/AuthProviderRepository';
import { UtilsHelpers } from '../../Helpers/UtilsHelpers';

@Module({
    controllers: [AuthController],
    providers: [AuthProviderRepository, UtilsHelpers],
})
export class AuthModule {}
