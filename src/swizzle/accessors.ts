import type { ArrayVector2D } from "../2d/types.js";
import { defineGetSet } from "./define-get-set";

export function defineSingleCharacterAccessors(array: ArrayVector2D, accessor: string, keyIndex: Map<string, number>) {
  defineGetSet(
    array,
    accessor as any,
    () => array[keyIndex.get(accessor)!],
    (val: number) => (array[keyIndex.get(accessor)!] = val),
  );
}

export function defineMultiCharacterAccessors(
  array: ArrayVector2D,
  keys: string[],
  pKeys: string[],
  accessor: string,
  keyIndex: Map<string, number>,
) {
  if (new Set(pKeys).size === pKeys.length) {
    defineGetSet(
      array,
      accessor as any,
      () => pKeys.map((keys) => array[keyIndex.get(keys)!]),
      (val: number[]) => {
        pKeys.forEach((keys, idx) => (array[keyIndex.get(keys)!] = val[idx]));
      },
    );
  } else {
    defineGetSet(array, accessor as any, () => pKeys.map((keys) => array[keyIndex.get(keys)!]));
  }
}
