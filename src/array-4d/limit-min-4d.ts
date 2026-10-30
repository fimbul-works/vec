import { clone4D } from "./clone-4d.js";
import { magnitude4D } from "./magnitude-4d.js";
import type { ArrayVector4D } from "./types.js";

/**
 * Limits the minimum magnitude of a 4DArrayVector.
 * @param xyzw - Vector as `[x, y, z, w]`
 * @param min - Minimum magnitude
 * @param m - Optional current magnitude (default: `magnitude4D(xyzw)`)
 * @returns Vector with limited magnitude
 */
export const limitMin4D = (xyzw: ArrayVector4D, min: number, m: number = magnitude4D(xyzw)): ArrayVector4D =>
  m < min ? [(xyzw[0] / m) * min, (xyzw[1] / m) * min, (xyzw[2] / m) * min, (xyzw[3] / m) * min] : clone4D(xyzw);
