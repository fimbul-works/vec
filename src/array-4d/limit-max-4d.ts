import { clone4D } from "./clone-4d.js";
import { magnitude4D } from "./magnitude-4d.js";
import type { ArrayVector4D } from "./types.js";

/**
 * Limits the maximum magnitude of a 4DArrayVector.
 * @param xyzw - Vector as `[x, y, z, w]`
 * @param max - Maximum magnitude
 * @param m - Optional current magnitude (default: `magnitude4D(xyzw)`)
 * @returns Vector with limited magnitude
 */
export const limitMax4D = (xyzw: ArrayVector4D, max: number, m: number = magnitude4D(xyzw)): ArrayVector4D =>
  m > max ? [(xyzw[0] / m) * max, (xyzw[1] / m) * max, (xyzw[2] / m) * max, (xyzw[3] / m) * max] : clone4D(xyzw);
