import type { ArrayVector4DLike } from "./types.js";

/**
 * Calculates the magnitude (length) of a 4D vector.
 * @param {ArrayVector4DLike} xyzw - Vector as `[x, y, z, w]`
 * @returns {number} The magnitude
 */
export const magnitude4D = (xyzw: ArrayVector4DLike): number =>
  Math.sqrt(xyzw[0] ** 2 + xyzw[1] ** 2 + xyzw[2] ** 2 + xyzw[3] ** 2);
