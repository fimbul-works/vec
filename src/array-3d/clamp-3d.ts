import { clone3D } from "./clone-3d.js";
import { magnitude3D } from "./magnitude-3d.js";
import type { ArrayVector3D } from "./types.js";

/**
 * Clamps the magnitude of a vector between min and max.
 * @param xyz - Vector as `[x, y, z]`
 * @param min - Minimum magnitude
 * @param max - Maximum magnitude
 * @param m - Optional current magnitude (default: `magnitude3D(xyz)`)
 * @returns The clamped vector
 */
export const clamp3D = (xyz: ArrayVector3D, min: number, max: number, m: number = magnitude3D(xyz)): ArrayVector3D =>
  m > max
    ? [(xyz[0] / m) * max, (xyz[1] / m) * max, (xyz[2] / m) * max]
    : m < min
      ? [(xyz[0] / m) * min, (xyz[1] / m) * min, (xyz[2] / m) * min]
      : clone3D(xyz);
