import type { ArrayVector3D } from "../3d/types.js";
import type { ArrayVector3DShape } from "../types.js";
import { ProxyArrayVector } from "./proxy-array-vector.js";
import type { ProxyArrayVectorTarget } from "./types.js";

/**
 * A proxy for a 3D array vector.
 */
export class ProxyArrayVector3D extends ProxyArrayVector<ArrayVector3D> implements ArrayVector3DShape {
  /**
   * Creates a new ProxyArrayVector3D.
   * @param target - The target array.
   * @param offset - The offset of the array.
   * @param stride - The stride of the array.
   */
  constructor(target: ProxyArrayVectorTarget, offset: number, stride: number = 0) {
    super(3, target, offset, stride);
  }

  /**
   * Returns the length of the array.
   */
  get length(): 3 {
    return 3;
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
}
