[**@fimbul-works/vec**](README.md)

***

[@fimbul-works/vec](modules.md) / ArrayVector4D

# ArrayVector4D

Documentation for functional 4D Vector array operations.

## Type Aliases

### ArrayVector4D

```ts
type ArrayVector4D = [number, number, number, number];
```

Defined in: [4d/types.ts:4](https://github.com/claus-codes/vec/blob/64e80c9069476a15976526c526682ae4845883c9/src/4d/types.ts#L4)

4D vector as an array.

## Functions

### add4D()

```ts
function add4D(xyzw1, xyzw2): ArrayVector4D;
```

Defined in: [4d/add-4d.ts:9](https://github.com/claus-codes/vec/blob/64e80c9069476a15976526c526682ae4845883c9/src/4d/add-4d.ts#L9)

Adds two 4D vectors.

#### Parameters

##### xyzw1

[`ArrayVector4D`](#arrayvector4d)

First vector as `[x, y, z, w]`

##### xyzw2

[`ArrayVector4D`](#arrayvector4d)

Second vector as `[x, y, z, w]`

#### Returns

[`ArrayVector4D`](#arrayvector4d)

The sum of the vectors

***

### angleBetween4D()

```ts
function angleBetween4D(
   xyzw1, 
   xyzw2, 
   m1?, 
   m2?): number;
```

Defined in: [4d/angle-between-4d.ts:13](https://github.com/claus-codes/vec/blob/64e80c9069476a15976526c526682ae4845883c9/src/4d/angle-between-4d.ts#L13)

Calculates the angle between two 4D vectors.

#### Parameters

##### xyzw1

[`ArrayVector4D`](#arrayvector4d)

First vector as `[x, y, z, w]`

##### xyzw2

[`ArrayVector4D`](#arrayvector4d)

Second vector as `[x, y, z, w]`

##### m1?

`number` = `...`

Optional magnitude of the first vector (default: `magnitude4D(xyzw1)`)

##### m2?

`number` = `...`

Optional magnitude of the second vector (default: `magnitude4D(xyzw2)`)

#### Returns

`number`

The angle in radians

***

### angleW4D()

```ts
function angleW4D(xyzw): number;
```

Defined in: [4d/angle-w-4d.ts:8](https://github.com/claus-codes/vec/blob/64e80c9069476a15976526c526682ae4845883c9/src/4d/angle-w-4d.ts#L8)

Calculates the angle between a 4D vector and the positive w-axis.

#### Parameters

##### xyzw

[`ArrayVector4D`](#arrayvector4d)

Vector as `[x, y, z, w]`

#### Returns

`number`

The angle in radians

***

### angleX4D()

```ts
function angleX4D(xyzw): number;
```

Defined in: [4d/angle-x-4d.ts:8](https://github.com/claus-codes/vec/blob/64e80c9069476a15976526c526682ae4845883c9/src/4d/angle-x-4d.ts#L8)

Calculates the angle between a 4D vector and the positive x-axis.

#### Parameters

##### xyzw

[`ArrayVector4D`](#arrayvector4d)

Vector as `[x, y, z, w]`

#### Returns

`number`

The angle in radians

***

### angleY4D()

```ts
function angleY4D(xyzw): number;
```

Defined in: [4d/angle-y-4d.ts:8](https://github.com/claus-codes/vec/blob/64e80c9069476a15976526c526682ae4845883c9/src/4d/angle-y-4d.ts#L8)

Calculates the angle between a 4D vector and the positive y-axis.

#### Parameters

##### xyzw

[`ArrayVector4D`](#arrayvector4d)

Vector as `[x, y, z, w]`

#### Returns

`number`

The angle in radians

***

### angleZ4D()

```ts
function angleZ4D(xyzw): number;
```

Defined in: [4d/angle-z-4d.ts:8](https://github.com/claus-codes/vec/blob/64e80c9069476a15976526c526682ae4845883c9/src/4d/angle-z-4d.ts#L8)

Calculates the angle between a 4D vector and the positive z-axis.

#### Parameters

##### xyzw

[`ArrayVector4D`](#arrayvector4d)

Vector as `[x, y, z, w]`

#### Returns

`number`

The angle in radians

***

### clamp4D()

```ts
function clamp4D(
   xyzw, 
   min, 
   max, 
   m?): ArrayVector4D;
```

Defined in: [4d/clamp-4d.ts:12](https://github.com/claus-codes/vec/blob/64e80c9069476a15976526c526682ae4845883c9/src/4d/clamp-4d.ts#L12)

Clamps the magnitude of a 4D vector between min and max.

#### Parameters

##### xyzw

[`ArrayVector4D`](#arrayvector4d)

Vector as `[x, y, z, w]`

##### min

`number`

Minimum magnitude

##### max

`number`

Maximum magnitude

##### m?

`number` = `...`

Optional current magnitude (default: `magnitude4D(xyzw)`)

#### Returns

[`ArrayVector4D`](#arrayvector4d)

The clamped vector

***

### clone4D()

```ts
function clone4D(xyzw): ArrayVector4D;
```

Defined in: [4d/clone-4d.ts:8](https://github.com/claus-codes/vec/blob/64e80c9069476a15976526c526682ae4845883c9/src/4d/clone-4d.ts#L8)

Clone a 4D vector.

#### Parameters

##### xyzw

[`ArrayVector4D`](#arrayvector4d)

Vector as `[x, y, z, w]`

#### Returns

[`ArrayVector4D`](#arrayvector4d)

The cloned vector

***

### distance4D()

```ts
function distance4D(xyzw1, xyzw2): number;
```

Defined in: [4d/distance-4d.ts:9](https://github.com/claus-codes/vec/blob/64e80c9069476a15976526c526682ae4845883c9/src/4d/distance-4d.ts#L9)

Calculates the Euclidean distance between two 4D vectors.

#### Parameters

##### xyzw1

[`ArrayVector4D`](#arrayvector4d)

First vector as `[x, y, z, w]`

##### xyzw2

[`ArrayVector4D`](#arrayvector4d)

Second vector as `[x, y, z, w]`

#### Returns

`number`

The distance

***

### distanceChebyshev4D()

```ts
function distanceChebyshev4D(xyzw1, xyzw2): number;
```

Defined in: [4d/distance-chebyshev-4d.ts:9](https://github.com/claus-codes/vec/blob/64e80c9069476a15976526c526682ae4845883c9/src/4d/distance-chebyshev-4d.ts#L9)

Calculates the Chebyshev distance between two 4D vectors.

#### Parameters

##### xyzw1

[`ArrayVector4D`](#arrayvector4d)

First vector as `[x, y, z, w]`

##### xyzw2

[`ArrayVector4D`](#arrayvector4d)

Second vector as `[x, y, z, w]`

#### Returns

`number`

The Chebyshev distance

***

### distanceManhattan4D()

```ts
function distanceManhattan4D(xyzw1, xyzw2): number;
```

Defined in: [4d/distance-manhattan-4d.ts:9](https://github.com/claus-codes/vec/blob/64e80c9069476a15976526c526682ae4845883c9/src/4d/distance-manhattan-4d.ts#L9)

Calculates the Manhattan distance between two 4D vectors.

#### Parameters

##### xyzw1

[`ArrayVector4D`](#arrayvector4d)

First vector as `[x, y, z, w]`

##### xyzw2

[`ArrayVector4D`](#arrayvector4d)

Second vector as `[x, y, z, w]`

#### Returns

`number`

The Manhattan distance

***

### distanceMinkowski4D()

```ts
function distanceMinkowski4D(
   xyzw1, 
   xyzw2, 
   p): number;
```

Defined in: [4d/distance-minkowski-4d.ts:10](https://github.com/claus-codes/vec/blob/64e80c9069476a15976526c526682ae4845883c9/src/4d/distance-minkowski-4d.ts#L10)

Calculates the Minkowski distance between two 4D vectors.

#### Parameters

##### xyzw1

[`ArrayVector4D`](#arrayvector4d)

First vector as `[x, y, z, w]`

##### xyzw2

[`ArrayVector4D`](#arrayvector4d)

Second vector as `[x, y, z, w]`

##### p

`number`

The order of the Minkowski distance

#### Returns

`number`

The Minkowski distance

***

### distanceSq4D()

```ts
function distanceSq4D(xyzw1, xyzw2): number;
```

Defined in: [4d/distance-sq-4d.ts:10](https://github.com/claus-codes/vec/blob/64e80c9069476a15976526c526682ae4845883c9/src/4d/distance-sq-4d.ts#L10)

Calculates the squared Euclidean distance between two 4D vectors.
Faster than distance for comparisons.

#### Parameters

##### xyzw1

[`ArrayVector4D`](#arrayvector4d)

First vector as `[x, y, z, w]`

##### xyzw2

[`ArrayVector4D`](#arrayvector4d)

Second vector as `[x, y, z, w]`

#### Returns

`number`

The squared distance

***

### divide4D()

```ts
function divide4D(xyzw1, xyzw2): ArrayVector4D;
```

Defined in: [4d/divide-4d.ts:9](https://github.com/claus-codes/vec/blob/64e80c9069476a15976526c526682ae4845883c9/src/4d/divide-4d.ts#L9)

Divides two 4D vectors component-wise.

#### Parameters

##### xyzw1

[`ArrayVector4D`](#arrayvector4d)

First vector as `[x, y, z, w]`

##### xyzw2

[`ArrayVector4D`](#arrayvector4d)

Second vector as `[x, y, z, w]`

#### Returns

[`ArrayVector4D`](#arrayvector4d)

The divided vector

***

### dot4D()

```ts
function dot4D(xyzw1, xyzw2): number;
```

Defined in: [4d/dot-4d.ts:9](https://github.com/claus-codes/vec/blob/64e80c9069476a15976526c526682ae4845883c9/src/4d/dot-4d.ts#L9)

Calculates the dot product of two 4D vectors.

#### Parameters

##### xyzw1

[`ArrayVector4D`](#arrayvector4d)

First vector as `[x, y, z, w]`

##### xyzw2

[`ArrayVector4D`](#arrayvector4d)

Second vector as `[x, y, z, w]`

#### Returns

`number`

The dot product

***

### fromObject4D()

```ts
function fromObject4D(obj): ArrayVector4D;
```

Defined in: [4d/from-object-4d.ts:8](https://github.com/claus-codes/vec/blob/64e80c9069476a15976526c526682ae4845883c9/src/4d/from-object-4d.ts#L8)

Creates a 4D vector from an object with x, y, z, w properties.

#### Parameters

##### obj

Object with x, y, z, w properties

###### w

`number`

###### x

`number`

###### y

`number`

###### z

`number`

#### Returns

[`ArrayVector4D`](#arrayvector4d)

4D vector

***

### immutable4D()

```ts
function immutable4D(xyzw): readonly [number, number, number, number];
```

Defined in: [4d/immutable-4d.ts:8](https://github.com/claus-codes/vec/blob/64e80c9069476a15976526c526682ae4845883c9/src/4d/immutable-4d.ts#L8)

Create an immutable 4D vector.

#### Parameters

##### xyzw

[`ArrayVector4D`](#arrayvector4d)

Vector as `[x, y, z, w]`

#### Returns

readonly \[`number`, `number`, `number`, `number`\]

The immutable vector

***

### isEqual4D()

```ts
function isEqual4D(xyzw1, xyzw2): boolean;
```

Defined in: [4d/is-equal-4d.ts:9](https://github.com/claus-codes/vec/blob/64e80c9069476a15976526c526682ae4845883c9/src/4d/is-equal-4d.ts#L9)

Checks if two 4D vectors are exactly equal.

#### Parameters

##### xyzw1

[`ArrayVector4D`](#arrayvector4d)

First vector as `[x, y, z, w]`

##### xyzw2

[`ArrayVector4D`](#arrayvector4d)

Second vector as `[x, y, z, w]`

#### Returns

`boolean`

`true` if vectors are equal, `false` otherwse

***

### isEqualApprox4D()

```ts
function isEqualApprox4D(
   xyzw1, 
   xyzw2, 
   epsilon): boolean;
```

Defined in: [4d/is-equal-approx-4d.ts:10](https://github.com/claus-codes/vec/blob/64e80c9069476a15976526c526682ae4845883c9/src/4d/is-equal-approx-4d.ts#L10)

Checks if two 4D vectors are approximately equal within epsilon.

#### Parameters

##### xyzw1

[`ArrayVector4D`](#arrayvector4d)

First vector as `[x, y, z, w]`

##### xyzw2

[`ArrayVector4D`](#arrayvector4d)

Second vector as `[x, y, z, w]`

##### epsilon

`number` = `Number.EPSILON`

Maximum difference (default: `Number.EPSILON`)

#### Returns

`boolean`

`true` if vectors are approximately equal, `false` otherwise

***

### isInfinite4D()

```ts
function isInfinite4D(xyzw): boolean;
```

Defined in: [4d/is-infinite-4d.ts:8](https://github.com/claus-codes/vec/blob/64e80c9069476a15976526c526682ae4845883c9/src/4d/is-infinite-4d.ts#L8)

Checks if a 4D vector has infinite components.

#### Parameters

##### xyzw

[`ArrayVector4D`](#arrayvector4d)

Vector as `[x, y, z, w]`

#### Returns

`boolean`

`true` if vector has infinite components, `false` otherwise

***

### isNan4D()

```ts
function isNan4D(xyzw): boolean;
```

Defined in: [4d/is-nan-4d.ts:8](https://github.com/claus-codes/vec/blob/64e80c9069476a15976526c526682ae4845883c9/src/4d/is-nan-4d.ts#L8)

Checks if a 4D vector has NaN components.

#### Parameters

##### xyzw

[`ArrayVector4D`](#arrayvector4d)

Vector as `[x, y, z, w]`

#### Returns

`boolean`

`true` if vector has `NaN` components, `false` otherwise

***

### isOpposite4D()

```ts
function isOpposite4D(xyzw1, xyzw2): boolean;
```

Defined in: [4d/is-opposite-4d.ts:9](https://github.com/claus-codes/vec/blob/64e80c9069476a15976526c526682ae4845883c9/src/4d/is-opposite-4d.ts#L9)

Checks if two 4D vectors are opposite.

#### Parameters

##### xyzw1

[`ArrayVector4D`](#arrayvector4d)

First vector as `[x, y, z, w]`

##### xyzw2

[`ArrayVector4D`](#arrayvector4d)

Second vector as `[x, y, z, w]`

#### Returns

`boolean`

`true` if vectors are opposite

***

### isZero4D()

```ts
function isZero4D(xyzw): boolean;
```

Defined in: [4d/is-zero-4d.ts:8](https://github.com/claus-codes/vec/blob/64e80c9069476a15976526c526682ae4845883c9/src/4d/is-zero-4d.ts#L8)

Checks if a 4D vector is zero.

#### Parameters

##### xyzw

[`ArrayVector4D`](#arrayvector4d)

Vector as `[x, y, z, w]`

#### Returns

`boolean`

`true` if vector is zero, `false` otherwise

***

### lerp4D()

```ts
function lerp4D(
   xyzw1, 
   xyzw2, 
   t): ArrayVector4D;
```

Defined in: [4d/lerp-4d.ts:10](https://github.com/claus-codes/vec/blob/64e80c9069476a15976526c526682ae4845883c9/src/4d/lerp-4d.ts#L10)

Performs linear interpolation between two 4D vectors.

#### Parameters

##### xyzw1

[`ArrayVector4D`](#arrayvector4d)

First vector as `[x, y, z, w]`

##### xyzw2

[`ArrayVector4D`](#arrayvector4d)

Second vector as `[x, y, z, w]`

##### t

`number`

Interpolation parameter

#### Returns

[`ArrayVector4D`](#arrayvector4d)

The interpolated vector

***

### limitMax4D()

```ts
function limitMax4D(
   xyzw, 
   max, 
   m?): ArrayVector4D;
```

Defined in: [4d/limit-max-4d.ts:11](https://github.com/claus-codes/vec/blob/64e80c9069476a15976526c526682ae4845883c9/src/4d/limit-max-4d.ts#L11)

Limits the maximum magnitude of a 4D vector.

#### Parameters

##### xyzw

[`ArrayVector4D`](#arrayvector4d)

Vector as `[x, y, z, w]`

##### max

`number`

Maximum magnitude

##### m?

`number` = `...`

Optional current magnitude (default: `magnitude4D(xyzw)`)

#### Returns

[`ArrayVector4D`](#arrayvector4d)

Vector with limited magnitude

***

### limitMin4D()

```ts
function limitMin4D(
   xyzw, 
   min, 
   m?): ArrayVector4D;
```

Defined in: [4d/limit-min-4d.ts:11](https://github.com/claus-codes/vec/blob/64e80c9069476a15976526c526682ae4845883c9/src/4d/limit-min-4d.ts#L11)

Limits the minimum magnitude of a 4D vector.

#### Parameters

##### xyzw

[`ArrayVector4D`](#arrayvector4d)

Vector as `[x, y, z, w]`

##### min

`number`

Minimum magnitude

##### m?

`number` = `...`

Optional current magnitude (default: `magnitude4D(xyzw)`)

#### Returns

[`ArrayVector4D`](#arrayvector4d)

Vector with limited magnitude

***

### lookAt4D()

```ts
function lookAt4D(
   xyzw1, 
   xyzw2, 
   m1?, 
   m2?): ArrayVector4D;
```

Defined in: [4d/look-at-4d.ts:12](https://github.com/claus-codes/vec/blob/64e80c9069476a15976526c526682ae4845883c9/src/4d/look-at-4d.ts#L12)

Makes a 4D vector point towards another vector.

#### Parameters

##### xyzw1

[`ArrayVector4D`](#arrayvector4d)

First vector as `[x, y, z, w]`

##### xyzw2

[`ArrayVector4D`](#arrayvector4d)

Second vector as `[x, y, z, w]` (target to look at)

##### m1?

`number` = `...`

Optional current magnitude of the first vector (default: `magnitude4D(xyzw1)`)

##### m2?

`number` = `...`

Optional current magnitude of the second vector (default: `magnitude4D(xyzw2)`)

#### Returns

[`ArrayVector4D`](#arrayvector4d)

Vector pointing at the target with the magnitude of xyzw1

***

### magnitude4D()

```ts
function magnitude4D(xyzw): number;
```

Defined in: [4d/magnitude-4d.ts:8](https://github.com/claus-codes/vec/blob/64e80c9069476a15976526c526682ae4845883c9/src/4d/magnitude-4d.ts#L8)

Calculates the magnitude (length) of a 4D vector.

#### Parameters

##### xyzw

[`ArrayVector4D`](#arrayvector4d)

Vector as `[x, y, z, w]`

#### Returns

`number`

The magnitude

***

### magnitudeSq4D()

```ts
function magnitudeSq4D(xyzw): number;
```

Defined in: [4d/magnitude-sq-4d.ts:9](https://github.com/claus-codes/vec/blob/64e80c9069476a15976526c526682ae4845883c9/src/4d/magnitude-sq-4d.ts#L9)

Calculates the squared magnitude of a 4D vector.
Faster than magnitude for comparisons.

#### Parameters

##### xyzw

[`ArrayVector4D`](#arrayvector4d)

Vector as `[x, y, z, w]`

#### Returns

`number`

The squared magnitude

***

### multiply4D()

```ts
function multiply4D(xyzw1, xyzw2): ArrayVector4D;
```

Defined in: [4d/multiply-4d.ts:9](https://github.com/claus-codes/vec/blob/64e80c9069476a15976526c526682ae4845883c9/src/4d/multiply-4d.ts#L9)

Multiplies two 4D vectors component-wise.

#### Parameters

##### xyzw1

[`ArrayVector4D`](#arrayvector4d)

First vector as `[x, y, z, w]`

##### xyzw2

[`ArrayVector4D`](#arrayvector4d)

Second vector as `[x, y, z, w]`

#### Returns

[`ArrayVector4D`](#arrayvector4d)

The multiplied vector

***

### negate4D()

```ts
function negate4D(xyzw): ArrayVector4D;
```

Defined in: [4d/negate-4d.ts:8](https://github.com/claus-codes/vec/blob/64e80c9069476a15976526c526682ae4845883c9/src/4d/negate-4d.ts#L8)

Negates a 4D vector.

#### Parameters

##### xyzw

[`ArrayVector4D`](#arrayvector4d)

Vector as `[x, y, z, w]`

#### Returns

[`ArrayVector4D`](#arrayvector4d)

The negated vector

***

### normalize4D()

```ts
function normalize4D(xyzw, m?): ArrayVector4D;
```

Defined in: [4d/normalize-4d.ts:10](https://github.com/claus-codes/vec/blob/64e80c9069476a15976526c526682ae4845883c9/src/4d/normalize-4d.ts#L10)

Normalizes a 4D vector to unit length.

#### Parameters

##### xyzw

[`ArrayVector4D`](#arrayvector4d)

Vector as `[x, y, z, w]`

##### m?

`number` = `...`

Optional current magnitude (default: `magnitude4D(xyzw)`)

#### Returns

[`ArrayVector4D`](#arrayvector4d)

The normalized vector

***

### one4D()

```ts
function one4D(): ArrayVector4D;
```

Defined in: [4d/one-4d.ts:7](https://github.com/claus-codes/vec/blob/64e80c9069476a15976526c526682ae4845883c9/src/4d/one-4d.ts#L7)

Creates a 4D vector with all components set to 1.

#### Returns

[`ArrayVector4D`](#arrayvector4d)

A vector `[1, 1, 1, 1]`

***

### project4D()

```ts
function project4D(
   xyzw1, 
   xyzw2, 
   m1?, 
   m2?): ArrayVector4D;
```

Defined in: [4d/project-4d.ts:13](https://github.com/claus-codes/vec/blob/64e80c9069476a15976526c526682ae4845883c9/src/4d/project-4d.ts#L13)

Projects one 4D vector onto another.

#### Parameters

##### xyzw1

[`ArrayVector4D`](#arrayvector4d)

First vector as `[x, y, z, w]`

##### xyzw2

[`ArrayVector4D`](#arrayvector4d)

Second vector as `[x, y, z, w]` to project onto

##### m1?

`number` = `...`

Optional current magnitude (default: `magnitude4D(xyzw1)`)

##### m2?

`number` = `...`

Optional current magnitude (default: `magnitude4D(xyzw2)`)

#### Returns

[`ArrayVector4D`](#arrayvector4d)

The projected vector

***

### random4D()

```ts
function random4D(random): ArrayVector4D;
```

Defined in: [4d/random-4d.ts:10](https://github.com/claus-codes/vec/blob/64e80c9069476a15976526c526682ae4845883c9/src/4d/random-4d.ts#L10)

Creates a random unit 4D vector.

#### Parameters

##### random

() => `number`

A function that returns a random number between 0 and 1 (default: `Math.random`)

#### Returns

[`ArrayVector4D`](#arrayvector4d)

A random unit vector

***

### reflect4D()

```ts
function reflect4D(xyzw, normal): ArrayVector4D;
```

Defined in: [4d/reflect-4d.ts:11](https://github.com/claus-codes/vec/blob/64e80c9069476a15976526c526682ae4845883c9/src/4d/reflect-4d.ts#L11)

Reflects a 4D vector across a normal vector.
The normal vector should be normalized (unit length).

#### Parameters

##### xyzw

[`ArrayVector4D`](#arrayvector4d)

Vector as `[x, y, z, w]`

##### normal

[`ArrayVector4D`](#arrayvector4d)

Normal vector (must be normalized)

#### Returns

[`ArrayVector4D`](#arrayvector4d)

The reflected vector

***

### setMagnitude4D()

```ts
function setMagnitude4D(
   xyzw, 
   newMag, 
   m?): ArrayVector4D;
```

Defined in: [4d/set-magnitude-4d.ts:11](https://github.com/claus-codes/vec/blob/64e80c9069476a15976526c526682ae4845883c9/src/4d/set-magnitude-4d.ts#L11)

Sets the magnitude of a 4D vector while maintaining its direction.

#### Parameters

##### xyzw

[`ArrayVector4D`](#arrayvector4d)

Vector as `[x, y, z, w]`

##### newMag

`number`

The new magnitude

##### m?

`number` = `...`

Optional current magnitude (default: `magnitude4D(xyzw)`)

#### Returns

[`ArrayVector4D`](#arrayvector4d)

Vector with the new magnitude

***

### subtract4D()

```ts
function subtract4D(xyzw1, xyzw2): ArrayVector4D;
```

Defined in: [4d/subtract-4d.ts:9](https://github.com/claus-codes/vec/blob/64e80c9069476a15976526c526682ae4845883c9/src/4d/subtract-4d.ts#L9)

Subtracts two 4D vectors.

#### Parameters

##### xyzw1

[`ArrayVector4D`](#arrayvector4d)

First vector as `[x, y, z, w]`

##### xyzw2

[`ArrayVector4D`](#arrayvector4d)

Second vector as `[x, y, z, w]`

#### Returns

[`ArrayVector4D`](#arrayvector4d)

The difference of the vectors

***

### zero4D()

```ts
function zero4D(): ArrayVector4D;
```

Defined in: [4d/zero-4d.ts:7](https://github.com/claus-codes/vec/blob/64e80c9069476a15976526c526682ae4845883c9/src/4d/zero-4d.ts#L7)

Creates a zero 4D vector.

#### Returns

[`ArrayVector4D`](#arrayvector4d)

A zero vector `[0, 0, 0, 0]`
