import type { ArrayVector2D } from "../2d/types.js";
import { ProxyArrayVector } from "./proxy-array-vector.js";
import type { ProxyArrayVectorTarget } from "./types.js";

/**
 * A proxy for a 2D array vector.
 */
export class ProxyArrayVector2D extends ProxyArrayVector<ArrayVector2D> {
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
}
