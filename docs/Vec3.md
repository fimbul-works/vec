[@fimbul-works/vec](README.md) / Vec3

# Vec3

Documentation for 3D Vector class.

## Classes

### Vec3

Defined in: [vec3.ts:11](https://github.com/claus-codes/vec/blob/1a991556255e5555afd05799362abaa631fc20cc/src/vec3.ts#L11)

Represents a 3D vector with various operations.

#### Constructors

##### Constructor

```ts
new Vec3(
   x, 
   y, 
   z): Vec3;
```

Defined in: [vec3.ts:39](https://github.com/claus-codes/vec/blob/1a991556255e5555afd05799362abaa631fc20cc/src/vec3.ts#L39)

Creates a new Vec3 instance.

###### Parameters

| Parameter | Type | Default value | Description |
| ------ | ------ | ------ | ------ |
| `x` | `number` | `0` | The x-coordinate of the vector. |
| `y` | `number` | `0` | The y-coordinate of the vector. |
| `z` | `number` | `0` | The z-coordinate of the vector. |

###### Returns

[`Vec3`](#vec3)

#### Accessors

##### angleX

###### Get Signature

```ts
get angleX(): number;
```

Defined in: [vec3.ts:636](https://github.com/claus-codes/vec/blob/1a991556255e5555afd05799362abaa631fc20cc/src/vec3.ts#L636)

Gets the angle between the vector and the positive x-axis in radians.

###### Returns

`number`

The angle in radians, always in the range [0, 2π).

##### angleY

###### Get Signature

```ts
get angleY(): number;
```

Defined in: [vec3.ts:644](https://github.com/claus-codes/vec/blob/1a991556255e5555afd05799362abaa631fc20cc/src/vec3.ts#L644)

Gets the angle between the vector and the positive y-axis in radians.

###### Returns

`number`

The angle in radians, always in the range [0, 2π).

##### angleZ

###### Get Signature

```ts
get angleZ(): number;
```

Defined in: [vec3.ts:652](https://github.com/claus-codes/vec/blob/1a991556255e5555afd05799362abaa631fc20cc/src/vec3.ts#L652)

Gets the angle between the vector and the positive z-axis in radians.

###### Returns

`number`

The angle in radians, always in the range [0, 2π).

##### b

###### Get Signature

```ts
get b(): number;
```

Defined in: [vec3.ts:602](https://github.com/claus-codes/vec/blob/1a991556255e5555afd05799362abaa631fc20cc/src/vec3.ts#L602)

Gets the Blue-component of the color.

###### Returns

`number`

The Blue-component.

###### Set Signature

```ts
set b(b): void;
```

Defined in: [vec3.ts:611](https://github.com/claus-codes/vec/blob/1a991556255e5555afd05799362abaa631fc20cc/src/vec3.ts#L611)

Sets the Blue-component of the Color.

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `b` | `number` | The new Blue-component. |

###### Returns

`void`

##### g

###### Get Signature

```ts
get g(): number;
```

Defined in: [vec3.ts:585](https://github.com/claus-codes/vec/blob/1a991556255e5555afd05799362abaa631fc20cc/src/vec3.ts#L585)

Gets the Green-component of a Color.

###### Returns

`number`

The Green-component.

###### Set Signature

```ts
set g(g): void;
```

Defined in: [vec3.ts:594](https://github.com/claus-codes/vec/blob/1a991556255e5555afd05799362abaa631fc20cc/src/vec3.ts#L594)

Sets the Green-component of the Color.

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `g` | `number` | The new Green-component. |

###### Returns

`void`

##### magnitude

###### Get Signature

```ts
get magnitude(): number;
```

Defined in: [vec3.ts:660](https://github.com/claus-codes/vec/blob/1a991556255e5555afd05799362abaa631fc20cc/src/vec3.ts#L660)

Sets the magnitude (length) of the vector, maintaining its direction.

###### Returns

`number`

###### Set Signature

```ts
set magnitude(m): void;
```

Defined in: [vec3.ts:677](https://github.com/claus-codes/vec/blob/1a991556255e5555afd05799362abaa631fc20cc/src/vec3.ts#L677)

Sets the magnitude (length) of the vector, maintaining its direction.

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `m` | `number` | The new magnitude. |

###### Returns

`void`

##### magnitudeSq

###### Get Signature

```ts
get magnitudeSq(): number;
```

Defined in: [vec3.ts:669](https://github.com/claus-codes/vec/blob/1a991556255e5555afd05799362abaa631fc20cc/src/vec3.ts#L669)

Gets the squared magnitude of the vector.
This is faster to compute than the actual magnitude and is useful for comparisons.

###### Returns

`number`

The squared magnitude of the vector.

##### r

###### Get Signature

```ts
get r(): number;
```

Defined in: [vec3.ts:568](https://github.com/claus-codes/vec/blob/1a991556255e5555afd05799362abaa631fc20cc/src/vec3.ts#L568)

Gets the Red-component of a Color.

###### Returns

`number`

The Red-component.

###### Set Signature

```ts
set r(r): void;
```

Defined in: [vec3.ts:577](https://github.com/claus-codes/vec/blob/1a991556255e5555afd05799362abaa631fc20cc/src/vec3.ts#L577)

Sets the Red-component of a Color.

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `r` | `number` | The new Red-component. |

###### Returns

`void`

##### rgb

###### Get Signature

```ts
get rgb(): [number, number, number];
```

Defined in: [vec3.ts:619](https://github.com/claus-codes/vec/blob/1a991556255e5555afd05799362abaa631fc20cc/src/vec3.ts#L619)

Gets a copy of the vector's components as an array.

###### Returns

\[`number`, `number`, `number`\]

An array containing the x, y and z components of the vector.

###### Set Signature

```ts
set rgb(rgb): void;
```

Defined in: [vec3.ts:628](https://github.com/claus-codes/vec/blob/1a991556255e5555afd05799362abaa631fc20cc/src/vec3.ts#L628)

Sets all components of the Color at once.

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `rgb` | \[`number`, `number`, `number`\] | An array containing the new Red, Green and Blue components. |

###### Returns

`void`

##### x

###### Get Signature

```ts
get x(): number;
```

Defined in: [vec3.ts:494](https://github.com/claus-codes/vec/blob/1a991556255e5555afd05799362abaa631fc20cc/src/vec3.ts#L494)

Gets the x-component of the vector.

###### Returns

`number`

The x-component.

###### Set Signature

```ts
set x(x): void;
```

Defined in: [vec3.ts:503](https://github.com/claus-codes/vec/blob/1a991556255e5555afd05799362abaa631fc20cc/src/vec3.ts#L503)

Sets the x-component of the vector.

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `x` | `number` | The new x-component. |

###### Returns

`void`

##### xyz

###### Get Signature

```ts
get xyz(): [number, number, number];
```

Defined in: [vec3.ts:548](https://github.com/claus-codes/vec/blob/1a991556255e5555afd05799362abaa631fc20cc/src/vec3.ts#L548)

Gets a copy of the vector's components as an array.

###### Returns

\[`number`, `number`, `number`\]

An array containing the x, y and z components of the vector.

###### Set Signature

```ts
set xyz(xyz): void;
```

Defined in: [vec3.ts:557](https://github.com/claus-codes/vec/blob/1a991556255e5555afd05799362abaa631fc20cc/src/vec3.ts#L557)

Sets all components of the vector at once.

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `xyz` | \[`number`, `number`, `number`\] | An array containing the new x, y and z components. |

###### Returns

`void`

##### y

###### Get Signature

```ts
get y(): number;
```

Defined in: [vec3.ts:512](https://github.com/claus-codes/vec/blob/1a991556255e5555afd05799362abaa631fc20cc/src/vec3.ts#L512)

Gets the y-component of the vector.

###### Returns

`number`

The y-component.

###### Set Signature

```ts
set y(y): void;
```

Defined in: [vec3.ts:521](https://github.com/claus-codes/vec/blob/1a991556255e5555afd05799362abaa631fc20cc/src/vec3.ts#L521)

Sets the y-component of the vector.

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `y` | `number` | The new y-component. |

###### Returns

`void`

##### z

###### Get Signature

```ts
get z(): number;
```

Defined in: [vec3.ts:530](https://github.com/claus-codes/vec/blob/1a991556255e5555afd05799362abaa631fc20cc/src/vec3.ts#L530)

Gets the z-component of the vector.

###### Returns

`number`

The z-component.

###### Set Signature

```ts
set z(z): void;
```

Defined in: [vec3.ts:539](https://github.com/claus-codes/vec/blob/1a991556255e5555afd05799362abaa631fc20cc/src/vec3.ts#L539)

Sets the z-component of the vector.

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `z` | `number` | The new z-component. |

###### Returns

`void`

#### Methods

##### \[iterator\]()

```ts
iterator: IterableIterator<number>;
```

Defined in: [vec3.ts:1132](https://github.com/claus-codes/vec/blob/1a991556255e5555afd05799362abaa631fc20cc/src/vec3.ts#L1132)

Makes the Vec3 instance iterable.

###### Returns

`IterableIterator`\<`number`\>

###### Yields

The x, y and z components of the vector.

##### add()

```ts
add(v): Vec3;
```

Defined in: [vec3.ts:690](https://github.com/claus-codes/vec/blob/1a991556255e5555afd05799362abaa631fc20cc/src/vec3.ts#L690)

Adds another vector to this vector.

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `v` | [`Vec3`](#vec3) | The vector to add. |

###### Returns

[`Vec3`](#vec3)

This Vec3 instance for method chaining.

##### angleBetween()

```ts
angleBetween(v): number;
```

Defined in: [vec3.ts:742](https://github.com/claus-codes/vec/blob/1a991556255e5555afd05799362abaa631fc20cc/src/vec3.ts#L742)

Calculates the angle between this vector and another vector.

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `v` | [`Vec3`](#vec3) | The other vector. |

###### Returns

`number`

The angle between the vectors in radians.

##### clamp()

```ts
clamp(min, max): this;
```

Defined in: [vec3.ts:755](https://github.com/claus-codes/vec/blob/1a991556255e5555afd05799362abaa631fc20cc/src/vec3.ts#L755)

Clamps the magnitude of this vector between a minimum and maximum value.

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `min` | `number` | The minimum magnitude. |
| `max` | `number` | The maximum magnitude. |

###### Returns

`this`

This Vec3 instance for method chaining.

##### clone()

```ts
clone(): Vec3;
```

Defined in: [vec3.ts:775](https://github.com/claus-codes/vec/blob/1a991556255e5555afd05799362abaa631fc20cc/src/vec3.ts#L775)

Creates a copy of this vector.

###### Returns

[`Vec3`](#vec3)

A new Vec3 instance with the same components.

##### copy()

```ts
copy(v): this;
```

Defined in: [vec3.ts:784](https://github.com/claus-codes/vec/blob/1a991556255e5555afd05799362abaa631fc20cc/src/vec3.ts#L784)

Copies the components of another vector to this vector.

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `v` | [`Vec3`](#vec3) | The vector to copy from. |

###### Returns

`this`

This Vec3 instance for method chaining.

##### cross()

```ts
cross(v): this;
```

Defined in: [vec3.ts:806](https://github.com/claus-codes/vec/blob/1a991556255e5555afd05799362abaa631fc20cc/src/vec3.ts#L806)

Calculates cross product between this vector and another vector.

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `v` | [`Vec3`](#vec3) | The other vector. |

###### Returns

`this`

This Vec3 instance for method chaining.

##### distance()

```ts
distance(v): number;
```

Defined in: [vec3.ts:841](https://github.com/claus-codes/vec/blob/1a991556255e5555afd05799362abaa631fc20cc/src/vec3.ts#L841)

Calculates the distance between this vector and another vector.

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `v` | [`Vec3`](#vec3) | The other vector. |

###### Returns

`number`

The distance between the vectors.

##### distanceChebyshev()

```ts
distanceChebyshev(v): number;
```

Defined in: [vec3.ts:850](https://github.com/claus-codes/vec/blob/1a991556255e5555afd05799362abaa631fc20cc/src/vec3.ts#L850)

Calculates the Chebyshev distance between vector and another vector.

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `v` | [`Vec3`](#vec3) | The other vector. |

###### Returns

`number`

The Chebyshev distance between the vectors.

##### distanceManhattan()

```ts
distanceManhattan(v): number;
```

Defined in: [vec3.ts:862](https://github.com/claus-codes/vec/blob/1a991556255e5555afd05799362abaa631fc20cc/src/vec3.ts#L862)

Calculates the Manhattan distance between vector and another vector.

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `v` | [`Vec3`](#vec3) | The other vector. |

###### Returns

`number`

The Manhattan distance between the vectors.

##### distanceMinkowski()

```ts
distanceMinkowski(v, p): number;
```

Defined in: [vec3.ts:872](https://github.com/claus-codes/vec/blob/1a991556255e5555afd05799362abaa631fc20cc/src/vec3.ts#L872)

Calculates the Minkowski distance between this vector and another vector.

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `v` | [`Vec3`](#vec3) | The other vector. |
| `p` | `number` | The order of the Minkowski distance. |

###### Returns

`number`

The Minkowski distance between the vectors.

##### distanceSq()

```ts
distanceSq(v): number;
```

Defined in: [vec3.ts:884](https://github.com/claus-codes/vec/blob/1a991556255e5555afd05799362abaa631fc20cc/src/vec3.ts#L884)

Calculates the squared distance between this vector and another vector.

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `v` | [`Vec3`](#vec3) | The other vector. |

###### Returns

`number`

The squared distance between the vectors.

##### divide()

```ts
divide(v): this;
```

Defined in: [vec3.ts:729](https://github.com/claus-codes/vec/blob/1a991556255e5555afd05799362abaa631fc20cc/src/vec3.ts#L729)

Divides this vector with another vector.

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `v` | [`Vec3`](#vec3) | The vector to divide with. |

###### Returns

`this`

This Vec3 instance for method chaining.

##### dot()

```ts
dot(v): number;
```

Defined in: [vec3.ts:797](https://github.com/claus-codes/vec/blob/1a991556255e5555afd05799362abaa631fc20cc/src/vec3.ts#L797)

Calculates the dot product of this vector with another vector.

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `v` | [`Vec3`](#vec3) | The other vector. |

###### Returns

`number`

The dot product of the vectors.

##### equals()

```ts
equals(v, epsilon): boolean;
```

Defined in: [vec3.ts:1095](https://github.com/claus-codes/vec/blob/1a991556255e5555afd05799362abaa631fc20cc/src/vec3.ts#L1095)

Compares this vector with another vector using an epsilon value for floating-point comparison.

###### Parameters

| Parameter | Type | Default value | Description |
| ------ | ------ | ------ | ------ |
| `v` | [`Vec3`](#vec3) | `undefined` | The vector to compare with. |
| `epsilon` | `number` | `Number.EPSILON` | The maximum difference between components to consider them equal. |

###### Returns

`boolean`

True if the vectors are equal within epsilon, false otherwise.

##### isInfinite()

```ts
isInfinite(): boolean;
```

Defined in: [vec3.ts:892](https://github.com/claus-codes/vec/blob/1a991556255e5555afd05799362abaa631fc20cc/src/vec3.ts#L892)

Checks if this vector has infinite components.

###### Returns

`boolean`

True if the vector has infinite components, false otherwise.

##### isNaN()

```ts
isNaN(): boolean;
```

Defined in: [vec3.ts:910](https://github.com/claus-codes/vec/blob/1a991556255e5555afd05799362abaa631fc20cc/src/vec3.ts#L910)

Checks if this vector has NaN components.

###### Returns

`boolean`

True if the vector has NaN components, false otherwise.

##### isZero()

```ts
isZero(): boolean;
```

Defined in: [vec3.ts:918](https://github.com/claus-codes/vec/blob/1a991556255e5555afd05799362abaa631fc20cc/src/vec3.ts#L918)

Checks if this vector is zero.

###### Returns

`boolean`

True if the vector is zero, false otherwise.

##### limitMax()

```ts
limitMax(max): this;
```

Defined in: [vec3.ts:927](https://github.com/claus-codes/vec/blob/1a991556255e5555afd05799362abaa631fc20cc/src/vec3.ts#L927)

Limits the maximum magnitude of this vector.

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `max` | `number` | The maximum magnitude. |

###### Returns

`this`

This Vec3 instance for method chaining.

##### limitMin()

```ts
limitMin(min): this;
```

Defined in: [vec3.ts:943](https://github.com/claus-codes/vec/blob/1a991556255e5555afd05799362abaa631fc20cc/src/vec3.ts#L943)

Limits the minimum magnitude of this vector.

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `min` | `number` | The minimum magnitude. |

###### Returns

`this`

This Vec3 instance for method chaining.

##### lookAt()

```ts
lookAt(v): this;
```

Defined in: [vec3.ts:959](https://github.com/claus-codes/vec/blob/1a991556255e5555afd05799362abaa631fc20cc/src/vec3.ts#L959)

Sets this vector to point towards another vector.

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `v` | [`Vec3`](#vec3) | The vector to look at. |

###### Returns

`this`

This Vec3 instance for method chaining.

##### multiply()

```ts
multiply(v): this;
```

Defined in: [vec3.ts:716](https://github.com/claus-codes/vec/blob/1a991556255e5555afd05799362abaa631fc20cc/src/vec3.ts#L716)

Multiplies this vector with another vector.

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `v` | [`Vec3`](#vec3) | The vector to multiply with. |

###### Returns

`this`

This Vec3 instance for method chaining.

##### negate()

```ts
negate(): this;
```

Defined in: [vec3.ts:973](https://github.com/claus-codes/vec/blob/1a991556255e5555afd05799362abaa631fc20cc/src/vec3.ts#L973)

Negates this vector.

###### Returns

`this`

This Vec3 instance for method chaining.

##### normalize()

```ts
normalize(): this;
```

Defined in: [vec3.ts:985](https://github.com/claus-codes/vec/blob/1a991556255e5555afd05799362abaa631fc20cc/src/vec3.ts#L985)

Normalizes this vector.

###### Returns

`this`

This Vec3 instance for method chaining.

##### project()

```ts
project(v): this;
```

Defined in: [vec3.ts:999](https://github.com/claus-codes/vec/blob/1a991556255e5555afd05799362abaa631fc20cc/src/vec3.ts#L999)

Projects this vector onto another vector.

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `v` | [`Vec3`](#vec3) | The vector to project onto. |

###### Returns

`this`

This Vec3 instance for method chaining.

##### random()

```ts
random(random): this;
```

Defined in: [vec3.ts:1018](https://github.com/claus-codes/vec/blob/1a991556255e5555afd05799362abaa631fc20cc/src/vec3.ts#L1018)

Sets this vector to a random direction with the same magnitude.

###### Parameters

| Parameter | Type | Default value | Description |
| ------ | ------ | ------ | ------ |
| `random` | () => `number` | `Math.random` | A function that returns a random number between 0 and 1. |

###### Returns

`this`

This Vec3 instance for method chaining.

##### reflect()

```ts
reflect(normal): this;
```

Defined in: [vec3.ts:826](https://github.com/claus-codes/vec/blob/1a991556255e5555afd05799362abaa631fc20cc/src/vec3.ts#L826)

Reflects this vector across a normal vector.
The normal vector should be normalized (unit length).

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `normal` | [`Vec3`](#vec3) | The normal vector to reflect across (must be normalized). |

###### Returns

`this`

This Vec3 instance for method chaining.

##### rotateX()

```ts
rotateX(phi): this;
```

Defined in: [vec3.ts:1028](https://github.com/claus-codes/vec/blob/1a991556255e5555afd05799362abaa631fc20cc/src/vec3.ts#L1028)

Rotates this vector around the X-axis.

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `phi` | `number` | The angle of rotation in radians. |

###### Returns

`this`

This Vec3 instance for method chaining.

##### rotateY()

```ts
rotateY(phi): this;
```

Defined in: [vec3.ts:1044](https://github.com/claus-codes/vec/blob/1a991556255e5555afd05799362abaa631fc20cc/src/vec3.ts#L1044)

Rotates this vector around the Y-axis.

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `phi` | `number` | The angle of rotation in radians. |

###### Returns

`this`

This Vec3 instance for method chaining.

##### rotateZ()

```ts
rotateZ(phi): this;
```

Defined in: [vec3.ts:1060](https://github.com/claus-codes/vec/blob/1a991556255e5555afd05799362abaa631fc20cc/src/vec3.ts#L1060)

Rotates this vector around the Z-axis.

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `phi` | `number` | The angle of rotation in radians. |

###### Returns

`this`

This Vec3 instance for method chaining.

##### satisfyEquality()

```ts
satisfyEquality(v): boolean;
```

Defined in: [vec3.ts:1076](https://github.com/claus-codes/vec/blob/1a991556255e5555afd05799362abaa631fc20cc/src/vec3.ts#L1076)

Checks if this vector is equal to another vector.

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `v` | [`Vec3`](#vec3) | The other vector. |

###### Returns

`boolean`

True if the vectors are equal, false otherwise.

##### satisfyOpposition()

```ts
satisfyOpposition(v): boolean;
```

Defined in: [vec3.ts:1085](https://github.com/claus-codes/vec/blob/1a991556255e5555afd05799362abaa631fc20cc/src/vec3.ts#L1085)

Checks if this vector is opposite to another vector.

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `v` | [`Vec3`](#vec3) | The other vector. |

###### Returns

`boolean`

True if the vectors are opposite, false otherwise.

##### scale()

```ts
scale(c): this;
```

Defined in: [vec3.ts:1108](https://github.com/claus-codes/vec/blob/1a991556255e5555afd05799362abaa631fc20cc/src/vec3.ts#L1108)

Scales this vector by a scalar value.

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `c` | `number` | The scalar value. |

###### Returns

`this`

This Vec3 instance for method chaining.

##### subtract()

```ts
subtract(v): this;
```

Defined in: [vec3.ts:703](https://github.com/claus-codes/vec/blob/1a991556255e5555afd05799362abaa631fc20cc/src/vec3.ts#L703)

Subtracts another vector from this vector.

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `v` | [`Vec3`](#vec3) | The vector to subtract. |

###### Returns

`this`

This Vec3 instance for method chaining.

##### toJSON()

```ts
toJSON(): {
  x: number;
  y: number;
};
```

Defined in: [vec3.ts:1159](https://github.com/claus-codes/vec/blob/1a991556255e5555afd05799362abaa631fc20cc/src/vec3.ts#L1159)

Serializes the vector to a JSON-friendly format.

###### Returns

```ts
{
  x: number;
  y: number;
}
```

A JSON-friendly object representation of the vector.

| Name | Type | Defined in |
| ------ | ------ | ------ |
| `x` | `number` | [vec3.ts:1159](https://github.com/claus-codes/vec/blob/1a991556255e5555afd05799362abaa631fc20cc/src/vec3.ts#L1159) |
| `y` | `number` | [vec3.ts:1159](https://github.com/claus-codes/vec/blob/1a991556255e5555afd05799362abaa631fc20cc/src/vec3.ts#L1159) |

##### toObject()

```ts
toObject(): {
  x: number;
  y: number;
  z: number;
};
```

Defined in: [vec3.ts:1150](https://github.com/claus-codes/vec/blob/1a991556255e5555afd05799362abaa631fc20cc/src/vec3.ts#L1150)

Converts the vector to a plain object.

###### Returns

```ts
{
  x: number;
  y: number;
  z: number;
}
```

An object with x, y and z properties.

| Name | Type | Defined in |
| ------ | ------ | ------ |
| `x` | `number` | [vec3.ts:1150](https://github.com/claus-codes/vec/blob/1a991556255e5555afd05799362abaa631fc20cc/src/vec3.ts#L1150) |
| `y` | `number` | [vec3.ts:1150](https://github.com/claus-codes/vec/blob/1a991556255e5555afd05799362abaa631fc20cc/src/vec3.ts#L1150) |
| `z` | `number` | [vec3.ts:1150](https://github.com/claus-codes/vec/blob/1a991556255e5555afd05799362abaa631fc20cc/src/vec3.ts#L1150) |

##### toString()

```ts
toString(): string;
```

Defined in: [vec3.ts:1142](https://github.com/claus-codes/vec/blob/1a991556255e5555afd05799362abaa631fc20cc/src/vec3.ts#L1142)

Returns a string representation of the vector.

###### Returns

`string`

A string in the format "Vec3(x, y, z)".

##### zero()

```ts
zero(): this;
```

Defined in: [vec3.ts:1120](https://github.com/claus-codes/vec/blob/1a991556255e5555afd05799362abaa631fc20cc/src/vec3.ts#L1120)

Sets this vector to zero.

###### Returns

`this`

This Vec3 instance for method chaining.

##### add()

```ts
static add(v, w): Vec3;
```

Defined in: [vec3.ts:52](https://github.com/claus-codes/vec/blob/1a991556255e5555afd05799362abaa631fc20cc/src/vec3.ts#L52)

Adds two vectors.

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `v` | [`Vec3`](#vec3) | The first vector. |
| `w` | [`Vec3`](#vec3) | The second vector. |

###### Returns

[`Vec3`](#vec3)

A new Vec3 instance representing the sum.

##### angleBetween()

```ts
static angleBetween(v, w): number;
```

Defined in: [vec3.ts:96](https://github.com/claus-codes/vec/blob/1a991556255e5555afd05799362abaa631fc20cc/src/vec3.ts#L96)

Calculates the angle between two vectors.

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `v` | [`Vec3`](#vec3) | The first vector. |
| `w` | [`Vec3`](#vec3) | The second vector. |

###### Returns

`number`

The angle between the vectors in radians.

##### cross()

```ts
static cross(v, w): Vec3;
```

Defined in: [vec3.ts:108](https://github.com/claus-codes/vec/blob/1a991556255e5555afd05799362abaa631fc20cc/src/vec3.ts#L108)

Calculates the cross product of two vectors.

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `v` | [`Vec3`](#vec3) | The first vector. |
| `w` | [`Vec3`](#vec3) | The second vector. |

###### Returns

[`Vec3`](#vec3)

The cross product of the two vectors.

##### distance()

```ts
static distance(v, w): number;
```

Defined in: [vec3.ts:142](https://github.com/claus-codes/vec/blob/1a991556255e5555afd05799362abaa631fc20cc/src/vec3.ts#L142)

Calculates the Euclidean distance between two vectors.

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `v` | [`Vec3`](#vec3) | The first vector. |
| `w` | [`Vec3`](#vec3) | The second vector. |

###### Returns

`number`

The distance between the vectors.

##### distanceChebyshev()

```ts
static distanceChebyshev(v, w): number;
```

Defined in: [vec3.ts:152](https://github.com/claus-codes/vec/blob/1a991556255e5555afd05799362abaa631fc20cc/src/vec3.ts#L152)

Calculates the Chebyshev distance between two vectors.

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `v` | [`Vec3`](#vec3) | The first vector. |
| `w` | [`Vec3`](#vec3) | The second vector. |

###### Returns

`number`

The Chebyshev distance between the vectors.

##### distanceManhattan()

```ts
static distanceManhattan(v, w): number;
```

Defined in: [vec3.ts:165](https://github.com/claus-codes/vec/blob/1a991556255e5555afd05799362abaa631fc20cc/src/vec3.ts#L165)

Calculates the Manhattan distance between two vectors.

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `v` | [`Vec3`](#vec3) | The first vector. |
| `w` | [`Vec3`](#vec3) | The second vector. |

###### Returns

`number`

The Manhattan distance between the vectors.

##### distanceMinkowski()

```ts
static distanceMinkowski(
   v, 
   w, 
   p): number;
```

Defined in: [vec3.ts:176](https://github.com/claus-codes/vec/blob/1a991556255e5555afd05799362abaa631fc20cc/src/vec3.ts#L176)

Calculates the Minkowski distance between two vectors.

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `v` | [`Vec3`](#vec3) | The first vector. |
| `w` | [`Vec3`](#vec3) | The second vector. |
| `p` | `number` | The order of the Minkowski distance. |

###### Returns

`number`

The Minkowski distance between the vectors.

##### distanceSq()

```ts
static distanceSq(v, w): number;
```

Defined in: [vec3.ts:188](https://github.com/claus-codes/vec/blob/1a991556255e5555afd05799362abaa631fc20cc/src/vec3.ts#L188)

Calculates the squared Euclidean distance between two vectors.

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `v` | [`Vec3`](#vec3) | The first vector. |
| `w` | [`Vec3`](#vec3) | The second vector. |

###### Returns

`number`

The squared distance between the vectors.

##### divide()

```ts
static divide(v, w): Vec3;
```

Defined in: [vec3.ts:82](https://github.com/claus-codes/vec/blob/1a991556255e5555afd05799362abaa631fc20cc/src/vec3.ts#L82)

Divides one vector with another.

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `v` | [`Vec3`](#vec3) | Divident. |
| `w` | [`Vec3`](#vec3) | Divisor. |

###### Returns

[`Vec3`](#vec3)

A new Vec3 instance representing the divided value.

##### dot()

```ts
static dot(v, w): number;
```

Defined in: [vec3.ts:198](https://github.com/claus-codes/vec/blob/1a991556255e5555afd05799362abaa631fc20cc/src/vec3.ts#L198)

Calculates the dot product of two vectors.

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `v` | [`Vec3`](#vec3) | The first vector. |
| `w` | [`Vec3`](#vec3) | The second vector. |

###### Returns

`number`

The dot product of the two vectors.

##### equals()

```ts
static equals(
   v, 
   w, 
   epsilon): boolean;
```

Defined in: [vec3.ts:429](https://github.com/claus-codes/vec/blob/1a991556255e5555afd05799362abaa631fc20cc/src/vec3.ts#L429)

Compares a vector with another vector using an epsilon value for floating-point comparison.

###### Parameters

| Parameter | Type | Default value | Description |
| ------ | ------ | ------ | ------ |
| `v` | [`Vec3`](#vec3) | `undefined` | The first vector. |
| `w` | [`Vec3`](#vec3) | `undefined` | The second vector. |
| `epsilon` | `number` | `Number.EPSILON` | The maximum difference between components to consider them equal. |

###### Returns

`boolean`

True if the vectors are equal within epsilon, false otherwise.

##### fromArray()

```ts
static fromArray(arr): Vec3;
```

Defined in: [vec3.ts:468](https://github.com/claus-codes/vec/blob/1a991556255e5555afd05799362abaa631fc20cc/src/vec3.ts#L468)

Creates a Vec3 from an array.

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `arr` | `number`[] \| \[`number`, `number`, `number`\] | An array containing the x, y, and z coordinates. |

###### Returns

[`Vec3`](#vec3)

A new Vec3 instance.

##### fromCylindricalCoords()

```ts
static fromCylindricalCoords(
   r, 
   phi, 
   z): Vec3;
```

Defined in: [vec3.ts:209](https://github.com/claus-codes/vec/blob/1a991556255e5555afd05799362abaa631fc20cc/src/vec3.ts#L209)

Creates a Vec3 from cylindrical coordinates.

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `r` | `number` | Radial distance from the z-axis |
| `phi` | `number` | Azimuthal angle in the x-y plane from the x-axis |
| `z` | `number` | Height above the x-y plane |

###### Returns

[`Vec3`](#vec3)

New Vec3 instance

##### fromJSON()

```ts
static fromJSON(json): Vec3;
```

Defined in: [vec3.ts:486](https://github.com/claus-codes/vec/blob/1a991556255e5555afd05799362abaa631fc20cc/src/vec3.ts#L486)

Creates a Vec3 instance from a JSON-parsed object.

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `json` | \{ `x`: `number`; `y`: `number`; `z`: `number`; \} | The JSON-parsed object containing x and y properties. |
| `json.x` | `number` | - |
| `json.y` | `number` | - |
| `json.z` | `number` | - |

###### Returns

[`Vec3`](#vec3)

A new Vec3 instance.

##### fromObject()

```ts
static fromObject(obj): Vec3;
```

Defined in: [vec3.ts:477](https://github.com/claus-codes/vec/blob/1a991556255e5555afd05799362abaa631fc20cc/src/vec3.ts#L477)

Creates a Vec3 from an object with x, y and z properties.

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `obj` | \{ `x`: `number`; `y`: `number`; `z`: `number`; \} | An object with x, y, and z properties. |
| `obj.x` | `number` | - |
| `obj.y` | `number` | - |
| `obj.z` | `number` | - |

###### Returns

[`Vec3`](#vec3)

A new Vec3 instance.

##### fromSphericalCoords()

```ts
static fromSphericalCoords(
   r, 
   theta, 
   phi): Vec3;
```

Defined in: [vec3.ts:220](https://github.com/claus-codes/vec/blob/1a991556255e5555afd05799362abaa631fc20cc/src/vec3.ts#L220)

Creates a Vec3 from spherical coordinates.

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `r` | `number` | Radial distance from origin |
| `theta` | `number` | Polar angle from the z-axis |
| `phi` | `number` | Azimuthal angle in the x-y plane from the x-axis |

###### Returns

[`Vec3`](#vec3)

New Vec3 instance

##### immutable()

```ts
static immutable(
   x, 
   y, 
   z): {
  get angleX(): number;
  get angleY(): number;
  get angleZ(): number;
  get b(): number;
  get g(): number;
  get isInfinite(): boolean;
  get isNaN(): boolean;
  get isZero(): boolean;
  get magnitude(): number;
  get magnitudeSq(): number;
  get r(): number;
  get rgb(): readonly number[];
  get x(): number;
  get xyz(): readonly number[];
  get y(): number;
  get z(): number;
};
```

Defined in: [vec3.ts:231](https://github.com/claus-codes/vec/blob/1a991556255e5555afd05799362abaa631fc20cc/src/vec3.ts#L231)

Creates an immutable Vec3-like object.

###### Parameters

| Parameter | Type | Default value | Description |
| ------ | ------ | ------ | ------ |
| `x` | `number` | `0` | The x-coordinate of the vector. |
| `y` | `number` | `0` | The y-coordinate of the vector. |
| `z` | `number` | `0` | The z-coordinate of the vector. |

###### Returns

```ts
{
  get angleX(): number;
  get angleY(): number;
  get angleZ(): number;
  get b(): number;
  get g(): number;
  get isInfinite(): boolean;
  get isNaN(): boolean;
  get isZero(): boolean;
  get magnitude(): number;
  get magnitudeSq(): number;
  get r(): number;
  get rgb(): readonly number[];
  get x(): number;
  get xyz(): readonly number[];
  get y(): number;
  get z(): number;
}
```

An immutable object with Vec3-like properties.

| Name | Type | Defined in |
| ------ | ------ | ------ |
| `get angleX` | `number` | [vec3.ts:284](https://github.com/claus-codes/vec/blob/1a991556255e5555afd05799362abaa631fc20cc/src/vec3.ts#L284) |
| `get angleY` | `number` | [vec3.ts:287](https://github.com/claus-codes/vec/blob/1a991556255e5555afd05799362abaa631fc20cc/src/vec3.ts#L287) |
| `get angleZ` | `number` | [vec3.ts:290](https://github.com/claus-codes/vec/blob/1a991556255e5555afd05799362abaa631fc20cc/src/vec3.ts#L290) |
| `get b` | `number` | [vec3.ts:272](https://github.com/claus-codes/vec/blob/1a991556255e5555afd05799362abaa631fc20cc/src/vec3.ts#L272) |
| `get g` | `number` | [vec3.ts:269](https://github.com/claus-codes/vec/blob/1a991556255e5555afd05799362abaa631fc20cc/src/vec3.ts#L269) |
| `get isInfinite` | `boolean` | [vec3.ts:293](https://github.com/claus-codes/vec/blob/1a991556255e5555afd05799362abaa631fc20cc/src/vec3.ts#L293) |
| `get isNaN` | `boolean` | [vec3.ts:296](https://github.com/claus-codes/vec/blob/1a991556255e5555afd05799362abaa631fc20cc/src/vec3.ts#L296) |
| `get isZero` | `boolean` | [vec3.ts:299](https://github.com/claus-codes/vec/blob/1a991556255e5555afd05799362abaa631fc20cc/src/vec3.ts#L299) |
| `get magnitude` | `number` | [vec3.ts:278](https://github.com/claus-codes/vec/blob/1a991556255e5555afd05799362abaa631fc20cc/src/vec3.ts#L278) |
| `get magnitudeSq` | `number` | [vec3.ts:281](https://github.com/claus-codes/vec/blob/1a991556255e5555afd05799362abaa631fc20cc/src/vec3.ts#L281) |
| `get r` | `number` | [vec3.ts:266](https://github.com/claus-codes/vec/blob/1a991556255e5555afd05799362abaa631fc20cc/src/vec3.ts#L266) |
| `get rgb` | readonly `number`[] | [vec3.ts:275](https://github.com/claus-codes/vec/blob/1a991556255e5555afd05799362abaa631fc20cc/src/vec3.ts#L275) |
| `get x` | `number` | [vec3.ts:254](https://github.com/claus-codes/vec/blob/1a991556255e5555afd05799362abaa631fc20cc/src/vec3.ts#L254) |
| `get xyz` | readonly `number`[] | [vec3.ts:263](https://github.com/claus-codes/vec/blob/1a991556255e5555afd05799362abaa631fc20cc/src/vec3.ts#L263) |
| `get y` | `number` | [vec3.ts:257](https://github.com/claus-codes/vec/blob/1a991556255e5555afd05799362abaa631fc20cc/src/vec3.ts#L257) |
| `get z` | `number` | [vec3.ts:260](https://github.com/claus-codes/vec/blob/1a991556255e5555afd05799362abaa631fc20cc/src/vec3.ts#L260) |

##### isInfinite()

```ts
static isInfinite(v): boolean;
```

Defined in: [vec3.ts:310](https://github.com/claus-codes/vec/blob/1a991556255e5555afd05799362abaa631fc20cc/src/vec3.ts#L310)

Checks if a vector has infinite components.

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `v` | [`Vec3`](#vec3) | The vector to check. |

###### Returns

`boolean`

True if the vector has infinite components, false otherwise.

##### isNaN()

```ts
static isNaN(v): boolean;
```

Defined in: [vec3.ts:329](https://github.com/claus-codes/vec/blob/1a991556255e5555afd05799362abaa631fc20cc/src/vec3.ts#L329)

Checks if a vector has NaN components.

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `v` | [`Vec3`](#vec3) | The vector to check. |

###### Returns

`boolean`

True if the vector has NaN components, false otherwise.

##### isZero()

```ts
static isZero(v): boolean;
```

Defined in: [vec3.ts:338](https://github.com/claus-codes/vec/blob/1a991556255e5555afd05799362abaa631fc20cc/src/vec3.ts#L338)

Checks if a vector is zero.

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `v` | [`Vec3`](#vec3) | The vector to check. |

###### Returns

`boolean`

True if the vector is zero, false otherwise.

##### lerp()

```ts
static lerp(
   v, 
   w, 
   t): Vec3;
```

Defined in: [vec3.ts:349](https://github.com/claus-codes/vec/blob/1a991556255e5555afd05799362abaa631fc20cc/src/vec3.ts#L349)

Performs linear interpolation between two vectors.

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `v` | [`Vec3`](#vec3) | The first vector. |
| `w` | [`Vec3`](#vec3) | The second vector. |
| `t` | `number` | The interpolation parameter (0 to 1). |

###### Returns

[`Vec3`](#vec3)

A new Vec3 instance representing the interpolated vector.

##### multiply()

```ts
static multiply(v, w): Vec3;
```

Defined in: [vec3.ts:72](https://github.com/claus-codes/vec/blob/1a991556255e5555afd05799362abaa631fc20cc/src/vec3.ts#L72)

Multiplies one vector with another.

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `v` | [`Vec3`](#vec3) | The first vector. |
| `w` | [`Vec3`](#vec3) | The second vector. |

###### Returns

[`Vec3`](#vec3)

A new Vec3 instance representing the multiplied value.

##### negate()

```ts
static negate(v): Vec3;
```

Defined in: [vec3.ts:363](https://github.com/claus-codes/vec/blob/1a991556255e5555afd05799362abaa631fc20cc/src/vec3.ts#L363)

Negates a vector.

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `v` | [`Vec3`](#vec3) | The vector to negate. |

###### Returns

[`Vec3`](#vec3)

A new Vec3 instance representing the negated vector.

##### normalize()

```ts
static normalize(v): Vec3;
```

Defined in: [vec3.ts:372](https://github.com/claus-codes/vec/blob/1a991556255e5555afd05799362abaa631fc20cc/src/vec3.ts#L372)

Normalizes a vector.

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `v` | [`Vec3`](#vec3) | The vector to normalize. |

###### Returns

[`Vec3`](#vec3)

A new Vec3 instance representing the normalized vector.

##### one()

```ts
static one(): Vec3;
```

Defined in: [vec3.ts:459](https://github.com/claus-codes/vec/blob/1a991556255e5555afd05799362abaa631fc20cc/src/vec3.ts#L459)

Creates a vector with all components set to 1.0.

###### Returns

[`Vec3`](#vec3)

A new Vec3 instance representing a vector with all components set to 1.0.

##### project()

```ts
static project(v, w): Vec3;
```

Defined in: [vec3.ts:383](https://github.com/claus-codes/vec/blob/1a991556255e5555afd05799362abaa631fc20cc/src/vec3.ts#L383)

Projects one vector onto another.

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `v` | [`Vec3`](#vec3) | The vector to project. |
| `w` | [`Vec3`](#vec3) | The vector to project onto. |

###### Returns

[`Vec3`](#vec3)

A new Vec3 instance representing the projected vector.

##### random()

```ts
static random(random): Vec3;
```

Defined in: [vec3.ts:398](https://github.com/claus-codes/vec/blob/1a991556255e5555afd05799362abaa631fc20cc/src/vec3.ts#L398)

Creates a random unit vector.

###### Parameters

| Parameter | Type | Default value | Description |
| ------ | ------ | ------ | ------ |
| `random` | () => `number` | `Math.random` | A function that returns a random number between 0 and 1. |

###### Returns

[`Vec3`](#vec3)

A new Vec3 instance representing a random unit vector.

##### reflect()

```ts
static reflect(v, normal): Vec3;
```

Defined in: [vec3.ts:125](https://github.com/claus-codes/vec/blob/1a991556255e5555afd05799362abaa631fc20cc/src/vec3.ts#L125)

Reflects a vector across a normal vector.
The normal vector should be normalized (unit length).

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `v` | [`Vec3`](#vec3) | The vector to reflect. |
| `normal` | [`Vec3`](#vec3) | The normal vector to reflect across (must be normalized). |

###### Returns

[`Vec3`](#vec3)

A new Vec3 instance representing the reflected vector.

##### satisfyEquality()

```ts
static satisfyEquality(v, w): boolean;
```

Defined in: [vec3.ts:408](https://github.com/claus-codes/vec/blob/1a991556255e5555afd05799362abaa631fc20cc/src/vec3.ts#L408)

Checks if two vectors are equal.

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `v` | [`Vec3`](#vec3) | The first vector. |
| `w` | [`Vec3`](#vec3) | The second vector. |

###### Returns

`boolean`

True if the vectors are equal, false otherwise.

##### satisfyOpposition()

```ts
static satisfyOpposition(v, w): boolean;
```

Defined in: [vec3.ts:418](https://github.com/claus-codes/vec/blob/1a991556255e5555afd05799362abaa631fc20cc/src/vec3.ts#L418)

Checks if two vectors are opposite.

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `v` | [`Vec3`](#vec3) | The first vector. |
| `w` | [`Vec3`](#vec3) | The second vector. |

###### Returns

`boolean`

True if the vectors are opposite, false otherwise.

##### scale()

```ts
static scale(v, c): Vec3;
```

Defined in: [vec3.ts:443](https://github.com/claus-codes/vec/blob/1a991556255e5555afd05799362abaa631fc20cc/src/vec3.ts#L443)

Scales a vector by a scalar value.

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `v` | [`Vec3`](#vec3) | The vector to scale. |
| `c` | `number` | The scalar value. |

###### Returns

[`Vec3`](#vec3)

A new Vec3 instance representing the scaled vector.

##### subtract()

```ts
static subtract(v, w): Vec3;
```

Defined in: [vec3.ts:62](https://github.com/claus-codes/vec/blob/1a991556255e5555afd05799362abaa631fc20cc/src/vec3.ts#L62)

Subtracts one vector from another.

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `v` | [`Vec3`](#vec3) | The vector to subtract from. |
| `w` | [`Vec3`](#vec3) | The vector to subtract. |

###### Returns

[`Vec3`](#vec3)

A new Vec3 instance representing the difference.

##### zero()

```ts
static zero(): Vec3;
```

Defined in: [vec3.ts:451](https://github.com/claus-codes/vec/blob/1a991556255e5555afd05799362abaa631fc20cc/src/vec3.ts#L451)

Creates a zero vector.

###### Returns

[`Vec3`](#vec3)

A new Vec3 instance representing a zero vector.
