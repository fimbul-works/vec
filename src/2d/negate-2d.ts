import type { ArrayVector2D } from "./types.js";

/**
 * Negates a 2D vector.
 * @param {ArrayVector2D} xy - Vector as `[x, y]`
 * @returns {ArrayVector2D} The negated vector
 */
export const negate2D = (xy: ArrayVector2D): ArrayVector2D => [-xy[0], -xy[1]];
