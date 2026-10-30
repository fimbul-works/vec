import type { ArrayVector2D } from "./types.js";

/**
 * Calculates the angle between two 2D vectors.
 * @param xy1 - First vector as `[x, y]`
 * @param xy2 - Second vector as `[x, y]`
 * @returns Angle between the vectors in radians
 */
export const angleBetween2D = (xy1: ArrayVector2D, xy2: ArrayVector2D): number =>
  Math.atan2(xy1[0] * xy2[1] - xy1[1] * xy2[0], xy1[0] * xy2[0] + xy1[1] * xy2[1]);
