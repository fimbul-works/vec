import type { ArrayVector3D } from "./types";

/**
 * Calculates the Euclidean distance between two 3D vectors.
 * @param {ArrayVector3D} xyz1 - First vector as `[x, y, z]`
 * @param {ArrayVector3D} xyz2 - Second vector as `[x, y, z]`
 * @returns {number} Euclidian distance
 */
export const distance3D = (xyz1: ArrayVector3D, xyz2: ArrayVector3D): number =>
  Math.sqrt((xyz1[0] - xyz2[0]) ** 2 + (xyz1[1] - xyz2[1]) ** 2 + (xyz1[2] - xyz2[2]) ** 2);
