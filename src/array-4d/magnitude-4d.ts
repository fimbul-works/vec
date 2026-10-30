import type { ArrayVector4D } from "./types.js";

/**
 * Calculates the magnitude (length) of a 4DArrayVector.
 * @param xyzw - Vector as `[x, y, z, w]`
 * @returns The magnitude
 */
export const magnitude4D = (xyzw: ArrayVector4D): number =>
  Math.sqrt(xyzw[0] ** 2 + xyzw[1] ** 2 + xyzw[2] ** 2 + xyzw[3] ** 2);
