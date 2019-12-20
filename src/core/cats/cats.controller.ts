import { Controller, Get, Post, Req, Patch, Param, Delete } from '@nestjs/common';
import { CatRepository, Cat } from '../../repositorties/CatRepository';
import { UtilsHelpers } from '../../Helpers/UtilsHelpers';
import { Request } from 'express';

@Controller('cats')
export class CatsController {
    constructor(
        private readonly catRepository: CatRepository,
        private readonly utilsHelpers: UtilsHelpers
    ) {}

    @Get()
    async findAll(): Promise<Cat[]> {
        return await this.catRepository.getAll();
    }

    @Post()
    async create(@Req() req: Request): Promise<Cat> {
        const response = await this.catRepository.create(req.body);
        return response;
    }

    @Patch('/:id')
    async edit(@Req() req: Request, @Param() params): Promise<Cat> {
        const { id } = params;
        const response = await this.catRepository.edit(id, req.body);
        return response;
    }

    @Delete('/:id')
    async delete(@Param() params): Promise<Cat> {
        const { id } = params;
        const response = await this.catRepository.delete(id);
        return response;
    }
}
