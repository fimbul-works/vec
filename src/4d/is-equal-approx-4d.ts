import type { ArrayVector4DLike } from "./types.js";

/**
 * Checks if two 4D vectors are approximately equal within epsilon.
 * @param {ArrayVector4DLike} xyzw1 - First vector as `[x, y, z, w]`
 * @param {ArrayVector4DLike} xyzw2 - Second vector as `[x, y, z, w]`
 * @param {number} epsilon - Maximum difference (default: `Number.EPSILON`)
 * @returns {boolean} `true` if vectors are approximately equal, `false` otherwise
 */
export const isEqualApprox4D = (
  xyzw1: ArrayVector4DLike,
  xyzw2: ArrayVector4DLike,
  epsilon: number = Number.EPSILON,
): boolean =>
  Math.abs(xyzw1[0] - xyzw2[0]) <= epsilon &&
  Math.abs(xyzw1[1] - xyzw2[1]) <= epsilon &&
  Math.abs(xyzw1[2] - xyzw2[2]) <= epsilon &&
  Math.abs(xyzw1[3] - xyzw2[3]) <= epsilon;
