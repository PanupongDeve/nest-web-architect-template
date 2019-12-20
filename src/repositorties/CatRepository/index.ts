import { Injectable } from '@nestjs/common';
import { prisma } from '../../DataAccessLayer/prisma/generated/prisma-client'
import { Cat } from './Cat';

@Injectable()
export class CatRepository {
  async getAll(): Promise<Cat[]> {
    return await prisma.cats();
  }

  async create(data: Cat): Promise<Cat> {
      const response: Cat = await prisma.createCat(data);
      return response;
  }

  async edit(id: string, data: Cat): Promise<Cat> {
      const response: Cat = await prisma.updateCat({ data, where: { id }});
      return response;
  }

  async delete(id: string): Promise<Cat> {
      const response: Cat = await prisma.deleteCat({ id });
      return response;
  }

}

export { Cat }
