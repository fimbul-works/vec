import type { ArrayVector3DLike } from "./types.js";

/**
 * Calculate the squared magnitude of a 3D vector.
 * @param {ArrayVector3DLike} xyz - Vector as `[x, y, z]`
 * @returns {number} Squared magnitude
 */
export const magnitudeSq3D = (xyz: ArrayVector3DLike): number => xyz[0] ** 2 + xyz[1] ** 2 + xyz[2] ** 2;
