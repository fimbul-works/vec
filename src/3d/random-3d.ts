import { fromSphericalCoords3D } from "./from-spherical-coords-3d.js";
import type { ArrayVector3D } from "./types.js";

/**
 * Creates a random unit 3D vector.
 * @param {() => number} random - A function that returns a random number between 0 and 1 (default: `Math.random`)
 * @returns {ArrayVector3D} Random unit vector
 */
export const random3D = (random: () => number = Math.random): ArrayVector3D =>
  fromSphericalCoords3D(Math.acos(2 * random() - 1), random() * Math.PI * 2, 1);
