

import { Module } from '@nestjs/common';
import { UserController } from './user.controller';
import { GetUser } from './getUser.service';
import { TestService } from './test.service';

//problem

// @Module({
//   controllers: [UserController],
//   providers: [GetUser],
// })

//sol 1

// @Module({
//   controllers: [UserController],
//   providers: [
//     GetUser,
//     { provide: 'NAME', useValue: 'Deswal' },
//     { provide: 'AGE', useValue: 22 },
//   ],
// })

// sol 2

// @Module({
//   controllers: [],
//   providers: [
//     GetUser,
//     {
//       provide: UserController,
//       useFactory: (getUser: GetUser) => {
//         const name = 'Deswal';
//         const age = 54;
//         return new UserController(getUser, name, age);
//       },
//       inject: [GetUser],
//     },
//   ],
// })

//simple user.ts
@Module({
  providers: [GetUser, TestService],
})

export class UserModule {}
