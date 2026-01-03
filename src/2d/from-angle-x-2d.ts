import type { ArrayVector2D } from "./types.js";

/**
 * Creates an ArrayVector2D from x-axis angle.
 * @param {number} phi - Angle in radians
 * @param {number} magnitude - Optional magnitude of the vector (default: `1`)
 * @returns {ArrayVector2D} Vector
 */
export const fromAngleX2D = (phi: number, magnitude: number = 1): ArrayVector2D => [
  magnitude * Math.cos(phi),
  magnitude * Math.sin(phi),
];
