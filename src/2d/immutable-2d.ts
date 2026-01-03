import type { ArrayVector2D } from "./types.js";

/**
 * Create an immutable 2D vector.
 * @param {ArrayVector2D} xy - Vector as `[x, y]`
 * @returns {Readonly<ArrayVector2D>} The immutable vector
 */
export const immutable2D = (xy: ArrayVector2D): Readonly<ArrayVector2D> => Object.freeze([xy[0], xy[1]]);
