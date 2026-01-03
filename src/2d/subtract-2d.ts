import type { ArrayVector2D } from "./types.js";

/**
 * Subtracts a 2D vector from another.
 * @param {ArrayVector2D} xy1 - First vector as `[x, y]`
 * @param {ArrayVector2D} xy2 - Second vector as `[x, y]`
 * @returns {ArrayVector2D} The difference between vectors
 */
export const subtract2D = (xy1: ArrayVector2D, xy2: ArrayVector2D): ArrayVector2D => [xy1[0] - xy2[0], xy1[1] - xy2[1]];
