import type { ArrayVector3DLike } from "./types.js";

/**
 * Checks if two 3D vectors are opposite.
 * @param {ArrayVector3DLike} xyz1 - First vector as `[x, y, z]`
 * @param {ArrayVector3DLike} xyz2 - Second vector as `[x, y, z]`
 * @returns {boolean} `true` if the vectors are opposite, `false` otherwise
 */
export const isOpposite3D = (xyz1: ArrayVector3DLike, xyz2: ArrayVector3DLike): boolean =>
  xyz1[0] === -xyz2[0] && xyz1[1] === -xyz2[1] && xyz1[2] === -xyz2[2];
