import type { ArrayVector4D } from "./types.js";

/**
 * Multiplies two 4D vectors component-wise.
 * @param {ArrayVector4D} xyzw1 - First vector as `[x, y, z, w]`
 * @param {ArrayVector4D} xyzw2 - Second vector as `[x, y, z, w]`
 * @returns {ArrayVector4D} The multiplied vector
 */
export const multiply4D = (xyzw1: ArrayVector4D, xyzw2: ArrayVector4D): ArrayVector4D => [
  xyzw1[0] * xyzw2[0],
  xyzw1[1] * xyzw2[1],
  xyzw1[2] * xyzw2[2],
  xyzw1[3] * xyzw2[3],
];
