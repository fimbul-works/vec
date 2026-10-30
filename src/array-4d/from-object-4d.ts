import type { ArrayVector4D } from "./types.js";

/**
 * Creates a 4DArrayVector from an object with x, y, z, w properties.
 * @param {{ x: number; y: number; z: number; w: number }} obj - Object with x, y, z, w properties
 * @returns 4DArrayVector
 */
export const fromObject4D = ({ x, y, z, w }: { x: number; y: number; z: number; w: number }): ArrayVector4D => [
  x,
  y,
  z,
  w,
];
