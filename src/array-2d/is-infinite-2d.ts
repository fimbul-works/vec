import type { ArrayVector2D } from "./types.js";

/**
 * Checks if a vector has infinite components.
 * @param xy - Vector as `[x, y]`
 * @returns `true` if the vector has infinite components, `false` otherwise
 */
export const isInfinite2D = (xy: ArrayVector2D): boolean =>
  xy[0] === Number.POSITIVE_INFINITY ||
  xy[0] === Number.NEGATIVE_INFINITY ||
  xy[1] === Number.POSITIVE_INFINITY ||
  xy[1] === Number.NEGATIVE_INFINITY;
