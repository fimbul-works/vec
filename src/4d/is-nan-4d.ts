import type { ArrayVector4D } from "./types.js";

/**
 * Checks if a 4D vector has NaN components.
 * @param {ArrayVector4D} xyzw - Vector as `[x, y, z, w]`
 * @returns {boolean} `true` if vector has `NaN` components, `false` otherwise
 */
export const isNan4D = (xyzw: ArrayVector4D): boolean =>
  Number.isNaN(xyzw[0]) || Number.isNaN(xyzw[1]) || Number.isNaN(xyzw[2]) || Number.isNaN(xyzw[3]);
