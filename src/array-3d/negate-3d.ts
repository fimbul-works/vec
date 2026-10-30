import type { ArrayVector3D } from "./types.js";

/**
 * Negates a 3DArrayVector.
 * @param xyz - Vector as `[x, y, z]`
 * @returns The negated vector
 */
export const negate3D = (xyz: ArrayVector3D): ArrayVector3D => [-xyz[0], -xyz[1], -xyz[2]];
