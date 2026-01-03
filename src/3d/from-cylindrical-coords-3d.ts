import type { ArrayVector3D } from "./types";

/**
 * Creates a vector from cylindrical coordinates.
 * @param {number} r - Radius
 * @param {number} phi - Angle in radians
 * @param {number} z - Vector z axis
 * @returns {ArrayVector3D} Vector
 */
export const fromCylindricalCoords = (r: number, phi: number, z: number): ArrayVector3D => [
  r * Math.cos(phi),
  r * Math.sin(phi),
  z,
];
