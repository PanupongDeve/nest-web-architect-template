import { Injectable } from '@nestjs/common';
import { prisma } from '../../DataAccessLayer/prisma/generated/prisma-client'

@Injectable()
export class CatRepository {
  async getAll(): Promise<any> {
    return await prisma.cats();
  }
}
