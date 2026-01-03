import type { ArrayVector4D } from "./types.js";

/**
 * Performs linear interpolation between two 4D vectors.
 * @param {ArrayVector4D} xyzw1 - First vector as `[x, y, z, w]`
 * @param {ArrayVector4D} xyzw2 - Second vector as `[x, y, z, w]`
 * @param {number} t - Interpolation parameter
 * @returns {ArrayVector4D} The interpolated vector
 */
export const lerp4D = (xyzw1: ArrayVector4D, xyzw2: ArrayVector4D, t: number): ArrayVector4D => [
  xyzw1[0] + (xyzw2[0] - xyzw1[0]) * t,
  xyzw1[1] + (xyzw2[1] - xyzw1[1]) * t,
  xyzw1[2] + (xyzw2[2] - xyzw1[2]) * t,
  xyzw1[3] + (xyzw2[3] - xyzw1[3]) * t,
];
