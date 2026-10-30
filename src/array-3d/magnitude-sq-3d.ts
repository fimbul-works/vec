import type { ArrayVector3D } from "./types.js";

/**
 * Calculate the squared magnitude of a 3DArrayVector.
 * @param xyz - Vector as `[x, y, z]`
 * @returns Squared magnitude
 */
export const magnitudeSq3D = (xyz: ArrayVector3D): number => xyz[0] ** 2 + xyz[1] ** 2 + xyz[2] ** 2;
