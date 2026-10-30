import type { ArrayVector2D } from "./types.js";

/**
 * Calculates the magnitude of a 2DArrayVector.
 * @param xy - Vector as `[x, y]`
 * @returns Magnitude of the vector
 */
export const magnitude2D = (xy: ArrayVector2D) => Math.sqrt(xy[0] ** 2 + xy[1] ** 2);
