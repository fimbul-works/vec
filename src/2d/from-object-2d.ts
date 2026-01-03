import type { ArrayVector2D } from "./types.js";

/**
 * Creates an `ArrayVector2D` from an object with x and y properties.
 * @param {{ x: number, y: number }} vector2D - Object with x and y properties
 * @returns {ArrayVector2D} 2D vector as an array
 */
export const fromObject2D = ({ x, y }: { x: number; y: number }): ArrayVector2D => [x, y];
