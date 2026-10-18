import type { ArrayVector2DLike } from "./types.js";

/**
 * Checks if a vector has infinite components.
 * @param {ArrayVector2DLike} xy - Vector as `[x, y]`
 * @returns {ArrayVector2DLike} `true` if the vector has infinite components, `false` otherwise
 */
export const isInfinite2D = (xy: ArrayVector2DLike): boolean =>
  xy[0] === Number.POSITIVE_INFINITY ||
  xy[0] === Number.NEGATIVE_INFINITY ||
  xy[1] === Number.POSITIVE_INFINITY ||
  xy[1] === Number.NEGATIVE_INFINITY;
