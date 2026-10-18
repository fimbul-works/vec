import type { ArrayVector2DLike } from "./types.js";

/**
 * Calculates the magnitude of a 2D vector.
 * @param {ArrayVector2DLike} xy - Vector as `[x, y]`
 * @returns {number} Magnitude of the vector
 */
export const magnitude2D = (xy: ArrayVector2DLike) => Math.sqrt(xy[0] ** 2 + xy[1] ** 2);
