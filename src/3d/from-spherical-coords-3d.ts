import type { ArrayVector3D } from "./types";

/**
 * Creates a 3D vector from spherical coordinates.
 * @param {number} theta - First angle
 * @param {number} phi - Second angle
 * @param {number} [m] - Optional magnitude (default: `1`)
 * @returns {ArrayVector3D} Vector
 */
export const fromSphericalCoords3D = (theta: number, phi: number, m: number = 1): ArrayVector3D => [
  m * Math.sin(theta) * Math.cos(phi),
  m * Math.sin(theta) * Math.sin(phi),
  m * Math.cos(theta),
];
