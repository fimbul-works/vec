import type { ArrayVector3D } from "./types.js";

/**
 * Calculates the magnitude of a 3DArrayVector.
 * @param xyz - Vector as `[x, y, z]`
 * @returns Magnitude of the vector
 */
export const magnitude3D = (xyz: ArrayVector3D): number => Math.sqrt(xyz[0] ** 2 + xyz[1] ** 2 + xyz[2] ** 2);
