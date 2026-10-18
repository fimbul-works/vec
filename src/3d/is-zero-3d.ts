import type { ArrayVector3DLike } from "./types.js";

/**
 * Checks if a 3D vector is zero.
 * @param {ArrayVector3DLike  } xyz - Vector as `[x, y, z]`
 * @returns {boolean} `true` if the vector is zero, `false` otherwise
 */
export const isZero3D = (xyz: ArrayVector3DLike): boolean => xyz[0] === 0 && xyz[1] === 0 && xyz[2] === 0;
