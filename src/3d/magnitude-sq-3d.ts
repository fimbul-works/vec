import type { ArrayVector3D } from "./types";

/**
 * Calculate the squared magnitude of a 3D vector.
 * @param {ArrayVector3D} xyz - Vector as `[x, y, z]`
 * @returns {number} Squared magnitude
 */
export const magnitudeSq3D = (xyz: ArrayVector3D): number => xyz[0] ** 2 + xyz[1] ** 2 + xyz[2] ** 2;
