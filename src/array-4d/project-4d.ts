import { dot4D } from "./dot-4d.js";
import { magnitude4D } from "./magnitude-4d.js";
import type { ArrayVector4D } from "./types.js";

/**
 * Projects one 4DArrayVector onto another.
 * @param xyzw1 - First vector as `[x, y, z, w]`
 * @param xyzw2 - Second vector as `[x, y, z, w]` to project onto
 * @param m1 - Optional current magnitude (default: `magnitude4D(xyzw1)`)
 * @param m2 - Optional current magnitude (default: `magnitude4D(xyzw2)`)
 * @returns The projected vector
 */
export const project4D = (
  xyzw1: ArrayVector4D,
  xyzw2: ArrayVector4D,
  m1: number = magnitude4D(xyzw1),
  m2: number = magnitude4D(xyzw2),
): ArrayVector4D => {
  const f = m1 * Math.cos(Math.acos(dot4D(xyzw1, xyzw2) / (m1 * m2)));
  return [(xyzw2[0] / m2) * f, (xyzw2[1] / m2) * f, (xyzw2[2] / m2) * f, (xyzw2[3] / m2) * f];
};
