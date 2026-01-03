import type { ArrayVector4D } from "./types.js";

/**
 * Calculates the angle between a 4D vector and the positive z-axis.
 * @param {ArrayVector4D} xyzw - Vector as `[x, y, z, w]`
 * @returns {number} The angle in radians
 */
export const angleZ4D = (xyzw: ArrayVector4D): number =>
  Math.atan2(Math.sqrt(xyzw[3] ** 2 + xyzw[0] ** 2 + xyzw[1] ** 2), xyzw[2]);
