import type { ArrayVector2DLike } from "./types.js";

/**
 * Checks if a vector has NaN components.
 * @param {ArrayVector2DLike} xy - Vector as `[x, y]`
 * @returns {boolean} `true` if the vector has `NaN` components, `false` otherwise.
 */
export const isNaN2D = (xy: ArrayVector2DLike): boolean => Number.isNaN(xy[0]) || Number.isNaN(xy[1]);
