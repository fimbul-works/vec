import type { ArrayVector4D } from "./types.js";

/**
 * Calculates the angle between a 4D vector and the positive w-axis.
 * @param {ArrayVector4D} xyzw - Vector as `[x, y, z, w]`
 * @returns {number} The angle in radians
 */
export const angleW4D = (xyzw: ArrayVector4D): number =>
  Math.atan2(Math.sqrt(xyzw[0] ** 2 + xyzw[1] ** 2 + xyzw[2] ** 2), xyzw[3]);
