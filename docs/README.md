# @fimbul-works/vec

## Classes

### Vec2

2D vector.

#### Implements

- `Vec2Like`

#### Constructors

##### Constructor

```ts
new Vec2(x?, y?): Vec2;
```

###### Parameters

| Parameter | Type | Default value | Description |
| ------ | ------ | ------ | ------ |
| `x` | `number` | `0` | The x-coordinate of the vector. |
| `y` | `number` | `x` | The y-coordinate of the vector. |

###### Returns

[`Vec2`](#vec2)

#### Accessors

##### angleX

###### Get Signature

```ts
get angleX(): number;
```

Gets the angle between the vector and the positive x-axis in radians.

###### Returns

`number`

The angle in radians, always in the range [0, 2π).

###### Set Signature

```ts
set angleX(phi): void;
```

Sets the angle between the vector and the positive x-axis, maintaining the vector's magnitude.

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `phi` | `number` | The new angle in radians. |

###### Returns

`void`

###### Implementation of

```ts
Vec2Like.angleX
```

##### angleY

###### Get Signature

```ts
get angleY(): number;
```

Gets the angle between the vector and the positive y-axis in radians.

###### Returns

`number`

The angle in radians, always in the range [0, 2π).

###### Set Signature

```ts
set angleY(phi): void;
```

Sets the angle between the vector and the positive y-axis, maintaining the vector's magnitude.

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `phi` | `number` | The new angle in radians. |

###### Returns

`void`

###### Implementation of

```ts
Vec2Like.angleY
```

##### magnitude

###### Get Signature

```ts
get magnitude(): number;
```

Gets the magnitude (length) of the vector.

###### Returns

`number`

The magnitude of the vector.

###### Set Signature

```ts
set magnitude(m): void;
```

Sets the magnitude (length) of the vector, maintaining its direction.

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `m` | `number` | The new magnitude. |

###### Returns

`void`

###### Implementation of

```ts
Vec2Like.magnitude
```

##### magnitudeSq

###### Get Signature

```ts
get magnitudeSq(): number;
```

Gets the squared magnitude (length) of the vector.

###### Returns

`number`

The squared magnitude of the vector.

###### Implementation of

```ts
Vec2Like.magnitudeSq
```

##### x

###### Get Signature

```ts
get x(): number;
```

Gets the x-component of the vector.

###### Returns

`number`

The x-component.

###### Set Signature

```ts
set x(x): void;
```

Sets the x-component of the vector.

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `x` | `number` | The new x-component. |

###### Returns

`void`

###### Implementation of

```ts
Vec2Like.x
```

##### xy

###### Get Signature

```ts
get xy(): ArrayVector2D;
```

Gets a copy of the vector's components as an array.

###### Returns

[`ArrayVector2D`](#arrayvector2d)

An array containing the x and y components of the vector.

###### Set Signature

```ts
set xy(xy): void;
```

Sets both components of the vector at once.

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `xy` | [`ArrayVector2D`](#arrayvector2d) | An array containing the new x and y components. |

###### Returns

`void`

###### Implementation of

```ts
Vec2Like.xy
```

##### y

###### Get Signature

```ts
get y(): number;
```

Gets the y-component of the vector.

###### Returns

`number`

The y-component.

###### Set Signature

```ts
set y(y): void;
```

Sets the y-component of the vector.

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `y` | `number` | The new y-component. |

###### Returns

`void`

###### Implementation of

```ts
Vec2Like.y
```

#### Methods

##### \[iterator\]()

```ts
iterator: IterableIterator<number>;
```

Iterator over this vector's components.

###### Returns

`IterableIterator`\<`number`\>

###### Yields

The x and y components of the vector.

###### Implementation of

```ts
Vec2Like.[iterator]
```

##### add()

```ts
add(v): this;
```

Adds another vector to this vector.

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `v` | `Vec2Like` | The vector to add. |

###### Returns

`this`

`this` instance for method chaining.

###### Implementation of

```ts
Vec2Like.add
```

##### angleBetween()

```ts
angleBetween(v): number;
```

Calculates the angle between this vector and another vector.

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `v` | `Vec2Like` | The other vector. |

###### Returns

`number`

The angle between the vectors in radians.

###### Implementation of

```ts
Vec2Like.angleBetween
```

##### clamp()

```ts
clamp(min, max): this;
```

Clamps the magnitude of this vector between a minimum and maximum value.

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `min` | `number` | The minimum magnitude. |
| `max` | `number` | The maximum magnitude. |

###### Returns

`this`

`this` instance for method chaining.

###### Implementation of

```ts
Vec2Like.clamp
```

##### clone()

```ts
clone(): Vec2;
```

Creates a copy of this vector.

###### Returns

[`Vec2`](#vec2)

A new Vec2 instance with the same components.

###### Implementation of

```ts
Vec2Like.clone
```

##### copy()

```ts
copy(v): this;
```

Copies the components of another vector to this vector.

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `v` | `Vec2Like` | The vector to copy from. |

###### Returns

`this`

`this` instance for method chaining.

###### Implementation of

```ts
Vec2Like.copy
```

##### cross()

```ts
cross(v): number;
```

Calculates the cross product of this vector with another vector.

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `v` | `Vec2Like` | The other vector. |

###### Returns

`number`

The cross product of the vectors.

###### Implementation of

```ts
Vec2Like.cross
```

##### distance()

```ts
distance(v): number;
```

Calculates the distance between this vector and another vector.

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `v` | `Vec2Like` | The other vector. |

###### Returns

`number`

The distance between the vectors.

###### Implementation of

```ts
Vec2Like.distance
```

##### distanceChebyshev()

```ts
distanceChebyshev(v): number;
```

Calculates the Chebyshev distance between this vector and another vector.

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `v` | `Vec2Like` | The other vector. |

###### Returns

`number`

The Chebyshev distance between the vectors.

###### Implementation of

```ts
Vec2Like.distanceChebyshev
```

##### distanceManhattan()

```ts
distanceManhattan(v): number;
```

Calculates the Manhattan distance between this vector and another vector.

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `v` | `Vec2Like` | The other vector. |

###### Returns

`number`

The Manhattan distance between the vectors.

###### Implementation of

```ts
Vec2Like.distanceManhattan
```

##### distanceMinkowski()

```ts
distanceMinkowski(v, p): number;
```

Calculates the Minkowski distance between this vector and another vector.

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `v` | `Vec2Like` | The other vector. |
| `p` | `number` | The order of the Minkowski distance. |

###### Returns

`number`

The Minkowski distance between the vectors.

###### Implementation of

```ts
Vec2Like.distanceMinkowski
```

##### distanceSq()

```ts
distanceSq(v): number;
```

Calculates the squared distance between this vector and another vector.

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `v` | `Vec2Like` | The other vector. |

###### Returns

`number`

The squared distance between the vectors.

###### Implementation of

```ts
Vec2Like.distanceSq
```

##### divide()

```ts
divide(v): this;
```

Divides this vector with another vector.

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `v` | `Vec2Like` | The vector to divide with. |

###### Returns

`this`

`this` instance for method chaining.

###### Implementation of

```ts
Vec2Like.divide
```

##### dot()

```ts
dot(v): number;
```

Calculates the dot product of this vector with another vector.

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `v` | `Vec2Like` | The other vector. |

###### Returns

`number`

The dot product of the vectors.

###### Implementation of

```ts
Vec2Like.dot
```

##### equals()

```ts
equals(v, epsilon?): boolean;
```

Compares this vector with another vector using an epsilon value for floating-point comparison.

###### Parameters

| Parameter | Type | Default value | Description |
| ------ | ------ | ------ | ------ |
| `v` | `Vec2Like` | `undefined` | The vector to compare with. |
| `epsilon` | `number` | `Number.EPSILON` | The maximum difference between components to consider them equal. |

###### Returns

`boolean`

`true` if the vectors are equal within epsilon, `false` otherwise.

###### Implementation of

```ts
Vec2Like.equals
```

##### isInfinite()

```ts
isInfinite(): boolean;
```

Checks if this vector has infinite components.

###### Returns

`boolean`

`true` if the vector has infinite components, `false` otherwise.

###### Implementation of

```ts
Vec2Like.isInfinite
```

##### isNaN()

```ts
isNaN(): boolean;
```

Checks if this vector has NaN components.

###### Returns

`boolean`

`true` if the vector has NaN components, `false` otherwise.

###### Implementation of

```ts
Vec2Like.isNaN
```

##### isZero()

```ts
isZero(): boolean;
```

Checks if this vector is zero.

###### Returns

`boolean`

`true` if the vector is zero, `false` otherwise.

###### Implementation of

```ts
Vec2Like.isZero
```

##### limitMax()

```ts
limitMax(max): this;
```

Limits the maximum magnitude of this vector.

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `max` | `number` | The maximum magnitude. |

###### Returns

`this`

`this` instance for method chaining.

###### Implementation of

```ts
Vec2Like.limitMax
```

##### limitMin()

```ts
limitMin(min): this;
```

Limits the minimum magnitude of this vector.

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `min` | `number` | The minimum magnitude. |

###### Returns

`this`

`this` instance for method chaining.

###### Implementation of

```ts
Vec2Like.limitMin
```

##### lookAt()

```ts
lookAt(v): this;
```

Sets this vector to point towards another vector.

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `v` | `Vec2Like` | The vector to look at. |

###### Returns

`this`

`this` instance for method chaining.

###### Implementation of

```ts
Vec2Like.lookAt
```

##### multiply()

```ts
multiply(v): this;
```

Multiplies this vector with another vector.

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `v` | `Vec2Like` | The vector to multiply with. |

###### Returns

`this`

`this` instance for method chaining.

###### Implementation of

```ts
Vec2Like.multiply
```

##### negate()

```ts
negate(): this;
```

Negates this vector.

###### Returns

`this`

`this` instance for method chaining.

###### Implementation of

```ts
Vec2Like.negate
```

##### normalize()

```ts
normalize(): this;
```

Normalizes this vector.

###### Returns

`this`

`this` instance for method chaining.

###### Implementation of

```ts
Vec2Like.normalize
```

##### project()

```ts
project(v): this;
```

Projects this vector onto another vector.

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `v` | `Vec2Like` | The vector to project onto. |

###### Returns

`this`

`this` instance for method chaining.

###### Implementation of

```ts
Vec2Like.project
```

##### random()

```ts
random(random?): this;
```

Sets this vector to a random direction with the same magnitude.

###### Parameters

| Parameter | Type | Default value | Description |
| ------ | ------ | ------ | ------ |
| `random` | () => `number` | `Math.random` | A function that returns a random number between 0 and 1. |

###### Returns

`this`

`this` instance for method chaining.

###### Implementation of

```ts
Vec2Like.random
```

##### reflect()

```ts
reflect(normal): Vec2;
```

Reflects this vector across a normal vector.

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `normal` | `Vec2Like` | The normal vector to reflect across (must be normalized). |

###### Returns

[`Vec2`](#vec2)

A new Vec2 instance representing the reflected vector.

###### Implementation of

```ts
Vec2Like.reflect
```

##### rotateZ()

```ts
rotateZ(phi): this;
```

Rotates this vector around the Z-axis.

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `phi` | `number` | The angle of rotation in radians. |

###### Returns

`this`

`this` instance for method chaining.

###### Implementation of

```ts
Vec2Like.rotateZ
```

##### satisfyEquality()

```ts
satisfyEquality(v): boolean;
```

Checks if this vector is equal to another vector.

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `v` | `Vec2Like` | The other vector. |

###### Returns

`boolean`

`true` if the vectors are equal, `false` otherwise.

###### Implementation of

```ts
Vec2Like.satisfyEquality
```

##### satisfyOpposition()

```ts
satisfyOpposition(v): boolean;
```

Checks if this vector is opposite to another vector.

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `v` | `Vec2Like` | The other vector. |

###### Returns

`boolean`

`true` if the vectors are opposite, `false` otherwise.

###### Implementation of

```ts
Vec2Like.satisfyOpposition
```

##### scale()

```ts
scale(c): this;
```

Scales this vector by a scalar value.

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `c` | `number` | The scalar value. |

###### Returns

`this`

`this` instance for method chaining.

###### Implementation of

```ts
Vec2Like.scale
```

##### subtract()

```ts
subtract(v): this;
```

Subtracts another vector from this vector.

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `v` | `Vec2Like` | The vector to subtract. |

###### Returns

`this`

`this` instance for method chaining.

###### Implementation of

```ts
Vec2Like.subtract
```

##### toJSON()

```ts
toJSON(): XYObject;
```

Serializes the vector to a JSON-friendly format.

###### Returns

[`XYObject`](#xyobject)

A JSON-friendly object representation of the vector.

###### Implementation of

```ts
Vec2Like.toJSON
```

##### toObject()

```ts
toObject(): XYObject;
```

Converts the vector to a plain object.

###### Returns

[`XYObject`](#xyobject)

An object with x and y properties.

###### Implementation of

```ts
Vec2Like.toObject
```

##### toString()

```ts
toString(): string;
```

Returns a string representation of the vector.

###### Returns

`string`

A string in the format "Vec2(x, y)".

###### Implementation of

```ts
Vec2Like.toString
```

##### turnLeft()

```ts
turnLeft(): this;
```

Rotates this vector 90 degrees to the left.

###### Returns

`this`

`this` instance for method chaining.

###### Implementation of

```ts
Vec2Like.turnLeft
```

##### turnRight()

```ts
turnRight(): this;
```

Rotates this vector 90 degrees to the right.

###### Returns

`this`

`this` instance for method chaining.

###### Implementation of

```ts
Vec2Like.turnRight
```

##### zero()

```ts
zero(): this;
```

Sets this vector to zero.

###### Returns

`this`

`this` instance for method chaining.

###### Implementation of

```ts
Vec2Like.zero
```

##### add()

```ts
static add(v, w): Vec2;
```

Adds two vectors.

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `v` | `Vec2Like` | The first vector. |
| `w` | `Vec2Like` | The second vector. |

###### Returns

[`Vec2`](#vec2)

A new Vec2 instance representing the sum.

##### angleBetween()

```ts
static angleBetween(v, w): number;
```

Calculates the angle between two vectors.

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `v` | `Vec2Like` | The first vector. |
| `w` | `Vec2Like` | The second vector. |

###### Returns

`number`

The angle between the vectors in radians.

##### cross()

```ts
static cross(v, w): number;
```

Calculates the cross product of two vectors.

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `v` | `Vec2Like` | The first vector. |
| `w` | `Vec2Like` | The second vector. |

###### Returns

`number`

The cross product scalar value.

##### distance()

```ts
static distance(v, w): number;
```

Calculates the Euclidean distance between two vectors.

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `v` | `Vec2Like` | The first vector. |
| `w` | `Vec2Like` | The second vector. |

###### Returns

`number`

The distance between the vectors.

##### distanceChebyshev()

```ts
static distanceChebyshev(v, w): number;
```

Calculates the Chebyshev distance between two vectors.

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `v` | `Vec2Like` | The first vector. |
| `w` | `Vec2Like` | The second vector. |

###### Returns

`number`

The Chebyshev distance between the vectors.

##### distanceManhattan()

```ts
static distanceManhattan(v, w): number;
```

Calculates the Manhattan distance between two vectors.

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `v` | `Vec2Like` | The first vector. |
| `w` | `Vec2Like` | The second vector. |

###### Returns

`number`

The Manhattan distance between the vectors.

##### distanceMinkowski()

```ts
static distanceMinkowski(
   v, 
   w, 
   p
): number;
```

Calculates the Minkowski distance between two vectors.

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `v` | `Vec2Like` | The first vector. |
| `w` | `Vec2Like` | The second vector. |
| `p` | `number` | The order of the Minkowski distance. |

###### Returns

`number`

The Minkowski distance between the vectors.

##### distanceSq()

```ts
static distanceSq(v, w): number;
```

Calculates the squared Euclidean distance between two vectors.

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `v` | `Vec2Like` | The first vector. |
| `w` | `Vec2Like` | The second vector. |

###### Returns

`number`

The squared distance between the vectors.

##### divide()

```ts
static divide(v, w): Vec2;
```

Divides one vector with another.

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `v` | `Vec2Like` | Divident. |
| `w` | `Vec2Like` | Divisor. |

###### Returns

[`Vec2`](#vec2)

A new Vec2 instance representing the divided value.

##### dot()

```ts
static dot(v, w): number;
```

Calculates the dot product of two vectors.

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `v` | `Vec2Like` | The first vector. |
| `w` | `Vec2Like` | The second vector. |

###### Returns

`number`

The dot product of the vectors.

##### equals()

```ts
static equals(
   v, 
   w, 
   epsilon?
): boolean;
```

Compares a vector with another vector using an epsilon value for floating-point comparison.

###### Parameters

| Parameter | Type | Default value | Description |
| ------ | ------ | ------ | ------ |
| `v` | `Vec2Like` | `undefined` | The first vector. |
| `w` | `Vec2Like` | `undefined` | The second vector. |
| `epsilon` | `number` | `Number.EPSILON` | The maximum difference between components to consider them equal. |

###### Returns

`boolean`

`true` if the vectors are equal within epsilon, `false` otherwise.

##### fromArray()

```ts
static fromArray(arr): Vec2;
```

Creates a Vec2 from an array.

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `arr` | `number`[] | An array containing the x and y coordinates. |

###### Returns

[`Vec2`](#vec2)

A new Vec2 instance.

##### fromJSON()

```ts
static fromJSON(json): Vec2;
```

Creates a Vec2 instance from a JSON-parsed object.

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `json` | [`XYObject`](#xyobject) | The JSON-parsed object containing x and y properties. |

###### Returns

[`Vec2`](#vec2)

A new Vec2 instance.

##### fromObject()

```ts
static fromObject(obj): Vec2;
```

Creates a Vec2 from an object with x and y properties.

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `obj` | [`XYObject`](#xyobject) | An object with x and y properties. |

###### Returns

[`Vec2`](#vec2)

A new Vec2 instance.

##### fromPolarCoords()

```ts
static fromPolarCoords(r, theta): Vec2;
```

Creates a Vec2 instance from polar coordinates.

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `r` | `number` | The radius. |
| `theta` | `number` | The angle in radians. |

###### Returns

[`Vec2`](#vec2)

A new Vec2 instance.

##### immutable()

```ts
static immutable(x?, y?): Readonly<Vec2>;
```

Creates an immutable Vec2 instance.

###### Parameters

| Parameter | Type | Default value | Description |
| ------ | ------ | ------ | ------ |
| `x` | `number` | `0` | The x-coordinate of the vector. |
| `y` | `number` | `0` | The y-coordinate of the vector. |

###### Returns

`Readonly`\<[`Vec2`](#vec2)\>

A read-only Vec2 instance.

##### isInfinite()

```ts
static isInfinite(v): boolean;
```

Checks if a vector has infinite components.

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `v` | `Vec2Like` | The vector to check. |

###### Returns

`boolean`

`true` if the vector has infinite components, `false` otherwise.

##### isNaN()

```ts
static isNaN(v): boolean;
```

Checks if a vector has NaN components.

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `v` | `Vec2Like` | The vector to check. |

###### Returns

`boolean`

`true` if the vector has NaN components, `false` otherwise.

##### isZero()

```ts
static isZero(v): boolean;
```

Checks if a vector is zero.

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `v` | `Vec2Like` | The vector to check. |

###### Returns

`boolean`

`true` if the vector is zero, `false` otherwise.

##### lerp()

```ts
static lerp(
   v, 
   w, 
   t
): Vec2;
```

Performs linear interpolation between two vectors.

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `v` | `Vec2Like` | The first vector. |
| `w` | `Vec2Like` | The second vector. |
| `t` | `number` | The interpolation parameter (0 to 1). |

###### Returns

[`Vec2`](#vec2)

A new Vec2 instance representing the interpolated vector.

##### multiply()

```ts
static multiply(v, w): Vec2;
```

Multiplies one vector with another.

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `v` | `Vec2Like` | The first vector. |
| `w` | `Vec2Like` | The second vector. |

###### Returns

[`Vec2`](#vec2)

A new Vec2 instance representing the multiplied value.

##### negate()

```ts
static negate(v): Vec2;
```

Negates a vector.

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `v` | `Vec2Like` | The vector to negate. |

###### Returns

[`Vec2`](#vec2)

A new Vec2 instance representing the negated vector.

##### normalize()

```ts
static normalize(v): Vec2;
```

Normalizes a vector.

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `v` | `Vec2Like` | The vector to normalize. |

###### Returns

[`Vec2`](#vec2)

A new Vec2 instance representing the normalized vector.

##### one()

```ts
static one(): Vec2;
```

Creates a vector with all components set to 1.0.

###### Returns

[`Vec2`](#vec2)

A new Vec2 instance representing a vector with all components set to 1.0.

##### project()

```ts
static project(v, w): Vec2;
```

Projects one vector onto another.

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `v` | `Vec2Like` | The vector to project. |
| `w` | `Vec2Like` | The vector to project onto. |

###### Returns

[`Vec2`](#vec2)

A new Vec2 instance representing the projected vector.

##### random()

```ts
static random(random?): Vec2;
```

Creates a random unit vector.

###### Parameters

| Parameter | Type | Default value | Description |
| ------ | ------ | ------ | ------ |
| `random` | () => `number` | `Math.random` | A function that returns a random number between 0 and 1. |

###### Returns

[`Vec2`](#vec2)

A new Vec2 instance representing a random unit vector.

##### reflect()

```ts
static reflect(v, normal): Vec2;
```

Reflects the vector across a normal vector.

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `v` | `Vec2Like` | The vector to reflect. |
| `normal` | `Vec2Like` | The normal vector to reflect across (must be normalized). |

###### Returns

[`Vec2`](#vec2)

A new Vec2 instance representing the reflected vector.

##### satisfyEquality()

```ts
static satisfyEquality(v, w): boolean;
```

Checks if two vectors are equal.

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `v` | `Vec2Like` | The first vector. |
| `w` | `Vec2Like` | The second vector. |

###### Returns

`boolean`

`true` if the vectors are equal, `false` otherwise.

##### satisfyOpposition()

```ts
static satisfyOpposition(v, w): boolean;
```

Checks if two vectors are opposite.

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `v` | `Vec2Like` | The first vector. |
| `w` | `Vec2Like` | The second vector. |

###### Returns

`boolean`

`true` if the vectors are opposite, `false` otherwise.

##### scale()

```ts
static scale(v, c): Vec2;
```

Scales a vector by a scalar value.

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `v` | `Vec2Like` | The vector to scale. |
| `c` | `number` | The scalar value. |

###### Returns

[`Vec2`](#vec2)

A new Vec2 instance representing the scaled vector.

##### subtract()

```ts
static subtract(v, w): Vec2;
```

Subtracts one vector from another.

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `v` | `Vec2Like` | The vector to subtract from. |
| `w` | `Vec2Like` | The vector to subtract. |

###### Returns

[`Vec2`](#vec2)

A new Vec2 instance representing the difference.

##### zero()

```ts
static zero(): Vec2;
```

Creates a zero vector.

###### Returns

[`Vec2`](#vec2)

A new Vec2 instance representing a zero vector.

***

### Vec3

3D vector.

#### Implements

- `Vec3Like`

#### Constructors

##### Constructor

```ts
new Vec3(
   x?, 
   y?, 
   z?
): Vec3;
```

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

Gets the angle between the vector and the positive x-axis in radians.

###### Returns

`number`

The angle in radians, always in the range [0, 2π).

###### Implementation of

```ts
Vec3Like.angleX
```

##### angleY

###### Get Signature

```ts
get angleY(): number;
```

Gets the angle between the vector and the positive y-axis in radians.

###### Returns

`number`

The angle in radians, always in the range [0, 2π).

###### Implementation of

```ts
Vec3Like.angleY
```

##### angleZ

###### Get Signature

```ts
get angleZ(): number;
```

Gets the angle between the vector and the positive z-axis in radians.

###### Returns

`number`

The angle in radians, always in the range [0, 2π).

###### Implementation of

```ts
Vec3Like.angleZ
```

##### b

###### Get Signature

```ts
get b(): number;
```

Gets the Blue-component of the color.

###### Returns

`number`

The Blue-component.

###### Set Signature

```ts
set b(b): void;
```

Sets the Blue-component of the Color.

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `b` | `number` | The new Blue-component. |

###### Returns

`void`

###### Implementation of

```ts
Vec3Like.b
```

##### g

###### Get Signature

```ts
get g(): number;
```

Gets the Green-component of a Color.

###### Returns

`number`

The Green-component.

###### Set Signature

```ts
set g(g): void;
```

Sets the Green-component of the Color.

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `g` | `number` | The new Green-component. |

###### Returns

`void`

###### Implementation of

```ts
Vec3Like.g
```

##### magnitude

###### Get Signature

```ts
get magnitude(): number;
```

Sets the magnitude (length) of the vector, maintaining its direction.

###### Returns

`number`

###### Set Signature

```ts
set magnitude(m): void;
```

Sets the magnitude (length) of the vector, maintaining its direction.

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `m` | `number` | The new magnitude. |

###### Returns

`void`

###### Implementation of

```ts
Vec3Like.magnitude
```

##### magnitudeSq

###### Get Signature

```ts
get magnitudeSq(): number;
```

Gets the squared magnitude of the vector.
This is faster to compute than the actual magnitude and is useful for comparisons.

###### Returns

`number`

The squared magnitude of the vector.

###### Implementation of

```ts
Vec3Like.magnitudeSq
```

##### r

###### Get Signature

```ts
get r(): number;
```

Gets the Red-component of a Color.

###### Returns

`number`

The Red-component.

###### Set Signature

```ts
set r(r): void;
```

Sets the Red-component of a Color.

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `r` | `number` | The new Red-component. |

###### Returns

`void`

###### Implementation of

```ts
Vec3Like.r
```

##### rgb

###### Get Signature

```ts
get rgb(): ArrayVector3D;
```

Gets a copy of the vector's components as an array.

###### Returns

[`ArrayVector3D`](#arrayvector3d)

An array containing the x, y and z components of the vector.

###### Set Signature

```ts
set rgb(rgb): void;
```

Sets all components of the Color at once.

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `rgb` | [`ArrayVector3D`](#arrayvector3d) | An array containing the new Red, Green and Blue components. |

###### Returns

`void`

###### Implementation of

```ts
Vec3Like.rgb
```

##### x

###### Get Signature

```ts
get x(): number;
```

Gets the x-component of the vector.

###### Returns

`number`

The x-component.

###### Set Signature

```ts
set x(x): void;
```

Sets the x-component of the vector.

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `x` | `number` | The new x-component. |

###### Returns

`void`

###### Implementation of

```ts
Vec3Like.x
```

##### xyz

###### Get Signature

```ts
get xyz(): ArrayVector3D;
```

Gets a copy of the vector's components as an array.

###### Returns

[`ArrayVector3D`](#arrayvector3d)

An array containing the x, y and z components of the vector.

###### Set Signature

```ts
set xyz(xyz): void;
```

Sets all components of the vector at once.

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `xyz` | [`ArrayVector3D`](#arrayvector3d) | An array containing the new x, y and z components. |

###### Returns

`void`

###### Implementation of

```ts
Vec3Like.xyz
```

##### y

###### Get Signature

```ts
get y(): number;
```

Gets the y-component of the vector.

###### Returns

`number`

The y-component.

###### Set Signature

```ts
set y(y): void;
```

Sets the y-component of the vector.

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `y` | `number` | The new y-component. |

###### Returns

`void`

###### Implementation of

```ts
Vec3Like.y
```

##### z

###### Get Signature

```ts
get z(): number;
```

Gets the z-component of the vector.

###### Returns

`number`

The z-component.

###### Set Signature

```ts
set z(z): void;
```

Sets the z-component of the vector.

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `z` | `number` | The new z-component. |

###### Returns

`void`

###### Implementation of

```ts
Vec3Like.z
```

#### Methods

##### \[iterator\]()

```ts
iterator: IterableIterator<number>;
```

Iterator over this vector's components.

###### Returns

`IterableIterator`\<`number`\>

###### Yields

The x, y and z components of the vector.

###### Implementation of

```ts
Vec3Like.[iterator]
```

##### add()

```ts
add(v): this;
```

Adds another vector to this vector.

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `v` | `Vec3Like` | The vector to add. |

###### Returns

`this`

`this` instance for method chaining.

###### Implementation of

```ts
Vec3Like.add
```

##### angleBetween()

```ts
angleBetween(v): number;
```

Calculates the angle between this vector and another vector.

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `v` | `Vec3Like` | The other vector. |

###### Returns

`number`

The angle between the vectors in radians.

###### Implementation of

```ts
Vec3Like.angleBetween
```

##### clamp()

```ts
clamp(min, max): this;
```

Clamps the magnitude of this vector between a minimum and maximum value.

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `min` | `number` | The minimum magnitude. |
| `max` | `number` | The maximum magnitude. |

###### Returns

`this`

`this` instance for method chaining.

###### Implementation of

```ts
Vec3Like.clamp
```

##### clone()

```ts
clone(): Vec3;
```

Creates a copy of this vector.

###### Returns

[`Vec3`](#vec3)

A new Vec3 instance with the same components.

###### Implementation of

```ts
Vec3Like.clone
```

##### copy()

```ts
copy(v): this;
```

Copies the components of another vector to this vector.

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `v` | `Vec3Like` | The vector to copy from. |

###### Returns

`this`

`this` instance for method chaining.

###### Implementation of

```ts
Vec3Like.copy
```

##### cross()

```ts
cross(v): this;
```

Calculates cross product between this vector and another vector.

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `v` | `Vec3Like` | The other vector. |

###### Returns

`this`

`this` instance for method chaining.

###### Implementation of

```ts
Vec3Like.cross
```

##### distance()

```ts
distance(v): number;
```

Calculates the distance between this vector and another vector.

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `v` | `Vec3Like` | The other vector. |

###### Returns

`number`

The distance between the vectors.

###### Implementation of

```ts
Vec3Like.distance
```

##### distanceChebyshev()

```ts
distanceChebyshev(v): number;
```

Calculates the Chebyshev distance between vector and another vector.

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `v` | `Vec3Like` | The other vector. |

###### Returns

`number`

The Chebyshev distance between the vectors.

###### Implementation of

```ts
Vec3Like.distanceChebyshev
```

##### distanceManhattan()

```ts
distanceManhattan(v): number;
```

Calculates the Manhattan distance between vector and another vector.

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `v` | `Vec3Like` | The other vector. |

###### Returns

`number`

The Manhattan distance between the vectors.

###### Implementation of

```ts
Vec3Like.distanceManhattan
```

##### distanceMinkowski()

```ts
distanceMinkowski(v, p): number;
```

Calculates the Minkowski distance between this vector and another vector.

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `v` | `Vec3Like` | The other vector. |
| `p` | `number` | The order of the Minkowski distance. |

###### Returns

`number`

The Minkowski distance between the vectors.

###### Implementation of

```ts
Vec3Like.distanceMinkowski
```

##### distanceSq()

```ts
distanceSq(v): number;
```

Calculates the squared distance between this vector and another vector.

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `v` | `Vec3Like` | The other vector. |

###### Returns

`number`

The squared distance between the vectors.

###### Implementation of

```ts
Vec3Like.distanceSq
```

##### divide()

```ts
divide(v): this;
```

Divides this vector with another vector.

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `v` | `Vec3Like` | The vector to divide with. |

###### Returns

`this`

`this` instance for method chaining.

###### Implementation of

```ts
Vec3Like.divide
```

##### dot()

```ts
dot(v): number;
```

Calculates the dot product of this vector with another vector.

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `v` | `Vec3Like` | The other vector. |

###### Returns

`number`

The dot product of the vectors.

###### Implementation of

```ts
Vec3Like.dot
```

##### equals()

```ts
equals(v, epsilon?): boolean;
```

Compares this vector with another vector using an epsilon value for floating-point comparison.

###### Parameters

| Parameter | Type | Default value | Description |
| ------ | ------ | ------ | ------ |
| `v` | `Vec3Like` | `undefined` | The vector to compare with. |
| `epsilon` | `number` | `Number.EPSILON` | The maximum difference between components to consider them equal. |

###### Returns

`boolean`

`true` if the vectors are equal within epsilon, `false` otherwise.

###### Implementation of

```ts
Vec3Like.equals
```

##### isInfinite()

```ts
isInfinite(): boolean;
```

Checks if this vector has infinite components.

###### Returns

`boolean`

`true` if the vector has infinite components, `false` otherwise.

###### Implementation of

```ts
Vec3Like.isInfinite
```

##### isNaN()

```ts
isNaN(): boolean;
```

Checks if this vector has NaN components.

###### Returns

`boolean`

`true` if the vector has NaN components, `false` otherwise.

###### Implementation of

```ts
Vec3Like.isNaN
```

##### isZero()

```ts
isZero(): boolean;
```

Checks if this vector is zero.

###### Returns

`boolean`

`true` if the vector is zero, `false` otherwise.

###### Implementation of

```ts
Vec3Like.isZero
```

##### limitMax()

```ts
limitMax(max): this;
```

Limits the maximum magnitude of this vector.

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `max` | `number` | The maximum magnitude. |

###### Returns

`this`

`this` instance for method chaining.

###### Implementation of

```ts
Vec3Like.limitMax
```

##### limitMin()

```ts
limitMin(min): this;
```

Limits the minimum magnitude of this vector.

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `min` | `number` | The minimum magnitude. |

###### Returns

`this`

`this` instance for method chaining.

###### Implementation of

```ts
Vec3Like.limitMin
```

##### lookAt()

```ts
lookAt(v): this;
```

Sets this vector to point towards another vector.

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `v` | `Vec3Like` | The vector to look at. |

###### Returns

`this`

`this` instance for method chaining.

###### Implementation of

```ts
Vec3Like.lookAt
```

##### multiply()

```ts
multiply(v): this;
```

Multiplies this vector with another vector.

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `v` | `Vec3Like` | The vector to multiply with. |

###### Returns

`this`

`this` instance for method chaining.

###### Implementation of

```ts
Vec3Like.multiply
```

##### negate()

```ts
negate(): this;
```

Negates this vector.

###### Returns

`this`

`this` instance for method chaining.

###### Implementation of

```ts
Vec3Like.negate
```

##### normalize()

```ts
normalize(): this;
```

Normalizes this vector.

###### Returns

`this`

`this` instance for method chaining.

###### Implementation of

```ts
Vec3Like.normalize
```

##### project()

```ts
project(v): this;
```

Projects this vector onto another vector.

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `v` | `Vec3Like` | The vector to project onto. |

###### Returns

`this`

`this` instance for method chaining.

###### Implementation of

```ts
Vec3Like.project
```

##### random()

```ts
random(random?): this;
```

Sets this vector to a random direction with the same magnitude.

###### Parameters

| Parameter | Type | Default value | Description |
| ------ | ------ | ------ | ------ |
| `random` | () => `number` | `Math.random` | A function that returns a random number between 0 and 1. |

###### Returns

`this`

`this` instance for method chaining.

###### Implementation of

```ts
Vec3Like.random
```

##### reflect()

```ts
reflect(normal): this;
```

Reflects this vector across a normal vector.

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `normal` | `Vec3Like` | The normal vector to reflect across (must be normalized). |

###### Returns

`this`

`this` instance for method chaining.

###### Implementation of

```ts
Vec3Like.reflect
```

##### rotateX()

```ts
rotateX(phi): this;
```

Rotates this vector around the x-axis.

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `phi` | `number` | The angle of rotation in radians. |

###### Returns

`this`

`this` instance for method chaining.

###### Implementation of

```ts
Vec3Like.rotateX
```

##### rotateY()

```ts
rotateY(phi): this;
```

Rotates this vector around the y-axis.

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `phi` | `number` | The angle of rotation in radians. |

###### Returns

`this`

`this` instance for method chaining.

###### Implementation of

```ts
Vec3Like.rotateY
```

##### rotateZ()

```ts
rotateZ(phi): this;
```

Rotates this vector around the z-axis.

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `phi` | `number` | The angle of rotation in radians. |

###### Returns

`this`

`this` instance for method chaining.

###### Implementation of

```ts
Vec3Like.rotateZ
```

##### satisfyEquality()

```ts
satisfyEquality(v): boolean;
```

Checks if this vector is equal to another vector.

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `v` | `Vec3Like` | The other vector. |

###### Returns

`boolean`

`true` if the vectors are equal, `false` otherwise.

###### Implementation of

```ts
Vec3Like.satisfyEquality
```

##### satisfyOpposition()

```ts
satisfyOpposition(v): boolean;
```

Checks if this vector is opposite to another vector.

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `v` | `Vec3Like` | The other vector. |

###### Returns

`boolean`

`true` if the vectors are opposite, `false` otherwise.

###### Implementation of

```ts
Vec3Like.satisfyOpposition
```

##### scale()

```ts
scale(c): this;
```

Scales this vector by a scalar value.

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `c` | `number` | The scalar value. |

###### Returns

`this`

`this` instance for method chaining.

###### Implementation of

```ts
Vec3Like.scale
```

##### subtract()

```ts
subtract(v): this;
```

Subtracts another vector from this vector.

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `v` | `Vec3Like` | The vector to subtract. |

###### Returns

`this`

`this` instance for method chaining.

###### Implementation of

```ts
Vec3Like.subtract
```

##### toJSON()

```ts
toJSON(): XYZObject;
```

Serializes the vector to a JSON-friendly format.

###### Returns

[`XYZObject`](#xyzobject)

A JSON-friendly object representation of the vector.

###### Implementation of

```ts
Vec3Like.toJSON
```

##### toObject()

```ts
toObject(): XYZObject;
```

Converts the vector to a plain object.

###### Returns

[`XYZObject`](#xyzobject)

An object with x, y and z properties.

###### Implementation of

```ts
Vec3Like.toObject
```

##### toString()

```ts
toString(): string;
```

Returns a string representation of the vector.

###### Returns

`string`

A string in the format "Vec3(x, y, z)".

###### Implementation of

```ts
Vec3Like.toString
```

##### zero()

```ts
zero(): this;
```

Sets this vector to zero.

###### Returns

`this`

`this` instance for method chaining.

###### Implementation of

```ts
Vec3Like.zero
```

##### add()

```ts
static add(v, w): Vec3;
```

Adds two vectors.

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `v` | `Vec3Like` | The first vector. |
| `w` | [`Vec3`](#vec3) | The second vector. |

###### Returns

[`Vec3`](#vec3)

A new Vec3 instance representing the sum.

##### angleBetween()

```ts
static angleBetween(v, w): number;
```

Calculates the angle between two vectors.

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `v` | `Vec3Like` | The first vector. |
| `w` | [`Vec3`](#vec3) | The second vector. |

###### Returns

`number`

The angle between the vectors in radians.

##### cross()

```ts
static cross(v, w): Vec3;
```

Calculates the cross product of two vectors.

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `v` | `Vec3Like` | The first vector. |
| `w` | [`Vec3`](#vec3) | The second vector. |

###### Returns

[`Vec3`](#vec3)

The cross product of the two vectors.

##### distance()

```ts
static distance(v, w): number;
```

Calculates the Euclidean distance between two vectors.

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `v` | `Vec3Like` | The first vector. |
| `w` | [`Vec3`](#vec3) | The second vector. |

###### Returns

`number`

The distance between the vectors.

##### distanceChebyshev()

```ts
static distanceChebyshev(v, w): number;
```

Calculates the Chebyshev distance between two vectors.

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `v` | `Vec3Like` | The first vector. |
| `w` | [`Vec3`](#vec3) | The second vector. |

###### Returns

`number`

The Chebyshev distance between the vectors.

##### distanceManhattan()

```ts
static distanceManhattan(v, w): number;
```

Calculates the Manhattan distance between two vectors.

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `v` | `Vec3Like` | The first vector. |
| `w` | [`Vec3`](#vec3) | The second vector. |

###### Returns

`number`

The Manhattan distance between the vectors.

##### distanceMinkowski()

```ts
static distanceMinkowski(
   v, 
   w, 
   p
): number;
```

Calculates the Minkowski distance between two vectors.

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `v` | `Vec3Like` | The first vector. |
| `w` | [`Vec3`](#vec3) | The second vector. |
| `p` | `number` | The order of the Minkowski distance. |

###### Returns

`number`

The Minkowski distance between the vectors.

##### distanceSq()

```ts
static distanceSq(v, w): number;
```

Calculates the squared Euclidean distance between two vectors.

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `v` | `Vec3Like` | The first vector. |
| `w` | [`Vec3`](#vec3) | The second vector. |

###### Returns

`number`

The squared distance between the vectors.

##### divide()

```ts
static divide(v, w): Vec3;
```

Divides one vector with another.

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `v` | `Vec3Like` | Divident. |
| `w` | [`Vec3`](#vec3) | Divisor. |

###### Returns

[`Vec3`](#vec3)

A new Vec3 instance representing the divided value.

##### dot()

```ts
static dot(v, w): number;
```

Calculates the dot product of two vectors.

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `v` | `Vec3Like` | The first vector. |
| `w` | [`Vec3`](#vec3) | The second vector. |

###### Returns

`number`

The dot product of the two vectors.

##### equals()

```ts
static equals(
   v, 
   w, 
   epsilon?
): boolean;
```

Compares a vector with another vector using an epsilon value for floating-point comparison.

###### Parameters

| Parameter | Type | Default value | Description |
| ------ | ------ | ------ | ------ |
| `v` | `Vec3Like` | `undefined` | The first vector. |
| `w` | [`Vec3`](#vec3) | `undefined` | The second vector. |
| `epsilon` | `number` | `Number.EPSILON` | The maximum difference between components to consider them equal. |

###### Returns

`boolean`

`true` if the vectors are equal within epsilon, `false` otherwise.

##### fromArray()

```ts
static fromArray(arr): Vec3;
```

Creates a Vec3 from an array.

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `arr` | `number`[] | An array containing the x, y, and z coordinates. |

###### Returns

[`Vec3`](#vec3)

A new Vec3 instance.

##### fromCylindricalCoords()

```ts
static fromCylindricalCoords(
   r, 
   phi, 
   z
): Vec3;
```

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

Creates a Vec3 instance from a JSON-parsed object.

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `json` | [`XYZObject`](#xyzobject) | The JSON-parsed object containing x and y properties. |

###### Returns

[`Vec3`](#vec3)

A new Vec3 instance.

##### fromObject()

```ts
static fromObject(obj): Vec3;
```

Creates a Vec3 from an object with x, y and z properties.

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `obj` | [`XYZObject`](#xyzobject) | An object with x, y, and z properties. |

###### Returns

[`Vec3`](#vec3)

A new Vec3 instance.

##### fromSphericalCoords()

```ts
static fromSphericalCoords(
   r, 
   theta, 
   phi
): Vec3;
```

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
   x?, 
   y?, 
   z?
): Readonly<Vec3>;
```

Creates an immutable Vec3 instance.

###### Parameters

| Parameter | Type | Default value | Description |
| ------ | ------ | ------ | ------ |
| `x` | `number` | `0` | The x-coordinate of the vector. |
| `y` | `number` | `0` | The y-coordinate of the vector. |
| `z` | `number` | `0` | The z-coordinate of the vector. |

###### Returns

`Readonly`\<[`Vec3`](#vec3)\>

A read-only Vec3 instance.

##### isInfinite()

```ts
static isInfinite(v): boolean;
```

Checks if a vector has infinite components.

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `v` | `Vec3Like` | The vector to check. |

###### Returns

`boolean`

`true` if the vector has infinite components, `false` otherwise.

##### isNaN()

```ts
static isNaN(v): boolean;
```

Checks if a vector has NaN components.

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `v` | `Vec3Like` | The vector to check. |

###### Returns

`boolean`

`true` if the vector has NaN components, `false` otherwise.

##### isZero()

```ts
static isZero(v): boolean;
```

Checks if a vector is zero.

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `v` | `Vec3Like` | The vector to check. |

###### Returns

`boolean`

`true` if the vector is zero, `false` otherwise.

##### lerp()

```ts
static lerp(
   v, 
   w, 
   t
): Vec3;
```

Performs linear interpolation between two vectors.

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `v` | `Vec3Like` | The first vector. |
| `w` | [`Vec3`](#vec3) | The second vector. |
| `t` | `number` | The interpolation parameter (0 to 1). |

###### Returns

[`Vec3`](#vec3)

A new Vec3 instance representing the interpolated vector.

##### multiply()

```ts
static multiply(v, w): Vec3;
```

Multiplies one vector with another.

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `v` | `Vec3Like` | The first vector. |
| `w` | [`Vec3`](#vec3) | The second vector. |

###### Returns

[`Vec3`](#vec3)

A new Vec3 instance representing the multiplied value.

##### negate()

```ts
static negate(v): Vec3;
```

Negates a vector.

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `v` | `Vec3Like` | The vector to negate. |

###### Returns

[`Vec3`](#vec3)

A new Vec3 instance representing the negated vector.

##### normalize()

```ts
static normalize(v): Vec3;
```

Normalizes a vector.

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `v` | `Vec3Like` | The vector to normalize. |

###### Returns

[`Vec3`](#vec3)

A new Vec3 instance representing the normalized vector.

##### one()

```ts
static one(): Vec3;
```

Creates a vector with all components set to 1.0.

###### Returns

[`Vec3`](#vec3)

A new Vec3 instance representing a vector with all components set to 1.0.

##### project()

```ts
static project(v, w): Vec3;
```

Projects one vector onto another.

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `v` | `Vec3Like` | The vector to project. |
| `w` | [`Vec3`](#vec3) | The vector to project onto. |

###### Returns

[`Vec3`](#vec3)

A new Vec3 instance representing the projected vector.

##### random()

```ts
static random(random?): Vec3;
```

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

Reflects a vector across a normal vector.

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `v` | `Vec3Like` | The vector to reflect. |
| `normal` | `Vec3Like` | The normal vector to reflect across (must be normalized). |

###### Returns

[`Vec3`](#vec3)

A new Vec3 instance representing the reflected vector.

##### satisfyEquality()

```ts
static satisfyEquality(v, w): boolean;
```

Checks if two vectors are equal.

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `v` | `Vec3Like` | The first vector. |
| `w` | [`Vec3`](#vec3) | The second vector. |

###### Returns

`boolean`

`true` if the vectors are equal, `false` otherwise.

##### satisfyOpposition()

```ts
static satisfyOpposition(v, w): boolean;
```

Checks if two vectors are opposite.

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `v` | `Vec3Like` | The first vector. |
| `w` | [`Vec3`](#vec3) | The second vector. |

###### Returns

`boolean`

`true` if the vectors are opposite, `false` otherwise.

##### scale()

```ts
static scale(v, c): Vec3;
```

Scales a vector by a scalar value.

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `v` | `Vec3Like` | The vector to scale. |
| `c` | `number` | The scalar value. |

###### Returns

[`Vec3`](#vec3)

A new Vec3 instance representing the scaled vector.

##### subtract()

```ts
static subtract(v, w): Vec3;
```

Subtracts one vector from another.

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `v` | `Vec3Like` | The vector to subtract from. |
| `w` | [`Vec3`](#vec3) | The vector to subtract. |

###### Returns

[`Vec3`](#vec3)

A new Vec3 instance representing the difference.

##### zero()

```ts
static zero(): Vec3;
```

Creates a zero vector.

###### Returns

[`Vec3`](#vec3)

A new Vec3 instance representing a zero vector.

***

### Vec4

Represents a 4D vector with various operations.

#### Constructors

##### Constructor

```ts
new Vec4(
   x?, 
   y?, 
   z?, 
   w?
): Vec4;
```

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

Gets the Alpha-component of the color.

###### Returns

`number`

The Alpha-component.

###### Set Signature

```ts
set a(a): void;
```

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

Gets the angle between the vector and the positive w-axis in radians.

###### Returns

`number`

The angle in radians, always in the range [0, 2π).

##### angleX

###### Get Signature

```ts
get angleX(): number;
```

Gets the angle between the vector and the positive x-axis in radians.

###### Returns

`number`

The angle in radians, always in the range [0, 2π).

##### angleY

###### Get Signature

```ts
get angleY(): number;
```

Gets the angle between the vector and the positive y-axis in radians.

###### Returns

`number`

The angle in radians, always in the range [0, 2π).

##### angleZ

###### Get Signature

```ts
get angleZ(): number;
```

Gets the angle between the vector and the positive z-axis in radians.

###### Returns

`number`

The angle in radians, always in the range [0, 2π).

##### b

###### Get Signature

```ts
get b(): number;
```

Gets the Blue-component of the color.

###### Returns

`number`

The Blue-component.

###### Set Signature

```ts
set b(b): void;
```

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

Gets the Green-component of a Color.

###### Returns

`number`

The Green-component.

###### Set Signature

```ts
set g(g): void;
```

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

Sets the magnitude (length) of the vector, maintaining its direction.

###### Returns

`number`

###### Set Signature

```ts
set magnitude(m): void;
```

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

Gets the Red-component of a Color.

###### Returns

`number`

The Red-component.

###### Set Signature

```ts
set r(r): void;
```

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

Gets a copy of the vector's components as an array.

###### Returns

\[`number`, `number`, `number`, `number`\]

An array containing the Red, Green, Blue and Alpha components of the Color.

###### Set Signature

```ts
set rgba(rgba): void;
```

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

Gets the w-component of the vector.

###### Returns

`number`

The w-component.

###### Set Signature

```ts
set w(w): void;
```

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

Gets the x-component of the vector.

###### Returns

`number`

The x-component.

###### Set Signature

```ts
set x(x): void;
```

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

Gets a copy of the vector's components as an array.

###### Returns

\[`number`, `number`, `number`, `number`\]

An array containing the x, y, z and w components of the vector.

###### Set Signature

```ts
set xyzw(xyzw): void;
```

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

Gets the y-component of the vector.

###### Returns

`number`

The y-component.

###### Set Signature

```ts
set y(y): void;
```

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

Gets the z-component of the vector.

###### Returns

`number`

The z-component.

###### Set Signature

```ts
set z(z): void;
```

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

Makes the Vec4 instance iterable.

###### Returns

`IterableIterator`\<`number`\>

###### Yields

The x, y, z and w components of the vector.

##### add()

```ts
add(v): Vec4;
```

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

Creates a copy of this vector.

###### Returns

[`Vec4`](#vec4)

A new Vec4 instance with the same components.

##### copy()

```ts
copy(v): Vec4;
```

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
equals(v, epsilon?): boolean;
```

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

Checks if this vector has infinite components.

###### Returns

`boolean`

True if the vector has infinite components, false otherwise.

##### isNaN()

```ts
isNaN(): boolean;
```

Checks if this vector has NaN components.

###### Returns

`boolean`

True if the vector has NaN components, false otherwise.

##### isZero()

```ts
isZero(): boolean;
```

Checks if this vector is zero.

###### Returns

`boolean`

True if the vector is zero, false otherwise.

##### limitMax()

```ts
limitMax(max): this;
```

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

Negates this vector.

###### Returns

`this`

This Vec4 instance for method chaining.

##### normalize()

```ts
normalize(): this;
```

Normalizes this vector.

###### Returns

`this`

This Ve4 instance for method chaining.

##### project()

```ts
project(v): this;
```

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
random(random?): this;
```

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

Serializes the vector to a JSON-friendly format.

###### Returns

```ts
{
  x: number;
  y: number;
}
```

A JSON-friendly object representation of the vector.

| Name | Type |
| ------ | ------ |
| `x` | `number` |
| `y` | `number` |

##### toObject()

```ts
toObject(): {
  w: number;
  x: number;
  y: number;
  z: number;
};
```

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

| Name | Type |
| ------ | ------ |
| `w` | `number` |
| `x` | `number` |
| `y` | `number` |
| `z` | `number` |

##### toString()

```ts
toString(): string;
```

Returns a string representation of the vector.

###### Returns

`string`

A string in the format "Vec4(x, y, z, w)".

##### zero()

```ts
zero(): this;
```

Sets this vector to zero.

###### Returns

`this`

This Vec4 instance for method chaining.

##### add()

```ts
static add(v, w): Vec4;
```

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
   p
): number;
```

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
   epsilon?
): boolean;
```

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
   x?, 
   y?, 
   z?, 
   w?
): {
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

| Name | Type |
| ------ | ------ |
| `get a` | `number` |
| `get angleW` | `number` |
| `get angleX` | `number` |
| `get angleY` | `number` |
| `get angleZ` | `number` |
| `get b` | `number` |
| `get g` | `number` |
| `get isInfinite` | `boolean` |
| `get isNaN` | `boolean` |
| `get isZero` | `boolean` |
| `get magnitude` | `number` |
| `get magnitudeSq` | `number` |
| `get r` | `number` |
| `get rgba` | readonly `number`[] |
| `get w` | `number` |
| `get x` | `number` |
| `get xyzw` | readonly `number`[] |
| `get y` | `number` |
| `get z` | `number` |

##### isInfinite()

```ts
static isInfinite(v): boolean;
```

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
   t
): Vec4;
```

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

Creates a vector with all components set to 1.0.

###### Returns

[`Vec4`](#vec4)

A new Vec4 instance representing a vector with all components set to 1.0.

##### project()

```ts
static project(v, w): Vec4;
```

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
static random(random?): Vec4;
```

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

Creates a zero vector.

###### Returns

[`Vec4`](#vec4)

A new Vec4 instance representing a zero vector.

## Interfaces

### XYObject

#### Properties

| Property | Type |
| ------ | ------ |
| <a id="property-x"></a> `x` | `number` |
| <a id="property-y"></a> `y` | `number` |

***

### XYZObject

#### Properties

| Property | Type |
| ------ | ------ |
| <a id="property-x-1"></a> `x` | `number` |
| <a id="property-y-1"></a> `y` | `number` |
| <a id="property-z"></a> `z` | `number` |

***

### XYZWObject

#### Properties

| Property | Type |
| ------ | ------ |
| <a id="property-w"></a> `w` | `number` |
| <a id="property-x-2"></a> `x` | `number` |
| <a id="property-y-2"></a> `y` | `number` |
| <a id="property-z-1"></a> `z` | `number` |

## Type Aliases

### ArrayVector2D

```ts
type ArrayVector2D = [number, number];
```

2D vector as an array.

***

### ArrayVector3D

```ts
type ArrayVector3D = [number, number, number];
```

3DArrayVector as an array.

***

### ArrayVector4D

```ts
type ArrayVector4D = [number, number, number, number];
```

4D vector as an array.

***

### ProxyArrayVectorTarget

```ts
type ProxyArrayVectorTarget = number[] | Float16Array | Float32Array | Float64Array;
```

Valid target for a ProxyVectorArray.

## Functions

### add2D()

```ts
function add2D(xy1, xy2): ArrayVector2D;
```

Adds one 2D vectors.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `xy1` | [`ArrayVector2D`](#arrayvector2d) | First vector as `[x, y]` |
| `xy2` | [`ArrayVector2D`](#arrayvector2d) | Second vector as `[x, y]` |

#### Returns

[`ArrayVector2D`](#arrayvector2d)

The sum of the vectors

***

### add3D()

```ts
function add3D(xyz1, xyz2): ArrayVector3D;
```

Adds two 3D vectors.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `xyz1` | [`ArrayVector3D`](#arrayvector3d) | First vector as `[x, y, z]` |
| `xyz2` | [`ArrayVector3D`](#arrayvector3d) | Second vector as `[x, y, z]` |

#### Returns

[`ArrayVector3D`](#arrayvector3d)

The sum of the vectors

***

### add4D()

```ts
function add4D(xyzw1, xyzw2): ArrayVector4D;
```

Adds two 4D vectors.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `xyzw1` | [`ArrayVector4D`](#arrayvector4d) | First vector as `[x, y, z, w]` |
| `xyzw2` | [`ArrayVector4D`](#arrayvector4d) | Second vector as `[x, y, z, w]` |

#### Returns

[`ArrayVector4D`](#arrayvector4d)

The sum of the vectors

***

### angleBetween2D()

```ts
function angleBetween2D(xy1, xy2): number;
```

Calculates the angle between two 2D vectors.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `xy1` | [`ArrayVector2D`](#arrayvector2d) | First vector as `[x, y]` |
| `xy2` | [`ArrayVector2D`](#arrayvector2d) | Second vector as `[x, y]` |

#### Returns

`number`

Angle between the vectors in radians

***

### angleBetween3D()

```ts
function angleBetween3D(
   xyz1, 
   xyz2, 
   m1?, 
   m2?
): number;
```

Calculates the angle between two 3D vectors.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `xyz1` | [`ArrayVector3D`](#arrayvector3d) | First vector as `[x, y, z]` |
| `xyz2` | [`ArrayVector3D`](#arrayvector3d) | Second vector as `[x, y, z]` |
| `m1` | `number` | Optional first vector magnitude (default: `magnitude3D(xyz1)`) |
| `m2` | `number` | Optional second vector magnitude (default: `magnitude3D(xyz2)`) |

#### Returns

`number`

Angle between the vectors in radians

***

### angleBetween4D()

```ts
function angleBetween4D(
   xyzw1, 
   xyzw2, 
   m1?, 
   m2?
): number;
```

Calculates the angle between two 4D vectors.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `xyzw1` | [`ArrayVector4D`](#arrayvector4d) | First vector as `[x, y, z, w]` |
| `xyzw2` | [`ArrayVector4D`](#arrayvector4d) | Second vector as `[x, y, z, w]` |
| `m1` | `number` | Optional magnitude of the first vector (default: `magnitude4D(xyzw1)`) |
| `m2` | `number` | Optional magnitude of the second vector (default: `magnitude4D(xyzw2)`) |

#### Returns

`number`

The angle in radians

***

### angleW4D()

```ts
function angleW4D(xyzw): number;
```

Calculates the angle between a 4DArrayVector and the positive w-axis.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `xyzw` | [`ArrayVector4D`](#arrayvector4d) | Vector as `[x, y, z, w]` |

#### Returns

`number`

The angle in radians

***

### angleX2D()

```ts
function angleX2D(xy): number;
```

Gets the angle between a 2DArrayVector and the positive x-axis in radians.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `xy` | [`ArrayVector2D`](#arrayvector2d) | Vector as `[x, y]` |

#### Returns

`number`

Angle in radians, always in the range [0, 2π)

***

### angleX3D()

```ts
function angleX3D(xyz): number;
```

Gets the angle between a 3DArrayVector and the positive x-axis in radians.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `xyz` | [`ArrayVector3D`](#arrayvector3d) | Vector as `[x, y, z]` |

#### Returns

`number`

Angle in radians, always in the range [0, 2π)

***

### angleX4D()

```ts
function angleX4D(xyzw): number;
```

Calculates the angle between a 4DArrayVector and the positive x-axis.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `xyzw` | [`ArrayVector4D`](#arrayvector4d) | Vector as `[x, y, z, w]` |

#### Returns

`number`

The angle in radians

***

### angleY2D()

```ts
function angleY2D(xy): number;
```

Gets the angle between a 2DArrayVector and the positive y-axis in radians.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `xy` | [`ArrayVector2D`](#arrayvector2d) | Vector as `[x, y]` |

#### Returns

`number`

Angle in radians, always in the range [0, 2π)

***

### angleY3D()

```ts
function angleY3D(xyz): number;
```

Gets the angle between a 3DArrayVector and the positive y-axis in radians.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `xyz` | [`ArrayVector3D`](#arrayvector3d) | Vector as `[x, y, z]` |

#### Returns

`number`

Angle in radians, always in the range [0, 2π)

***

### angleY4D()

```ts
function angleY4D(xyzw): number;
```

Calculates the angle between a 4DArrayVector and the positive y-axis.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `xyzw` | [`ArrayVector4D`](#arrayvector4d) | Vector as `[x, y, z, w]` |

#### Returns

`number`

The angle in radians

***

### angleZ3D()

```ts
function angleZ3D(xyz): number;
```

Gets the angle between a 3DArrayVector and the positive z-axis in radians.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `xyz` | [`ArrayVector3D`](#arrayvector3d) | Vector as `[x, y, z]` |

#### Returns

`number`

Angle in radians, always in the range [0, 2π)

***

### angleZ4D()

```ts
function angleZ4D(xyzw): number;
```

Calculates the angle between a 4DArrayVector and the positive z-axis.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `xyzw` | [`ArrayVector4D`](#arrayvector4d) | Vector as `[x, y, z, w]` |

#### Returns

`number`

The angle in radians

***

### clamp2D()

```ts
function clamp2D(
   xy, 
   min, 
   max, 
   m?
): ArrayVector2D;
```

Clamps the magnitude of a 2DArrayVector between a minimum and maximum value.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `xy` | [`ArrayVector2D`](#arrayvector2d) | Vector as `[x, y]` |
| `min` | `number` | Minimum magnitude |
| `max` | `number` | Maximum magnitude |
| `m` | `number` | Optional current magnitude (default: `magnitude2D(xy)`) |

#### Returns

[`ArrayVector2D`](#arrayvector2d)

The clamped vector

***

### clamp3D()

```ts
function clamp3D(
   xyz, 
   min, 
   max, 
   m?
): ArrayVector3D;
```

Clamps the magnitude of a vector between min and max.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `xyz` | [`ArrayVector3D`](#arrayvector3d) | Vector as `[x, y, z]` |
| `min` | `number` | Minimum magnitude |
| `max` | `number` | Maximum magnitude |
| `m` | `number` | Optional current magnitude (default: `magnitude3D(xyz)`) |

#### Returns

[`ArrayVector3D`](#arrayvector3d)

The clamped vector

***

### clamp4D()

```ts
function clamp4D(
   xyzw, 
   min, 
   max, 
   m?
): ArrayVector4D;
```

Clamps the magnitude of a 4DArrayVector between min and max.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `xyzw` | [`ArrayVector4D`](#arrayvector4d) | Vector as `[x, y, z, w]` |
| `min` | `number` | Minimum magnitude |
| `max` | `number` | Maximum magnitude |
| `m` | `number` | Optional current magnitude (default: `magnitude4D(xyzw)`) |

#### Returns

[`ArrayVector4D`](#arrayvector4d)

The clamped vector

***

### clone2D()

```ts
function clone2D(xy): ArrayVector2D;
```

Clone a 2DArrayVector.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `xy` | [`ArrayVector2D`](#arrayvector2d) | Vector as `[x, y]` |

#### Returns

[`ArrayVector2D`](#arrayvector2d)

The cloned vector

***

### clone3D()

```ts
function clone3D(xyz): ArrayVector3D;
```

Clone a 3DArrayVector.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `xyz` | [`ArrayVector3D`](#arrayvector3d) | Vector as `[x, y, z]` |

#### Returns

[`ArrayVector3D`](#arrayvector3d)

The cloned vector

***

### clone4D()

```ts
function clone4D(xyzw): ArrayVector4D;
```

Clone a 4DArrayVector.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `xyzw` | [`ArrayVector4D`](#arrayvector4d) | Vector as `[x, y, z, w]` |

#### Returns

[`ArrayVector4D`](#arrayvector4d)

The cloned vector

***

### cross2D()

```ts
function cross2D(xy1, xy2): number;
```

Calculates the cross product of two 2D vectors.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `xy1` | [`ArrayVector2D`](#arrayvector2d) | First vector as `[x, y]` |
| `xy2` | [`ArrayVector2D`](#arrayvector2d) | Second vector as `[x, y]` |

#### Returns

`number`

Cross product

***

### cross3D()

```ts
function cross3D(xyz1, xyz2): ArrayVector3D;
```

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

### distance2D()

```ts
function distance2D(xy1, xy2): number;
```

Calculate the Euclidean distance between two 2D vectors.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `xy1` | [`ArrayVector2D`](#arrayvector2d) | First vector as `[x, y]` |
| `xy2` | [`ArrayVector2D`](#arrayvector2d) | Second vector as `[x, y]` |

#### Returns

`number`

Euclidean distance

***

### distance3D()

```ts
function distance3D(xyz1, xyz2): number;
```

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

### distance4D()

```ts
function distance4D(xyzw1, xyzw2): number;
```

Calculates the Euclidean distance between two 4D vectors.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `xyzw1` | [`ArrayVector4D`](#arrayvector4d) | First vector as `[x, y, z, w]` |
| `xyzw2` | [`ArrayVector4D`](#arrayvector4d) | Second vector as `[x, y, z, w]` |

#### Returns

`number`

The distance

***

### distanceChebyshev2D()

```ts
function distanceChebyshev2D(xy1, xy2): number;
```

Calculates the Chebyshev distance between two 2D vectors.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `xy1` | [`ArrayVector2D`](#arrayvector2d) | First vector as `[x, y]` |
| `xy2` | [`ArrayVector2D`](#arrayvector2d) | Second vector as `[x, y]` |

#### Returns

`number`

Chebyshev distance

***

### distanceChebyshev3D()

```ts
function distanceChebyshev3D(xyz1, xyz2): number;
```

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

### distanceChebyshev4D()

```ts
function distanceChebyshev4D(xyzw1, xyzw2): number;
```

Calculates the Chebyshev distance between two 4D vectors.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `xyzw1` | [`ArrayVector4D`](#arrayvector4d) | First vector as `[x, y, z, w]` |
| `xyzw2` | [`ArrayVector4D`](#arrayvector4d) | Second vector as `[x, y, z, w]` |

#### Returns

`number`

The Chebyshev distance

***

### distanceManhattan2D()

```ts
function distanceManhattan2D(xy1, xy2): number;
```

Calculates the Manhattan distance between two 2D vectors.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `xy1` | [`ArrayVector2D`](#arrayvector2d) | First vector as `[x, y]` |
| `xy2` | [`ArrayVector2D`](#arrayvector2d) | Second vector as `[x, y]` |

#### Returns

`number`

Manhattan distance

***

### distanceManhattan3D()

```ts
function distanceManhattan3D(xyz1, xyz2): number;
```

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

### distanceManhattan4D()

```ts
function distanceManhattan4D(xyzw1, xyzw2): number;
```

Calculates the Manhattan distance between two 4D vectors.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `xyzw1` | [`ArrayVector4D`](#arrayvector4d) | First vector as `[x, y, z, w]` |
| `xyzw2` | [`ArrayVector4D`](#arrayvector4d) | Second vector as `[x, y, z, w]` |

#### Returns

`number`

The Manhattan distance

***

### distanceMinkowski2D()

```ts
function distanceMinkowski2D(
   xy1, 
   xy2, 
   p
): number;
```

Calculates the Minkowski distance between two 2D vectors.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `xy1` | [`ArrayVector2D`](#arrayvector2d) | First vector as `[x, y]` |
| `xy2` | [`ArrayVector2D`](#arrayvector2d) | Second vector as `[x, y]` |
| `p` | `number` | Order of the Minkowski distance |

#### Returns

`number`

Minkowski distance

***

### distanceMinkowski3D()

```ts
function distanceMinkowski3D(
   xyz1, 
   xyz2, 
   p
): number;
```

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

### distanceMinkowski4D()

```ts
function distanceMinkowski4D(
   xyzw1, 
   xyzw2, 
   p
): number;
```

Calculates the Minkowski distance between two 4D vectors.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `xyzw1` | [`ArrayVector4D`](#arrayvector4d) | First vector as `[x, y, z, w]` |
| `xyzw2` | [`ArrayVector4D`](#arrayvector4d) | Second vector as `[x, y, z, w]` |
| `p` | `number` | The order of the Minkowski distance |

#### Returns

`number`

The Minkowski distance

***

### distanceSq2D()

```ts
function distanceSq2D(xy1, xy2): number;
```

Calculates the squared Euclidean distance between two 2D vectors.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `xy1` | [`ArrayVector2D`](#arrayvector2d) | First vector as `[x, y]` |
| `xy2` | [`ArrayVector2D`](#arrayvector2d) | Second vector as `[x, y]` |

#### Returns

`number`

Squared distance

***

### distanceSq3D()

```ts
function distanceSq3D(xyz1, xyz2): number;
```

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

### distanceSq4D()

```ts
function distanceSq4D(xyzw1, xyzw2): number;
```

Calculates the squared Euclidean distance between two 4D vectors.
Faster than distance for comparisons.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `xyzw1` | [`ArrayVector4D`](#arrayvector4d) | First vector as `[x, y, z, w]` |
| `xyzw2` | [`ArrayVector4D`](#arrayvector4d) | Second vector as `[x, y, z, w]` |

#### Returns

`number`

The squared distance

***

### divide2D()

```ts
function divide2D(xy1, xy2): ArrayVector2D;
```

Divides one 2DArrayVector with another.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `xy1` | [`ArrayVector2D`](#arrayvector2d) | First vector as `[x, y]` |
| `xy2` | [`ArrayVector2D`](#arrayvector2d) | Second vector as `[x, y]` |

#### Returns

[`ArrayVector2D`](#arrayvector2d)

The divided value

***

### divide3D()

```ts
function divide3D(xyz1, xyz2): ArrayVector3D;
```

Divides one 3DArrayVector with another.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `xyz1` | [`ArrayVector3D`](#arrayvector3d) | First vector as `[x, y, z]` |
| `xyz2` | [`ArrayVector3D`](#arrayvector3d) | Second vector as `[x, y, z]` |

#### Returns

[`ArrayVector3D`](#arrayvector3d)

The divided vector

***

### divide4D()

```ts
function divide4D(xyzw1, xyzw2): ArrayVector4D;
```

Divides two 4D vectors component-wise.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `xyzw1` | [`ArrayVector4D`](#arrayvector4d) | First vector as `[x, y, z, w]` |
| `xyzw2` | [`ArrayVector4D`](#arrayvector4d) | Second vector as `[x, y, z, w]` |

#### Returns

[`ArrayVector4D`](#arrayvector4d)

The divided vector

***

### dot2D()

```ts
function dot2D(xy1, xy2): number;
```

Calculates the dot product of two vectors.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `xy1` | [`ArrayVector2D`](#arrayvector2d) | First vector as `[x, y]` |
| `xy2` | [`ArrayVector2D`](#arrayvector2d) | Second vector as `[x, y]` |

#### Returns

`number`

Dot product

***

### dot3D()

```ts
function dot3D(xyz1, xyz2): number;
```

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

### dot4D()

```ts
function dot4D(xyzw1, xyzw2): number;
```

Calculates the dot product of two 4D vectors.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `xyzw1` | [`ArrayVector4D`](#arrayvector4d) | First vector as `[x, y, z, w]` |
| `xyzw2` | [`ArrayVector4D`](#arrayvector4d) | Second vector as `[x, y, z, w]` |

#### Returns

`number`

The dot product

***

### fromAngleX2D()

```ts
function fromAngleX2D(phi, magnitude?): ArrayVector2D;
```

Creates an ArrayVector2D from x-axis angle.

#### Parameters

| Parameter | Type | Default value | Description |
| ------ | ------ | ------ | ------ |
| `phi` | `number` | `undefined` | Angle in radians |
| `magnitude` | `number` | `1` | Optional magnitude of the vector (default: `1`) |

#### Returns

[`ArrayVector2D`](#arrayvector2d)

Vector

***

### fromAngleY2D()

```ts
function fromAngleY2D(phi, magnitude?): ArrayVector2D;
```

Creates an ArrayVector2D from y-axis angle.

#### Parameters

| Parameter | Type | Default value | Description |
| ------ | ------ | ------ | ------ |
| `phi` | `number` | `undefined` | Angle in radians |
| `magnitude` | `number` | `1` | Optional magnitude of the vector (default: `1`) |

#### Returns

[`ArrayVector2D`](#arrayvector2d)

Vector

***

### fromCylindricalCoords()

```ts
function fromCylindricalCoords(
   r, 
   phi, 
   z
): ArrayVector3D;
```

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

### fromObject2D()

```ts
function fromObject2D(vector2D): ArrayVector2D;
```

Creates an `ArrayVector2D` from an object with x and y properties.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `vector2D` | \{ `x`: `number`; `y`: `number`; \} | Object with x and y properties |
| `vector2D.x` | `number` | - |
| `vector2D.y` | `number` | - |

#### Returns

[`ArrayVector2D`](#arrayvector2d)

2DArrayVector as an array

***

### fromObject3D()

```ts
function fromObject3D(vector3D): ArrayVector3D;
```

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

### fromObject4D()

```ts
function fromObject4D(obj): ArrayVector4D;
```

Creates a 4DArrayVector from an object with x, y, z, w properties.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `obj` | \{ `w`: `number`; `x`: `number`; `y`: `number`; `z`: `number`; \} | Object with x, y, z, w properties |
| `obj.w` | `number` | - |
| `obj.x` | `number` | - |
| `obj.y` | `number` | - |
| `obj.z` | `number` | - |

#### Returns

[`ArrayVector4D`](#arrayvector4d)

4DArrayVector

***

### fromPolarCoords2D()

```ts
function fromPolarCoords2D(phi, m?): ArrayVector2D;
```

Creates an `ArrayVector2D` from polar coordinates.

#### Parameters

| Parameter | Type | Default value | Description |
| ------ | ------ | ------ | ------ |
| `phi` | `number` | `undefined` | Angle in radians |
| `m` | `number` | `1` | Optional magnitude (default: `1`) |

#### Returns

[`ArrayVector2D`](#arrayvector2d)

Vector

***

### fromSphericalCoords3D()

```ts
function fromSphericalCoords3D(
   theta, 
   phi, 
   m?
): ArrayVector3D;
```

Creates a 3DArrayVector from spherical coordinates.

#### Parameters

| Parameter | Type | Default value | Description |
| ------ | ------ | ------ | ------ |
| `theta` | `number` | `undefined` | First angle |
| `phi` | `number` | `undefined` | Second angle |
| `m` | `number` | `1` | Optional magnitude (default: `1`) |

#### Returns

[`ArrayVector3D`](#arrayvector3d)

Vector

***

### immutable2D()

```ts
function immutable2D(xy): readonly [number, number];
```

Create an immutable 2DArrayVector.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `xy` | [`ArrayVector2D`](#arrayvector2d) | Vector as `[x, y]` |

#### Returns

readonly \[`number`, `number`\]

The immutable vector

***

### immutable3D()

```ts
function immutable3D(xyz): readonly [number, number, number];
```

Create an immutable 3DArrayVector.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `xyz` | [`ArrayVector3D`](#arrayvector3d) | Vector as `[x, y, z]` |

#### Returns

readonly \[`number`, `number`, `number`\]

The immutable vector

***

### immutable4D()

```ts
function immutable4D(xyzw): readonly [number, number, number, number];
```

Create an immutable 4DArrayVector.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `xyzw` | [`ArrayVector4D`](#arrayvector4d) | Vector as `[x, y, z, w]` |

#### Returns

readonly \[`number`, `number`, `number`, `number`\]

The immutable vector

***

### isEqual2D()

```ts
function isEqual2D(xy1, xy2): boolean;
```

Checks if two 2D vectors are equal.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `xy1` | [`ArrayVector2D`](#arrayvector2d) | First vector as `[x, y]` |
| `xy2` | [`ArrayVector2D`](#arrayvector2d) | Second vector as `[x, y]` |

#### Returns

`boolean`

`true` if the vectors are equal, `false` otherwise

***

### isEqual3D()

```ts
function isEqual3D(xyz1, xyz2): boolean;
```

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

### isEqual4D()

```ts
function isEqual4D(xyzw1, xyzw2): boolean;
```

Checks if two 4D vectors are exactly equal.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `xyzw1` | [`ArrayVector4D`](#arrayvector4d) | First vector as `[x, y, z, w]` |
| `xyzw2` | [`ArrayVector4D`](#arrayvector4d) | Second vector as `[x, y, z, w]` |

#### Returns

`boolean`

`true` if vectors are equal, `false` otherwse

***

### isEqualApprox2D()

```ts
function isEqualApprox2D(
   xy1, 
   xy2, 
   epsilon?
): boolean;
```

Compares a 2DArrayVector with another vector using an epsilon value for floating-point comparison.

#### Parameters

| Parameter | Type | Default value | Description |
| ------ | ------ | ------ | ------ |
| `xy1` | [`ArrayVector2D`](#arrayvector2d) | `undefined` | First vector as `[x, y]` |
| `xy2` | [`ArrayVector2D`](#arrayvector2d) | `undefined` | Second vector as `[x, y]` |
| `epsilon` | `number` | `Number.EPSILON` | Maximum difference between components to consider them equal (default: `Number.EPSILON`) |

#### Returns

`boolean`

`true` if the vectors are equal, `false` otherwise

***

### isEqualApprox3D()

```ts
function isEqualApprox3D(
   xyz1, 
   xyz2, 
   epsilon?
): boolean;
```

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

### isEqualApprox4D()

```ts
function isEqualApprox4D(
   xyzw1, 
   xyzw2, 
   epsilon?
): boolean;
```

Checks if two 4D vectors are approximately equal within epsilon.

#### Parameters

| Parameter | Type | Default value | Description |
| ------ | ------ | ------ | ------ |
| `xyzw1` | [`ArrayVector4D`](#arrayvector4d) | `undefined` | First vector as `[x, y, z, w]` |
| `xyzw2` | [`ArrayVector4D`](#arrayvector4d) | `undefined` | Second vector as `[x, y, z, w]` |
| `epsilon` | `number` | `Number.EPSILON` | Maximum difference (default: `Number.EPSILON`) |

#### Returns

`boolean`

`true` if vectors are approximately equal, `false` otherwise

***

### isInfinite2D()

```ts
function isInfinite2D(xy): boolean;
```

Checks if a vector has infinite components.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `xy` | [`ArrayVector2D`](#arrayvector2d) | Vector as `[x, y]` |

#### Returns

`boolean`

`true` if the vector has infinite components, `false` otherwise

***

### isInfinite3D()

```ts
function isInfinite3D(xyz): boolean;
```

Checks if a vector has infinite components.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `xyz` | [`ArrayVector3D`](#arrayvector3d) | Vector as `[x, y, z]` |

#### Returns

`boolean`

`true` if the vector has infinite components, `false` otherwise

***

### isInfinite4D()

```ts
function isInfinite4D(xyzw): boolean;
```

Checks if a 4DArrayVector has infinite components.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `xyzw` | [`ArrayVector4D`](#arrayvector4d) | Vector as `[x, y, z, w]` |

#### Returns

`boolean`

`true` if vector has infinite components, `false` otherwise

***

### isNaN2D()

```ts
function isNaN2D(xy): boolean;
```

Checks if a vector has NaN components.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `xy` | [`ArrayVector2D`](#arrayvector2d) | Vector as `[x, y]` |

#### Returns

`boolean`

`true` if the vector has `NaN` components, `false` otherwise.

***

### isNaN3D()

```ts
function isNaN3D(xyz): boolean;
```

Checks if a 3DArrayVector has NaN components.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `xyz` | [`ArrayVector3D`](#arrayvector3d) | Vector as `[x, y, z]` |

#### Returns

`boolean`

`true` if the vector has `NaN` components, `false` otherwise.

***

### isNan4D()

```ts
function isNan4D(xyzw): boolean;
```

Checks if a 4DArrayVector has NaN components.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `xyzw` | [`ArrayVector4D`](#arrayvector4d) | Vector as `[x, y, z, w]` |

#### Returns

`boolean`

`true` if vector has `NaN` components, `false` otherwise

***

### isOpposite2D()

```ts
function isOpposite2D(xy1, xy2): boolean;
```

Checks if two 2D vectors are opposite.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `xy1` | [`ArrayVector2D`](#arrayvector2d) | First vector as `[x, y]` |
| `xy2` | [`ArrayVector2D`](#arrayvector2d) | Second vector as `[x, y]` |

#### Returns

`boolean`

`true` if the vectors are opposite, `false` otherwise

***

### isOpposite3D()

```ts
function isOpposite3D(xyz1, xyz2): boolean;
```

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

### isOpposite4D()

```ts
function isOpposite4D(xyzw1, xyzw2): boolean;
```

Checks if two 4D vectors are opposite.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `xyzw1` | [`ArrayVector4D`](#arrayvector4d) | First vector as `[x, y, z, w]` |
| `xyzw2` | [`ArrayVector4D`](#arrayvector4d) | Second vector as `[x, y, z, w]` |

#### Returns

`boolean`

`true` if vectors are opposite

***

### isZero2D()

```ts
function isZero2D(xy): boolean;
```

Checks if a vector is zero.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `xy` | [`ArrayVector2D`](#arrayvector2d) | Vector as `[x, y]` |

#### Returns

`boolean`

`true` if the vector is zero, `false` otherwise

***

### isZero3D()

```ts
function isZero3D(xyz): boolean;
```

Checks if a 3DArrayVector is zero.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `xyz` | [`ArrayVector3D`](#arrayvector3d) | Vector as `[x, y, z]` |

#### Returns

`boolean`

`true` if the vector is zero, `false` otherwise

***

### isZero4D()

```ts
function isZero4D(xyzw): boolean;
```

Checks if a 4DArrayVector is zero.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `xyzw` | [`ArrayVector4D`](#arrayvector4d) | Vector as `[x, y, z, w]` |

#### Returns

`boolean`

`true` if vector is zero, `false` otherwise

***

### lerp2D()

```ts
function lerp2D(
   xy1, 
   xy2, 
   t
): ArrayVector2D;
```

Performs linear interpolation between two 2D vectors.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `xy1` | [`ArrayVector2D`](#arrayvector2d) | First vector as `[x, y]` |
| `xy2` | [`ArrayVector2D`](#arrayvector2d) | Second vector as `[x, y]` |
| `t` | `number` | Interpolation parameter |

#### Returns

[`ArrayVector2D`](#arrayvector2d)

The interpolated vector

***

### lerp3D()

```ts
function lerp3D(
   xyz1, 
   xyz2, 
   t
): ArrayVector3D;
```

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

### lerp4D()

```ts
function lerp4D(
   xyzw1, 
   xyzw2, 
   t
): ArrayVector4D;
```

Performs linear interpolation between two 4D vectors.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `xyzw1` | [`ArrayVector4D`](#arrayvector4d) | First vector as `[x, y, z, w]` |
| `xyzw2` | [`ArrayVector4D`](#arrayvector4d) | Second vector as `[x, y, z, w]` |
| `t` | `number` | Interpolation parameter |

#### Returns

[`ArrayVector4D`](#arrayvector4d)

The interpolated vector

***

### limitMax2D()

```ts
function limitMax2D(
   xy, 
   max, 
   m?
): ArrayVector2D;
```

Limits the maximum magnitude of a 2DArrayVector.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `xy` | [`ArrayVector2D`](#arrayvector2d) | Vector as `[x, y]` |
| `max` | `number` | Maximum magnitude |
| `m` | `number` | Optional current magnitude (default: `magnitude2D(xy)`) |

#### Returns

[`ArrayVector2D`](#arrayvector2d)

The limited vector

***

### limitMax3D()

```ts
function limitMax3D(
   xyz, 
   max, 
   m?
): ArrayVector3D;
```

Limits the maximum magnitude of a 3DArrayVector.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `xyz` | [`ArrayVector3D`](#arrayvector3d) | Vector as `[x, y, z]` |
| `max` | `number` | Maximum magnitude |
| `m` | `number` | Optional current magnitude (default: `magnitude3D(xyz)`) |

#### Returns

[`ArrayVector3D`](#arrayvector3d)

The adjusted vector

***

### limitMax4D()

```ts
function limitMax4D(
   xyzw, 
   max, 
   m?
): ArrayVector4D;
```

Limits the maximum magnitude of a 4DArrayVector.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `xyzw` | [`ArrayVector4D`](#arrayvector4d) | Vector as `[x, y, z, w]` |
| `max` | `number` | Maximum magnitude |
| `m` | `number` | Optional current magnitude (default: `magnitude4D(xyzw)`) |

#### Returns

[`ArrayVector4D`](#arrayvector4d)

Vector with limited magnitude

***

### limitMin2D()

```ts
function limitMin2D(
   xy, 
   min, 
   m?
): ArrayVector2D;
```

Limits the maximum magnitude of a 2DArrayVector.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `xy` | [`ArrayVector2D`](#arrayvector2d) | Vector as `[x, y]` |
| `min` | `number` | Minimum magnitude |
| `m` | `number` | Optional current magnitude (default: `magnitude2D(xy)`) |

#### Returns

[`ArrayVector2D`](#arrayvector2d)

The limited vector

***

### limitMin3D()

```ts
function limitMin3D(
   xyz, 
   min, 
   m?
): ArrayVector3D;
```

Limits the minimum magnitude of a 3DArrayVector.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `xyz` | [`ArrayVector3D`](#arrayvector3d) | Vector as `[x, y, z]` |
| `min` | `number` | Minimum magnitude |
| `m` | `number` | Optional current magnitude (default: `magnitude3D(xyz)`) |

#### Returns

[`ArrayVector3D`](#arrayvector3d)

The adjusted vector

***

### limitMin4D()

```ts
function limitMin4D(
   xyzw, 
   min, 
   m?
): ArrayVector4D;
```

Limits the minimum magnitude of a 4DArrayVector.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `xyzw` | [`ArrayVector4D`](#arrayvector4d) | Vector as `[x, y, z, w]` |
| `min` | `number` | Minimum magnitude |
| `m` | `number` | Optional current magnitude (default: `magnitude4D(xyzw)`) |

#### Returns

[`ArrayVector4D`](#arrayvector4d)

Vector with limited magnitude

***

### lookAt2D()

```ts
function lookAt2D(
   xy1, 
   xy2, 
   m1?, 
   m2?
): ArrayVector2D;
```

Calculates the 2DArrayVector angle of a vector pointing at another.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `xy1` | [`ArrayVector2D`](#arrayvector2d) | First vector as `[x, y]` |
| `xy2` | [`ArrayVector2D`](#arrayvector2d) | Second vector as `[x, y]` (target to look at) |
| `m1` | `number` | Optional current magnitude of the first vector (default: magnitude2D(xy1)) |
| `m2` | `number` | Optional current magnitude of the second vector (default: magnitude2D(xy2)) |

#### Returns

[`ArrayVector2D`](#arrayvector2d)

Vector pointing at the target with the magnitude of xy1

***

### lookAt3D()

```ts
function lookAt3D(
   xyz1, 
   xyz2, 
   m1?, 
   m2?
): ArrayVector3D;
```

Creates a vector pointing from the first vector to the second vector, maintaining the magnitude of the first vector.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `xyz1` | [`ArrayVector3D`](#arrayvector3d) | First vector as `[x, y, z]` (source direction) |
| `xyz2` | [`ArrayVector3D`](#arrayvector3d) | Second vector as `[x, y, z]` (target direction) |
| `m1` | `number` | Optional current magnitude of the first vector (default: `magnitude3D(xyz1)`) |
| `m2` | `number` | Optional current magnitude of the second vector (default: `magnitude3D(xyz2)`) |

#### Returns

[`ArrayVector3D`](#arrayvector3d)

The look-at vector

***

### lookAt4D()

```ts
function lookAt4D(
   xyzw1, 
   xyzw2, 
   m1?, 
   m2?
): ArrayVector4D;
```

Makes a 4DArrayVector point towards another vector.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `xyzw1` | [`ArrayVector4D`](#arrayvector4d) | First vector as `[x, y, z, w]` |
| `xyzw2` | [`ArrayVector4D`](#arrayvector4d) | Second vector as `[x, y, z, w]` (target to look at) |
| `m1` | `number` | Optional current magnitude of the first vector (default: `magnitude4D(xyzw1)`) |
| `m2` | `number` | Optional current magnitude of the second vector (default: `magnitude4D(xyzw2)`) |

#### Returns

[`ArrayVector4D`](#arrayvector4d)

Vector pointing at the target with the magnitude of xyzw1

***

### magnitude2D()

```ts
function magnitude2D(xy): number;
```

Calculates the magnitude of a 2DArrayVector.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `xy` | [`ArrayVector2D`](#arrayvector2d) | Vector as `[x, y]` |

#### Returns

`number`

Magnitude of the vector

***

### magnitude3D()

```ts
function magnitude3D(xyz): number;
```

Calculates the magnitude of a 3DArrayVector.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `xyz` | [`ArrayVector3D`](#arrayvector3d) | Vector as `[x, y, z]` |

#### Returns

`number`

Magnitude of the vector

***

### magnitude4D()

```ts
function magnitude4D(xyzw): number;
```

Calculates the magnitude (length) of a 4DArrayVector.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `xyzw` | [`ArrayVector4D`](#arrayvector4d) | Vector as `[x, y, z, w]` |

#### Returns

`number`

The magnitude

***

### magnitudeSq2D()

```ts
function magnitudeSq2D(xy): number;
```

Calculate the squared magnitude of a 2DArrayVector.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `xy` | [`ArrayVector2D`](#arrayvector2d) | Vector as `[x, y]` |

#### Returns

`number`

Squared magnitude

***

### magnitudeSq3D()

```ts
function magnitudeSq3D(xyz): number;
```

Calculate the squared magnitude of a 3DArrayVector.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `xyz` | [`ArrayVector3D`](#arrayvector3d) | Vector as `[x, y, z]` |

#### Returns

`number`

Squared magnitude

***

### magnitudeSq4D()

```ts
function magnitudeSq4D(xyzw): number;
```

Calculates the squared magnitude of a 4DArrayVector.
Faster than magnitude for comparisons.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `xyzw` | [`ArrayVector4D`](#arrayvector4d) | Vector as `[x, y, z, w]` |

#### Returns

`number`

The squared magnitude

***

### multiply2D()

```ts
function multiply2D(xy1, xy2): ArrayVector2D;
```

Multiplies one 2DArrayVector with another component-wise.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `xy1` | [`ArrayVector2D`](#arrayvector2d) | First vector as `[x, y]` |
| `xy2` | [`ArrayVector2D`](#arrayvector2d) | Second vector as `[x, y]` |

#### Returns

[`ArrayVector2D`](#arrayvector2d)

The multiplied vector

***

### multiply3D()

```ts
function multiply3D(xyz1, xyz2): ArrayVector3D;
```

Multiplies one 3DArrayVector with another component-wise.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `xyz1` | [`ArrayVector3D`](#arrayvector3d) | First vector as `[x, y, z]` |
| `xyz2` | [`ArrayVector3D`](#arrayvector3d) | Second vector as `[x, y, z]` |

#### Returns

[`ArrayVector3D`](#arrayvector3d)

The multiplied value

***

### multiply4D()

```ts
function multiply4D(xyzw1, xyzw2): ArrayVector4D;
```

Multiplies two 4D vectors component-wise.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `xyzw1` | [`ArrayVector4D`](#arrayvector4d) | First vector as `[x, y, z, w]` |
| `xyzw2` | [`ArrayVector4D`](#arrayvector4d) | Second vector as `[x, y, z, w]` |

#### Returns

[`ArrayVector4D`](#arrayvector4d)

The multiplied vector

***

### negate2D()

```ts
function negate2D(xy): ArrayVector2D;
```

Negates a 2DArrayVector.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `xy` | [`ArrayVector2D`](#arrayvector2d) | Vector as `[x, y]` |

#### Returns

[`ArrayVector2D`](#arrayvector2d)

The negated vector

***

### negate3D()

```ts
function negate3D(xyz): ArrayVector3D;
```

Negates a 3DArrayVector.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `xyz` | [`ArrayVector3D`](#arrayvector3d) | Vector as `[x, y, z]` |

#### Returns

[`ArrayVector3D`](#arrayvector3d)

The negated vector

***

### negate4D()

```ts
function negate4D(xyzw): ArrayVector4D;
```

Negates a 4DArrayVector.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `xyzw` | [`ArrayVector4D`](#arrayvector4d) | Vector as `[x, y, z, w]` |

#### Returns

[`ArrayVector4D`](#arrayvector4d)

The negated vector

***

### normalize2D()

```ts
function normalize2D(xy, m?): ArrayVector2D;
```

Normalize a 2DArrayVector.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `xy` | [`ArrayVector2D`](#arrayvector2d) | Vector as `[x, y]` |
| `m` | `number` | Optional current magnitude (default: `magnitude2D(xy)`) |

#### Returns

[`ArrayVector2D`](#arrayvector2d)

The normalized vector

***

### normalize3D()

```ts
function normalize3D(xyz, m?): ArrayVector3D;
```

Normalize a 3DArrayVector.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `xyz` | [`ArrayVector3D`](#arrayvector3d) | Vector as `[x, y, z]` |
| `m` | `number` | Optional current magnitude (default: `magnitude3D(xyz)`) |

#### Returns

[`ArrayVector3D`](#arrayvector3d)

The normalized vector

***

### normalize4D()

```ts
function normalize4D(xyzw, m?): ArrayVector4D;
```

Normalizes a 4DArrayVector to unit length.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `xyzw` | [`ArrayVector4D`](#arrayvector4d) | Vector as `[x, y, z, w]` |
| `m` | `number` | Optional current magnitude (default: `magnitude4D(xyzw)`) |

#### Returns

[`ArrayVector4D`](#arrayvector4d)

The normalized vector

***

### one2D()

```ts
function one2D(): ArrayVector2D;
```

Creates a 2DArrayVector with all components set to 1.0.

#### Returns

[`ArrayVector2D`](#arrayvector2d)

Vector `[1, 1]`

***

### one3D()

```ts
function one3D(): ArrayVector3D;
```

Creates a 3DArrayVector with all components to to 1.0.

#### Returns

[`ArrayVector3D`](#arrayvector3d)

Vector `[1, 1, 1]`

***

### one4D()

```ts
function one4D(): ArrayVector4D;
```

Creates a 4DArrayVector with all components set to 1.

#### Returns

[`ArrayVector4D`](#arrayvector4d)

A vector `[1, 1, 1, 1]`

***

### project2D()

```ts
function project2D(
   xy1, 
   xy2, 
   m1?, 
   m2?
): ArrayVector2D;
```

Projects one 2DArrayVector onto another.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `xy1` | [`ArrayVector2D`](#arrayvector2d) | Vector to project |
| `xy2` | [`ArrayVector2D`](#arrayvector2d) | Vector to project onto |
| `m1` | `number` | Optional magnitude of the first vector (default: `magnitude2D(xy1)`) |
| `m2` | `number` | Optional magnitude of the second vector (default: `magnitude2D(xy2)`) |

#### Returns

[`ArrayVector2D`](#arrayvector2d)

The projected vector

***

### project3D()

```ts
function project3D(
   xyz1, 
   xyz2, 
   m1?, 
   m2?
): ArrayVector3D;
```

Projects one 3DArrayVector onto the second.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `xyz1` | [`ArrayVector3D`](#arrayvector3d) | Vector to project |
| `xyz2` | [`ArrayVector3D`](#arrayvector3d) | Vector to project onto |
| `m1` | `number` | Optional magnitude of the vector to project (default: `magnitude3D(xyz1)`) |
| `m2` | `number` | Optional magnitude of the vector to project onto (default: `magnitude3D(xyz2)`) |

#### Returns

[`ArrayVector3D`](#arrayvector3d)

The projected vector

***

### project4D()

```ts
function project4D(
   xyzw1, 
   xyzw2, 
   m1?, 
   m2?
): ArrayVector4D;
```

Projects one 4DArrayVector onto another.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `xyzw1` | [`ArrayVector4D`](#arrayvector4d) | First vector as `[x, y, z, w]` |
| `xyzw2` | [`ArrayVector4D`](#arrayvector4d) | Second vector as `[x, y, z, w]` to project onto |
| `m1` | `number` | Optional current magnitude (default: `magnitude4D(xyzw1)`) |
| `m2` | `number` | Optional current magnitude (default: `magnitude4D(xyzw2)`) |

#### Returns

[`ArrayVector4D`](#arrayvector4d)

The projected vector

***

### random2D()

```ts
function random2D(random?): ArrayVector2D;
```

Creates a random unit 2DArrayVector.

#### Parameters

| Parameter | Type | Default value | Description |
| ------ | ------ | ------ | ------ |
| `random` | () => `number` | `Math.random` | A function that returns a random number between 0 and 1 (default: `Math.random`) |

#### Returns

[`ArrayVector2D`](#arrayvector2d)

Random unit vector

***

### random3D()

```ts
function random3D(random?): ArrayVector3D;
```

Creates a random unit 3DArrayVector.

#### Parameters

| Parameter | Type | Default value | Description |
| ------ | ------ | ------ | ------ |
| `random` | () => `number` | `Math.random` | A function that returns a random number between 0 and 1 (default: `Math.random`) |

#### Returns

[`ArrayVector3D`](#arrayvector3d)

Random unit vector

***

### random4D()

```ts
function random4D(random?): ArrayVector4D;
```

Creates a random unit 4DArrayVector.

#### Parameters

| Parameter | Type | Default value | Description |
| ------ | ------ | ------ | ------ |
| `random` | () => `number` | `Math.random` | A function that returns a random number between 0 and 1 (default: `Math.random`) |

#### Returns

[`ArrayVector4D`](#arrayvector4d)

A random unit vector

***

### reflect2D()

```ts
function reflect2D(xy, normal): ArrayVector2D;
```

Reflects the vector across a normal vector.
The normal vector should be normalized (unit length).

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `xy` | [`ArrayVector2D`](#arrayvector2d) | Vector as `[x, y]` to reflect |
| `normal` | [`ArrayVector2D`](#arrayvector2d) | Normal vector to reflect across (must be normalized) |

#### Returns

[`ArrayVector2D`](#arrayvector2d)

The reflected vector

***

### reflect3D()

```ts
function reflect3D(xyz, normal): ArrayVector3D;
```

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

### reflect4D()

```ts
function reflect4D(xyzw, normal): ArrayVector4D;
```

Reflects a 4DArrayVector across a normal vector.
The normal vector should be normalized (unit length).

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `xyzw` | [`ArrayVector4D`](#arrayvector4d) | Vector as `[x, y, z, w]` |
| `normal` | [`ArrayVector4D`](#arrayvector4d) | Normal vector (must be normalized) |

#### Returns

[`ArrayVector4D`](#arrayvector4d)

The reflected vector

***

### rotate2D()

```ts
function rotate2D(
   xy, 
   phi, 
   axis?
): ArrayVector2D;
```

Rotates a 2D point around an arbitrary axis point

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `xy` | [`ArrayVector2D`](#arrayvector2d) | Point to rotate |
| `phi` | `number` | Rotation angle in radians |
| `axis` | [`ArrayVector2D`](#arrayvector2d) | Rotation axis point (default: `[0, 0]`) |

#### Returns

[`ArrayVector2D`](#arrayvector2d)

The rotated vector

***

### rotateX3D()

```ts
function rotateX3D(
   xyz, 
   phi, 
   axis?
): ArrayVector3D;
```

Rotates a 3DArrayVector around the x-axis.

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
   axis?
): ArrayVector3D;
```

Rotates a 3DArrayVector around the y-axis.

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
   axis?
): ArrayVector3D;
```

Rotates a 3DArrayVector around the z-axis.

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

### setMagnitude2D()

```ts
function setMagnitude2D(
   xy, 
   newMag, 
   m?
): ArrayVector2D;
```

Sets the magnitude (length) of a 2DArrayVector, maintaining its direction.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `xy` | [`ArrayVector2D`](#arrayvector2d) | Vector as `[x, y]` |
| `newMag` | `number` | New magnitude |
| `m` | `number` | Optional current magnitude (default: `magnitude2D(xy)`) |

#### Returns

[`ArrayVector2D`](#arrayvector2d)

The adjusted vector

***

### setMagnitude3D()

```ts
function setMagnitude3D(
   xyz, 
   newMagnitude, 
   m?
): ArrayVector3D;
```

Sets the magnitude (length) of a 3DArrayVector, maintaining its direction.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `xyz` | [`ArrayVector3D`](#arrayvector3d) | Vector as `[x, y, z]` |
| `newMagnitude` | `number` | New magnitude |
| `m` | `number` | Optional current magnitude (default: `magnitude3D(xyz)`) |

#### Returns

[`ArrayVector3D`](#arrayvector3d)

The adjusted vector

***

### setMagnitude4D()

```ts
function setMagnitude4D(
   xyzw, 
   newMag, 
   m?
): ArrayVector4D;
```

Sets the magnitude of a 4DArrayVector while maintaining its direction.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `xyzw` | [`ArrayVector4D`](#arrayvector4d) | Vector as `[x, y, z, w]` |
| `newMag` | `number` | The new magnitude |
| `m` | `number` | Optional current magnitude (default: `magnitude4D(xyzw)`) |

#### Returns

[`ArrayVector4D`](#arrayvector4d)

Vector with the new magnitude

***

### slerp()

```ts
function slerp(
   from, 
   to, 
   t
): number;
```

Spherical linear interpolation for angles (in radians).
Handles wrapping around 2π correctly.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `from` | `number` | Start angle in radians |
| `to` | `number` | End angle in radians |
| `t` | `number` | Interpolation factor (0-1) |

#### Returns

`number`

Interpolated angle

***

### slerpDegrees()

```ts
function slerpDegrees(
   from, 
   to, 
   t
): number;
```

Spherical linear interpolation for angles (in degrees).

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `from` | `number` | Start angle in degrees |
| `to` | `number` | End angle in degrees |
| `t` | `number` | Interpolation factor (0-1) |

#### Returns

`number`

Interpolated angle

***

### subtract2D()

```ts
function subtract2D(xy1, xy2): ArrayVector2D;
```

Subtracts a 2DArrayVector from another.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `xy1` | [`ArrayVector2D`](#arrayvector2d) | First vector as `[x, y]` |
| `xy2` | [`ArrayVector2D`](#arrayvector2d) | Second vector as `[x, y]` |

#### Returns

[`ArrayVector2D`](#arrayvector2d)

The difference between vectors

***

### subtract3D()

```ts
function subtract3D(xyz1, xyz2): ArrayVector3D;
```

Subtracts a 3DArrayVector from another.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `xyz1` | [`ArrayVector3D`](#arrayvector3d) | First vector as `[x, y, z]` |
| `xyz2` | [`ArrayVector3D`](#arrayvector3d) | Second vector as `[x, y, z]` |

#### Returns

[`ArrayVector3D`](#arrayvector3d)

The difference between the vectors

***

### subtract4D()

```ts
function subtract4D(xyzw1, xyzw2): ArrayVector4D;
```

Subtracts two 4D vectors.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `xyzw1` | [`ArrayVector4D`](#arrayvector4d) | First vector as `[x, y, z, w]` |
| `xyzw2` | [`ArrayVector4D`](#arrayvector4d) | Second vector as `[x, y, z, w]` |

#### Returns

[`ArrayVector4D`](#arrayvector4d)

The difference of the vectors

***

### zero2D()

```ts
function zero2D(): ArrayVector2D;
```

Creates a zero 2DArrayVector.

#### Returns

[`ArrayVector2D`](#arrayvector2d)

Vector `[0, 0]`

***

### zero3D()

```ts
function zero3D(): ArrayVector3D;
```

Creates a zero 3DArrayVector.

#### Returns

[`ArrayVector3D`](#arrayvector3d)

Vector `[0, 0, 0]`

***

### zero4D()

```ts
function zero4D(): ArrayVector4D;
```

Creates a zero 4DArrayVector.

#### Returns

[`ArrayVector4D`](#arrayvector4d)

A zero vector `[0, 0, 0, 0]`
