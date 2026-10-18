import type { ArrayVector4D, ArrayVector4DLike } from "./types.js";

/**
 * Subtracts two 4D vectors.
 * @param {ArrayVector4DLike} xyzw1 - First vector as `[x, y, z, w]`
 * @param {ArrayVector4DLike} xyzw2 - Second vector as `[x, y, z, w]`
 * @returns {ArrayVector4D} The difference of the vectors
 */
export const subtract4D = (xyzw1: ArrayVector4DLike, xyzw2: ArrayVector4DLike): ArrayVector4D => [
  xyzw1[0] - xyzw2[0],
  xyzw1[1] - xyzw2[1],
  xyzw1[2] - xyzw2[2],
  xyzw1[3] - xyzw2[3],
];
