import type { ArrayVector2D } from "./types.js";

/**
 * Clone a 2DArrayVector.
 * @param xy - Vector as `[x, y]`
 * @returns The cloned vector
 */
export const clone2D = (xy: ArrayVector2D): ArrayVector2D => [xy[0], xy[1]];
