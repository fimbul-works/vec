import type { ArrayVector4D } from "./types.js";

/**
 * Divides two 4D vectors component-wise.
 * @param {ArrayVector4D} xyzw1 - First vector as `[x, y, z, w]`
 * @param {ArrayVector4D} xyzw2 - Second vector as `[x, y, z, w]`
 * @returns {ArrayVector4D} The divided vector
 */
export const divide4D = (xyzw1: ArrayVector4D, xyzw2: ArrayVector4D): ArrayVector4D => [
  xyzw2[0] === 0 ? Number.POSITIVE_INFINITY : xyzw1[0] / xyzw2[0],
  xyzw2[1] === 0 ? Number.POSITIVE_INFINITY : xyzw1[1] / xyzw2[1],
  xyzw2[2] === 0 ? Number.POSITIVE_INFINITY : xyzw1[2] / xyzw2[2],
  xyzw2[3] === 0 ? Number.POSITIVE_INFINITY : xyzw1[3] / xyzw2[3],
];
