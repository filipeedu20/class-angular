import { DecoratorUser, User } from "./User";

interface IAdmin {
  invite(user: User): void;
  remove(user: User): void;
}

@DecoratorUser("name nameUser", "email email@user")
class Admin implements IAdmin {
  invite(user: User) {}
  remove(user: User) {}
}
