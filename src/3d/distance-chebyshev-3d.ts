import type { ArrayVector3DLike } from "./types.js";

/**
 * Calculates the Chebyshev distance between two 3D vectors.
 * @param {ArrayVector3DLike} xyz1 - First vector as `[x, y, z]` as
 * @param {ArrayVector3DLike} xyz2 - Second vector as `[x, y, z]` as
 * @returns {number} Chebyshev distance
 */
export const distanceChebyshev3D = (xyz1: ArrayVector3DLike, xyz2: ArrayVector3DLike): number => {
  const absX = Math.abs(xyz1[0] - xyz2[0]);
  const absY = Math.abs(xyz1[1] - xyz2[1]);
  const absZ = Math.abs(xyz1[2] - xyz2[2]);
  return absX >= absY && absX >= absZ ? absX : absY >= absZ ? absY : absZ;
};
