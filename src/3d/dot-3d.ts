import type { ArrayVector3D } from "./types";

/**
 * Calculates the dot product of two 3D vectors.
 * @param {ArrayVector3D} xyz1 - First vector as `[x, y, z]`
 * @param {ArrayVector3D} xyz2 - Second vector as `[x, y, z]`
 * @returns {number} Dot product
 */
export const dot3D = (xyz1: ArrayVector3D, xyz2: ArrayVector3D): number =>
  xyz1[0] * xyz2[0] + xyz1[1] * xyz2[1] + xyz1[2] * xyz2[2];
