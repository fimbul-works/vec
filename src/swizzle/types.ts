import type { ArrayVector2D } from "../2d/types.js";
import type { ArrayVector3D } from "../3d/types.js";

/** Type to extract string length. */
export type LengthOfString<S extends string, Acc extends 0[] = []> = S extends `${string}${infer $Rest}`
  ? LengthOfString<$Rest, [...Acc, 0]>
  : Acc["length"];

/** Type that checks if string is of specific length. */
export type IsStringOfLength<S extends string, Length extends number> = LengthOfString<S> extends Length ? true : false;

/** Type to check if string is lowercase. */
export type IsLowerCase<S extends string> = S extends Lowercase<S> ? true : false;

/** Type to check if string is a letter. */
export type IsLetter<S extends string> = Lowercase<S> extends Uppercase<S> ? false : true;

/** Type to check if string is a valid swizzle key. */
export type IsValidSwizzleKey<S extends string> =
  IsStringOfLength<S, 1> extends true
    ? IsLetter<S> extends true
      ? IsLowerCase<S> extends true
        ? S
        : never
      : never
    : never;

/**
 * 2D swizzled array vector type.
 */
export type SwizzleArrayVector2D<
  K1 extends string,
  K2 extends string,
  V1 = IsValidSwizzleKey<K1>,
  V2 = IsValidSwizzleKey<K2>,
  Valid = V1 extends K1 ? (V2 extends K2 ? true : false) : false,
> = Valid extends true
  ? ArrayVector2D & { [K in K1 | K2]: number } & { [K in `${K1 | K2}${K1 | K2}`]: ArrayVector2D }
  : never;

/**
 * 3D swizzled array vector type.
 */
export type SwizzleArrayVector3D<
  K1 extends string,
  K2 extends string,
  K3 extends string,
  V1 = IsValidSwizzleKey<K1>,
  V2 = IsValidSwizzleKey<K2>,
  V3 = IsValidSwizzleKey<K3>,
  Valid = V1 extends K1 ? (V2 extends K2 ? (V3 extends K3 ? true : false) : false) : false,
> = Valid extends true
  ? ArrayVector3D & { [K in K1 | K2 | K3]: number } & { [K in `${K1 | K2 | K3}${K1 | K2 | K3}`]: ArrayVector2D } & {
      [K in `${K1 | K2 | K3}${K1 | K2 | K3}${K1 | K2 | K3}`]: ArrayVector3D;
    }
  : never;
