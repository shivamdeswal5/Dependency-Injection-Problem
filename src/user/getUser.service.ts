import { Injectable } from '@nestjs/common';

@Injectable()
export class GetUser{
  getUser() {
    return 'User 1 User 2 User 3';
  }
}
