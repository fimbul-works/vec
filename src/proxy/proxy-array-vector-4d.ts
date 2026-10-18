import type { ArrayVector4D } from "../4d/types.js";
import type { ArrayVector4DShape } from "../types.js";
import { ProxyArrayVector } from "./proxy-array-vector.js";
import type { ProxyArrayVectorTarget } from "./types.js";

/**
 * A proxy for a 4D array vector.
 */
export class ProxyArrayVector4D extends ProxyArrayVector<ArrayVector4D> implements ArrayVector4DShape {
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
   * Returns the length of the array.
   */
  get length(): 4 {
    return 4;
  }

  /**
   * Gets the 1st component of the vector.
   */
  get 0(): number {
    return this.at(0);
  }

  /**
   * Sets the 1st component of the vector.
   */
  set 0(value: number) {
    this.set(0, value);
  }

  /**
   * Gets the 2nd component of the vector.
   */
  get 1(): number {
    return this.at(1);
  }

  /**
   * Sets the 2nd component of the vector.
   */
  set 1(value: number) {
    this.set(1, value);
  }

  /**
   * Gets the 3rd component of the vector.
   */
  get 2(): number {
    return this.at(2);
  }

  /**
   * Sets the 3rd component of the vector.
   */
  set 2(value: number) {
    this.set(2, value);
  }

  /**
   * Gets the 4th component of the vector.
   */
  get 3(): number {
    return this.at(3);
  }

  /**
   * Sets the 4th component of the vector.
   */
  set 3(value: number) {
    this.set(3, value);
  }
}
