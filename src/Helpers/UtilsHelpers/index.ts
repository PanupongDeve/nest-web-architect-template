import { Injectable } from '@nestjs/common';
import { passportJS, PassportJS } from '../../DataAccessLayer/Passport';
@Injectable()
export class UtilsHelpers {
  sayHelper(): string {
    return `I'm Helper`;
  }

  getPassportjs(): PassportJS {
    return passportJS;
  }
}

