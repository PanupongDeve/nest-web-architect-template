import { Module } from '@nestjs/common';
import { CatsController } from './cats.controller';
import { CatRepository } from '../../repositorties/CatRepository';
import { UtilsHelpers } from '../../Helpers/UtilsHelpers';

@Module({
    controllers: [CatsController],
    providers: [CatRepository, UtilsHelpers],
})
export class CatsModule {}
