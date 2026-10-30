import type { ArrayVector2D } from "./types.js";

/**
 * Subtracts a 2DArrayVector from another.
 * @param xy1 - First vector as `[x, y]`
 * @param xy2 - Second vector as `[x, y]`
 * @returns The difference between vectors
 */
export const subtract2D = (xy1: ArrayVector2D, xy2: ArrayVector2D): ArrayVector2D => [xy1[0] - xy2[0], xy1[1] - xy2[1]];
