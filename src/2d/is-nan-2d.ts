import type { ArrayVector2D } from "./types.js";

/**
 * Checks if a vector has NaN components.
 * @param {ArrayVector2D} xy - Vector as `[x, y]`
 * @returns {boolean} `true` if the vector has `NaN` components, `false` otherwise.
 */
export const isNaN2D = (xy: ArrayVector2D): boolean => Number.isNaN(xy[0]) || Number.isNaN(xy[1]);
