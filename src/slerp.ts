/**
 * Documentation for spherical linear interpolation functions.
 * @module Slerp
 */

const PI2 = 2 * Math.PI;
const PI3 = 3 * Math.PI;

/**
 * Spherical linear interpolation for angles (in radians).
 * Handles wrapping around 2π correctly.
 * @param {number} from - Start angle in radians
 * @param {number} to - End angle in radians
 * @param {number} t - Interpolation factor (0-1)
 * @returns {number} Interpolated angle
 */
export const slerp = (from: number, to: number, t: number): number =>
  from + (((((to - from) % PI2) + PI3) % PI2) - Math.PI) * t;

/**
 * Spherical linear interpolation for angles (in degrees).
 * @param {number} from - Start angle in degrees
 * @param {number} to - End angle in degrees
 * @param {number} t - Interpolation factor (0-1)
 * @returns {number} Interpolated angle
 */
export const slerpDegrees = (from: number, to: number, t: number): number =>
  from + (((((to - from) % 360) + 540) % 360) - 180) * t;
