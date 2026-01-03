import type { ArrayVector3D } from "./types.js";

/**
 * Divides one 3D vector with another.
 * @param {ArrayVector3D} xyz1 - First vector as `[x, y, z]`
 * @param {ArrayVector3D} xyz2 - Second vector as `[x, y, z]`
 * @returns {ArrayVector3D} The divided vector
 */
export const divide3D = (xyz1: ArrayVector3D, xyz2: ArrayVector3D): ArrayVector3D => [
  xyz2[0] === 0 ? Number.POSITIVE_INFINITY : xyz1[0] / xyz2[0],
  xyz2[1] === 0 ? Number.POSITIVE_INFINITY : xyz1[1] / xyz2[1],
  xyz2[2] === 0 ? Number.POSITIVE_INFINITY : xyz1[2] / xyz2[2],
];
