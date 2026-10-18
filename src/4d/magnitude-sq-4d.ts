import type { ArrayVector4DLike } from "./types.js";

/**
 * Calculates the squared magnitude of a 4D vector.
 * Faster than magnitude for comparisons.
 * @param {ArrayVector4DLike} xyzw - Vector as `[x, y, z, w]`
 * @returns {number} The squared magnitude
 */
export const magnitudeSq4D = (xyzw: ArrayVector4DLike): number =>
  xyzw[0] ** 2 + xyzw[1] ** 2 + xyzw[2] ** 2 + xyzw[3] ** 2;
