import type { ArrayVector4DLike } from "./types.js";

/**
 * Calculates the Manhattan distance between two 4D vectors.
 * @param {ArrayVector4DLike} xyzw1 - First vector as `[x, y, z, w]`
 * @param {ArrayVector4DLike} xyzw2 - Second vector as `[x, y, z, w]`
 * @returns {number} The Manhattan distance
 */
export const distanceManhattan4D = (xyzw1: ArrayVector4DLike, xyzw2: ArrayVector4DLike): number =>
  Math.abs(xyzw1[0] - xyzw2[0]) +
  Math.abs(xyzw1[1] - xyzw2[1]) +
  Math.abs(xyzw1[2] - xyzw2[2]) +
  Math.abs(xyzw1[3] - xyzw2[3]);
