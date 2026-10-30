import { magnitude4D } from "./magnitude-4d.js";
import type { ArrayVector4D } from "./types.js";

/**
 * Makes a 4DArrayVector point towards another vector.
 * @param xyzw1 - First vector as `[x, y, z, w]`
 * @param xyzw2 - Second vector as `[x, y, z, w]` (target to look at)
 * @param m1 - Optional current magnitude of the first vector (default: `magnitude4D(xyzw1)`)
 * @param m2 - Optional current magnitude of the second vector (default: `magnitude4D(xyzw2)`)
 * @returns Vector pointing at the target with the magnitude of xyzw1
 */
export const lookAt4D = (
  xyzw1: ArrayVector4D,
  xyzw2: ArrayVector4D,
  m1: number = magnitude4D(xyzw1),
  m2: number = magnitude4D(xyzw2),
): ArrayVector4D => [(xyzw2[0] / m2) * m1, (xyzw2[1] / m2) * m1, (xyzw2[2] / m2) * m1, (xyzw2[3] / m2) * m1];
