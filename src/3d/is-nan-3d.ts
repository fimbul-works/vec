import type { ArrayVector3D } from "./types";

/**
 * Checks if a 3D vector has NaN components.
 * @param {ArrayVector3D} xyz - Vector as `[x, y, z]`
 * @returns {boolean} `true` if the vector has `NaN` components, `false` otherwise.
 */
export const isNaN3D = (xyz: ArrayVector3D): boolean =>
  Number.isNaN(xyz[0]) || Number.isNaN(xyz[1]) || Number.isNaN(xyz[2]);
