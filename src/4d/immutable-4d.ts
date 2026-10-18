import type { ArrayVector4D, ArrayVector4DLike } from "./types.js";

/**
 * Create an immutable 4D vector.
 * @param {ArrayVector4DLike} xyzw - Vector as `[x, y, z, w]`
 * @returns {Readonly<ArrayVector4D>} The immutable vector
 */
export const immutable4D = (xyzw: ArrayVector4DLike): Readonly<ArrayVector4D> =>
  Object.freeze([xyzw[0], xyzw[1], xyzw[2], xyzw[3]]);
