import type { ArrayVector4DLike } from "./types.js";

/**
 * Calculates the angle between a 4D vector and the positive x-axis.
 * @param {ArrayVector4DLike} xyzw - Vector as `[x, y, z, w]`
 * @returns {number} The angle in radians
 */
export const angleX4D = (xyzw: ArrayVector4DLike): number =>
  Math.atan2(Math.sqrt(xyzw[1] ** 2 + xyzw[2] ** 2 + xyzw[3] ** 2), xyzw[0]);
