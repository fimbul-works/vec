import type { ArrayVector4D } from "./types.js";

const { sqrt, log, sin, cos, PI } = Math;

/**
 * Creates a random unit 4D vector.
 * @param {() => number} random - A function that returns a random number between 0 and 1 (default: `Math.random`)
 * @returns {ArrayVector4D} A random unit vector
 */
export const random4D = (random: () => number = Math.random): ArrayVector4D => {
  // 1. Generate four numbers from a Normal Distribution (Box-Muller transform)
  const x = sqrt(-2 * log(random())) * cos(2 * PI * random());
  const y = sqrt(-2 * log(random())) * sin(2 * PI * random());
  const z = sqrt(-2 * log(random())) * cos(2 * PI * random());
  const w = sqrt(-2 * log(random())) * sin(2 * PI * random());

  // 2. Calculate the current length
  const length = sqrt(x * x + y * y + z * z + w * w);

  // 3. Divide by length to make it a unit vector
  return [x / length, y / length, z / length, w / length];
};
