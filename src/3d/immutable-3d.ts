import type { ArrayVector3D, ArrayVector3DLike } from "./types.js";

/**
 * Create an immutable 3D vector.
 * @param {ArrayVector3DLike} xyz - Vector as `[x, y, z]`
 * @returns {Readonly<ArrayVector3D>} The immutable vector
 */
export const immutable3D = (xyz: ArrayVector3DLike): Readonly<ArrayVector3D> => Object.freeze([xyz[0], xyz[1], xyz[2]]);
