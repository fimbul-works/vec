import { findPermutations } from "./find-permutations.js";

interface SwizzleKeyCache {
  keyIndex: Map<string, number>;
  permutations: string[][];
}

const swizzleKeysCache = new Map<string[], SwizzleKeyCache>();

export function getSwizzleKeyCache(keys: string[]): SwizzleKeyCache {
  if (swizzleKeysCache.has(keys)) {
    return swizzleKeysCache.get(keys)!;
  }

  const cache: SwizzleKeyCache = {
    keyIndex: new Map<string, number>(keys.map((key, idx) => [key, idx])),
    permutations: findPermutations(keys),
  };

  swizzleKeysCache.set(keys, cache);
  return cache;
}

export function clearSwizzleKeyCache() {
  swizzleKeysCache.clear();
}
