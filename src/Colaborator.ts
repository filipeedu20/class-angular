import { DecoratorUser, User } from "./User";

interface IColaborator {
  invite(user: User): void;
  remove(user: User): void;
}

@DecoratorUser("name nameUser", "email email@user")
export class Colaborator implements IColaborator {
  invite(user: User) {}
  remove(user: User) {}
}
