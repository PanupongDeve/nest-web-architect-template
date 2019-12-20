import { Controller, Get } from '@nestjs/common';
import { CatRepository } from '../../repositorties/CatRepository';
import { UtilsHelpers } from '../../Helpers/UtilsHelpers';

@Controller('cats')
export class CatsController {
    constructor(
        private readonly catRepository: CatRepository,
        private readonly utilsHelpers: UtilsHelpers
    ) {}

    @Get()
    async findAll(): Promise<any> {
        
        return await this.catRepository.getAll();
    }
}
