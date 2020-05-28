
interface IBlock<T> {
  add: (blockType: T) => void;
  remove: (blockType: T) => Block<T>;
}

export class Block<T> implements IBlock<T> {
  add(blockType: T) {}

  remove() {
    return new Block();
  }
}