import type { ArrayVector3DLike } from "./types.js";

/**
 * Checks if a 3D vector has NaN components.
 * @param {ArrayVector3DLike} xyz - Vector as `[x, y, z]`
 * @returns {boolean} `true` if the vector has `NaN` components, `false` otherwise.
 */
export const isNaN3D = (xyz: ArrayVector3DLike): boolean =>
  Number.isNaN(xyz[0]) || Number.isNaN(xyz[1]) || Number.isNaN(xyz[2]);
