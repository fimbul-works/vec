[**@fimbul-works/vec**](README.md)

***

[@fimbul-works/vec](modules.md) / Vec2

# Vec2

Documentation for 2D Vector class.

## Classes

### Vec2

Defined in: [vec2.ts:12](https://github.com/claus-codes/vec/blob/64e80c9069476a15976526c526682ae4845883c9/src/vec2.ts#L12)

Represents a 2D vector with various operations.

#### Constructors

##### Constructor

```ts
new Vec2(x, y): Vec2;
```

Defined in: [vec2.ts:37](https://github.com/claus-codes/vec/blob/64e80c9069476a15976526c526682ae4845883c9/src/vec2.ts#L37)

Creates a new Vec2 instance.

###### Parameters

###### x

`number` = `0`

The x-coordinate of the vector.

###### y

`number` = `x`

The y-coordinate of the vector.

###### Returns

[`Vec2`](#vec2)

#### Accessors

##### angleX

###### Get Signature

```ts
get angleX(): number;
```

Defined in: [vec2.ts:496](https://github.com/claus-codes/vec/blob/64e80c9069476a15976526c526682ae4845883c9/src/vec2.ts#L496)

Gets the angle between the vector and the positive x-axis in radians.

###### Returns

`number`

The angle in radians, always in the range [0, 2π).

###### Set Signature

```ts
set angleX(phi): void;
```

Defined in: [vec2.ts:504](https://github.com/claus-codes/vec/blob/64e80c9069476a15976526c526682ae4845883c9/src/vec2.ts#L504)

Sets the angle between the vector and the positive x-axis, maintaining the vector's magnitude.

###### Parameters

###### phi

`number`

The new angle in radians.

###### Returns

`void`

##### angleY

###### Get Signature

```ts
get angleY(): number;
```

Defined in: [vec2.ts:515](https://github.com/claus-codes/vec/blob/64e80c9069476a15976526c526682ae4845883c9/src/vec2.ts#L515)

Gets the angle between the vector and the positive y-axis in radians.

###### Returns

`number`

The angle in radians, always in the range [0, 2π).

###### Set Signature

```ts
set angleY(phi): void;
```

Defined in: [vec2.ts:523](https://github.com/claus-codes/vec/blob/64e80c9069476a15976526c526682ae4845883c9/src/vec2.ts#L523)

Sets the angle between the vector and the positive y-axis, maintaining the vector's magnitude.

###### Parameters

###### phi

`number`

The new angle in radians.

###### Returns

`void`

##### magnitude

###### Get Signature

```ts
get magnitude(): number;
```

Defined in: [vec2.ts:534](https://github.com/claus-codes/vec/blob/64e80c9069476a15976526c526682ae4845883c9/src/vec2.ts#L534)

Gets the magnitude (length) of the vector.

###### Returns

`number`

The magnitude of the vector.

###### Set Signature

```ts
set magnitude(m): void;
```

Defined in: [vec2.ts:542](https://github.com/claus-codes/vec/blob/64e80c9069476a15976526c526682ae4845883c9/src/vec2.ts#L542)

Sets the magnitude (length) of the vector, maintaining its direction.

###### Parameters

###### m

`number`

The new magnitude.

###### Returns

`void`

##### magnitudeSq

###### Get Signature

```ts
get magnitudeSq(): number;
```

Defined in: [vec2.ts:554](https://github.com/claus-codes/vec/blob/64e80c9069476a15976526c526682ae4845883c9/src/vec2.ts#L554)

Gets the squared magnitude of the vector.
This is faster to compute than the actual magnitude and is useful for comparisons.

###### Returns

`number`

The squared magnitude of the vector.

##### x

###### Get Signature

```ts
get x(): number;
```

Defined in: [vec2.ts:444](https://github.com/claus-codes/vec/blob/64e80c9069476a15976526c526682ae4845883c9/src/vec2.ts#L444)

Gets the x-component of the vector.

###### Returns

`number`

The x-component.

###### Set Signature

```ts
set x(x): void;
```

Defined in: [vec2.ts:452](https://github.com/claus-codes/vec/blob/64e80c9069476a15976526c526682ae4845883c9/src/vec2.ts#L452)

Sets the x-component of the vector.

###### Parameters

###### x

`number`

The new x-component.

###### Returns

`void`

##### xy

###### Get Signature

```ts
get xy(): [number, number];
```

Defined in: [vec2.ts:478](https://github.com/claus-codes/vec/blob/64e80c9069476a15976526c526682ae4845883c9/src/vec2.ts#L478)

Gets a copy of the vector's components as an array.

###### Returns

\[`number`, `number`\]

An array containing the x and y components of the vector.

###### Set Signature

```ts
set xy(xy): void;
```

Defined in: [vec2.ts:486](https://github.com/claus-codes/vec/blob/64e80c9069476a15976526c526682ae4845883c9/src/vec2.ts#L486)

Sets both components of the vector at once.

###### Parameters

###### xy

An array containing the new x and y components.

`number`[] | \[`number`, `number`\]

###### Returns

`void`

##### y

###### Get Signature

```ts
get y(): number;
```

Defined in: [vec2.ts:461](https://github.com/claus-codes/vec/blob/64e80c9069476a15976526c526682ae4845883c9/src/vec2.ts#L461)

Gets the y-component of the vector.

###### Returns

`number`

The y-component.

###### Set Signature

```ts
set y(y): void;
```

Defined in: [vec2.ts:469](https://github.com/claus-codes/vec/blob/64e80c9069476a15976526c526682ae4845883c9/src/vec2.ts#L469)

Sets the y-component of the vector.

###### Parameters

###### y

`number`

The new y-component.

###### Returns

`void`

#### Methods

##### \[iterator\]()

```ts
iterator: IterableIterator<number>;
```

Defined in: [vec2.ts:960](https://github.com/claus-codes/vec/blob/64e80c9069476a15976526c526682ae4845883c9/src/vec2.ts#L960)

Makes the Vec2 instance iterable.

###### Returns

`IterableIterator`\<`number`\>

###### Yields

The x and y components of the vector.

##### add()

```ts
add(v): this;
```

Defined in: [vec2.ts:563](https://github.com/claus-codes/vec/blob/64e80c9069476a15976526c526682ae4845883c9/src/vec2.ts#L563)

Adds another vector to this vector.

###### Parameters

###### v

[`Vec2`](#vec2)

The vector to add.

###### Returns

`this`

This Vec2 instance for method chaining.

##### angleBetween()

```ts
angleBetween(v): number;
```

Defined in: [vec2.ts:611](https://github.com/claus-codes/vec/blob/64e80c9069476a15976526c526682ae4845883c9/src/vec2.ts#L611)

Calculates the angle between this vector and another vector.

###### Parameters

###### v

[`Vec2`](#vec2)

The other vector.

###### Returns

`number`

The angle between the vectors in radians.

##### clamp()

```ts
clamp(min, max): this;
```

Defined in: [vec2.ts:625](https://github.com/claus-codes/vec/blob/64e80c9069476a15976526c526682ae4845883c9/src/vec2.ts#L625)

Clamps the magnitude of this vector between a minimum and maximum value.

###### Parameters

###### min

`number`

The minimum magnitude.

###### max

`number`

The maximum magnitude.

###### Returns

`this`

This Vec2 instance for method chaining.

##### clone()

```ts
clone(): Vec2;
```

Defined in: [vec2.ts:643](https://github.com/claus-codes/vec/blob/64e80c9069476a15976526c526682ae4845883c9/src/vec2.ts#L643)

Creates a copy of this vector.

###### Returns

[`Vec2`](#vec2)

A new Vec2 instance with the same components.

##### copy()

```ts
copy(v): this;
```

Defined in: [vec2.ts:652](https://github.com/claus-codes/vec/blob/64e80c9069476a15976526c526682ae4845883c9/src/vec2.ts#L652)

Copies the components of another vector to this vector.

###### Parameters

###### v

[`Vec2`](#vec2)

The vector to copy from.

###### Returns

`this`

This Vec2 instance for method chaining.

##### cross()

```ts
cross(v): number;
```

Defined in: [vec2.ts:721](https://github.com/claus-codes/vec/blob/64e80c9069476a15976526c526682ae4845883c9/src/vec2.ts#L721)

Calculates the cross product of this vector with another vector.

###### Parameters

###### v

[`Vec2`](#vec2)

The other vector.

###### Returns

`number`

The cross product of the vectors.

##### distance()

```ts
distance(v): number;
```

Defined in: [vec2.ts:664](https://github.com/claus-codes/vec/blob/64e80c9069476a15976526c526682ae4845883c9/src/vec2.ts#L664)

Calculates the distance between this vector and another vector.

###### Parameters

###### v

[`Vec2`](#vec2)

The other vector.

###### Returns

`number`

The distance between the vectors.

##### distanceChebyshev()

```ts
distanceChebyshev(v): number;
```

Defined in: [vec2.ts:673](https://github.com/claus-codes/vec/blob/64e80c9069476a15976526c526682ae4845883c9/src/vec2.ts#L673)

Calculates the Chebyshev distance between this vector and another vector.

###### Parameters

###### v

[`Vec2`](#vec2)

The other vector.

###### Returns

`number`

The Chebyshev distance between the vectors.

##### distanceManhattan()

```ts
distanceManhattan(v): number;
```

Defined in: [vec2.ts:684](https://github.com/claus-codes/vec/blob/64e80c9069476a15976526c526682ae4845883c9/src/vec2.ts#L684)

Calculates the Manhattan distance between this vector and another vector.

###### Parameters

###### v

[`Vec2`](#vec2)

The other vector.

###### Returns

`number`

The Manhattan distance between the vectors.

##### distanceMinkowski()

```ts
distanceMinkowski(v, p): number;
```

Defined in: [vec2.ts:694](https://github.com/claus-codes/vec/blob/64e80c9069476a15976526c526682ae4845883c9/src/vec2.ts#L694)

Calculates the Minkowski distance between this vector and another vector.

###### Parameters

###### v

[`Vec2`](#vec2)

The other vector.

###### p

`number`

The order of the Minkowski distance.

###### Returns

`number`

The Minkowski distance between the vectors.

##### distanceSq()

```ts
distanceSq(v): number;
```

Defined in: [vec2.ts:703](https://github.com/claus-codes/vec/blob/64e80c9069476a15976526c526682ae4845883c9/src/vec2.ts#L703)

Calculates the squared distance between this vector and another vector.

###### Parameters

###### v

[`Vec2`](#vec2)

The other vector.

###### Returns

`number`

The squared distance between the vectors.

##### divide()

```ts
divide(v): this;
```

Defined in: [vec2.ts:599](https://github.com/claus-codes/vec/blob/64e80c9069476a15976526c526682ae4845883c9/src/vec2.ts#L599)

Divides this vector with another vector.

###### Parameters

###### v

[`Vec2`](#vec2)

The vector to divide with.

###### Returns

`this`

This Vec2 instance for method chaining.

##### dot()

```ts
dot(v): number;
```

Defined in: [vec2.ts:712](https://github.com/claus-codes/vec/blob/64e80c9069476a15976526c526682ae4845883c9/src/vec2.ts#L712)

Calculates the dot product of this vector with another vector.

###### Parameters

###### v

[`Vec2`](#vec2)

The other vector.

###### Returns

`number`

The dot product of the vectors.

##### equals()

```ts
equals(v, epsilon): boolean;
```

Defined in: [vec2.ts:905](https://github.com/claus-codes/vec/blob/64e80c9069476a15976526c526682ae4845883c9/src/vec2.ts#L905)

Compares this vector with another vector using an epsilon value for floating-point comparison.

###### Parameters

###### v

[`Vec2`](#vec2)

The vector to compare with.

###### epsilon

`number` = `Number.EPSILON`

The maximum difference between components to consider them equal.

###### Returns

`boolean`

True if the vectors are equal within epsilon, false otherwise.

##### isInfinite()

```ts
isInfinite(): boolean;
```

Defined in: [vec2.ts:739](https://github.com/claus-codes/vec/blob/64e80c9069476a15976526c526682ae4845883c9/src/vec2.ts#L739)

Checks if this vector has infinite components.

###### Returns

`boolean`

True if the vector has infinite components, false otherwise.

##### isNaN()

```ts
isNaN(): boolean;
```

Defined in: [vec2.ts:754](https://github.com/claus-codes/vec/blob/64e80c9069476a15976526c526682ae4845883c9/src/vec2.ts#L754)

Checks if this vector has NaN components.

###### Returns

`boolean`

True if the vector has NaN components, false otherwise.

##### isZero()

```ts
isZero(): boolean;
```

Defined in: [vec2.ts:762](https://github.com/claus-codes/vec/blob/64e80c9069476a15976526c526682ae4845883c9/src/vec2.ts#L762)

Checks if this vector is zero.

###### Returns

`boolean`

True if the vector is zero, false otherwise.

##### limitMax()

```ts
limitMax(max): this;
```

Defined in: [vec2.ts:771](https://github.com/claus-codes/vec/blob/64e80c9069476a15976526c526682ae4845883c9/src/vec2.ts#L771)

Limits the maximum magnitude of this vector.

###### Parameters

###### max

`number`

The maximum magnitude.

###### Returns

`this`

This Vec2 instance for method chaining.

##### limitMin()

```ts
limitMin(min): this;
```

Defined in: [vec2.ts:786](https://github.com/claus-codes/vec/blob/64e80c9069476a15976526c526682ae4845883c9/src/vec2.ts#L786)

Limits the minimum magnitude of this vector.

###### Parameters

###### min

`number`

The minimum magnitude.

###### Returns

`this`

This Vec2 instance for method chaining.

##### lookAt()

```ts
lookAt(v): this;
```

Defined in: [vec2.ts:801](https://github.com/claus-codes/vec/blob/64e80c9069476a15976526c526682ae4845883c9/src/vec2.ts#L801)

Sets this vector to point towards another vector.

###### Parameters

###### v

[`Vec2`](#vec2)

The vector to look at.

###### Returns

`this`

This Vec2 instance for method chaining.

##### multiply()

```ts
multiply(v): this;
```

Defined in: [vec2.ts:587](https://github.com/claus-codes/vec/blob/64e80c9069476a15976526c526682ae4845883c9/src/vec2.ts#L587)

Multiplies this vector with another vector.

###### Parameters

###### v

[`Vec2`](#vec2)

The vector to multiply with.

###### Returns

`this`

This Vec2 instance for method chaining.

##### negate()

```ts
negate(): this;
```

Defined in: [vec2.ts:814](https://github.com/claus-codes/vec/blob/64e80c9069476a15976526c526682ae4845883c9/src/vec2.ts#L814)

Negates this vector.

###### Returns

`this`

This Vec2 instance for method chaining.

##### normalize()

```ts
normalize(): this;
```

Defined in: [vec2.ts:825](https://github.com/claus-codes/vec/blob/64e80c9069476a15976526c526682ae4845883c9/src/vec2.ts#L825)

Normalizes this vector.

###### Returns

`this`

This Vec2 instance for method chaining.

##### project()

```ts
project(v): this;
```

Defined in: [vec2.ts:838](https://github.com/claus-codes/vec/blob/64e80c9069476a15976526c526682ae4845883c9/src/vec2.ts#L838)

Projects this vector onto another vector.

###### Parameters

###### v

[`Vec2`](#vec2)

The vector to project onto.

###### Returns

`this`

This Vec2 instance for method chaining.

##### random()

```ts
random(random): this;
```

Defined in: [vec2.ts:856](https://github.com/claus-codes/vec/blob/64e80c9069476a15976526c526682ae4845883c9/src/vec2.ts#L856)

Sets this vector to a random direction with the same magnitude.

###### Parameters

###### random

() => `number`

A function that returns a random number between 0 and 1.

###### Returns

`this`

This Vec2 instance for method chaining.

##### reflect()

```ts
reflect(normal): Vec2;
```

Defined in: [vec2.ts:730](https://github.com/claus-codes/vec/blob/64e80c9069476a15976526c526682ae4845883c9/src/vec2.ts#L730)

Reflects this vector across a normal vector.

###### Parameters

###### normal

[`Vec2`](#vec2)

The normal vector to reflect across (must be normalized).

###### Returns

[`Vec2`](#vec2)

A new Vec2 instance representing the reflected vector.

##### rotateZ()

```ts
rotateZ(phi): this;
```

Defined in: [vec2.ts:870](https://github.com/claus-codes/vec/blob/64e80c9069476a15976526c526682ae4845883c9/src/vec2.ts#L870)

Rotates this vector around the Z-axis.

###### Parameters

###### phi

`number`

The angle of rotation in radians.

###### Returns

`this`

This Vec2 instance for method chaining.

##### satisfyEquality()

```ts
satisfyEquality(v): boolean;
```

Defined in: [vec2.ts:886](https://github.com/claus-codes/vec/blob/64e80c9069476a15976526c526682ae4845883c9/src/vec2.ts#L886)

Checks if this vector is equal to another vector.

###### Parameters

###### v

[`Vec2`](#vec2)

The other vector.

###### Returns

`boolean`

True if the vectors are equal, false otherwise.

##### satisfyOpposition()

```ts
satisfyOpposition(v): boolean;
```

Defined in: [vec2.ts:895](https://github.com/claus-codes/vec/blob/64e80c9069476a15976526c526682ae4845883c9/src/vec2.ts#L895)

Checks if this vector is opposite to another vector.

###### Parameters

###### v

[`Vec2`](#vec2)

The other vector.

###### Returns

`boolean`

True if the vectors are opposite, false otherwise.

##### scale()

```ts
scale(c): this;
```

Defined in: [vec2.ts:914](https://github.com/claus-codes/vec/blob/64e80c9069476a15976526c526682ae4845883c9/src/vec2.ts#L914)

Scales this vector by a scalar value.

###### Parameters

###### c

`number`

The scalar value.

###### Returns

`this`

This Vec2 instance for method chaining.

##### subtract()

```ts
subtract(v): this;
```

Defined in: [vec2.ts:575](https://github.com/claus-codes/vec/blob/64e80c9069476a15976526c526682ae4845883c9/src/vec2.ts#L575)

Subtracts another vector from this vector.

###### Parameters

###### v

[`Vec2`](#vec2)

The vector to subtract.

###### Returns

`this`

This Vec2 instance for method chaining.

##### toJSON()

```ts
toJSON(): {
  x: number;
  y: number;
};
```

Defined in: [vec2.ts:985](https://github.com/claus-codes/vec/blob/64e80c9069476a15976526c526682ae4845883c9/src/vec2.ts#L985)

Serializes the vector to a JSON-friendly format.

###### Returns

```ts
{
  x: number;
  y: number;
}
```

A JSON-friendly object representation of the vector.

###### x

```ts
x: number;
```

###### y

```ts
y: number;
```

##### toObject()

```ts
toObject(): {
  x: number;
  y: number;
};
```

Defined in: [vec2.ts:977](https://github.com/claus-codes/vec/blob/64e80c9069476a15976526c526682ae4845883c9/src/vec2.ts#L977)

Converts the vector to a plain object.

###### Returns

```ts
{
  x: number;
  y: number;
}
```

An object with x and y properties.

###### x

```ts
x: number;
```

###### y

```ts
y: number;
```

##### toString()

```ts
toString(): string;
```

Defined in: [vec2.ts:969](https://github.com/claus-codes/vec/blob/64e80c9069476a15976526c526682ae4845883c9/src/vec2.ts#L969)

Returns a string representation of the vector.

###### Returns

`string`

A string in the format "Vec2(x, y)".

##### turnLeft()

```ts
turnLeft(): this;
```

Defined in: [vec2.ts:925](https://github.com/claus-codes/vec/blob/64e80c9069476a15976526c526682ae4845883c9/src/vec2.ts#L925)

Rotates this vector 90 degrees to the left.

###### Returns

`this`

This Vec2 instance for method chaining.

##### turnRight()

```ts
turnRight(): this;
```

Defined in: [vec2.ts:937](https://github.com/claus-codes/vec/blob/64e80c9069476a15976526c526682ae4845883c9/src/vec2.ts#L937)

Rotates this vector 90 degrees to the right.

###### Returns

`this`

This Vec2 instance for method chaining.

##### zero()

```ts
zero(): this;
```

Defined in: [vec2.ts:949](https://github.com/claus-codes/vec/blob/64e80c9069476a15976526c526682ae4845883c9/src/vec2.ts#L949)

Sets this vector to zero.

###### Returns

`this`

This Vec2 instance for method chaining.

##### add()

```ts
static add(v, w): Vec2;
```

Defined in: [vec2.ts:49](https://github.com/claus-codes/vec/blob/64e80c9069476a15976526c526682ae4845883c9/src/vec2.ts#L49)

Adds two vectors.

###### Parameters

###### v

[`Vec2`](#vec2)

The first vector.

###### w

[`Vec2`](#vec2)

The second vector.

###### Returns

[`Vec2`](#vec2)

A new Vec2 instance representing the sum.

##### angleBetween()

```ts
static angleBetween(v, w): number;
```

Defined in: [vec2.ts:89](https://github.com/claus-codes/vec/blob/64e80c9069476a15976526c526682ae4845883c9/src/vec2.ts#L89)

Calculates the angle between two vectors.

###### Parameters

###### v

[`Vec2`](#vec2)

The first vector.

###### w

[`Vec2`](#vec2)

The second vector.

###### Returns

`number`

The angle between the vectors in radians.

##### cross()

```ts
static cross(v, w): number;
```

Defined in: [vec2.ts:166](https://github.com/claus-codes/vec/blob/64e80c9069476a15976526c526682ae4845883c9/src/vec2.ts#L166)

Calculates the cross product of two vectors.

###### Parameters

###### v

[`Vec2`](#vec2)

The first vector.

###### w

[`Vec2`](#vec2)

The second vector.

###### Returns

`number`

The cross product scalar value.

##### distance()

```ts
static distance(v, w): number;
```

Defined in: [vec2.ts:103](https://github.com/claus-codes/vec/blob/64e80c9069476a15976526c526682ae4845883c9/src/vec2.ts#L103)

Calculates the Euclidean distance between two vectors.

###### Parameters

###### v

[`Vec2`](#vec2)

The first vector.

###### w

[`Vec2`](#vec2)

The second vector.

###### Returns

`number`

The distance between the vectors.

##### distanceChebyshev()

```ts
static distanceChebyshev(v, w): number;
```

Defined in: [vec2.ts:113](https://github.com/claus-codes/vec/blob/64e80c9069476a15976526c526682ae4845883c9/src/vec2.ts#L113)

Calculates the Chebyshev distance between two vectors.

###### Parameters

###### v

[`Vec2`](#vec2)

The first vector.

###### w

[`Vec2`](#vec2)

The second vector.

###### Returns

`number`

The Chebyshev distance between the vectors.

##### distanceManhattan()

```ts
static distanceManhattan(v, w): number;
```

Defined in: [vec2.ts:125](https://github.com/claus-codes/vec/blob/64e80c9069476a15976526c526682ae4845883c9/src/vec2.ts#L125)

Calculates the Manhattan distance between two vectors.

###### Parameters

###### v

[`Vec2`](#vec2)

The first vector.

###### w

[`Vec2`](#vec2)

The second vector.

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

Defined in: [vec2.ts:136](https://github.com/claus-codes/vec/blob/64e80c9069476a15976526c526682ae4845883c9/src/vec2.ts#L136)

Calculates the Minkowski distance between two vectors.

###### Parameters

###### v

[`Vec2`](#vec2)

The first vector.

###### w

[`Vec2`](#vec2)

The second vector.

###### p

`number`

The order of the Minkowski distance.

###### Returns

`number`

The Minkowski distance between the vectors.

##### distanceSq()

```ts
static distanceSq(v, w): number;
```

Defined in: [vec2.ts:146](https://github.com/claus-codes/vec/blob/64e80c9069476a15976526c526682ae4845883c9/src/vec2.ts#L146)

Calculates the squared Euclidean distance between two vectors.

###### Parameters

###### v

[`Vec2`](#vec2)

The first vector.

###### w

[`Vec2`](#vec2)

The second vector.

###### Returns

`number`

The squared distance between the vectors.

##### divide()

```ts
static divide(v, w): Vec2;
```

Defined in: [vec2.ts:79](https://github.com/claus-codes/vec/blob/64e80c9069476a15976526c526682ae4845883c9/src/vec2.ts#L79)

Divides one vector with another.

###### Parameters

###### v

[`Vec2`](#vec2)

Divident.

###### w

[`Vec2`](#vec2)

Divisor.

###### Returns

[`Vec2`](#vec2)

A new Vec2 instance representing the divided value.

##### dot()

```ts
static dot(v, w): number;
```

Defined in: [vec2.ts:156](https://github.com/claus-codes/vec/blob/64e80c9069476a15976526c526682ae4845883c9/src/vec2.ts#L156)

Calculates the dot product of two vectors.

###### Parameters

###### v

[`Vec2`](#vec2)

The first vector.

###### w

[`Vec2`](#vec2)

The second vector.

###### Returns

`number`

The dot product of the vectors.

##### equals()

```ts
static equals(
   v, 
   w, 
   epsilon): boolean;
```

Defined in: [vec2.ts:383](https://github.com/claus-codes/vec/blob/64e80c9069476a15976526c526682ae4845883c9/src/vec2.ts#L383)

Compares a vector with another vector using an epsilon value for floating-point comparison.

###### Parameters

###### v

[`Vec2`](#vec2)

The first vector.

###### w

[`Vec2`](#vec2)

The second vector.

###### epsilon

`number` = `Number.EPSILON`

The maximum difference between components to consider them equal.

###### Returns

`boolean`

True if the vectors are equal within epsilon, false otherwise.

##### fromArray()

```ts
static fromArray(arr): Vec2;
```

Defined in: [vec2.ts:418](https://github.com/claus-codes/vec/blob/64e80c9069476a15976526c526682ae4845883c9/src/vec2.ts#L418)

Creates a Vec2 from an array.

###### Parameters

###### arr

An array containing the x and y coordinates.

`number`[] | \[`number`, `number`\]

###### Returns

[`Vec2`](#vec2)

A new Vec2 instance.

##### fromJSON()

```ts
static fromJSON(json): Vec2;
```

Defined in: [vec2.ts:436](https://github.com/claus-codes/vec/blob/64e80c9069476a15976526c526682ae4845883c9/src/vec2.ts#L436)

Creates a Vec2 instance from a JSON-parsed object.

###### Parameters

###### json

The JSON-parsed object containing x and y properties.

###### x

`number`

###### y

`number`

###### Returns

[`Vec2`](#vec2)

A new Vec2 instance.

##### fromObject()

```ts
static fromObject(obj): Vec2;
```

Defined in: [vec2.ts:427](https://github.com/claus-codes/vec/blob/64e80c9069476a15976526c526682ae4845883c9/src/vec2.ts#L427)

Creates a Vec2 from an object with x and y properties.

###### Parameters

###### obj

An object with x and y properties.

###### x

`number`

###### y

`number`

###### Returns

[`Vec2`](#vec2)

A new Vec2 instance.

##### fromPolarCoords()

```ts
static fromPolarCoords(r, theta): Vec2;
```

Defined in: [vec2.ts:187](https://github.com/claus-codes/vec/blob/64e80c9069476a15976526c526682ae4845883c9/src/vec2.ts#L187)

Creates a Vec2 instance from polar coordinates.

###### Parameters

###### r

`number`

The radius.

###### theta

`number`

The angle in radians.

###### Returns

[`Vec2`](#vec2)

A new Vec2 instance.

##### immutable()

```ts
static immutable(x, y): Readonly<{
  angleX: number;
  angleY: number;
  isInfinite: boolean;
  isNaN: boolean;
  isZero: boolean;
  magnitude: number;
  magnitudeSq: number;
  x: number;
  xy: readonly number[];
  y: number;
}>;
```

Defined in: [vec2.ts:197](https://github.com/claus-codes/vec/blob/64e80c9069476a15976526c526682ae4845883c9/src/vec2.ts#L197)

Creates an immutable Vec2-like object.

###### Parameters

###### x

`number` = `0`

The x-coordinate of the vector.

###### y

`number` = `0`

The y-coordinate of the vector.

###### Returns

`Readonly`\<\{
  `angleX`: `number`;
  `angleY`: `number`;
  `isInfinite`: `boolean`;
  `isNaN`: `boolean`;
  `isZero`: `boolean`;
  `magnitude`: `number`;
  `magnitudeSq`: `number`;
  `x`: `number`;
  `xy`: readonly `number`[];
  `y`: `number`;
\}\>

An immutable object with Vec2-like properties.

##### isInfinite()

```ts
static isInfinite(v): boolean;
```

Defined in: [vec2.ts:267](https://github.com/claus-codes/vec/blob/64e80c9069476a15976526c526682ae4845883c9/src/vec2.ts#L267)

Checks if a vector has infinite components.

###### Parameters

###### v

[`Vec2`](#vec2)

The vector to check.

###### Returns

`boolean`

True if the vector has infinite components, false otherwise.

##### isNaN()

```ts
static isNaN(v): boolean;
```

Defined in: [vec2.ts:283](https://github.com/claus-codes/vec/blob/64e80c9069476a15976526c526682ae4845883c9/src/vec2.ts#L283)

Checks if a vector has NaN components.

###### Parameters

###### v

[`Vec2`](#vec2)

The vector to check.

###### Returns

`boolean`

True if the vector has NaN components, false otherwise.

##### isZero()

```ts
static isZero(v): boolean;
```

Defined in: [vec2.ts:292](https://github.com/claus-codes/vec/blob/64e80c9069476a15976526c526682ae4845883c9/src/vec2.ts#L292)

Checks if a vector is zero.

###### Parameters

###### v

[`Vec2`](#vec2)

The vector to check.

###### Returns

`boolean`

True if the vector is zero, false otherwise.

##### lerp()

```ts
static lerp(
   v, 
   w, 
   t): Vec2;
```

Defined in: [vec2.ts:303](https://github.com/claus-codes/vec/blob/64e80c9069476a15976526c526682ae4845883c9/src/vec2.ts#L303)

Performs linear interpolation between two vectors.

###### Parameters

###### v

[`Vec2`](#vec2)

The first vector.

###### w

[`Vec2`](#vec2)

The second vector.

###### t

`number`

The interpolation parameter (0 to 1).

###### Returns

[`Vec2`](#vec2)

A new Vec2 instance representing the interpolated vector.

##### multiply()

```ts
static multiply(v, w): Vec2;
```

Defined in: [vec2.ts:69](https://github.com/claus-codes/vec/blob/64e80c9069476a15976526c526682ae4845883c9/src/vec2.ts#L69)

Multiplies one vector with another.

###### Parameters

###### v

[`Vec2`](#vec2)

The first vector.

###### w

[`Vec2`](#vec2)

The second vector.

###### Returns

[`Vec2`](#vec2)

A new Vec2 instance representing the multiplied value.

##### negate()

```ts
static negate(v): Vec2;
```

Defined in: [vec2.ts:316](https://github.com/claus-codes/vec/blob/64e80c9069476a15976526c526682ae4845883c9/src/vec2.ts#L316)

Negates a vector.

###### Parameters

###### v

[`Vec2`](#vec2)

The vector to negate.

###### Returns

[`Vec2`](#vec2)

A new Vec2 instance representing the negated vector.

##### normalize()

```ts
static normalize(v): Vec2;
```

Defined in: [vec2.ts:325](https://github.com/claus-codes/vec/blob/64e80c9069476a15976526c526682ae4845883c9/src/vec2.ts#L325)

Normalizes a vector.

###### Parameters

###### v

[`Vec2`](#vec2)

The vector to normalize.

###### Returns

[`Vec2`](#vec2)

A new Vec2 instance representing the normalized vector.

##### one()

```ts
static one(): Vec2;
```

Defined in: [vec2.ts:409](https://github.com/claus-codes/vec/blob/64e80c9069476a15976526c526682ae4845883c9/src/vec2.ts#L409)

Creates a vector with all components set to 1.0.

###### Returns

[`Vec2`](#vec2)

A new Vec2 instance representing a vector with all components set to 1.0.

##### project()

```ts
static project(v, w): Vec2;
```

Defined in: [vec2.ts:336](https://github.com/claus-codes/vec/blob/64e80c9069476a15976526c526682ae4845883c9/src/vec2.ts#L336)

Projects one vector onto another.

###### Parameters

###### v

[`Vec2`](#vec2)

The vector to project.

###### w

[`Vec2`](#vec2)

The vector to project onto.

###### Returns

[`Vec2`](#vec2)

A new Vec2 instance representing the projected vector.

##### random()

```ts
static random(random): Vec2;
```

Defined in: [vec2.ts:351](https://github.com/claus-codes/vec/blob/64e80c9069476a15976526c526682ae4845883c9/src/vec2.ts#L351)

Creates a random unit vector.

###### Parameters

###### random

() => `number`

A function that returns a random number between 0 and 1.

###### Returns

[`Vec2`](#vec2)

A new Vec2 instance representing a random unit vector.

##### reflect()

```ts
static reflect(v, normal): Vec2;
```

Defined in: [vec2.ts:176](https://github.com/claus-codes/vec/blob/64e80c9069476a15976526c526682ae4845883c9/src/vec2.ts#L176)

Reflects the vector across a normal vector.

###### Parameters

###### v

[`Vec2`](#vec2)

The vector to reflect.

###### normal

[`Vec2`](#vec2)

The normal vector to reflect across (must be normalized).

###### Returns

[`Vec2`](#vec2)

A new Vec2 instance representing the reflected vector.

##### satisfyEquality()

```ts
static satisfyEquality(v, w): boolean;
```

Defined in: [vec2.ts:362](https://github.com/claus-codes/vec/blob/64e80c9069476a15976526c526682ae4845883c9/src/vec2.ts#L362)

Checks if two vectors are equal.

###### Parameters

###### v

[`Vec2`](#vec2)

The first vector.

###### w

[`Vec2`](#vec2)

The second vector.

###### Returns

`boolean`

True if the vectors are equal, false otherwise.

##### satisfyOpposition()

```ts
static satisfyOpposition(v, w): boolean;
```

Defined in: [vec2.ts:372](https://github.com/claus-codes/vec/blob/64e80c9069476a15976526c526682ae4845883c9/src/vec2.ts#L372)

Checks if two vectors are opposite.

###### Parameters

###### v

[`Vec2`](#vec2)

The first vector.

###### w

[`Vec2`](#vec2)

The second vector.

###### Returns

`boolean`

True if the vectors are opposite, false otherwise.

##### scale()

```ts
static scale(v, c): Vec2;
```

Defined in: [vec2.ts:393](https://github.com/claus-codes/vec/blob/64e80c9069476a15976526c526682ae4845883c9/src/vec2.ts#L393)

Scales a vector by a scalar value.

###### Parameters

###### v

[`Vec2`](#vec2)

The vector to scale.

###### c

`number`

The scalar value.

###### Returns

[`Vec2`](#vec2)

A new Vec2 instance representing the scaled vector.

##### subtract()

```ts
static subtract(v, w): Vec2;
```

Defined in: [vec2.ts:59](https://github.com/claus-codes/vec/blob/64e80c9069476a15976526c526682ae4845883c9/src/vec2.ts#L59)

Subtracts one vector from another.

###### Parameters

###### v

[`Vec2`](#vec2)

The vector to subtract from.

###### w

[`Vec2`](#vec2)

The vector to subtract.

###### Returns

[`Vec2`](#vec2)

A new Vec2 instance representing the difference.

##### zero()

```ts
static zero(): Vec2;
```

Defined in: [vec2.ts:401](https://github.com/claus-codes/vec/blob/64e80c9069476a15976526c526682ae4845883c9/src/vec2.ts#L401)

Creates a zero vector.

###### Returns

[`Vec2`](#vec2)

A new Vec2 instance representing a zero vector.
