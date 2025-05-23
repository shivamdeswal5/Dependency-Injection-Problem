import { Controller, Inject } from '@nestjs/common';
import { GetUser } from './getUser.service';
import { User } from './user';

@Controller('user')

//problem

// export class UserController {
    
//   constructor(
//     private readonly getUser: GetUser,
//     private  name: string,
//     private  age: number
//   ) {
//     console.log('UserController constructed:', this.name, this.age);
//     console.log(this.getUser.getUser())
//   }
// }

// solution 1

// export class UserController {
//   constructor(
//     private readonly getUser: GetUser,
//     @Inject('NAME') private  name: string,
//     @Inject('AGE') private  age: number
//   ) {
//     console.log('UserController constructed:', this.name, this.age);
//     console.log(this.getUser.getUser())
//   }
// }

//solution 2
export class UserController {
  constructor(
    private  getUser: GetUser,
    private  name: string,
    private  age: number
  ) {
    console.log(`Name: ${this.name} Age: ${this.age} Users: ${this.getUser.getUser()} `);
  }
}

const getUserInstance = new GetUser();
const c1 = new UserController(getUserInstance, "Deswal", 22);
console.log(c1);