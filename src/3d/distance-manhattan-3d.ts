import type { ArrayVector3D } from "./types";

/**
 * Calculates the Manhattan distance between two 3D vectors.
 * @param {ArrayVector3D} xyz1 - First vector as `[x, y, z]`
 * @param {ArrayVector3D} xyz2 - Second vector as `[x, y, z]`
 * @returns {number} Manhattan distance
 */
export const distanceManhattan3D = (xyz1: ArrayVector3D, xyz2: ArrayVector3D): number =>
  Math.abs(xyz1[0] - xyz2[0]) + Math.abs(xyz1[1] - xyz2[1]) + Math.abs(xyz1[2] - xyz2[2]);
