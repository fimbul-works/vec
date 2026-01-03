[@fimbul-works/vec](README.md) / ArrayVector3D

# ArrayVector3D

Documentation for functional 3D Vector array operations.

## Type Aliases

### ArrayVector3D

```ts
type ArrayVector3D = [number, number, number];
```

Defined in: [3d/types.ts:4](https://github.com/claus-codes/vec/blob/1a991556255e5555afd05799362abaa631fc20cc/src/3d/types.ts#L4)

3D vector as an array.

## Functions

### add3D()

```ts
function add3D(xyz1, xyz2): ArrayVector3D;
```

Defined in: [3d/add-3d.ts:9](https://github.com/claus-codes/vec/blob/1a991556255e5555afd05799362abaa631fc20cc/src/3d/add-3d.ts#L9)

Adds two 3D vectors.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `xyz1` | [`ArrayVector3D`](#arrayvector3d) | First vector as `[x, y, z]` as [x, y, z] |
| `xyz2` | [`ArrayVector3D`](#arrayvector3d) | Second vector as `[x, y, z]` as [x, y, z] |

#### Returns

[`ArrayVector3D`](#arrayvector3d)

The sum of the vectors

***

### angleBetween3D()

```ts
function angleBetween3D(
   xyz1, 
   xyz2, 
   m1?, 
   m2?): number;
```

Defined in: [3d/angle-between-3d.ts:12](https://github.com/claus-codes/vec/blob/1a991556255e5555afd05799362abaa631fc20cc/src/3d/angle-between-3d.ts#L12)

Calculates the angle between two 3D vectors.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `xyz1` | [`ArrayVector3D`](#arrayvector3d) | First vector as `[x, y, z]` |
| `xyz2` | [`ArrayVector3D`](#arrayvector3d) | Second vector as `[x, y, z]` |
| `m1?` | `number` | Optional first vector magnitude (default: `magnitude3D(xyz1)`) |
| `m2?` | `number` | Optional second vector magnitude (default: `magnitude3D(xyz2)`) |

#### Returns

`number`

Angle between the vectors in radians

***

### angleX3D()

```ts
function angleX3D(xyz): number;
```

Defined in: [3d/angle-x-3d.ts:8](https://github.com/claus-codes/vec/blob/1a991556255e5555afd05799362abaa631fc20cc/src/3d/angle-x-3d.ts#L8)

Gets the angle between a 3D vector and the positive x-axis in radians.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `xyz` | [`ArrayVector3D`](#arrayvector3d) | Vector as `[x, y, z]` |

#### Returns

`number`

Angle in radians, always in the range [0, 2π)

***

### angleY3D()

```ts
function angleY3D(xyz): number;
```

Defined in: [3d/angle-y-3d.ts:8](https://github.com/claus-codes/vec/blob/1a991556255e5555afd05799362abaa631fc20cc/src/3d/angle-y-3d.ts#L8)

Gets the angle between a 3D vector and the positive y-axis in radians.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `xyz` | [`ArrayVector3D`](#arrayvector3d) | Vector as `[x, y, z]` |

#### Returns

`number`

Angle in radians, always in the range [0, 2π)

***

### angleZ3D()

```ts
function angleZ3D(xyz): number;
```

Defined in: [3d/angle-z-3d.ts:8](https://github.com/claus-codes/vec/blob/1a991556255e5555afd05799362abaa631fc20cc/src/3d/angle-z-3d.ts#L8)

Gets the angle between a 3D vector and the positive z-axis in radians.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `xyz` | [`ArrayVector3D`](#arrayvector3d) | Vector as `[x, y, z]` |

#### Returns

`number`

Angle in radians, always in the range [0, 2π)

***

### clamp3D()

```ts
function clamp3D(
   xyz, 
   min, 
   max, 
   m?): ArrayVector3D;
```

Defined in: [3d/clamp-3d.ts:12](https://github.com/claus-codes/vec/blob/1a991556255e5555afd05799362abaa631fc20cc/src/3d/clamp-3d.ts#L12)

Clamps the magnitude of a vector between min and max.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `xyz` | [`ArrayVector3D`](#arrayvector3d) | Vector as `[x, y, z]` |
| `min` | `number` | Minimum magnitude |
| `max` | `number` | Maximum magnitude |
| `m?` | `number` | Optional current magnitude (default: `magnitude3D(xyz)`) |

#### Returns

[`ArrayVector3D`](#arrayvector3d)

The clamped vector

***

### clone3D()

```ts
function clone3D(xyz): ArrayVector3D;
```

Defined in: [3d/clone-3d.ts:8](https://github.com/claus-codes/vec/blob/1a991556255e5555afd05799362abaa631fc20cc/src/3d/clone-3d.ts#L8)

Clone a 3D vector.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `xyz` | [`ArrayVector3D`](#arrayvector3d) | Vector as `[x, y, z]` |

#### Returns

[`ArrayVector3D`](#arrayvector3d)

The cloned vector

***

### cross3D()

```ts
function cross3D(xyz1, xyz2): ArrayVector3D;
```

Defined in: [3d/cross-3d.ts:9](https://github.com/claus-codes/vec/blob/1a991556255e5555afd05799362abaa631fc20cc/src/3d/cross-3d.ts#L9)

Calculates the cross product of two 3D vectors.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `xyz1` | [`ArrayVector3D`](#arrayvector3d) | First vector as `[x, y, z]` |
| `xyz2` | [`ArrayVector3D`](#arrayvector3d) | Second vector as `[x, y, z]` |

#### Returns

[`ArrayVector3D`](#arrayvector3d)

The cross product

***

### distance3D()

```ts
function distance3D(xyz1, xyz2): number;
```

Defined in: [3d/distance-3d.ts:9](https://github.com/claus-codes/vec/blob/1a991556255e5555afd05799362abaa631fc20cc/src/3d/distance-3d.ts#L9)

Calculates the Euclidean distance between two 3D vectors.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `xyz1` | [`ArrayVector3D`](#arrayvector3d) | First vector as `[x, y, z]` |
| `xyz2` | [`ArrayVector3D`](#arrayvector3d) | Second vector as `[x, y, z]` |

#### Returns

`number`

Euclidian distance

***

### distanceChebyshev3D()

```ts
function distanceChebyshev3D(xyz1, xyz2): number;
```

Defined in: [3d/distance-chebyshev-3d.ts:9](https://github.com/claus-codes/vec/blob/1a991556255e5555afd05799362abaa631fc20cc/src/3d/distance-chebyshev-3d.ts#L9)

Calculates the Chebyshev distance between two 3D vectors.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `xyz1` | [`ArrayVector3D`](#arrayvector3d) | First vector as `[x, y, z]` as |
| `xyz2` | [`ArrayVector3D`](#arrayvector3d) | Second vector as `[x, y, z]` as |

#### Returns

`number`

Chebyshev distance

***

### distanceManhattan3D()

```ts
function distanceManhattan3D(xyz1, xyz2): number;
```

Defined in: [3d/distance-manhattan-3d.ts:9](https://github.com/claus-codes/vec/blob/1a991556255e5555afd05799362abaa631fc20cc/src/3d/distance-manhattan-3d.ts#L9)

Calculates the Manhattan distance between two 3D vectors.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `xyz1` | [`ArrayVector3D`](#arrayvector3d) | First vector as `[x, y, z]` |
| `xyz2` | [`ArrayVector3D`](#arrayvector3d) | Second vector as `[x, y, z]` |

#### Returns

`number`

Manhattan distance

***

### distanceMinkowski3D()

```ts
function distanceMinkowski3D(
   xyz1, 
   xyz2, 
   p): number;
```

Defined in: [3d/distance-minkowski-3d.ts:10](https://github.com/claus-codes/vec/blob/1a991556255e5555afd05799362abaa631fc20cc/src/3d/distance-minkowski-3d.ts#L10)

Calculates the Minkowski distance between two 3D vectors.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `xyz1` | [`ArrayVector3D`](#arrayvector3d) | First vector as `[x, y, z]` |
| `xyz2` | [`ArrayVector3D`](#arrayvector3d) | Second vector as `[x, y, z]` |
| `p` | `number` | Order of the Minkowski distance |

#### Returns

`number`

Minkowski distance

***

### distanceSq3D()

```ts
function distanceSq3D(xyz1, xyz2): number;
```

Defined in: [3d/distance-sq-3d.ts:9](https://github.com/claus-codes/vec/blob/1a991556255e5555afd05799362abaa631fc20cc/src/3d/distance-sq-3d.ts#L9)

Calculates the squared Euclidean distance between two 3D vectors.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `xyz1` | [`ArrayVector3D`](#arrayvector3d) | First vector as `[x, y, z]` |
| `xyz2` | [`ArrayVector3D`](#arrayvector3d) | Second vector as `[x, y, z]` |

#### Returns

`number`

Squared Euclidian distance

***

### divide3D()

```ts
function divide3D(xyz1, xyz2): ArrayVector3D;
```

Defined in: [3d/divide-3d.ts:9](https://github.com/claus-codes/vec/blob/1a991556255e5555afd05799362abaa631fc20cc/src/3d/divide-3d.ts#L9)

Divides one 3D vector with another.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `xyz1` | [`ArrayVector3D`](#arrayvector3d) | First vector as `[x, y, z]` |
| `xyz2` | [`ArrayVector3D`](#arrayvector3d) | Second vector as `[x, y, z]` |

#### Returns

[`ArrayVector3D`](#arrayvector3d)

The divided vector

***

### dot3D()

```ts
function dot3D(xyz1, xyz2): number;
```

Defined in: [3d/dot-3d.ts:9](https://github.com/claus-codes/vec/blob/1a991556255e5555afd05799362abaa631fc20cc/src/3d/dot-3d.ts#L9)

Calculates the dot product of two 3D vectors.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `xyz1` | [`ArrayVector3D`](#arrayvector3d) | First vector as `[x, y, z]` |
| `xyz2` | [`ArrayVector3D`](#arrayvector3d) | Second vector as `[x, y, z]` |

#### Returns

`number`

Dot product

***

### fromCylindricalCoords()

```ts
function fromCylindricalCoords(
   r, 
   phi, 
   z): ArrayVector3D;
```

Defined in: [3d/from-cylindrical-coords-3d.ts:10](https://github.com/claus-codes/vec/blob/1a991556255e5555afd05799362abaa631fc20cc/src/3d/from-cylindrical-coords-3d.ts#L10)

Creates a vector from cylindrical coordinates.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `r` | `number` | Radius |
| `phi` | `number` | Angle in radians |
| `z` | `number` | Vector z axis |

#### Returns

[`ArrayVector3D`](#arrayvector3d)

Vector

***

### fromObject3D()

```ts
function fromObject3D(vector3D): ArrayVector3D;
```

Defined in: [3d/from-object-3d.ts:8](https://github.com/claus-codes/vec/blob/1a991556255e5555afd05799362abaa631fc20cc/src/3d/from-object-3d.ts#L8)

Creates an ArrayVector3D from an object with x, y and z properties.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `vector3D` | \{ `x`: `number`; `y`: `number`; `z`: `number`; \} | Object with x, y and z properties |
| `vector3D.x` | `number` | - |
| `vector3D.y` | `number` | - |
| `vector3D.z` | `number` | - |

#### Returns

[`ArrayVector3D`](#arrayvector3d)

Vector

***

### fromSphericalCoords3D()

```ts
function fromSphericalCoords3D(
   theta, 
   phi, 
   m?): ArrayVector3D;
```

Defined in: [3d/from-spherical-coords-3d.ts:10](https://github.com/claus-codes/vec/blob/1a991556255e5555afd05799362abaa631fc20cc/src/3d/from-spherical-coords-3d.ts#L10)

Creates a 3D vector from spherical coordinates.

#### Parameters

| Parameter | Type | Default value | Description |
| ------ | ------ | ------ | ------ |
| `theta` | `number` | `undefined` | First angle |
| `phi` | `number` | `undefined` | Second angle |
| `m?` | `number` | `1` | Optional magnitude (default: `1`) |

#### Returns

[`ArrayVector3D`](#arrayvector3d)

Vector

***

### immutable3D()

```ts
function immutable3D(xyz): readonly [number, number, number];
```

Defined in: [3d/immutable-3d.ts:8](https://github.com/claus-codes/vec/blob/1a991556255e5555afd05799362abaa631fc20cc/src/3d/immutable-3d.ts#L8)

Create an immutable 3D vector.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `xyz` | [`ArrayVector3D`](#arrayvector3d) | Vector as `[x, y, z]` |

#### Returns

readonly \[`number`, `number`, `number`\]

The immutable vector

***

### isEqual3D()

```ts
function isEqual3D(xyz1, xyz2): boolean;
```

Defined in: [3d/is-equal-3d.ts:9](https://github.com/claus-codes/vec/blob/1a991556255e5555afd05799362abaa631fc20cc/src/3d/is-equal-3d.ts#L9)

Checks if two 3D vectors are equal.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `xyz1` | [`ArrayVector3D`](#arrayvector3d) | First vector as `[x, y, z]` |
| `xyz2` | [`ArrayVector3D`](#arrayvector3d) | Second vector as `[x, y, z]` |

#### Returns

`boolean`

`true` if the vectors are equal, `false` otherwise

***

### isEqualApprox3D()

```ts
function isEqualApprox3D(
   xyz1, 
   xyz2, 
   epsilon): boolean;
```

Defined in: [3d/is-equal-approx-3d.ts:10](https://github.com/claus-codes/vec/blob/1a991556255e5555afd05799362abaa631fc20cc/src/3d/is-equal-approx-3d.ts#L10)

Compares two 3D vectors using an epsilon value for floating-point comparison.

#### Parameters

| Parameter | Type | Default value | Description |
| ------ | ------ | ------ | ------ |
| `xyz1` | [`ArrayVector3D`](#arrayvector3d) | `undefined` | First vector as `[x, y, z]` |
| `xyz2` | [`ArrayVector3D`](#arrayvector3d) | `undefined` | Second vector as `[x, y, z]` |
| `epsilon` | `number` | `Number.EPSILON` | Tolerance for comparison (default: `Number.EPSILON`) |

#### Returns

`boolean`

`true` if the vectors are approximately equal, `false` otherwise

***

### isInfinite3D()

```ts
function isInfinite3D(xyz): boolean;
```

Defined in: [3d/is-infinite-3d.ts:8](https://github.com/claus-codes/vec/blob/1a991556255e5555afd05799362abaa631fc20cc/src/3d/is-infinite-3d.ts#L8)

Checks if a vector has infinite components.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `xyz` | [`ArrayVector3D`](#arrayvector3d) | Vector as `[x, y, z]` |

#### Returns

`boolean`

`true` if the vector has infinite components, `false` otherwise

***

### isNaN3D()

```ts
function isNaN3D(xyz): boolean;
```

Defined in: [3d/is-nan-3d.ts:8](https://github.com/claus-codes/vec/blob/1a991556255e5555afd05799362abaa631fc20cc/src/3d/is-nan-3d.ts#L8)

Checks if a 3D vector has NaN components.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `xyz` | [`ArrayVector3D`](#arrayvector3d) | Vector as `[x, y, z]` |

#### Returns

`boolean`

`true` if the vector has `NaN` components, `false` otherwise.

***

### isOpposite3D()

```ts
function isOpposite3D(xyz1, xyz2): boolean;
```

Defined in: [3d/is-opposite-3d.ts:9](https://github.com/claus-codes/vec/blob/1a991556255e5555afd05799362abaa631fc20cc/src/3d/is-opposite-3d.ts#L9)

Checks if two 3D vectors are opposite.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `xyz1` | [`ArrayVector3D`](#arrayvector3d) | First vector as `[x, y, z]` |
| `xyz2` | [`ArrayVector3D`](#arrayvector3d) | Second vector as `[x, y, z]` |

#### Returns

`boolean`

`true` if the vectors are opposite, `false` otherwise

***

### isZero3D()

```ts
function isZero3D(xyz): boolean;
```

Defined in: [3d/is-zero-3d.ts:8](https://github.com/claus-codes/vec/blob/1a991556255e5555afd05799362abaa631fc20cc/src/3d/is-zero-3d.ts#L8)

Checks if a 3D vector is zero.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `xyz` | [`ArrayVector3D`](#arrayvector3d) | Vector as `[x, y, z]` |

#### Returns

`boolean`

`true` if the vector is zero, `false` otherwise

***

### lerp3D()

```ts
function lerp3D(
   xyz1, 
   xyz2, 
   t): ArrayVector3D;
```

Defined in: [3d/lerp-3d.ts:10](https://github.com/claus-codes/vec/blob/1a991556255e5555afd05799362abaa631fc20cc/src/3d/lerp-3d.ts#L10)

Performs linear interpolation between two vectors.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `xyz1` | [`ArrayVector3D`](#arrayvector3d) | First vector as `[x, y, z]` |
| `xyz2` | [`ArrayVector3D`](#arrayvector3d) | Second vector as `[x, y, z]` |
| `t` | `number` | Interpolation parameter |

#### Returns

[`ArrayVector3D`](#arrayvector3d)

The interpolated vector

***

### limitMax3D()

```ts
function limitMax3D(
   xyz, 
   max, 
   m?): ArrayVector3D;
```

Defined in: [3d/limit-max-3d.ts:11](https://github.com/claus-codes/vec/blob/1a991556255e5555afd05799362abaa631fc20cc/src/3d/limit-max-3d.ts#L11)

Limits the maximum magnitude of a 3D vector.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `xyz` | [`ArrayVector3D`](#arrayvector3d) | Vector as `[x, y, z]` |
| `max` | `number` | Maximum magnitude |
| `m?` | `number` | Optional current magnitude (default: `magnitude3D(xyz)`) |

#### Returns

[`ArrayVector3D`](#arrayvector3d)

The adjusted vector

***

### limitMin3D()

```ts
function limitMin3D(
   xyz, 
   min, 
   m?): ArrayVector3D;
```

Defined in: [3d/limit-min-3d.ts:11](https://github.com/claus-codes/vec/blob/1a991556255e5555afd05799362abaa631fc20cc/src/3d/limit-min-3d.ts#L11)

Limits the minimum magnitude of a 3D vector.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `xyz` | [`ArrayVector3D`](#arrayvector3d) | Vector as `[x, y, z]` |
| `min` | `number` | Minimum magnitude |
| `m?` | `number` | Optional current magnitude (default: `magnitude3D(xyz)`) |

#### Returns

[`ArrayVector3D`](#arrayvector3d)

The adjusted vector

***

### lookAt3D()

```ts
function lookAt3D(
   xyz1, 
   xyz2, 
   m1?, 
   m2?): ArrayVector3D;
```

Defined in: [3d/look-at-3d.ts:12](https://github.com/claus-codes/vec/blob/1a991556255e5555afd05799362abaa631fc20cc/src/3d/look-at-3d.ts#L12)

Creates a vector pointing from the first vector to the second vector, maintaining the magnitude of the first vector.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `xyz1` | [`ArrayVector3D`](#arrayvector3d) | First vector as `[x, y, z]` (source direction) |
| `xyz2` | [`ArrayVector3D`](#arrayvector3d) | Second vector as `[x, y, z]` (target direction) |
| `m1?` | `number` | Optional current magnitude of the first vector (default: `magnitude3D(xyz1)`) |
| `m2?` | `number` | Optional current magnitude of the second vector (default: `magnitude3D(xyz2)`) |

#### Returns

[`ArrayVector3D`](#arrayvector3d)

The look-at vector

***

### magnitude3D()

```ts
function magnitude3D(xyz): number;
```

Defined in: [3d/magnitude-3d.ts:8](https://github.com/claus-codes/vec/blob/1a991556255e5555afd05799362abaa631fc20cc/src/3d/magnitude-3d.ts#L8)

Calculates the magnitude of a 3D vector.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `xyz` | [`ArrayVector3D`](#arrayvector3d) | Vector as `[x, y, z]` |

#### Returns

`number`

Magnitude of the vector

***

### magnitudeSq3D()

```ts
function magnitudeSq3D(xyz): number;
```

Defined in: [3d/magnitude-sq-3d.ts:8](https://github.com/claus-codes/vec/blob/1a991556255e5555afd05799362abaa631fc20cc/src/3d/magnitude-sq-3d.ts#L8)

Calculate the squared magnitude of a 3D vector.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `xyz` | [`ArrayVector3D`](#arrayvector3d) | Vector as `[x, y, z]` |

#### Returns

`number`

Squared magnitude

***

### multiply3D()

```ts
function multiply3D(xyz1, xyz2): ArrayVector3D;
```

Defined in: [3d/multiply-3d.ts:9](https://github.com/claus-codes/vec/blob/1a991556255e5555afd05799362abaa631fc20cc/src/3d/multiply-3d.ts#L9)

Multiplies one 3D vector with another component-wise.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `xyz1` | [`ArrayVector3D`](#arrayvector3d) | First vector as `[x, y, z]` |
| `xyz2` | [`ArrayVector3D`](#arrayvector3d) | Second vector as `[x, y, z]` |

#### Returns

[`ArrayVector3D`](#arrayvector3d)

The multiplied value

***

### negate3D()

```ts
function negate3D(xyz): ArrayVector3D;
```

Defined in: [3d/negate-3d.ts:8](https://github.com/claus-codes/vec/blob/1a991556255e5555afd05799362abaa631fc20cc/src/3d/negate-3d.ts#L8)

Negates a 3D vector.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `xyz` | [`ArrayVector3D`](#arrayvector3d) | Vector as `[x, y, z]` |

#### Returns

[`ArrayVector3D`](#arrayvector3d)

The negated vector

***

### normalize3D()

```ts
function normalize3D(xyz, m?): ArrayVector3D;
```

Defined in: [3d/normalize-3d.ts:10](https://github.com/claus-codes/vec/blob/1a991556255e5555afd05799362abaa631fc20cc/src/3d/normalize-3d.ts#L10)

Normalize a 3D vector.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `xyz` | [`ArrayVector3D`](#arrayvector3d) | Vector as `[x, y, z]` |
| `m?` | `number` | Optional current magnitude (default: `magnitude3D(xyz)`) |

#### Returns

[`ArrayVector3D`](#arrayvector3d)

The normalized vector

***

### one3D()

```ts
function one3D(): ArrayVector3D;
```

Defined in: [3d/one-3d.ts:7](https://github.com/claus-codes/vec/blob/1a991556255e5555afd05799362abaa631fc20cc/src/3d/one-3d.ts#L7)

Creates a 3D vector with all components to to 1.0.

#### Returns

[`ArrayVector3D`](#arrayvector3d)

Vector `[1, 1, 1]`

***

### project3D()

```ts
function project3D(
   xyz1, 
   xyz2, 
   m1?, 
   m2?): ArrayVector3D;
```

Defined in: [3d/project-3d.ts:12](https://github.com/claus-codes/vec/blob/1a991556255e5555afd05799362abaa631fc20cc/src/3d/project-3d.ts#L12)

Projects one 3D vector onto the second.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `xyz1` | [`ArrayVector3D`](#arrayvector3d) | Vector to project |
| `xyz2` | [`ArrayVector3D`](#arrayvector3d) | Vector to project onto |
| `m1?` | `number` | Optional magnitude of the vector to project (default: `magnitude3D(xyz1)`) |
| `m2?` | `number` | Optional magnitude of the vector to project onto (default: `magnitude3D(xyz2)`) |

#### Returns

[`ArrayVector3D`](#arrayvector3d)

The projected vector

***

### random3D()

```ts
function random3D(random): ArrayVector3D;
```

Defined in: [3d/random-3d.ts:9](https://github.com/claus-codes/vec/blob/1a991556255e5555afd05799362abaa631fc20cc/src/3d/random-3d.ts#L9)

Creates a random unit 3D vector.

#### Parameters

| Parameter | Type | Default value | Description |
| ------ | ------ | ------ | ------ |
| `random` | () => `number` | `Math.random` | A function that returns a random number between 0 and 1 (default: `Math.random`) |

#### Returns

[`ArrayVector3D`](#arrayvector3d)

Random unit vector

***

### reflect3D()

```ts
function reflect3D(xyz, normal): ArrayVector3D;
```

Defined in: [3d/reflect-3d.ts:11](https://github.com/claus-codes/vec/blob/1a991556255e5555afd05799362abaa631fc20cc/src/3d/reflect-3d.ts#L11)

Reflects a vector across a normal vector.
The normal vector should be normalized (unit length).

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `xyz` | [`ArrayVector3D`](#arrayvector3d) | Vector as `[x, y, z]` to reflect |
| `normal` | [`ArrayVector3D`](#arrayvector3d) | Normal vector to reflect across (must be normalized) |

#### Returns

[`ArrayVector3D`](#arrayvector3d)

The reflected vector

***

### rotateX3D()

```ts
function rotateX3D(
   xyz, 
   phi, 
   axis): ArrayVector3D;
```

Defined in: [3d/rotate-x-3d.ts:10](https://github.com/claus-codes/vec/blob/1a991556255e5555afd05799362abaa631fc20cc/src/3d/rotate-x-3d.ts#L10)

Rotates a 3D vector around the x-axis.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `xyz` | [`ArrayVector3D`](#arrayvector3d) | Vector as `[x, y, z]` |
| `phi` | `number` | Angle of rotation in radians |
| `axis` | [`ArrayVector3D`](#arrayvector3d) | Rotation axis point (default: `[0, 0, 0]`) |

#### Returns

[`ArrayVector3D`](#arrayvector3d)

The rotated vector

***

### rotateY3D()

```ts
function rotateY3D(
   xyz, 
   phi, 
   axis): ArrayVector3D;
```

Defined in: [3d/rotate-y-3d.ts:10](https://github.com/claus-codes/vec/blob/1a991556255e5555afd05799362abaa631fc20cc/src/3d/rotate-y-3d.ts#L10)

Rotates a 3D vector around the y-axis.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `xyz` | [`ArrayVector3D`](#arrayvector3d) | Vector as `[x, y, z]` |
| `phi` | `number` | Angle of rotation in radians |
| `axis` | [`ArrayVector3D`](#arrayvector3d) | Rotation axis point (default: `[0, 0, 0]`) |

#### Returns

[`ArrayVector3D`](#arrayvector3d)

The rotated vector

***

### rotateZ3D()

```ts
function rotateZ3D(
   xyz, 
   phi, 
   axis): ArrayVector3D;
```

Defined in: [3d/rotate-z-3d.ts:10](https://github.com/claus-codes/vec/blob/1a991556255e5555afd05799362abaa631fc20cc/src/3d/rotate-z-3d.ts#L10)

Rotates a 3D vector around the z-axis.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `xyz` | [`ArrayVector3D`](#arrayvector3d) | Vector as `[x, y, z]` |
| `phi` | `number` | Angle of rotation in radians |
| `axis` | [`ArrayVector3D`](#arrayvector3d) | Rotation axis point (default: `[0, 0, 0]`) |

#### Returns

[`ArrayVector3D`](#arrayvector3d)

The rotated vector

***

### setMagnitude3D()

```ts
function setMagnitude3D(
   xyz, 
   newMagnitude, 
   m?): ArrayVector3D;
```

Defined in: [3d/set-magnitude-3d.ts:11](https://github.com/claus-codes/vec/blob/1a991556255e5555afd05799362abaa631fc20cc/src/3d/set-magnitude-3d.ts#L11)

Sets the magnitude (length) of a 3D vector, maintaining its direction.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `xyz` | [`ArrayVector3D`](#arrayvector3d) | Vector as `[x, y, z]` |
| `newMagnitude` | `number` | New magnitude |
| `m?` | `number` | Optional current magnitude (default: `magnitude3D(xyz)`) |

#### Returns

[`ArrayVector3D`](#arrayvector3d)

The adjusted vector

***

### subtract3D()

```ts
function subtract3D(xyz1, xyz2): ArrayVector3D;
```

Defined in: [3d/subtract-3d.ts:9](https://github.com/claus-codes/vec/blob/1a991556255e5555afd05799362abaa631fc20cc/src/3d/subtract-3d.ts#L9)

Subtracts a 3D vector from another.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `xyz1` | [`ArrayVector3D`](#arrayvector3d) | First vector as `[x, y, z]` |
| `xyz2` | [`ArrayVector3D`](#arrayvector3d) | Second vector as `[x, y, z]` |

#### Returns

[`ArrayVector3D`](#arrayvector3d)

The difference between the vectors

***

### zero3D()

```ts
function zero3D(): ArrayVector3D;
```

Defined in: [3d/zero-3d.ts:7](https://github.com/claus-codes/vec/blob/1a991556255e5555afd05799362abaa631fc20cc/src/3d/zero-3d.ts#L7)

Creates a zero 3D vector.

#### Returns

[`ArrayVector3D`](#arrayvector3d)

Vector `[0, 0, 0]`
