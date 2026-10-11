/**
 * Generates all permutations of the given keys with lengths up to maxLength.
 * @param {string[]} keys - The keys to generate permutations from.
 * @param {number} maxLength - The maximum length of the permutations.
 * @returns {string[][]} An array of permutations.
 */
export function findPermutations(keys: string[], maxLength = keys.length): string[][] {
  const permutationsArray: string[][] = [];

  if (maxLength <= 0 || keys.length === 0) {
    return permutationsArray;
  }

  const subPermutations = maxLength > 1 ? findPermutations(keys, maxLength - 1) : [];

  for (let i = 0; i < keys.length; i++) {
    const char = keys[i];
    permutationsArray.push([char]);

    for (const permutation of subPermutations) {
      permutationsArray.push([char, ...permutation]);
    }
  }

  return permutationsArray;
}
