import type { ArrayVector3D } from "./types.js";

/**
 * Calculates the cross product of two 3D vectors.
 * @param xyz1 - First vector as `[x, y, z]`
 * @param xyz2 - Second vector as `[x, y, z]`
 * @returns The cross product
 */
export const cross3D = (xyz1: ArrayVector3D, xyz2: ArrayVector3D): ArrayVector3D => [
  xyz1[1] * xyz2[2] - xyz1[2] * xyz2[1],
  xyz1[2] * xyz2[0] - xyz1[0] * xyz2[2],
  xyz1[0] * xyz2[1] - xyz1[1] * xyz2[0],
];
