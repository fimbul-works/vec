import type { ArrayVector3D } from "./types.js";

/**
 * Negates a 3D vector.
 * @param {ArrayVector3D} xyz - Vector as `[x, y, z]`
 * @returns {ArrayVector3D} The negated vector
 */
export const negate3D = (xyz: ArrayVector3D): ArrayVector3D => [-xyz[0], -xyz[1], -xyz[2]];
