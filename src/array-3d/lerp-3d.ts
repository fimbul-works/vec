import type { ArrayVector3D } from "./types.js";

/**
 * Performs linear interpolation between two vectors.
 * @param xyz1 - First vector as `[x, y, z]`
 * @param xyz2 - Second vector as `[x, y, z]`
 * @param t - Interpolation parameter
 * @returns The interpolated vector
 */
export const lerp3D = (xyz1: ArrayVector3D, xyz2: ArrayVector3D, t: number): ArrayVector3D => [
  xyz1[0] + (xyz2[0] - xyz1[0]) * t,
  xyz1[1] + (xyz2[1] - xyz1[1]) * t,
  xyz1[2] + (xyz2[2] - xyz1[2]) * t,
];
