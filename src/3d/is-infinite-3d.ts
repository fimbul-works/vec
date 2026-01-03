import type { ArrayVector3D } from "./types";

/**
 * Checks if a vector has infinite components.
 * @param {ArrayVector3D} xyz - Vector as `[x, y, z]`
 * @returns {boolean} `true` if the vector has infinite components, `false` otherwise
 */
export const isInfinite3D = (xyz: ArrayVector3D): boolean =>
  xyz[0] === Number.POSITIVE_INFINITY ||
  xyz[0] === Number.NEGATIVE_INFINITY ||
  xyz[1] === Number.POSITIVE_INFINITY ||
  xyz[1] === Number.NEGATIVE_INFINITY ||
  xyz[2] === Number.POSITIVE_INFINITY ||
  xyz[2] === Number.NEGATIVE_INFINITY;
