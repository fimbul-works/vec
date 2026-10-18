import type { ArrayVector3D } from "../3d/types.js";
import { ProxyArrayVector } from "./proxy-array-vector.js";
import type { ProxyArrayVectorTarget } from "./types.js";

/**
 * A proxy for a 3D array vector.
 */
export class ProxyArrayVector3D extends ProxyArrayVector<ArrayVector3D> {
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
}
