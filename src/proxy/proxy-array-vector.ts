import type { ProxyArrayVectorTarget } from "./types.js";

/**
 * A proxy for an array of numbers.
 */
export class ProxyArrayVector<T extends Array<number>> implements Iterable<number> {
  #idx: T;
  #target: ProxyArrayVectorTarget;

  /**
   * Creates a new ProxyArrayVector.
   * @param length - The length of the array.
   * @param target - The target array.
   * @param offset - The offset of the array.
   * @param stride - The stride of the array.
   */
  constructor(length: number, target: ProxyArrayVectorTarget, offset: number, stride: number = 0) {
    if (target.length < offset + 1 + (stride + 1) * (length - 1)) {
      throw new Error("Index out of bounds");
    }
    this.#target = target;
    this.#idx = Array.from({ length }, (_, i) => offset + i * (stride + 1)) as T;
  }

  /**
   * Returns the length of the array.
   */
  get length(): number {
    return this.#idx.length;
  }

  /**
   * Returns the value at the specified index.
   */
  at(index: number): number {
    return this.#target[this.#idx[this.#wrapIndex(index)]];
  }

  /**
   * Sets the value at the specified index.
   */
  protected set(index: number, value: number): void {
    this.#target[this.#idx[this.#wrapIndex(index)]] = value;
  }

  /**
   * Returns an array of key, value pairs for every entry in the array.
   */
  *entries(): ArrayIterator<[number, number]> {
    for (let i = 0; i < this.#idx.length; i++) {
      yield [i, this.#target[this.#idx[i]]];
    }
  }

  /**
   * Returns an list of keys in the array.
   */
  *keys(): ArrayIterator<number> {
    for (let i = 0; i < this.#idx.length; i++) {
      yield i;
    }
  }

  /**
   * Returns an list of values in the array.
   */
  *values(): ArrayIterator<number> {
    for (const idx of this.#idx) {
      yield this.#target[idx];
    }
  }

  /**
   * Returns an iterator for this array.
   */
  [Symbol.iterator](): ArrayIterator<number> {
    return this.values();
  }

  /**
   * Returns the values of the array.
   */
  valueOf(): T {
    return Array.from(this.values()) as T;
  }

  /**
   * Returns a string representation of the array.
   */
  toString(): string {
    return this.valueOf().join(",");
  }

  /**
   * Returns the string tag of the array.
   */
  get [Symbol.toStringTag]() {
    return this.valueOf().join(", ");
  }

  /**
   * Wraps an index to be within the bounds of the array.
   * @param index - The index to wrap.
   * @returns The wrapped index.
   */
  #wrapIndex(index: number): number {
    return index >= 0 && index < this.length
      ? index
      : index < 0
        ? ((index % this.length) + this.length) % this.length
        : index % this.length;
  }
}
