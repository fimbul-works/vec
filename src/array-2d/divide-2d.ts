import type { ArrayVector2D } from "./types.js";

/**
 * Divides one 2DArrayVector with another.
 * @param xy1 - First vector as `[x, y]`
 * @param xy2 - Second vector as `[x, y]`
 * @returns The divided value
 */
export const divide2D = (xy1: ArrayVector2D, xy2: ArrayVector2D): ArrayVector2D => [
  xy2[0] === 0 ? Number.POSITIVE_INFINITY : xy1[0] / xy2[0],
  xy2[1] === 0 ? Number.POSITIVE_INFINITY : xy1[1] / xy2[1],
];
