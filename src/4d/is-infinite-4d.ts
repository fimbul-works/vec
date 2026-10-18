import type { ArrayVector4DLike } from "./types.js";

/**
 * Checks if a 4D vector has infinite components.
 * @param {ArrayVector4DLike} xyzw - Vector as `[x, y, z, w]`
 * @returns {boolean} `true` if vector has infinite components, `false` otherwise
 */
export const isInfinite4D = (xyzw: ArrayVector4DLike): boolean =>
  xyzw[0] === Number.POSITIVE_INFINITY ||
  xyzw[0] === Number.NEGATIVE_INFINITY ||
  xyzw[1] === Number.POSITIVE_INFINITY ||
  xyzw[1] === Number.NEGATIVE_INFINITY ||
  xyzw[2] === Number.POSITIVE_INFINITY ||
  xyzw[2] === Number.NEGATIVE_INFINITY ||
  xyzw[3] === Number.POSITIVE_INFINITY ||
  xyzw[3] === Number.NEGATIVE_INFINITY;
