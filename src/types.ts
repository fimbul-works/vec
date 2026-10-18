import type { ArrayVector2D } from "./2d/types.js";
import type { ArrayVector3D } from "./3d/types.js";
import type { ArrayVector4D } from "./4d/types.js";

/**
 * A vector-like object.
 */
export interface ArrayVectorShape<D extends number> {
  readonly length: D;
  [Symbol.iterator](): ArrayIterator<number>;
}

export interface ArrayVector2DShape extends ArrayVectorShape<2> {
  0: number;
  1: number;
  valueOf(): ArrayVector2D;
}

export interface ArrayVector3DShape extends ArrayVectorShape<3> {
  0: number;
  1: number;
  2: number;
  valueOf(): ArrayVector3D;
}

export interface ArrayVector4DShape extends ArrayVectorShape<4> {
  0: number;
  1: number;
  2: number;
  3: number;
  valueOf(): ArrayVector4D;
}
