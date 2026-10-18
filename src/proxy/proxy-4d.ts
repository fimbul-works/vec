import type { ArrayVector4D } from "../4d/types.js";
import { ProxyArrayVector } from "./proxy-array-vector.js";
import type { ProxyArrayVectorTarget } from "./types.js";

/**
 * A proxy for a 4D array vector.
 */
export class ProxyArrayVector4D extends ProxyArrayVector<ArrayVector4D> {
  /**
   * Creates a new ProxyArrayVector4D.
   * @param target - The target array.
   * @param offset - The offset of the array.
   * @param stride - The stride of the array.
   */
  constructor(target: ProxyArrayVectorTarget, offset: number, stride: number = 0) {
    super(4, target, offset, stride);
  }

  /**
   * Gets the x-component of the vector.
   */
  get 0(): number {
    return this.at(0);
  }

  /**
   * Sets the x-component of the vector.
   */
  set 0(value: number) {
    this.set(0, value);
  }

  /**
   * Gets the y-component of the vector.
   */
  get 1(): number {
    return this.at(1);
  }

  /**
   * Sets the y-component of the vector.
   */
  set 1(value: number) {
    this.set(1, value);
  }

  /**
   * Gets the z-component of the vector.
   */
  get 2(): number {
    return this.at(2);
  }

  /**
   * Sets the z-component of the vector.
   */
  set 2(value: number) {
    this.set(2, value);
  }

  /**
   * Gets the w-component of the vector.
   */
  get 3(): number {
    return this.at(3);
  }

  /**
   * Sets the w-component of the vector.
   */
  set 3(value: number) {
    this.set(3, value);
  }
}
