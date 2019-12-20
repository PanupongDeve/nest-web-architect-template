import { Injectable } from '@nestjs/common';

@Injectable()
export class UtilsHelpers {
  sayHelper(): string {
    return `I'm Helper`;
  }
}
