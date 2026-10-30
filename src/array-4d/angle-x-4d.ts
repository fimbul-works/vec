import type { ArrayVector4D } from "./types.js";

/**
 * Calculates the angle between a 4DArrayVector and the positive x-axis.
 * @param xyzw - Vector as `[x, y, z, w]`
 * @returns The angle in radians
 */
export const angleX4D = (xyzw: ArrayVector4D): number =>
  Math.atan2(Math.sqrt(xyzw[1] ** 2 + xyzw[2] ** 2 + xyzw[3] ** 2), xyzw[0]);
