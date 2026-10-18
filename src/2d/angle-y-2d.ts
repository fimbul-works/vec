import type { ArrayVector2DLike } from "./types.js";

/**
 * Gets the angle between a 2D vector and the positive y-axis in radians.
 * @param {ArrayVector2DLike} xy - Vector as `[x, y]`
 * @returns {number} Angle in radians, always in the range [0, 2π)
 */
export const angleY2D = (xy: ArrayVector2DLike): number => Math.atan2(xy[0], xy[1] + (xy[0] < 0 ? Math.PI : 0));
