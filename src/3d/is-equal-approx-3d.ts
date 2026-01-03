import type { ArrayVector3D } from "./types";

/**
 * Compares two 3D vectors using an epsilon value for floating-point comparison.
 * @param {ArrayVector3D} xyz1 - First vector as `[x, y, z]`
 * @param {ArrayVector3D} xyz2 - Second vector as `[x, y, z]`
 * @param {number} epsilon - Tolerance for comparison (default: `Number.EPSILON`)
 * @returns {boolean} `true` if the vectors are approximately equal, `false` otherwise
 */
export const isEqualApprox3D = (xyz1: ArrayVector3D, xyz2: ArrayVector3D, epsilon: number = Number.EPSILON): boolean =>
  Math.abs(xyz1[0] - xyz2[0]) <= epsilon &&
  Math.abs(xyz1[1] - xyz2[1]) <= epsilon &&
  Math.abs(xyz1[2] - xyz2[2]) <= epsilon;
