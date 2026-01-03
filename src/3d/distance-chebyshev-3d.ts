import type { ArrayVector3D } from "./types";

/**
 * Calculates the Chebyshev distance between two 3D vectors.
 * @param {ArrayVector3D} xyz1 - First vector as `[x, y, z]` as
 * @param {ArrayVector3D} xyz2 - Second vector as `[x, y, z]` as
 * @returns {number} Chebyshev distance
 */
export const distanceChebyshev3D = (xyz1: ArrayVector3D, xyz2: ArrayVector3D): number => {
  const absX = Math.abs(xyz1[0] - xyz2[0]);
  const absY = Math.abs(xyz1[1] - xyz2[1]);
  const absZ = Math.abs(xyz1[2] - xyz2[2]);
  return absX >= absY && absX >= absZ ? absX : absY >= absZ ? absY : absZ;
};
