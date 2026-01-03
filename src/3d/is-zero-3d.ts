import type { ArrayVector3D } from "./types";

/**
 * Checks if a 3D vector is zero.
 * @param {ArrayVector3D} xyz - Vector as `[x, y, z]`
 * @returns {boolean} `true` if the vector is zero, `false` otherwise
 */
export const isZero3D = (xyz: ArrayVector3D): boolean => xyz[0] === 0 && xyz[1] === 0 && xyz[2] === 0;
