import type { ArrayVector2D } from "../2d/types.js";
import { defineMultiCharacterAccessors, defineSingleCharacterAccessors } from "./accessors.js";
import { getSwizzleKeyCache } from "./swizzle-keys-cache.js";
import type { SwizzleArrayVector2D } from "./types.js";

/**
 * Swizzles a 2D array vector with the given keys.
 * @param {ArrayVector2D} array - The array vector to swizzle.
 * @param {Array<K1, K2>} keys - The keys to swizzle with.
 * @returns {SwizzleArrayVector2D<K1, K2>} The swizzled array vector.
 */
export function swizzle2D<K1 extends string, K2 extends string, R = SwizzleArrayVector2D<K1, K2>>(
  array: ArrayVector2D,
  keys: [K1, K2],
): R {
  // Validate parameters
  if (array.length !== 2) {
    throw new Error("Array must have 2 dimensions");
  }
  if (new Set(keys.filter((key) => key.length === 1 && key === key.toLowerCase())).size !== 2) {
    throw new Error("Keys must be two unique lowercase single characters");
  }

  // Get or create key indices
  const { keyIndex: ki, permutations: perm } = getSwizzleKeyCache(keys);

  // Build accessors
  perm.forEach((pKeys) => {
    const accessor = pKeys.join("");
    pKeys.length === 1
      ? defineSingleCharacterAccessors(array, accessor, ki)
      : defineMultiCharacterAccessors(array, keys, pKeys, accessor, ki);
  });

  return array as R;
}

const test = swizzle2D([0, 0], ["x", "y"]);
console.log(Object.fromEntries(Object.entries(test)));

test.xy = [1, 2];
console.log(Object.fromEntries(Object.entries(test)));
