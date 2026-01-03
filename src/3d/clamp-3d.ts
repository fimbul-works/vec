import { magnitude3D } from "./magnitude-3d";
import type { ArrayVector3D } from "./types";

/**
 * Clamps the magnitude of a vector between min and max.
 * @param {ArrayVector3D} xyz - Vector as `[x, y, z]`
 * @param {number} min - Minimum magnitude
 * @param {number} max - Maximum magnitude
 * @param {number} [m] - Optional current magnitude (default: `magnitude3D(xyz)`)
 * @returns {ArrayVector3D} The clamped vector
 */
export const clamp3D = (xyz: ArrayVector3D, min: number, max: number, m: number = magnitude3D(xyz)): ArrayVector3D =>
  m > max
    ? [(xyz[0] / m) * max, (xyz[1] / m) * max, (xyz[2] / m) * max]
    : m < min
      ? [(xyz[0] / m) * min, (xyz[1] / m) * min, (xyz[2] / m) * min]
      : xyz;
