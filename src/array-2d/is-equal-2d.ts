import type { ArrayVector2D } from "./types.js";

/**
 * Checks if two 2D vectors are equal.
 * @param xy1 - First vector as `[x, y]`
 * @param xy2 - Second vector as `[x, y]`
 * @returns {boolean} `true` if the vectors are equal, `false` otherwise
 */
export const isEqual2D = (xy1: ArrayVector2D, xy2: ArrayVector2D): boolean => xy1[0] === xy2[0] && xy1[1] === xy2[1];
