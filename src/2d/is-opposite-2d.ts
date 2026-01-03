import type { ArrayVector2D } from "./types.js";

/**
 * Checks if two 2D vectors are opposite.
 * @param {ArrayVector2D} xy1 - First vector as `[x, y]`
 * @param {ArrayVector2D} xy2 - Second vector as `[x, y]`
 * @returns {boolean} `true` if the vectors are opposite, `false` otherwise
 */
export const isOpposite2D = (xy1: ArrayVector2D, xy2: ArrayVector2D): boolean =>
  xy1[0] === -xy2[0] && xy1[1] === -xy2[1];
