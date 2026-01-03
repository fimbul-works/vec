import type { ArrayVector4D } from "./types.js";

/**
 * Calculates the Minkowski distance between two 4D vectors.
 * @param {ArrayVector4D} xyzw1 - First vector as `[x, y, z, w]`
 * @param {ArrayVector4D} xyzw2 - Second vector as `[x, y, z, w]`
 * @param {number} p - The order of the Minkowski distance
 * @returns {number} The Minkowski distance
 */
export const distanceMinkowski4D = (xyzw1: ArrayVector4D, xyzw2: ArrayVector4D, p: number): number =>
  (Math.abs(xyzw1[0] - xyzw2[0]) ** p +
    Math.abs(xyzw1[1] - xyzw2[1]) ** p +
    Math.abs(xyzw1[2] - xyzw2[2]) ** p +
    Math.abs(xyzw1[3] - xyzw2[3]) ** p) **
  (1 / p);
