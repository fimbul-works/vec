import type { ArrayVector3D } from "./types.js";

/**
 * Create an immutable 3D vector.
 * @param {ArrayVector3D} xyz - Vector as `[x, y, z]`
 * @returns {Readonly<ArrayVector3D>} The immutable vector
 */
export const immutable3D = (xyz: ArrayVector3D): Readonly<ArrayVector3D> => Object.freeze([xyz[0], xyz[1], xyz[2]]);
