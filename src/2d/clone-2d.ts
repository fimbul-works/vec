import type { ArrayVector2D, ArrayVector2DLike } from "./types.js";

/**
 * Clone a 2D vector.
 * @param {ArrayVector2D} xy - Vector as `[x, y]`
 * @returns {ArrayVector2D} The cloned vector
 */
export const clone2D = (xy: ArrayVector2DLike): ArrayVector2D => [xy[0], xy[1]];
