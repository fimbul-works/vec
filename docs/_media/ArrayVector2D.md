[**@fimbul-works/vec**](README.md)

***

[@fimbul-works/vec](modules.md) / ArrayVector2D

# ArrayVector2D

Documentation for functional 2D Vector array operations.

## Type Aliases

### ArrayVector2D

```ts
type ArrayVector2D = [number, number];
```

Defined in: [2d/types.ts:4](https://github.com/claus-codes/vec/blob/64e80c9069476a15976526c526682ae4845883c9/src/2d/types.ts#L4)

2D vector as an array.

## Functions

### add2D()

```ts
function add2D(xy1, xy2): ArrayVector2D;
```

Defined in: [2d/add-2d.ts:9](https://github.com/claus-codes/vec/blob/64e80c9069476a15976526c526682ae4845883c9/src/2d/add-2d.ts#L9)

Adds one 2D vectors.

#### Parameters

##### xy1

[`ArrayVector2D`](#arrayvector2d)

First vector as `[x, y]`

##### xy2

[`ArrayVector2D`](#arrayvector2d)

Second vector as `[x, y]`

#### Returns

[`ArrayVector2D`](#arrayvector2d)

The sum of the vectors

***

### angleBetween2D()

```ts
function angleBetween2D(xy1, xy2): number;
```

Defined in: [2d/angle-between-2d.ts:9](https://github.com/claus-codes/vec/blob/64e80c9069476a15976526c526682ae4845883c9/src/2d/angle-between-2d.ts#L9)

Calculates the angle between two 2D vectors.

#### Parameters

##### xy1

[`ArrayVector2D`](#arrayvector2d)

First vector as `[x, y]`

##### xy2

[`ArrayVector2D`](#arrayvector2d)

Second vector as `[x, y]`

#### Returns

`number`

Angle between the vectors in radians

***

### angleX2D()

```ts
function angleX2D(xy): number;
```

Defined in: [2d/angle-x-2d.ts:8](https://github.com/claus-codes/vec/blob/64e80c9069476a15976526c526682ae4845883c9/src/2d/angle-x-2d.ts#L8)

Gets the angle between a 2D vector and the positive x-axis in radians.

#### Parameters

##### xy

[`ArrayVector2D`](#arrayvector2d)

Vector as `[x, y]`

#### Returns

`number`

Angle in radians, always in the range [0, 2π)

***

### angleY2D()

```ts
function angleY2D(xy): number;
```

Defined in: [2d/angle-y-2d.ts:8](https://github.com/claus-codes/vec/blob/64e80c9069476a15976526c526682ae4845883c9/src/2d/angle-y-2d.ts#L8)

Gets the angle between a 2D vector and the positive y-axis in radians.

#### Parameters

##### xy

[`ArrayVector2D`](#arrayvector2d)

Vector as `[x, y]`

#### Returns

`number`

Angle in radians, always in the range [0, 2π)

***

### clamp2D()

```ts
function clamp2D(
   xy, 
   min, 
   max, 
   m?): ArrayVector2D;
```

Defined in: [2d/clamp-2d.ts:12](https://github.com/claus-codes/vec/blob/64e80c9069476a15976526c526682ae4845883c9/src/2d/clamp-2d.ts#L12)

Clamps the magnitude of a 2D vector between a minimum and maximum value.

#### Parameters

##### xy

[`ArrayVector2D`](#arrayvector2d)

Vector as `[x, y]`

##### min

`number`

Minimum magnitude

##### max

`number`

Maximum magnitude

##### m?

`number` = `...`

Optional current magnitude (default: `magnitude2D(xy)`)

#### Returns

[`ArrayVector2D`](#arrayvector2d)

The clamped vector

***

### clone2D()

```ts
function clone2D(xy): ArrayVector2D;
```

Defined in: [2d/clone-2d.ts:8](https://github.com/claus-codes/vec/blob/64e80c9069476a15976526c526682ae4845883c9/src/2d/clone-2d.ts#L8)

Clone a 2D vector.

#### Parameters

##### xy

[`ArrayVector2D`](#arrayvector2d)

Vector as `[x, y]`

#### Returns

[`ArrayVector2D`](#arrayvector2d)

The cloned vector

***

### cross2D()

```ts
function cross2D(xy1, xy2): number;
```

Defined in: [2d/cross-2d.ts:9](https://github.com/claus-codes/vec/blob/64e80c9069476a15976526c526682ae4845883c9/src/2d/cross-2d.ts#L9)

Calculates the cross product of two 2D vectors.

#### Parameters

##### xy1

[`ArrayVector2D`](#arrayvector2d)

First vector as `[x, y]`

##### xy2

[`ArrayVector2D`](#arrayvector2d)

Second vector as `[x, y]`

#### Returns

`number`

Cross product

***

### distance2D()

```ts
function distance2D(xy1, xy2): number;
```

Defined in: [2d/distance-2d.ts:9](https://github.com/claus-codes/vec/blob/64e80c9069476a15976526c526682ae4845883c9/src/2d/distance-2d.ts#L9)

Calculate the Euclidean distance between two 2D vectors.

#### Parameters

##### xy1

[`ArrayVector2D`](#arrayvector2d)

First vector as `[x, y]`

##### xy2

[`ArrayVector2D`](#arrayvector2d)

Second vector as `[x, y]`

#### Returns

`number`

Euclidean distance

***

### distanceChebyshev2D()

```ts
function distanceChebyshev2D(xy1, xy2): number;
```

Defined in: [2d/distance-chebyshev-2d.ts:9](https://github.com/claus-codes/vec/blob/64e80c9069476a15976526c526682ae4845883c9/src/2d/distance-chebyshev-2d.ts#L9)

Calculates the Chebyshev distance between two 2D vectors.

#### Parameters

##### xy1

[`ArrayVector2D`](#arrayvector2d)

First vector as `[x, y]`

##### xy2

[`ArrayVector2D`](#arrayvector2d)

Second vector as `[x, y]`

#### Returns

`number`

Chebyshev distance

***

### distanceManhattan2D()

```ts
function distanceManhattan2D(xy1, xy2): number;
```

Defined in: [2d/distance-manhattan-2d.ts:9](https://github.com/claus-codes/vec/blob/64e80c9069476a15976526c526682ae4845883c9/src/2d/distance-manhattan-2d.ts#L9)

Calculates the Manhattan distance between two 2D vectors.

#### Parameters

##### xy1

[`ArrayVector2D`](#arrayvector2d)

First vector as `[x, y]`

##### xy2

[`ArrayVector2D`](#arrayvector2d)

Second vector as `[x, y]`

#### Returns

`number`

Manhattan distance

***

### distanceMinkowski2D()

```ts
function distanceMinkowski2D(
   xy1, 
   xy2, 
   p): number;
```

Defined in: [2d/distance-minkowski-2d.ts:10](https://github.com/claus-codes/vec/blob/64e80c9069476a15976526c526682ae4845883c9/src/2d/distance-minkowski-2d.ts#L10)

Calculates the Minkowski distance between two 2D vectors.

#### Parameters

##### xy1

[`ArrayVector2D`](#arrayvector2d)

First vector as `[x, y]`

##### xy2

[`ArrayVector2D`](#arrayvector2d)

Second vector as `[x, y]`

##### p

`number`

Order of the Minkowski distance

#### Returns

`number`

Minkowski distance

***

### distanceSq2D()

```ts
function distanceSq2D(xy1, xy2): number;
```

Defined in: [2d/distance-sq-2d.ts:9](https://github.com/claus-codes/vec/blob/64e80c9069476a15976526c526682ae4845883c9/src/2d/distance-sq-2d.ts#L9)

Calculates the squared Euclidean distance between two 2D vectors.

#### Parameters

##### xy1

[`ArrayVector2D`](#arrayvector2d)

First vector as `[x, y]`

##### xy2

[`ArrayVector2D`](#arrayvector2d)

Second vector as `[x, y]`

#### Returns

`number`

Squared distance

***

### divide2D()

```ts
function divide2D(xy1, xy2): ArrayVector2D;
```

Defined in: [2d/divide-2d.ts:9](https://github.com/claus-codes/vec/blob/64e80c9069476a15976526c526682ae4845883c9/src/2d/divide-2d.ts#L9)

Divides one 2D vector with another.

#### Parameters

##### xy1

[`ArrayVector2D`](#arrayvector2d)

First vector as `[x, y]`

##### xy2

[`ArrayVector2D`](#arrayvector2d)

Second vector as `[x, y]`

#### Returns

[`ArrayVector2D`](#arrayvector2d)

The divided value

***

### dot2D()

```ts
function dot2D(xy1, xy2): number;
```

Defined in: [2d/dot-2d.ts:9](https://github.com/claus-codes/vec/blob/64e80c9069476a15976526c526682ae4845883c9/src/2d/dot-2d.ts#L9)

Calculates the dot product of two vectors.

#### Parameters

##### xy1

[`ArrayVector2D`](#arrayvector2d)

First vector as `[x, y]`

##### xy2

[`ArrayVector2D`](#arrayvector2d)

Second vector as `[x, y]`

#### Returns

`number`

Dot product

***

### fromAngleX2D()

```ts
function fromAngleX2D(phi, magnitude): ArrayVector2D;
```

Defined in: [2d/from-angle-x-2d.ts:9](https://github.com/claus-codes/vec/blob/64e80c9069476a15976526c526682ae4845883c9/src/2d/from-angle-x-2d.ts#L9)

Creates an ArrayVector2D from x-axis angle.

#### Parameters

##### phi

`number`

Angle in radians

##### magnitude

`number` = `1`

Optional magnitude of the vector (default: `1`)

#### Returns

[`ArrayVector2D`](#arrayvector2d)

Vector

***

### fromAngleY2D()

```ts
function fromAngleY2D(phi, magnitude): ArrayVector2D;
```

Defined in: [2d/from-angle-y-2d.ts:9](https://github.com/claus-codes/vec/blob/64e80c9069476a15976526c526682ae4845883c9/src/2d/from-angle-y-2d.ts#L9)

Creates an ArrayVector2D from y-axis angle.

#### Parameters

##### phi

`number`

Angle in radians

##### magnitude

`number` = `1`

Optional magnitude of the vector (default: `1`)

#### Returns

[`ArrayVector2D`](#arrayvector2d)

Vector

***

### fromObject2D()

```ts
function fromObject2D(vector2D): ArrayVector2D;
```

Defined in: [2d/from-object-2d.ts:8](https://github.com/claus-codes/vec/blob/64e80c9069476a15976526c526682ae4845883c9/src/2d/from-object-2d.ts#L8)

Creates an `ArrayVector2D` from an object with x and y properties.

#### Parameters

##### vector2D

Object with x and y properties

###### x

`number`

###### y

`number`

#### Returns

[`ArrayVector2D`](#arrayvector2d)

2D vector as an array

***

### fromPolarCoords2D()

```ts
function fromPolarCoords2D(phi, m?): ArrayVector2D;
```

Defined in: [2d/from-polar-coords-2d.ts:9](https://github.com/claus-codes/vec/blob/64e80c9069476a15976526c526682ae4845883c9/src/2d/from-polar-coords-2d.ts#L9)

Creates an `ArrayVector2D` from polar coordinates.

#### Parameters

##### phi

`number`

Angle in radians

##### m?

`number` = `1`

Optional magnitude (default: `1`)

#### Returns

[`ArrayVector2D`](#arrayvector2d)

Vector

***

### immutable2D()

```ts
function immutable2D(xy): readonly [number, number];
```

Defined in: [2d/immutable-2d.ts:8](https://github.com/claus-codes/vec/blob/64e80c9069476a15976526c526682ae4845883c9/src/2d/immutable-2d.ts#L8)

Create an immutable 2D vector.

#### Parameters

##### xy

[`ArrayVector2D`](#arrayvector2d)

Vector as `[x, y]`

#### Returns

readonly \[`number`, `number`\]

The immutable vector

***

### isEqual2D()

```ts
function isEqual2D(xy1, xy2): boolean;
```

Defined in: [2d/is-equal-2d.ts:9](https://github.com/claus-codes/vec/blob/64e80c9069476a15976526c526682ae4845883c9/src/2d/is-equal-2d.ts#L9)

Checks if two 2D vectors are equal.

#### Parameters

##### xy1

[`ArrayVector2D`](#arrayvector2d)

First vector as `[x, y]`

##### xy2

[`ArrayVector2D`](#arrayvector2d)

Second vector as `[x, y]`

#### Returns

`boolean`

`true` if the vectors are equal, `false` otherwise

***

### isEqualApprox2D()

```ts
function isEqualApprox2D(
   xy1, 
   xy2, 
   epsilon): boolean;
```

Defined in: [2d/is-equal-approx-2d.ts:10](https://github.com/claus-codes/vec/blob/64e80c9069476a15976526c526682ae4845883c9/src/2d/is-equal-approx-2d.ts#L10)

Compares a 2D vector with another vector using an epsilon value for floating-point comparison.

#### Parameters

##### xy1

[`ArrayVector2D`](#arrayvector2d)

First vector as `[x, y]`

##### xy2

[`ArrayVector2D`](#arrayvector2d)

Second vector as `[x, y]`

##### epsilon

`number` = `Number.EPSILON`

Maximum difference between components to consider them equal (default: `Number.EPSILON`)

#### Returns

`boolean`

`true` if the vectors are equal, `false` otherwise

***

### isInfinite2D()

```ts
function isInfinite2D(xy): boolean;
```

Defined in: [2d/is-infinite-2d.ts:8](https://github.com/claus-codes/vec/blob/64e80c9069476a15976526c526682ae4845883c9/src/2d/is-infinite-2d.ts#L8)

Checks if a vector has infinite components.

#### Parameters

##### xy

[`ArrayVector2D`](#arrayvector2d)

Vector as `[x, y]`

#### Returns

`boolean`

`true` if the vector has infinite components, `false` otherwise

***

### isNaN2D()

```ts
function isNaN2D(xy): boolean;
```

Defined in: [2d/is-nan-2d.ts:8](https://github.com/claus-codes/vec/blob/64e80c9069476a15976526c526682ae4845883c9/src/2d/is-nan-2d.ts#L8)

Checks if a vector has NaN components.

#### Parameters

##### xy

[`ArrayVector2D`](#arrayvector2d)

Vector as `[x, y]`

#### Returns

`boolean`

`true` if the vector has `NaN` components, `false` otherwise.

***

### isOpposite2D()

```ts
function isOpposite2D(xy1, xy2): boolean;
```

Defined in: [2d/is-opposite-2d.ts:9](https://github.com/claus-codes/vec/blob/64e80c9069476a15976526c526682ae4845883c9/src/2d/is-opposite-2d.ts#L9)

Checks if two 2D vectors are opposite.

#### Parameters

##### xy1

[`ArrayVector2D`](#arrayvector2d)

First vector as `[x, y]`

##### xy2

[`ArrayVector2D`](#arrayvector2d)

Second vector as `[x, y]`

#### Returns

`boolean`

`true` if the vectors are opposite, `false` otherwise

***

### isZero2D()

```ts
function isZero2D(xy): boolean;
```

Defined in: [2d/is-zero-2d.ts:8](https://github.com/claus-codes/vec/blob/64e80c9069476a15976526c526682ae4845883c9/src/2d/is-zero-2d.ts#L8)

Checks if a vector is zero.

#### Parameters

##### xy

[`ArrayVector2D`](#arrayvector2d)

Vector as `[x, y]`

#### Returns

`boolean`

`true` if the vector is zero, `false` otherwise

***

### lerp2D()

```ts
function lerp2D(
   xy1, 
   xy2, 
   t): ArrayVector2D;
```

Defined in: [2d/lerp-2d.ts:10](https://github.com/claus-codes/vec/blob/64e80c9069476a15976526c526682ae4845883c9/src/2d/lerp-2d.ts#L10)

Performs linear interpolation between two 2D vectors.

#### Parameters

##### xy1

[`ArrayVector2D`](#arrayvector2d)

First vector as `[x, y]`

##### xy2

[`ArrayVector2D`](#arrayvector2d)

Second vector as `[x, y]`

##### t

`number`

Interpolation parameter

#### Returns

[`ArrayVector2D`](#arrayvector2d)

The interpolated vector

***

### limitMax2D()

```ts
function limitMax2D(
   xy, 
   max, 
   m?): ArrayVector2D;
```

Defined in: [2d/limit-max-2d.ts:11](https://github.com/claus-codes/vec/blob/64e80c9069476a15976526c526682ae4845883c9/src/2d/limit-max-2d.ts#L11)

Limits the maximum magnitude of a 2D vector.

#### Parameters

##### xy

[`ArrayVector2D`](#arrayvector2d)

Vector as `[x, y]`

##### max

`number`

Maximum magnitude

##### m?

`number` = `...`

Optional current magnitude (default: `magnitude2D(xy)`)

#### Returns

[`ArrayVector2D`](#arrayvector2d)

The limited vector

***

### limitMin2D()

```ts
function limitMin2D(
   xy, 
   min, 
   m?): ArrayVector2D;
```

Defined in: [2d/limit-min-2d.ts:11](https://github.com/claus-codes/vec/blob/64e80c9069476a15976526c526682ae4845883c9/src/2d/limit-min-2d.ts#L11)

Limits the maximum magnitude of a 2D vector.

#### Parameters

##### xy

[`ArrayVector2D`](#arrayvector2d)

Vector as `[x, y]`

##### min

`number`

Minimum magnitude

##### m?

`number` = `...`

Optional current magnitude (default: `magnitude2D(xy)`)

#### Returns

[`ArrayVector2D`](#arrayvector2d)

The limited vector

***

### lookAt2D()

```ts
function lookAt2D(
   xy1, 
   xy2, 
   m1?, 
   m2?): ArrayVector2D;
```

Defined in: [2d/look-at-2d.ts:12](https://github.com/claus-codes/vec/blob/64e80c9069476a15976526c526682ae4845883c9/src/2d/look-at-2d.ts#L12)

Calculates the 2D vector angle of a vector pointing at another.

#### Parameters

##### xy1

[`ArrayVector2D`](#arrayvector2d)

First vector as `[x, y]`

##### xy2

[`ArrayVector2D`](#arrayvector2d)

Second vector as `[x, y]` (target to look at)

##### m1?

`number` = `...`

Optional current magnitude of the first vector (default: magnitude2D(xy1))

##### m2?

`number` = `...`

Optional current magnitude of the second vector (default: magnitude2D(xy2))

#### Returns

[`ArrayVector2D`](#arrayvector2d)

Vector pointing at the target with the magnitude of xy1

***

### magnitude2D()

```ts
function magnitude2D(xy): number;
```

Defined in: [2d/magnitude-2d.ts:8](https://github.com/claus-codes/vec/blob/64e80c9069476a15976526c526682ae4845883c9/src/2d/magnitude-2d.ts#L8)

Calculates the magnitude of a 2D vector.

#### Parameters

##### xy

[`ArrayVector2D`](#arrayvector2d)

Vector as `[x, y]`

#### Returns

`number`

Magnitude of the vector

***

### magnitudeSq2D()

```ts
function magnitudeSq2D(xy): number;
```

Defined in: [2d/magnitude-sq-2d.ts:8](https://github.com/claus-codes/vec/blob/64e80c9069476a15976526c526682ae4845883c9/src/2d/magnitude-sq-2d.ts#L8)

Calculate the squared magnitude of a 2D vector.

#### Parameters

##### xy

[`ArrayVector2D`](#arrayvector2d)

Vector as `[x, y]`

#### Returns

`number`

Squared magnitude

***

### multiply2D()

```ts
function multiply2D(xy1, xy2): ArrayVector2D;
```

Defined in: [2d/multiply-2d.ts:9](https://github.com/claus-codes/vec/blob/64e80c9069476a15976526c526682ae4845883c9/src/2d/multiply-2d.ts#L9)

Multiplies one 2D vector with another component-wise.

#### Parameters

##### xy1

[`ArrayVector2D`](#arrayvector2d)

First vector as `[x, y]`

##### xy2

[`ArrayVector2D`](#arrayvector2d)

Second vector as `[x, y]`

#### Returns

[`ArrayVector2D`](#arrayvector2d)

The multiplied vector

***

### negate2D()

```ts
function negate2D(xy): ArrayVector2D;
```

Defined in: [2d/negate-2d.ts:8](https://github.com/claus-codes/vec/blob/64e80c9069476a15976526c526682ae4845883c9/src/2d/negate-2d.ts#L8)

Negates a 2D vector.

#### Parameters

##### xy

[`ArrayVector2D`](#arrayvector2d)

Vector as `[x, y]`

#### Returns

[`ArrayVector2D`](#arrayvector2d)

The negated vector

***

### normalize2D()

```ts
function normalize2D(xy, m?): ArrayVector2D;
```

Defined in: [2d/normalize-2d.ts:10](https://github.com/claus-codes/vec/blob/64e80c9069476a15976526c526682ae4845883c9/src/2d/normalize-2d.ts#L10)

Normalize a 2D vector.

#### Parameters

##### xy

[`ArrayVector2D`](#arrayvector2d)

Vector as `[x, y]`

##### m?

`number` = `...`

Optional current magnitude (default: `magnitude2D(xy)`)

#### Returns

[`ArrayVector2D`](#arrayvector2d)

The normalized vector

***

### one2D()

```ts
function one2D(): ArrayVector2D;
```

Defined in: [2d/one-2d.ts:7](https://github.com/claus-codes/vec/blob/64e80c9069476a15976526c526682ae4845883c9/src/2d/one-2d.ts#L7)

Creates a 2D vector with all components set to 1.0.

#### Returns

[`ArrayVector2D`](#arrayvector2d)

Vector `[1, 1]`

***

### project2D()

```ts
function project2D(
   xy1, 
   xy2, 
   m1?, 
   m2?): ArrayVector2D;
```

Defined in: [2d/project-2d.ts:12](https://github.com/claus-codes/vec/blob/64e80c9069476a15976526c526682ae4845883c9/src/2d/project-2d.ts#L12)

Projects one 2D vector onto another.

#### Parameters

##### xy1

[`ArrayVector2D`](#arrayvector2d)

Vector to project

##### xy2

[`ArrayVector2D`](#arrayvector2d)

Vector to project onto

##### m1?

`number` = `...`

Optional magnitude of the first vector (default: `magnitude2D(xy1)`)

##### m2?

`number` = `...`

Optional magnitude of the second vector (default: `magnitude2D(xy2)`)

#### Returns

[`ArrayVector2D`](#arrayvector2d)

The projected vector

***

### random2D()

```ts
function random2D(random): ArrayVector2D;
```

Defined in: [2d/random-2d.ts:8](https://github.com/claus-codes/vec/blob/64e80c9069476a15976526c526682ae4845883c9/src/2d/random-2d.ts#L8)

Creates a random unit 2D vector.

#### Parameters

##### random

() => `number`

A function that returns a random number between 0 and 1 (default: `Math.random`)

#### Returns

[`ArrayVector2D`](#arrayvector2d)

Random unit vector

***

### reflect2D()

```ts
function reflect2D(xy, normal): ArrayVector2D;
```

Defined in: [2d/reflect-2d.ts:11](https://github.com/claus-codes/vec/blob/64e80c9069476a15976526c526682ae4845883c9/src/2d/reflect-2d.ts#L11)

Reflects the vector across a normal vector.
The normal vector should be normalized (unit length).

#### Parameters

##### xy

[`ArrayVector2D`](#arrayvector2d)

Vector as `[x, y]` to reflect

##### normal

[`ArrayVector2D`](#arrayvector2d)

Normal vector to reflect across (must be normalized)

#### Returns

[`ArrayVector2D`](#arrayvector2d)

The reflected vector

***

### rotate2D()

```ts
function rotate2D(
   xy, 
   phi, 
   axis): ArrayVector2D;
```

Defined in: [2d/rotate-2d.ts:10](https://github.com/claus-codes/vec/blob/64e80c9069476a15976526c526682ae4845883c9/src/2d/rotate-2d.ts#L10)

Rotates a 2D point around an arbitrary axis point

#### Parameters

##### xy

[`ArrayVector2D`](#arrayvector2d)

Point to rotate

##### phi

`number`

Rotation angle in radians

##### axis

[`ArrayVector2D`](#arrayvector2d) = `...`

Rotation axis point (default: `[0, 0]`)

#### Returns

[`ArrayVector2D`](#arrayvector2d)

The rotated vector

***

### setMagnitude2D()

```ts
function setMagnitude2D(
   xy, 
   newMag, 
   m?): ArrayVector2D;
```

Defined in: [2d/set-magnitude-2d.ts:11](https://github.com/claus-codes/vec/blob/64e80c9069476a15976526c526682ae4845883c9/src/2d/set-magnitude-2d.ts#L11)

Sets the magnitude (length) of a 2D vector, maintaining its direction.

#### Parameters

##### xy

[`ArrayVector2D`](#arrayvector2d)

Vector as `[x, y]`

##### newMag

`number`

New magnitude

##### m?

`number` = `...`

Optional current magnitude (default: `magnitude2D(xy)`)

#### Returns

[`ArrayVector2D`](#arrayvector2d)

The adjusted vector

***

### subtract2D()

```ts
function subtract2D(xy1, xy2): ArrayVector2D;
```

Defined in: [2d/subtract-2d.ts:9](https://github.com/claus-codes/vec/blob/64e80c9069476a15976526c526682ae4845883c9/src/2d/subtract-2d.ts#L9)

Subtracts a 2D vector from another.

#### Parameters

##### xy1

[`ArrayVector2D`](#arrayvector2d)

First vector as `[x, y]`

##### xy2

[`ArrayVector2D`](#arrayvector2d)

Second vector as `[x, y]`

#### Returns

[`ArrayVector2D`](#arrayvector2d)

The difference between vectors

***

### zero2D()

```ts
function zero2D(): ArrayVector2D;
```

Defined in: [2d/zero-2d.ts:7](https://github.com/claus-codes/vec/blob/64e80c9069476a15976526c526682ae4845883c9/src/2d/zero-2d.ts#L7)

Creates a zero 2D vector.

#### Returns

[`ArrayVector2D`](#arrayvector2d)

Vector `[0, 0]`
