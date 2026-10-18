import type { ArrayVector4DLike } from "./types.js";

/**
 * Calculates the Chebyshev distance between two 4D vectors.
 * @param {ArrayVector4DLike} xyzw1 - First vector as `[x, y, z, w]`
 * @param {ArrayVector4DLike} xyzw2 - Second vector as `[x, y, z, w]`
 * @returns {number} The Chebyshev distance
 */
export const distanceChebyshev4D = (xyzw1: ArrayVector4DLike, xyzw2: ArrayVector4DLike): number => {
  const absX = Math.abs(xyzw1[0] - xyzw2[0]);
  const absY = Math.abs(xyzw1[1] - xyzw2[1]);
  const absZ = Math.abs(xyzw1[2] - xyzw2[2]);
  const absW = Math.abs(xyzw1[3] - xyzw2[3]);
  return absX >= absY && absX >= absZ && absX >= absW
    ? absX
    : absY >= absZ && absY >= absW
      ? absY
      : absZ >= absW
        ? absZ
        : absW;
};
