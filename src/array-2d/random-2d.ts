import type { ArrayVector2D } from "./types.js";

/**
 * Creates a random unit 2DArrayVector.
 * @param {() => void} random - A function that returns a random number between 0 and 1 (default: `Math.random`)
 * @returns Random unit vector
 */
export const random2D = (random: () => number = Math.random): ArrayVector2D => {
  const phi = random() * Math.PI * 2;
  return [Math.cos(phi), Math.sin(phi)];
};
