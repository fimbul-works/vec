import { clone4D } from "./clone-4d.js";
import { magnitude4D } from "./magnitude-4d.js";
import type { ArrayVector4D } from "./types.js";

/**
 * Clamps the magnitude of a 4DArrayVector between min and max.
 * @param xyzw - Vector as `[x, y, z, w]`
 * @param min - Minimum magnitude
 * @param max - Maximum magnitude
 * @param m - Optional current magnitude (default: `magnitude4D(xyzw)`)
 * @returns The clamped vector
 */
export const clamp4D = (xyzw: ArrayVector4D, min: number, max: number, m: number = magnitude4D(xyzw)): ArrayVector4D =>
  m > max
    ? [(xyzw[0] / m) * max, (xyzw[1] / m) * max, (xyzw[2] / m) * max, (xyzw[3] / m) * max]
    : m < min
      ? [(xyzw[0] / m) * min, (xyzw[1] / m) * min, (xyzw[2] / m) * min, (xyzw[3] / m) * min]
      : clone4D(xyzw);
