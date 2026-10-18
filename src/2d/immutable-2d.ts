import type { ArrayVector2D, ArrayVector2DLike } from "./types.js";

/**
 * Create an immutable 2D vector.
 * @param {ArrayVector2DLike} xy - Vector as `[x, y]`
 * @returns {Readonly<ArrayVector2D>} The immutable vector
 */
export const immutable2D = (xy: ArrayVector2DLike): Readonly<ArrayVector2D> => Object.freeze([xy[0], xy[1]]);
