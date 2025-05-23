import { GetUser } from "./getUser.service";
import { User } from "./user";
import { Injectable } from "@nestjs/common";

@Injectable()
export class TestService {
  constructor(private getUser:GetUser) {}

  createUser() {
    const user = new User(this.getUser, 'Deswal', 54);
    user.printInfo();
  }
}
