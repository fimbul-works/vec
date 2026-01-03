import type { ArrayVector4D } from "./types.js";

/**
 * Calculates the Euclidean distance between two 4D vectors.
 * @param {ArrayVector4D} xyzw1 - First vector as `[x, y, z, w]`
 * @param {ArrayVector4D} xyzw2 - Second vector as `[x, y, z, w]`
 * @returns {number} The distance
 */
export const distance4D = (xyzw1: ArrayVector4D, xyzw2: ArrayVector4D): number =>
  Math.sqrt(
    (xyzw1[0] - xyzw2[0]) ** 2 + (xyzw1[1] - xyzw2[1]) ** 2 + (xyzw1[2] - xyzw2[2]) ** 2 + (xyzw1[3] - xyzw2[3]) ** 2,
  );
