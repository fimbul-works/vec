import type { ArrayVector3D, ArrayVector3DLike } from "./types.js";

/**
 * Clone a 3D vector.
 * @param {ArrayVector3DLike} xyz - Vector as `[x, y, z]`
 * @returns {ArrayVector3D} The cloned vector
 */
export const clone3D = (xyz: ArrayVector3DLike): ArrayVector3D => [xyz[0], xyz[1], xyz[2]];
