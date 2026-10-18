import type { ArrayVector3D, ArrayVector3DLike } from "./types.js";

/**
 * Performs linear interpolation between two vectors.
 * @param {ArrayVector3DLike} xyz1 - First vector as `[x, y, z]`
 * @param {ArrayVector3DLike} xyz2 - Second vector as `[x, y, z]`
 * @param {number} t - Interpolation parameter
 * @returns {ArrayVector3D} The interpolated vector
 */
export const lerp3D = (xyz1: ArrayVector3DLike, xyz2: ArrayVector3DLike, t: number): ArrayVector3D => [
  xyz1[0] + (xyz2[0] - xyz1[0]) * t,
  xyz1[1] + (xyz2[1] - xyz1[1]) * t,
  xyz1[2] + (xyz2[2] - xyz1[2]) * t,
];
