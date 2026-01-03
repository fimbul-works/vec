import type { ArrayVector2D } from "./types.js";

/**
 * Gets the angle between a 2D vector and the positive x-axis in radians.
 * @param {ArrayVector2D} xy - Vector as `[x, y]`
 * @returns {number} Angle in radians, always in the range [0, 2π)
 */
export const angleX2D = (xy: ArrayVector2D): number => Math.atan2(xy[1], xy[0] + (xy[1] < 0 ? Math.PI : 0));
