[@fimbul-works/vec](README.md) / Vec4

# Vec4

Documentation for 4D Vector class.

## Classes

### Vec4

Defined in: [vec4.ts:11](https://github.com/claus-codes/vec/blob/1a991556255e5555afd05799362abaa631fc20cc/src/vec4.ts#L11)

Represents a 4D vector with various operations.

#### Constructors

##### Constructor

```ts
new Vec4(
   x, 
   y, 
   z, 
   w): Vec4;
```

Defined in: [vec4.ts:42](https://github.com/claus-codes/vec/blob/1a991556255e5555afd05799362abaa631fc20cc/src/vec4.ts#L42)

Creates a new Vec4 instance.

###### Parameters

| Parameter | Type | Default value | Description |
| ------ | ------ | ------ | ------ |
| `x` | `number` | `0` | The x-coordinate of the vector. |
| `y` | `number` | `0` | The y-coordinate of the vector. |
| `z` | `number` | `0` | The z-coordinate of the vector. |
| `w` | `number` | `0` | The w-coordinate of the vector. |

###### Returns

[`Vec4`](#vec4)

#### Accessors

##### a

###### Get Signature

```ts
get a(): number;
```

Defined in: [vec4.ts:678](https://github.com/claus-codes/vec/blob/1a991556255e5555afd05799362abaa631fc20cc/src/vec4.ts#L678)

Gets the Alpha-component of the color.

###### Returns

`number`

The Alpha-component.

###### Set Signature

```ts
set a(a): void;
```

Defined in: [vec4.ts:687](https://github.com/claus-codes/vec/blob/1a991556255e5555afd05799362abaa631fc20cc/src/vec4.ts#L687)

Sets the Alpha-component of the Color.

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `a` | `number` | The new Alpha-component. |

###### Returns

`void`

##### angleW

###### Get Signature

```ts
get angleW(): number;
```

Defined in: [vec4.ts:736](https://github.com/claus-codes/vec/blob/1a991556255e5555afd05799362abaa631fc20cc/src/vec4.ts#L736)

Gets the angle between the vector and the positive w-axis in radians.

###### Returns

`number`

The angle in radians, always in the range [0, 2π).

##### angleX

###### Get Signature

```ts
get angleX(): number;
```

Defined in: [vec4.ts:712](https://github.com/claus-codes/vec/blob/1a991556255e5555afd05799362abaa631fc20cc/src/vec4.ts#L712)

Gets the angle between the vector and the positive x-axis in radians.

###### Returns

`number`

The angle in radians, always in the range [0, 2π).

##### angleY

###### Get Signature

```ts
get angleY(): number;
```

Defined in: [vec4.ts:720](https://github.com/claus-codes/vec/blob/1a991556255e5555afd05799362abaa631fc20cc/src/vec4.ts#L720)

Gets the angle between the vector and the positive y-axis in radians.

###### Returns

`number`

The angle in radians, always in the range [0, 2π).

##### angleZ

###### Get Signature

```ts
get angleZ(): number;
```

Defined in: [vec4.ts:728](https://github.com/claus-codes/vec/blob/1a991556255e5555afd05799362abaa631fc20cc/src/vec4.ts#L728)

Gets the angle between the vector and the positive z-axis in radians.

###### Returns

`number`

The angle in radians, always in the range [0, 2π).

##### b

###### Get Signature

```ts
get b(): number;
```

Defined in: [vec4.ts:661](https://github.com/claus-codes/vec/blob/1a991556255e5555afd05799362abaa631fc20cc/src/vec4.ts#L661)

Gets the Blue-component of the color.

###### Returns

`number`

The Blue-component.

###### Set Signature

```ts
set b(b): void;
```

Defined in: [vec4.ts:670](https://github.com/claus-codes/vec/blob/1a991556255e5555afd05799362abaa631fc20cc/src/vec4.ts#L670)

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

Defined in: [vec4.ts:644](https://github.com/claus-codes/vec/blob/1a991556255e5555afd05799362abaa631fc20cc/src/vec4.ts#L644)

Gets the Green-component of a Color.

###### Returns

`number`

The Green-component.

###### Set Signature

```ts
set g(g): void;
```

Defined in: [vec4.ts:653](https://github.com/claus-codes/vec/blob/1a991556255e5555afd05799362abaa631fc20cc/src/vec4.ts#L653)

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

Defined in: [vec4.ts:744](https://github.com/claus-codes/vec/blob/1a991556255e5555afd05799362abaa631fc20cc/src/vec4.ts#L744)

Sets the magnitude (length) of the vector, maintaining its direction.

###### Returns

`number`

###### Set Signature

```ts
set magnitude(m): void;
```

Defined in: [vec4.ts:761](https://github.com/claus-codes/vec/blob/1a991556255e5555afd05799362abaa631fc20cc/src/vec4.ts#L761)

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

Defined in: [vec4.ts:753](https://github.com/claus-codes/vec/blob/1a991556255e5555afd05799362abaa631fc20cc/src/vec4.ts#L753)

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

Defined in: [vec4.ts:627](https://github.com/claus-codes/vec/blob/1a991556255e5555afd05799362abaa631fc20cc/src/vec4.ts#L627)

Gets the Red-component of a Color.

###### Returns

`number`

The Red-component.

###### Set Signature

```ts
set r(r): void;
```

Defined in: [vec4.ts:636](https://github.com/claus-codes/vec/blob/1a991556255e5555afd05799362abaa631fc20cc/src/vec4.ts#L636)

Sets the Red-component of a Color.

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `r` | `number` | The new Red-component. |

###### Returns

`void`

##### rgba

###### Get Signature

```ts
get rgba(): [number, number, number, number];
```

Defined in: [vec4.ts:695](https://github.com/claus-codes/vec/blob/1a991556255e5555afd05799362abaa631fc20cc/src/vec4.ts#L695)

Gets a copy of the vector's components as an array.

###### Returns

\[`number`, `number`, `number`, `number`\]

An array containing the Red, Green, Blue and Alpha components of the Color.

###### Set Signature

```ts
set rgba(rgba): void;
```

Defined in: [vec4.ts:704](https://github.com/claus-codes/vec/blob/1a991556255e5555afd05799362abaa631fc20cc/src/vec4.ts#L704)

Sets all components of the Color at once.

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `rgba` | \[`number`, `number`, `number`, `number`\] | An array containing the new Red, Green, Blue and Alpha components. |

###### Returns

`void`

##### w

###### Get Signature

```ts
get w(): number;
```

Defined in: [vec4.ts:588](https://github.com/claus-codes/vec/blob/1a991556255e5555afd05799362abaa631fc20cc/src/vec4.ts#L588)

Gets the w-component of the vector.

###### Returns

`number`

The w-component.

###### Set Signature

```ts
set w(w): void;
```

Defined in: [vec4.ts:597](https://github.com/claus-codes/vec/blob/1a991556255e5555afd05799362abaa631fc20cc/src/vec4.ts#L597)

Sets the w-component of the vector.

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `w` | `number` | The new w-component. |

###### Returns

`void`

##### x

###### Get Signature

```ts
get x(): number;
```

Defined in: [vec4.ts:534](https://github.com/claus-codes/vec/blob/1a991556255e5555afd05799362abaa631fc20cc/src/vec4.ts#L534)

Gets the x-component of the vector.

###### Returns

`number`

The x-component.

###### Set Signature

```ts
set x(x): void;
```

Defined in: [vec4.ts:543](https://github.com/claus-codes/vec/blob/1a991556255e5555afd05799362abaa631fc20cc/src/vec4.ts#L543)

Sets the x-component of the vector.

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `x` | `number` | The new x-component. |

###### Returns

`void`

##### xyzw

###### Get Signature

```ts
get xyzw(): [number, number, number, number];
```

Defined in: [vec4.ts:606](https://github.com/claus-codes/vec/blob/1a991556255e5555afd05799362abaa631fc20cc/src/vec4.ts#L606)

Gets a copy of the vector's components as an array.

###### Returns

\[`number`, `number`, `number`, `number`\]

An array containing the x, y, z and w components of the vector.

###### Set Signature

```ts
set xyzw(xyzw): void;
```

Defined in: [vec4.ts:615](https://github.com/claus-codes/vec/blob/1a991556255e5555afd05799362abaa631fc20cc/src/vec4.ts#L615)

Sets both components of the vector at once.

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `xyzw` | \[`number`, `number`, `number`, `number`\] | An array containing the new x, y, z and w components. |

###### Returns

`void`

##### y

###### Get Signature

```ts
get y(): number;
```

Defined in: [vec4.ts:552](https://github.com/claus-codes/vec/blob/1a991556255e5555afd05799362abaa631fc20cc/src/vec4.ts#L552)

Gets the y-component of the vector.

###### Returns

`number`

The y-component.

###### Set Signature

```ts
set y(y): void;
```

Defined in: [vec4.ts:561](https://github.com/claus-codes/vec/blob/1a991556255e5555afd05799362abaa631fc20cc/src/vec4.ts#L561)

Sets the z-component of the vector.

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `y` | `number` | The new z-component. |

###### Returns

`void`

##### z

###### Get Signature

```ts
get z(): number;
```

Defined in: [vec4.ts:570](https://github.com/claus-codes/vec/blob/1a991556255e5555afd05799362abaa631fc20cc/src/vec4.ts#L570)

Gets the z-component of the vector.

###### Returns

`number`

The z-component.

###### Set Signature

```ts
set z(z): void;
```

Defined in: [vec4.ts:579](https://github.com/claus-codes/vec/blob/1a991556255e5555afd05799362abaa631fc20cc/src/vec4.ts#L579)

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

Defined in: [vec4.ts:1220](https://github.com/claus-codes/vec/blob/1a991556255e5555afd05799362abaa631fc20cc/src/vec4.ts#L1220)

Makes the Vec4 instance iterable.

###### Returns

`IterableIterator`\<`number`\>

###### Yields

The x, y, z and w components of the vector.

##### add()

```ts
add(v): Vec4;
```

Defined in: [vec4.ts:775](https://github.com/claus-codes/vec/blob/1a991556255e5555afd05799362abaa631fc20cc/src/vec4.ts#L775)

Adds another vector to this vector.

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `v` | [`Vec4`](#vec4) | The vector to add. |

###### Returns

[`Vec4`](#vec4)

This Vec4 instance for method chaining.

##### angleBetween()

```ts
angleBetween(v): number;
```

Defined in: [vec4.ts:830](https://github.com/claus-codes/vec/blob/1a991556255e5555afd05799362abaa631fc20cc/src/vec4.ts#L830)

Calculates the angle between this vector and another vector.

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `v` | [`Vec4`](#vec4) | The other vector. |

###### Returns

`number`

The angle between the vectors in radians.

##### clamp()

```ts
clamp(min, max): Vec4;
```

Defined in: [vec4.ts:846](https://github.com/claus-codes/vec/blob/1a991556255e5555afd05799362abaa631fc20cc/src/vec4.ts#L846)

Clamps the magnitude of this vector between a minimum and maximum value.

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `min` | `number` | The minimum magnitude. |
| `max` | `number` | The maximum magnitude. |

###### Returns

[`Vec4`](#vec4)

This Vec4 instance for method chaining.

##### clone()

```ts
clone(): Vec4;
```

Defined in: [vec4.ts:868](https://github.com/claus-codes/vec/blob/1a991556255e5555afd05799362abaa631fc20cc/src/vec4.ts#L868)

Creates a copy of this vector.

###### Returns

[`Vec4`](#vec4)

A new Vec4 instance with the same components.

##### copy()

```ts
copy(v): Vec4;
```

Defined in: [vec4.ts:877](https://github.com/claus-codes/vec/blob/1a991556255e5555afd05799362abaa631fc20cc/src/vec4.ts#L877)

Copies the components of another vector to this vector.

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `v` | [`Vec4`](#vec4) | The vector to copy from. |

###### Returns

[`Vec4`](#vec4)

This Vec2 instance for method chaining.

##### distance()

```ts
distance(v): number;
```

Defined in: [vec4.ts:891](https://github.com/claus-codes/vec/blob/1a991556255e5555afd05799362abaa631fc20cc/src/vec4.ts#L891)

Calculates the distance between this vector and another vector.

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `v` | [`Vec4`](#vec4) | The other vector. |

###### Returns

`number`

The distance between the vectors.

##### distanceChebyshev()

```ts
distanceChebyshev(v): number;
```

Defined in: [vec4.ts:905](https://github.com/claus-codes/vec/blob/1a991556255e5555afd05799362abaa631fc20cc/src/vec4.ts#L905)

Calculates the Chebyshev distance between this vector and another vector.

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `v` | [`Vec4`](#vec4) | The other vector. |

###### Returns

`number`

The Chebyshev distance between the vectors.

##### distanceManhattan()

```ts
distanceManhattan(v): number;
```

Defined in: [vec4.ts:924](https://github.com/claus-codes/vec/blob/1a991556255e5555afd05799362abaa631fc20cc/src/vec4.ts#L924)

Calculates the Manhattan distance between this vector and another vector.

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `v` | [`Vec4`](#vec4) | The other vector. |

###### Returns

`number`

The Manhattan distance between the vectors.

##### distanceMinkowski()

```ts
distanceMinkowski(v, p): number;
```

Defined in: [vec4.ts:939](https://github.com/claus-codes/vec/blob/1a991556255e5555afd05799362abaa631fc20cc/src/vec4.ts#L939)

Calculates the Minkowski distance between this vector and another vector.

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `v` | [`Vec4`](#vec4) | The other vector. |
| `p` | `number` | The order of the Minkowski distance. |

###### Returns

`number`

The Minkowski distance between the vectors.

##### distanceSq()

```ts
distanceSq(v): number;
```

Defined in: [vec4.ts:954](https://github.com/claus-codes/vec/blob/1a991556255e5555afd05799362abaa631fc20cc/src/vec4.ts#L954)

Calculates the squared distance between this vector and another vector.

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `v` | [`Vec4`](#vec4) | The other vector. |

###### Returns

`number`

The squared distance between the vectors.

##### divide()

```ts
divide(v): this;
```

Defined in: [vec4.ts:816](https://github.com/claus-codes/vec/blob/1a991556255e5555afd05799362abaa631fc20cc/src/vec4.ts#L816)

Divides this vector with another vector.

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `v` | [`Vec4`](#vec4) | The vector to divide with. |

###### Returns

`this`

This Vec4 instance for method chaining.

##### dot()

```ts
dot(v): number;
```

Defined in: [vec4.ts:968](https://github.com/claus-codes/vec/blob/1a991556255e5555afd05799362abaa631fc20cc/src/vec4.ts#L968)

Calculates the dot product of this vector with another vector.

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `v` | [`Vec4`](#vec4) | The other vector. |

###### Returns

`number`

The dot product of the vectors.

##### equals()

```ts
equals(v, epsilon): boolean;
```

Defined in: [vec4.ts:1180](https://github.com/claus-codes/vec/blob/1a991556255e5555afd05799362abaa631fc20cc/src/vec4.ts#L1180)

Compares this vector with another vector using an epsilon value for floating-point comparison.

###### Parameters

| Parameter | Type | Default value | Description |
| ------ | ------ | ------ | ------ |
| `v` | [`Vec4`](#vec4) | `undefined` | The vector to compare with. |
| `epsilon` | `number` | `Number.EPSILON` | The maximum difference between components to consider them equal. |

###### Returns

`boolean`

True if the vectors are equal within epsilon, false otherwise.

##### isInfinite()

```ts
isInfinite(): boolean;
```

Defined in: [vec4.ts:999](https://github.com/claus-codes/vec/blob/1a991556255e5555afd05799362abaa631fc20cc/src/vec4.ts#L999)

Checks if this vector has infinite components.

###### Returns

`boolean`

True if the vector has infinite components, false otherwise.

##### isNaN()

```ts
isNaN(): boolean;
```

Defined in: [vec4.ts:1020](https://github.com/claus-codes/vec/blob/1a991556255e5555afd05799362abaa631fc20cc/src/vec4.ts#L1020)

Checks if this vector has NaN components.

###### Returns

`boolean`

True if the vector has NaN components, false otherwise.

##### isZero()

```ts
isZero(): boolean;
```

Defined in: [vec4.ts:1033](https://github.com/claus-codes/vec/blob/1a991556255e5555afd05799362abaa631fc20cc/src/vec4.ts#L1033)

Checks if this vector is zero.

###### Returns

`boolean`

True if the vector is zero, false otherwise.

##### limitMax()

```ts
limitMax(max): this;
```

Defined in: [vec4.ts:1042](https://github.com/claus-codes/vec/blob/1a991556255e5555afd05799362abaa631fc20cc/src/vec4.ts#L1042)

Limits the maximum magnitude of this vector.

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `max` | `number` | The maximum magnitude. |

###### Returns

`this`

This Vec2 instance for method chaining.

##### limitMin()

```ts
limitMin(min): this;
```

Defined in: [vec4.ts:1059](https://github.com/claus-codes/vec/blob/1a991556255e5555afd05799362abaa631fc20cc/src/vec4.ts#L1059)

Limits the minimum magnitude of this vector.

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `min` | `number` | The minimum magnitude. |

###### Returns

`this`

This Vec4 instance for method chaining.

##### lookAt()

```ts
lookAt(v): this;
```

Defined in: [vec4.ts:1076](https://github.com/claus-codes/vec/blob/1a991556255e5555afd05799362abaa631fc20cc/src/vec4.ts#L1076)

Sets this vector to point towards another vector.

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `v` | [`Vec4`](#vec4) | The vector to look at. |

###### Returns

`this`

This Vec4 instance for method chaining.

##### multiply()

```ts
multiply(v): this;
```

Defined in: [vec4.ts:803](https://github.com/claus-codes/vec/blob/1a991556255e5555afd05799362abaa631fc20cc/src/vec4.ts#L803)

Multiplies this vector with another vector.

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `v` | [`Vec4`](#vec4) | The vector to multiply with. |

###### Returns

`this`

This Vec4 instance for method chaining.

##### negate()

```ts
negate(): this;
```

Defined in: [vec4.ts:1091](https://github.com/claus-codes/vec/blob/1a991556255e5555afd05799362abaa631fc20cc/src/vec4.ts#L1091)

Negates this vector.

###### Returns

`this`

This Vec4 instance for method chaining.

##### normalize()

```ts
normalize(): this;
```

Defined in: [vec4.ts:1104](https://github.com/claus-codes/vec/blob/1a991556255e5555afd05799362abaa631fc20cc/src/vec4.ts#L1104)

Normalizes this vector.

###### Returns

`this`

This Ve4 instance for method chaining.

##### project()

```ts
project(v): this;
```

Defined in: [vec4.ts:1119](https://github.com/claus-codes/vec/blob/1a991556255e5555afd05799362abaa631fc20cc/src/vec4.ts#L1119)

Projects this vector onto another vector.

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `v` | [`Vec4`](#vec4) | The vector to project onto. |

###### Returns

`this`

This Vec4 instance for method chaining.

##### random()

```ts
random(random): this;
```

Defined in: [vec4.ts:1141](https://github.com/claus-codes/vec/blob/1a991556255e5555afd05799362abaa631fc20cc/src/vec4.ts#L1141)

Sets this vector to a random direction with the same magnitude.

###### Parameters

| Parameter | Type | Default value | Description |
| ------ | ------ | ------ | ------ |
| `random` | () => `number` | `Math.random` | A function that returns a random number between 0 and 1. |

###### Returns

`this`

This Vec4 instance for method chaining.

##### reflect()

```ts
reflect(normal): this;
```

Defined in: [vec4.ts:980](https://github.com/claus-codes/vec/blob/1a991556255e5555afd05799362abaa631fc20cc/src/vec4.ts#L980)

Reflects this vector across a normal vector.
The normal vector should be normalized (unit length).

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `normal` | [`Vec4`](#vec4) | The normal vector to reflect across (must be normalized). |

###### Returns

`this`

This Vec4 instance for method chaining.

##### satisfyEquality()

```ts
satisfyEquality(v): boolean;
```

Defined in: [vec4.ts:1151](https://github.com/claus-codes/vec/blob/1a991556255e5555afd05799362abaa631fc20cc/src/vec4.ts#L1151)

Checks if this vector is equal to another vector.

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `v` | [`Vec4`](#vec4) | The other vector. |

###### Returns

`boolean`

True if the vectors are equal, false otherwise.

##### satisfyOpposition()

```ts
satisfyOpposition(v): boolean;
```

Defined in: [vec4.ts:1165](https://github.com/claus-codes/vec/blob/1a991556255e5555afd05799362abaa631fc20cc/src/vec4.ts#L1165)

Checks if this vector is opposite to another vector.

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `v` | [`Vec4`](#vec4) | The other vector. |

###### Returns

`boolean`

True if the vectors are opposite, false otherwise.

##### scale()

```ts
scale(c): this;
```

Defined in: [vec4.ts:1194](https://github.com/claus-codes/vec/blob/1a991556255e5555afd05799362abaa631fc20cc/src/vec4.ts#L1194)

Scales this vector by a scalar value.

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `c` | `number` | The scalar value. |

###### Returns

`this`

This Vec4 instance for method chaining.

##### subtract()

```ts
subtract(v): this;
```

Defined in: [vec4.ts:789](https://github.com/claus-codes/vec/blob/1a991556255e5555afd05799362abaa631fc20cc/src/vec4.ts#L789)

Subtracts another vector from this vector.

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `v` | [`Vec4`](#vec4) | The vector to subtract. |

###### Returns

`this`

This Vec4 instance for method chaining.

##### toJSON()

```ts
toJSON(): {
  x: number;
  y: number;
};
```

Defined in: [vec4.ts:1248](https://github.com/claus-codes/vec/blob/1a991556255e5555afd05799362abaa631fc20cc/src/vec4.ts#L1248)

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
| `x` | `number` | [vec4.ts:1248](https://github.com/claus-codes/vec/blob/1a991556255e5555afd05799362abaa631fc20cc/src/vec4.ts#L1248) |
| `y` | `number` | [vec4.ts:1248](https://github.com/claus-codes/vec/blob/1a991556255e5555afd05799362abaa631fc20cc/src/vec4.ts#L1248) |

##### toObject()

```ts
toObject(): {
  w: number;
  x: number;
  y: number;
  z: number;
};
```

Defined in: [vec4.ts:1239](https://github.com/claus-codes/vec/blob/1a991556255e5555afd05799362abaa631fc20cc/src/vec4.ts#L1239)

Converts the vector to a plain object.

###### Returns

```ts
{
  w: number;
  x: number;
  y: number;
  z: number;
}
```

An object with x, y, z and w properties.

| Name | Type | Defined in |
| ------ | ------ | ------ |
| `w` | `number` | [vec4.ts:1239](https://github.com/claus-codes/vec/blob/1a991556255e5555afd05799362abaa631fc20cc/src/vec4.ts#L1239) |
| `x` | `number` | [vec4.ts:1239](https://github.com/claus-codes/vec/blob/1a991556255e5555afd05799362abaa631fc20cc/src/vec4.ts#L1239) |
| `y` | `number` | [vec4.ts:1239](https://github.com/claus-codes/vec/blob/1a991556255e5555afd05799362abaa631fc20cc/src/vec4.ts#L1239) |
| `z` | `number` | [vec4.ts:1239](https://github.com/claus-codes/vec/blob/1a991556255e5555afd05799362abaa631fc20cc/src/vec4.ts#L1239) |

##### toString()

```ts
toString(): string;
```

Defined in: [vec4.ts:1231](https://github.com/claus-codes/vec/blob/1a991556255e5555afd05799362abaa631fc20cc/src/vec4.ts#L1231)

Returns a string representation of the vector.

###### Returns

`string`

A string in the format "Vec4(x, y, z, w)".

##### zero()

```ts
zero(): this;
```

Defined in: [vec4.ts:1207](https://github.com/claus-codes/vec/blob/1a991556255e5555afd05799362abaa631fc20cc/src/vec4.ts#L1207)

Sets this vector to zero.

###### Returns

`this`

This Vec4 instance for method chaining.

##### add()

```ts
static add(v, w): Vec4;
```

Defined in: [vec4.ts:56](https://github.com/claus-codes/vec/blob/1a991556255e5555afd05799362abaa631fc20cc/src/vec4.ts#L56)

Adds two vectors.

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `v` | [`Vec4`](#vec4) | The first vector. |
| `w` | [`Vec4`](#vec4) | The second vector. |

###### Returns

[`Vec4`](#vec4)

A new Vec4 instance representing the sum.

##### angleBetween()

```ts
static angleBetween(v, w): number;
```

Defined in: [vec4.ts:101](https://github.com/claus-codes/vec/blob/1a991556255e5555afd05799362abaa631fc20cc/src/vec4.ts#L101)

Calculates the angle between two vectors.

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `v` | [`Vec4`](#vec4) | The first vector. |
| `w` | [`Vec4`](#vec4) | The second vector. |

###### Returns

`number`

The angle between the vectors in radians.

##### distance()

```ts
static distance(v, w): number;
```

Defined in: [vec4.ts:114](https://github.com/claus-codes/vec/blob/1a991556255e5555afd05799362abaa631fc20cc/src/vec4.ts#L114)

Calculates the Euclidean distance between two vectors.

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `v` | [`Vec4`](#vec4) | The first vector. |
| `w` | [`Vec4`](#vec4) | The second vector. |

###### Returns

`number`

The distance between the vectors.

##### distanceChebyshev()

```ts
static distanceChebyshev(v, w): number;
```

Defined in: [vec4.ts:129](https://github.com/claus-codes/vec/blob/1a991556255e5555afd05799362abaa631fc20cc/src/vec4.ts#L129)

Calculates the Chebyshev distance between two vectors.

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `v` | [`Vec4`](#vec4) | The first vector. |
| `w` | [`Vec4`](#vec4) | The second vector. |

###### Returns

`number`

The Chebyshev distance between the vectors.

##### distanceManhattan()

```ts
static distanceManhattan(v, w): number;
```

Defined in: [vec4.ts:149](https://github.com/claus-codes/vec/blob/1a991556255e5555afd05799362abaa631fc20cc/src/vec4.ts#L149)

Calculates the Manhattan distance between two vectors.

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `v` | [`Vec4`](#vec4) | The first vector. |
| `w` | [`Vec4`](#vec4) | The second vector. |

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

Defined in: [vec4.ts:165](https://github.com/claus-codes/vec/blob/1a991556255e5555afd05799362abaa631fc20cc/src/vec4.ts#L165)

Calculates the Minkowski distance between two vectors.

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `v` | [`Vec4`](#vec4) | The first vector. |
| `w` | [`Vec4`](#vec4) | The second vector. |
| `p` | `number` | The order of the Minkowski distance. |

###### Returns

`number`

The Minkowski distance between the vectors.

##### distanceSq()

```ts
static distanceSq(v, w): number;
```

Defined in: [vec4.ts:181](https://github.com/claus-codes/vec/blob/1a991556255e5555afd05799362abaa631fc20cc/src/vec4.ts#L181)

Calculates the squared Euclidean distance between two vectors.

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `v` | [`Vec4`](#vec4) | The first vector. |
| `w` | [`Vec4`](#vec4) | The second vector. |

###### Returns

`number`

The squared distance between the vectors.

##### divide()

```ts
static divide(v, w): Vec4;
```

Defined in: [vec4.ts:86](https://github.com/claus-codes/vec/blob/1a991556255e5555afd05799362abaa631fc20cc/src/vec4.ts#L86)

Divides one vector with another.

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `v` | [`Vec4`](#vec4) | Divident. |
| `w` | [`Vec4`](#vec4) | Divisor. |

###### Returns

[`Vec4`](#vec4)

A new Vec4 instance representing the divided value.

##### dot()

```ts
static dot(v, w): number;
```

Defined in: [vec4.ts:196](https://github.com/claus-codes/vec/blob/1a991556255e5555afd05799362abaa631fc20cc/src/vec4.ts#L196)

Calculates the dot product of two vectors.

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `v` | [`Vec4`](#vec4) | The first vector. |
| `w` | [`Vec4`](#vec4) | The second vector. |

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

Defined in: [vec4.ts:468](https://github.com/claus-codes/vec/blob/1a991556255e5555afd05799362abaa631fc20cc/src/vec4.ts#L468)

Compares a vector with another vector using an epsilon value for floating-point comparison.

###### Parameters

| Parameter | Type | Default value | Description |
| ------ | ------ | ------ | ------ |
| `v` | [`Vec4`](#vec4) | `undefined` | The first vector. |
| `w` | [`Vec4`](#vec4) | `undefined` | The second vector. |
| `epsilon` | `number` | `Number.EPSILON` | The maximum difference between components to consider them equal. |

###### Returns

`boolean`

True if the vectors are equal within epsilon, false otherwise.

##### fromArray()

```ts
static fromArray(arr): Vec4;
```

Defined in: [vec4.ts:508](https://github.com/claus-codes/vec/blob/1a991556255e5555afd05799362abaa631fc20cc/src/vec4.ts#L508)

Creates a Vec4 from an array.

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `arr` | `number`[] \| \[`number`, `number`, `number`, `number`\] | An array containing the x, y, z, and w coordinates. |

###### Returns

[`Vec4`](#vec4)

A new Vec4 instance.

##### fromJSON()

```ts
static fromJSON(json): Vec4;
```

Defined in: [vec4.ts:526](https://github.com/claus-codes/vec/blob/1a991556255e5555afd05799362abaa631fc20cc/src/vec4.ts#L526)

Creates a Vec3 instance from a JSON-parsed object.

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `json` | \{ `w`: `number`; `x`: `number`; `y`: `number`; `z`: `number`; \} | The JSON-parsed object containing x and y properties. |
| `json.w` | `number` | - |
| `json.x` | `number` | - |
| `json.y` | `number` | - |
| `json.z` | `number` | - |

###### Returns

[`Vec4`](#vec4)

A new Vec4 instance.

##### fromObject()

```ts
static fromObject(obj): Vec4;
```

Defined in: [vec4.ts:517](https://github.com/claus-codes/vec/blob/1a991556255e5555afd05799362abaa631fc20cc/src/vec4.ts#L517)

Creates a Vec4 from an object with x, y, z and w properties.

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `obj` | \{ `w`: `number`; `x`: `number`; `y`: `number`; `z`: `number`; \} | An object with x, y, z, and w properties. |
| `obj.w` | `number` | - |
| `obj.x` | `number` | - |
| `obj.y` | `number` | - |
| `obj.z` | `number` | - |

###### Returns

[`Vec4`](#vec4)

A new Vec4 instance.

##### immutable()

```ts
static immutable(
   x, 
   y, 
   z, 
   w): {
  get a(): number;
  get angleW(): number;
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
  get rgba(): readonly number[];
  get w(): number;
  get x(): number;
  get xyzw(): readonly number[];
  get y(): number;
  get z(): number;
};
```

Defined in: [vec4.ts:230](https://github.com/claus-codes/vec/blob/1a991556255e5555afd05799362abaa631fc20cc/src/vec4.ts#L230)

Creates an immutable Vec4-like object.

###### Parameters

| Parameter | Type | Default value | Description |
| ------ | ------ | ------ | ------ |
| `x` | `number` | `0` | The x-coordinate of the vector. |
| `y` | `number` | `0` | The y-coordinate of the vector. |
| `z` | `number` | `0` | The z-coordinate of the vector. |
| `w` | `number` | `0` | The w-coordinate of the vector. |

###### Returns

```ts
{
  get a(): number;
  get angleW(): number;
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
  get rgba(): readonly number[];
  get w(): number;
  get x(): number;
  get xyzw(): readonly number[];
  get y(): number;
  get z(): number;
}
```

An immutable object with Vec4-like properties.

| Name | Type | Defined in |
| ------ | ------ | ------ |
| `get a` | `number` | [vec4.ts:281](https://github.com/claus-codes/vec/blob/1a991556255e5555afd05799362abaa631fc20cc/src/vec4.ts#L281) |
| `get angleW` | `number` | [vec4.ts:293](https://github.com/claus-codes/vec/blob/1a991556255e5555afd05799362abaa631fc20cc/src/vec4.ts#L293) |
| `get angleX` | `number` | [vec4.ts:296](https://github.com/claus-codes/vec/blob/1a991556255e5555afd05799362abaa631fc20cc/src/vec4.ts#L296) |
| `get angleY` | `number` | [vec4.ts:299](https://github.com/claus-codes/vec/blob/1a991556255e5555afd05799362abaa631fc20cc/src/vec4.ts#L299) |
| `get angleZ` | `number` | [vec4.ts:302](https://github.com/claus-codes/vec/blob/1a991556255e5555afd05799362abaa631fc20cc/src/vec4.ts#L302) |
| `get b` | `number` | [vec4.ts:278](https://github.com/claus-codes/vec/blob/1a991556255e5555afd05799362abaa631fc20cc/src/vec4.ts#L278) |
| `get g` | `number` | [vec4.ts:275](https://github.com/claus-codes/vec/blob/1a991556255e5555afd05799362abaa631fc20cc/src/vec4.ts#L275) |
| `get isInfinite` | `boolean` | [vec4.ts:305](https://github.com/claus-codes/vec/blob/1a991556255e5555afd05799362abaa631fc20cc/src/vec4.ts#L305) |
| `get isNaN` | `boolean` | [vec4.ts:308](https://github.com/claus-codes/vec/blob/1a991556255e5555afd05799362abaa631fc20cc/src/vec4.ts#L308) |
| `get isZero` | `boolean` | [vec4.ts:311](https://github.com/claus-codes/vec/blob/1a991556255e5555afd05799362abaa631fc20cc/src/vec4.ts#L311) |
| `get magnitude` | `number` | [vec4.ts:287](https://github.com/claus-codes/vec/blob/1a991556255e5555afd05799362abaa631fc20cc/src/vec4.ts#L287) |
| `get magnitudeSq` | `number` | [vec4.ts:290](https://github.com/claus-codes/vec/blob/1a991556255e5555afd05799362abaa631fc20cc/src/vec4.ts#L290) |
| `get r` | `number` | [vec4.ts:272](https://github.com/claus-codes/vec/blob/1a991556255e5555afd05799362abaa631fc20cc/src/vec4.ts#L272) |
| `get rgba` | readonly `number`[] | [vec4.ts:284](https://github.com/claus-codes/vec/blob/1a991556255e5555afd05799362abaa631fc20cc/src/vec4.ts#L284) |
| `get w` | `number` | [vec4.ts:266](https://github.com/claus-codes/vec/blob/1a991556255e5555afd05799362abaa631fc20cc/src/vec4.ts#L266) |
| `get x` | `number` | [vec4.ts:257](https://github.com/claus-codes/vec/blob/1a991556255e5555afd05799362abaa631fc20cc/src/vec4.ts#L257) |
| `get xyzw` | readonly `number`[] | [vec4.ts:269](https://github.com/claus-codes/vec/blob/1a991556255e5555afd05799362abaa631fc20cc/src/vec4.ts#L269) |
| `get y` | `number` | [vec4.ts:260](https://github.com/claus-codes/vec/blob/1a991556255e5555afd05799362abaa631fc20cc/src/vec4.ts#L260) |
| `get z` | `number` | [vec4.ts:263](https://github.com/claus-codes/vec/blob/1a991556255e5555afd05799362abaa631fc20cc/src/vec4.ts#L263) |

##### isInfinite()

```ts
static isInfinite(v): boolean;
```

Defined in: [vec4.ts:322](https://github.com/claus-codes/vec/blob/1a991556255e5555afd05799362abaa631fc20cc/src/vec4.ts#L322)

Checks if a vector has infinite components.

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `v` | [`Vec4`](#vec4) | The vector to check. |

###### Returns

`boolean`

True if the vector has infinite components, false otherwise.

##### isNaN()

```ts
static isNaN(v): boolean;
```

Defined in: [vec4.ts:344](https://github.com/claus-codes/vec/blob/1a991556255e5555afd05799362abaa631fc20cc/src/vec4.ts#L344)

Checks if a vector has NaN components.

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `v` | [`Vec4`](#vec4) | The vector to check. |

###### Returns

`boolean`

True if the vector has NaN components, false otherwise.

##### isZero()

```ts
static isZero(v): boolean;
```

Defined in: [vec4.ts:353](https://github.com/claus-codes/vec/blob/1a991556255e5555afd05799362abaa631fc20cc/src/vec4.ts#L353)

Checks if a vector is zero.

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `v` | [`Vec4`](#vec4) | The vector to check. |

###### Returns

`boolean`

True if the vector is zero, false otherwise.

##### lerp()

```ts
static lerp(
   v, 
   w, 
   t): Vec4;
```

Defined in: [vec4.ts:364](https://github.com/claus-codes/vec/blob/1a991556255e5555afd05799362abaa631fc20cc/src/vec4.ts#L364)

Performs linear interpolation between two vectors.

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `v` | [`Vec4`](#vec4) | The first vector. |
| `w` | [`Vec4`](#vec4) | The second vector. |
| `t` | `number` | The interpolation parameter (0 to 1). |

###### Returns

[`Vec4`](#vec4)

A new Vec4 instance representing the interpolated vector.

##### multiply()

```ts
static multiply(v, w): Vec4;
```

Defined in: [vec4.ts:76](https://github.com/claus-codes/vec/blob/1a991556255e5555afd05799362abaa631fc20cc/src/vec4.ts#L76)

Multiplies one vector with another.

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `v` | [`Vec4`](#vec4) | The first vector. |
| `w` | [`Vec4`](#vec4) | The second vector. |

###### Returns

[`Vec4`](#vec4)

A new Vec4 instance representing the multiplied value.

##### negate()

```ts
static negate(v): Vec4;
```

Defined in: [vec4.ts:384](https://github.com/claus-codes/vec/blob/1a991556255e5555afd05799362abaa631fc20cc/src/vec4.ts#L384)

Negates a vector.

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `v` | [`Vec4`](#vec4) | The vector to negate. |

###### Returns

[`Vec4`](#vec4)

A new Vec4 instance representing the negated vector.

##### normalize()

```ts
static normalize(v): Vec4;
```

Defined in: [vec4.ts:393](https://github.com/claus-codes/vec/blob/1a991556255e5555afd05799362abaa631fc20cc/src/vec4.ts#L393)

Normalizes a vector.

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `v` | [`Vec4`](#vec4) | The vector to normalize. |

###### Returns

[`Vec4`](#vec4)

A new Vec4 instance representing the normalized vector.

##### one()

```ts
static one(): Vec4;
```

Defined in: [vec4.ts:499](https://github.com/claus-codes/vec/blob/1a991556255e5555afd05799362abaa631fc20cc/src/vec4.ts#L499)

Creates a vector with all components set to 1.0.

###### Returns

[`Vec4`](#vec4)

A new Vec4 instance representing a vector with all components set to 1.0.

##### project()

```ts
static project(v, w): Vec4;
```

Defined in: [vec4.ts:404](https://github.com/claus-codes/vec/blob/1a991556255e5555afd05799362abaa631fc20cc/src/vec4.ts#L404)

Projects one vector onto another.

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `v` | [`Vec4`](#vec4) | The vector to project. |
| `w` | [`Vec4`](#vec4) | The vector to project onto. |

###### Returns

[`Vec4`](#vec4)

A new Vec4 instance representing the projected vector.

##### random()

```ts
static random(random): Vec4;
```

Defined in: [vec4.ts:420](https://github.com/claus-codes/vec/blob/1a991556255e5555afd05799362abaa631fc20cc/src/vec4.ts#L420)

Creates a random unit vector.

###### Parameters

| Parameter | Type | Default value | Description |
| ------ | ------ | ------ | ------ |
| `random` | () => `number` | `Math.random` | A function that returns a random number between 0 and 1. |

###### Returns

[`Vec4`](#vec4)

A new Vec4 instance representing a random unit vector.

##### reflect()

```ts
static reflect(v, normal): Vec4;
```

Defined in: [vec4.ts:207](https://github.com/claus-codes/vec/blob/1a991556255e5555afd05799362abaa631fc20cc/src/vec4.ts#L207)

Reflects a vector across a normal vector.
The normal vector should be normalized (unit length).

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `v` | [`Vec4`](#vec4) | The vector to reflect. |
| `normal` | [`Vec4`](#vec4) | The normal vector to reflect across (must be normalized). |

###### Returns

[`Vec4`](#vec4)

A new Vec4 instance representing the reflected vector.

##### satisfyEquality()

```ts
static satisfyEquality(v, w): boolean;
```

Defined in: [vec4.ts:440](https://github.com/claus-codes/vec/blob/1a991556255e5555afd05799362abaa631fc20cc/src/vec4.ts#L440)

Checks if two vectors are equal.

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `v` | [`Vec4`](#vec4) | The first vector. |
| `w` | [`Vec4`](#vec4) | The second vector. |

###### Returns

`boolean`

True if the vectors are equal, false otherwise.

##### satisfyOpposition()

```ts
static satisfyOpposition(v, w): boolean;
```

Defined in: [vec4.ts:452](https://github.com/claus-codes/vec/blob/1a991556255e5555afd05799362abaa631fc20cc/src/vec4.ts#L452)

Checks if two vectors are opposite.

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `v` | [`Vec4`](#vec4) | The first vector. |
| `w` | [`Vec4`](#vec4) | The second vector. |

###### Returns

`boolean`

True if the vectors are opposite, false otherwise.

##### scale()

```ts
static scale(v, c): Vec4;
```

Defined in: [vec4.ts:483](https://github.com/claus-codes/vec/blob/1a991556255e5555afd05799362abaa631fc20cc/src/vec4.ts#L483)

Scales a vector by a scalar value.

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `v` | [`Vec4`](#vec4) | The vector to scale. |
| `c` | `number` | The scalar value. |

###### Returns

[`Vec4`](#vec4)

A new Vec4 instance representing the scaled vector.

##### subtract()

```ts
static subtract(v, w): Vec4;
```

Defined in: [vec4.ts:66](https://github.com/claus-codes/vec/blob/1a991556255e5555afd05799362abaa631fc20cc/src/vec4.ts#L66)

Subtracts one vector from another.

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `v` | [`Vec4`](#vec4) | The vector to subtract from. |
| `w` | [`Vec4`](#vec4) | The vector to subtract. |

###### Returns

[`Vec4`](#vec4)

A new Vec4 instance representing the difference.

##### zero()

```ts
static zero(): Vec4;
```

Defined in: [vec4.ts:491](https://github.com/claus-codes/vec/blob/1a991556255e5555afd05799362abaa631fc20cc/src/vec4.ts#L491)

Creates a zero vector.

###### Returns

[`Vec4`](#vec4)

A new Vec4 instance representing a zero vector.
