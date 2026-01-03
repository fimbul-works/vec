import type { ArrayVector4D } from "./types.js";

/**
 * Adds two 4D vectors.
 * @param {ArrayVector4D} xyzw1 - First vector as `[x, y, z, w]`
 * @param {ArrayVector4D} xyzw2 - Second vector as `[x, y, z, w]`
 * @returns {ArrayVector4D} The sum of the vectors
 */
export const add4D = (xyzw1: ArrayVector4D, xyzw2: ArrayVector4D): ArrayVector4D => [
  xyzw1[0] + xyzw2[0],
  xyzw1[1] + xyzw2[1],
  xyzw1[2] + xyzw2[2],
  xyzw1[3] + xyzw2[3],
];
