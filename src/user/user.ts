import { GetUser } from "./getUser.service";

export class User {
  constructor(
    private  getUser: GetUser,
    private  name: string,
    private  age: number
  ) {}

  printInfo() {
    console.log(`Name: ${this.name}, Age: ${this.age}`);
    console.log(this.getUser.getUser());
  }
}
