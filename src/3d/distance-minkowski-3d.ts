import type { ArrayVector3D } from "./types";

/**
 * Calculates the Minkowski distance between two 3D vectors.
 * @param {ArrayVector3D} xyz1 - First vector as `[x, y, z]`
 * @param {ArrayVector3D} xyz2 - Second vector as `[x, y, z]`
 * @param {number} p - Order of the Minkowski distance
 * @returns {number} Minkowski distance
 */
export const distanceMinkowski3D = (xyz1: ArrayVector3D, xyz2: ArrayVector3D, p: number): number =>
  (Math.abs(xyz1[0] - xyz2[0]) ** p + Math.abs(xyz1[1] - xyz2[1]) ** p + Math.abs(xyz1[2] - xyz2[2]) ** p) ** (1 / p);
