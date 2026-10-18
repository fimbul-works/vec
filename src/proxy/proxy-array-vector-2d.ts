import type { ArrayVector2D } from "../2d/types.js";
import type { ArrayVector2DShape } from "../types.js";
import { ProxyArrayVector } from "./proxy-array-vector.js";
import type { ProxyArrayVectorTarget } from "./types.js";

/**
 * A proxy for a 2D array vector.
 */
export class ProxyArrayVector2D extends ProxyArrayVector<ArrayVector2D> implements ArrayVector2DShape {
  /**
   * Creates a new ProxyArrayVector2D.
   * @param target - The target array.
   * @param offset - The offset of the array.
   * @param stride - The stride of the array.
   */
  constructor(target: ProxyArrayVectorTarget, offset: number, stride: number = 0) {
    super(2, target, offset, stride);
  }

  /**
   * Returns the length of the array.
   */
  get length(): 2 {
    return 2;
  }

  /**
   * Gets the 1st component of the vector.
   */
  get 0(): number {
    return this.at(0);
  }

  /**
   * Sets the 1stt tcomponent of the vector.
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
}
