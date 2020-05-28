import { Block } from "./Block";
export class Document<T> extends Block<T> {
  add(blockType: T) {}
  remove() {
    return new Block();
  }
}
