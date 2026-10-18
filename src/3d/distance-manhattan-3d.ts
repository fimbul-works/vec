import type { ArrayVector3DLike } from "./types.js";

/**
 * Calculates the Manhattan distance between two 3D vectors.
 * @param {ArrayVector3DLike} xyz1 - First vector as `[x, y, z]`
 * @param {ArrayVector3DLike} xyz2 - Second vector as `[x, y, z]`
 * @returns {number} Manhattan distance
 */
export const distanceManhattan3D = (xyz1: ArrayVector3DLike, xyz2: ArrayVector3DLike): number =>
  Math.abs(xyz1[0] - xyz2[0]) + Math.abs(xyz1[1] - xyz2[1]) + Math.abs(xyz1[2] - xyz2[2]);
