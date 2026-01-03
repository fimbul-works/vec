import type { ArrayVector3D } from "./types";

/**
 * Checks if two 3D vectors are opposite.
 * @param {ArrayVector3D} xyz1 - First vector as `[x, y, z]`
 * @param {ArrayVector3D} xyz2 - Second vector as `[x, y, z]`
 * @returns {boolean} `true` if the vectors are opposite, `false` otherwise
 */
export const isOpposite3D = (xyz1: ArrayVector3D, xyz2: ArrayVector3D): boolean =>
  xyz1[0] === -xyz2[0] && xyz1[1] === -xyz2[1] && xyz1[2] === -xyz2[2];
