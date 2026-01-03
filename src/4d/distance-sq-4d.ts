import type { ArrayVector4D } from "./types.js";

/**
 * Calculates the squared Euclidean distance between two 4D vectors.
 * Faster than distance for comparisons.
 * @param {ArrayVector4D} xyzw1 - First vector as `[x, y, z, w]`
 * @param {ArrayVector4D} xyzw2 - Second vector as `[x, y, z, w]`
 * @returns {number} The squared distance
 */
export const distanceSq4D = (xyzw1: ArrayVector4D, xyzw2: ArrayVector4D): number =>
  (xyzw1[0] - xyzw2[0]) ** 2 + (xyzw1[1] - xyzw2[1]) ** 2 + (xyzw1[2] - xyzw2[2]) ** 2 + (xyzw1[3] - xyzw2[3]) ** 2;
