import { Block } from "./Block";

export class List<T> extends Block<T> {
  add(blockType: T) {}
  remove() {
    return new Block();
  }
}
