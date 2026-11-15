# @fimbul-works/vec

## Classes

### ArrayProxyVec2

Proxying 2D vector into an interleaved array.

#### Type Parameters

| Type Parameter |
| ------ |
| <a id="type-parameter-t"></a> `T` *extends* [`ProxyArrayVectorTarget`](#proxyarrayvectortarget) |

#### Implements

- [`Vec2Like`](#vec2like)

#### Constructors

##### Constructor

```ts
new ArrayProxyVec2<T>(
   target, 
   offset, 
   gap?
): ArrayProxyVec2<T>;
```

###### Parameters

| Parameter | Type | Default value | Description |
| ------ | ------ | ------ | ------ |
| `target` | `T` | `undefined` | The target array. |
| `offset` | `number` | `undefined` | The offset in the array. |
| `gap?` | `number` | `0` | Gap between components (stride). |

###### Returns

[`ArrayProxyVec2`](#arrayproxyvec2)\<`T`\>

###### Throws

Error when offset is negative, or not an integer.

###### Throws

Error when gap is negative, or not an integer.

###### Throws

Error when y-component is out of target array bounds.

#### Properties

| Property | Modifier | Type | Description |
| ------ | ------ | ------ | ------ |
| <a id="property-onchange"></a> `onChange?` | `public` | (`v`) => `void` | Callback to be invoked whenever properties change. |

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

[`Vec2Like`](#vec2like).[`angleX`](#property-anglex)

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

[`Vec2Like`](#vec2like).[`angleY`](#property-angley)

##### indexRange

###### Get Signature

```ts
get indexRange(): readonly [number, number];
```

Range of min and max component indices.

###### Returns

readonly \[`number`, `number`\]

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

[`Vec2Like`](#vec2like).[`magnitude`](#property-magnitude)

##### magnitudeSq

###### Get Signature

```ts
get magnitudeSq(): number;
```

Gets the squared magnitude of the vector.

###### Returns

`number`

The squared magnitude of the vector.

###### Implementation of

[`Vec2Like`](#vec2like).[`magnitudeSq`](#property-magnitudesq)

##### offset

###### Get Signature

```ts
get offset(): number;
```

Get the current offset in the target array.

###### Returns

`number`

###### Set Signature

```ts
set offset(offset): void;
```

Set a new offset.

###### Throws

Error when offset is negative, or not an integer.

###### Throws

Error when y-component is out of target bounds.

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `offset` | `number` | The offset in the array. |

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

###### Implementation of

[`Vec2Like`](#vec2like).[`x`](#property-x)

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

[`Vec2Like`](#vec2like).[`xy`](#property-xy)

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

[`Vec2Like`](#vec2like).[`y`](#property-y)

#### Methods

##### \[iterator\]()

```ts
[iterator](): IterableIterator<number>;
```

Iterator over this vector's components.

###### Returns

`IterableIterator`\<`number`\>

###### Yields

The x and y components of the vector.

###### Implementation of

[`Vec2Like`](#vec2like).[`[iterator]`](#iterator-9)

##### add()

```ts
add(v): this;
```

Adds another vector to this vector.

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `v` | [`Vec2Like`](#vec2like) | The vector to add. |

###### Returns

`this`

`this` instance for method chaining.

###### Implementation of

[`Vec2Like`](#vec2like).[`add`](#add-12)

##### angleBetween()

```ts
angleBetween(v): number;
```

Calculates the angle between this vector and another vector.

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `v` | [`Vec2Like`](#vec2like) | The other vector. |

###### Returns

`number`

The angle between the vectors in radians.

###### Implementation of

[`Vec2Like`](#vec2like).[`angleBetween`](#anglebetween-12)

##### bind()

```ts
bind(
   target, 
   offset, 
   gap
): void;
```

Set the proxy target.

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `target` | `T` | The target array. |
| `offset` | `number` | The offset in the array. |
| `gap` | `number` | The gap (stride) between positions. |

###### Returns

`void`

###### Throws

Error when offset is negative, or not an integer.

###### Throws

Error when gap is negative, or not an integer.

###### Throws

Error when y-component is out of target array bounds.

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

[`Vec2Like`](#vec2like).[`clamp`](#clamp-9)

##### clone()

```ts
clone(): Vec2;
```

Creates a new Vec2 instance based on this vector.

###### Returns

[`Vec2`](#vec2)

A new Vec2 instance with the same components.

###### Implementation of

[`Vec2Like`](#vec2like).[`clone`](#clone-9)

##### copy()

```ts
copy(v): this;
```

Copies the components of another vector to this vector.

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `v` | [`Vec2Like`](#vec2like) | The vector to copy from. |

###### Returns

`this`

`this` instance for method chaining.

###### Implementation of

[`Vec2Like`](#vec2like).[`copy`](#copy-9)

##### cross()

```ts
cross(v): number;
```

Calculates the cross product of this vector with another vector.

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `v` | [`Vec2Like`](#vec2like) | The other vector. |

###### Returns

`number`

The cross product of the vectors.

###### Implementation of

[`Vec2Like`](#vec2like).[`cross`](#cross-8)

##### distance()

```ts
distance(v): number;
```

Calculates the distance between this vector and another vector.

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `v` | [`Vec2Like`](#vec2like) | The other vector. |

###### Returns

`number`

The distance between the vectors.

###### Implementation of

[`Vec2Like`](#vec2like).[`distance`](#distance-12)

##### distanceChebyshev()

```ts
distanceChebyshev(v): number;
```

Calculates the Chebyshev distance between this vector and another vector.

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `v` | [`Vec2Like`](#vec2like) | The other vector. |

###### Returns

`number`

The Chebyshev distance between the vectors.

###### Implementation of

[`Vec2Like`](#vec2like).[`distanceChebyshev`](#distancechebyshev-12)

##### distanceManhattan()

```ts
distanceManhattan(v): number;
```

Calculates the Manhattan distance between this vector and another vector.

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `v` | [`Vec2Like`](#vec2like) | The other vector. |

###### Returns

`number`

The Manhattan distance between the vectors.

###### Implementation of

[`Vec2Like`](#vec2like).[`distanceManhattan`](#distancemanhattan-12)

##### distanceMinkowski()

```ts
distanceMinkowski(v, p): number;
```

Calculates the Minkowski distance between this vector and another vector.

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `v` | [`Vec2Like`](#vec2like) | The other vector. |
| `p` | `number` | The order of the Minkowski distance. |

###### Returns

`number`

The Minkowski distance between the vectors.

###### Implementation of

[`Vec2Like`](#vec2like).[`distanceMinkowski`](#distanceminkowski-12)

##### distanceSq()

```ts
distanceSq(v): number;
```

Calculates the squared distance between this vector and another vector.

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `v` | [`Vec2Like`](#vec2like) | The other vector. |

###### Returns

`number`

The squared distance between the vectors.

###### Implementation of

[`Vec2Like`](#vec2like).[`distanceSq`](#distancesq-12)

##### divide()

```ts
divide(v): this;
```

Divides this vector with another vector.

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `v` | [`Vec2Like`](#vec2like) | The vector to divide with. |

###### Returns

`this`

`this` instance for method chaining.

###### Implementation of

[`Vec2Like`](#vec2like).[`divide`](#divide-12)

##### dot()

```ts
dot(v): number;
```

Calculates the dot product of this vector with another vector.

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `v` | [`Vec2Like`](#vec2like) | The other vector. |

###### Returns

`number`

The dot product of the vectors.

###### Implementation of

[`Vec2Like`](#vec2like).[`dot`](#dot-12)

##### equals()

```ts
equals(v, epsilon?): boolean;
```

Compares this vector with another vector using an epsilon value for floating-point comparison.

###### Parameters

| Parameter | Type | Default value | Description |
| ------ | ------ | ------ | ------ |
| `v` | [`Vec2Like`](#vec2like) | `undefined` | The vector to compare with. |
| `epsilon?` | `number` | `Number.EPSILON` | The maximum difference between components to consider them equal. |

###### Returns

`boolean`

True if the vectors are equal within epsilon, false otherwise.

###### Implementation of

[`Vec2Like`](#vec2like).[`equals`](#equals-12)

##### isInfinite()

```ts
isInfinite(): boolean;
```

Checks if this vector has infinite components.

###### Returns

`boolean`

True if the vector has infinite components, false otherwise.

###### Implementation of

[`Vec2Like`](#vec2like).[`isInfinite`](#isinfinite-12)

##### isNaN()

```ts
isNaN(): boolean;
```

Checks if this vector has NaN components.

###### Returns

`boolean`

True if the vector has NaN components, false otherwise.

###### Implementation of

[`Vec2Like`](#vec2like).[`isNaN`](#isnan-12)

##### isZero()

```ts
isZero(): boolean;
```

Checks if this vector is zero.

###### Returns

`boolean`

True if the vector is zero, false otherwise.

###### Implementation of

[`Vec2Like`](#vec2like).[`isZero`](#iszero-12)

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

[`Vec2Like`](#vec2like).[`limitMax`](#limitmax-9)

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

[`Vec2Like`](#vec2like).[`limitMin`](#limitmin-9)

##### lookAt()

```ts
lookAt(v): this;
```

Sets this vector to point towards another vector.

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `v` | [`Vec2Like`](#vec2like) | The vector to look at. |

###### Returns

`this`

`this` instance for method chaining.

###### Implementation of

[`Vec2Like`](#vec2like).[`lookAt`](#lookat-9)

##### multiply()

```ts
multiply(v): this;
```

Multiplies this vector with another vector.

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `v` | [`Vec2Like`](#vec2like) | The vector to multiply with. |

###### Returns

`this`

`this` instance for method chaining.

###### Implementation of

[`Vec2Like`](#vec2like).[`multiply`](#multiply-12)

##### negate()

```ts
negate(): this;
```

Negates this vector.

###### Returns

`this`

`this` instance for method chaining.

###### Implementation of

[`Vec2Like`](#vec2like).[`negate`](#negate-12)

##### normalize()

```ts
normalize(): this;
```

Normalizes this vector.

###### Returns

`this`

`this` instance for method chaining.

###### Implementation of

[`Vec2Like`](#vec2like).[`normalize`](#normalize-12)

##### project()

```ts
project(v): this;
```

Projects this vector onto another vector.

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `v` | [`Vec2Like`](#vec2like) | The vector to project onto. |

###### Returns

`this`

`this` instance for method chaining.

###### Implementation of

[`Vec2Like`](#vec2like).[`project`](#project-12)

##### random()

```ts
random(random?): this;
```

Sets this vector to a random direction with the same magnitude.

###### Parameters

| Parameter | Type | Default value | Description |
| ------ | ------ | ------ | ------ |
| `random?` | () => `number` | `Math.random` | A function that returns a random number between 0 and 1. |

###### Returns

`this`

`this` instance for method chaining.

###### Implementation of

[`Vec2Like`](#vec2like).[`random`](#random-12)

##### reflect()

```ts
reflect(normal): Vec2;
```

Reflects this vector across a normal vector.

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `normal` | [`Vec2Like`](#vec2like) | The normal vector to reflect across (must be normalized). |

###### Returns

[`Vec2`](#vec2)

A new Vec2Like instance representing the reflected vector.

###### Implementation of

[`Vec2Like`](#vec2like).[`reflect`](#reflect-12)

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

[`Vec2Like`](#vec2like).[`rotateZ`](#rotatez-6)

##### satisfyEquality()

```ts
satisfyEquality(v): boolean;
```

Checks if this vector is equal to another vector.

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `v` | [`Vec2Like`](#vec2like) | The other vector. |

###### Returns

`boolean`

True if the vectors are equal, false otherwise.

###### Implementation of

[`Vec2Like`](#vec2like).[`satisfyEquality`](#satisfyequality-12)

##### satisfyOpposition()

```ts
satisfyOpposition(v): boolean;
```

Checks if this vector is opposite to another vector.

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `v` | [`Vec2Like`](#vec2like) | The other vector. |

###### Returns

`boolean`

True if the vectors are opposite, false otherwise.

###### Implementation of

[`Vec2Like`](#vec2like).[`satisfyOpposition`](#satisfyopposition-12)

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

[`Vec2Like`](#vec2like).[`scale`](#scale-12)

##### subtract()

```ts
subtract(v): this;
```

Subtracts another vector from this vector.

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `v` | [`Vec2Like`](#vec2like) | The vector to subtract. |

###### Returns

`this`

`this` instance for method chaining.

###### Implementation of

[`Vec2Like`](#vec2like).[`subtract`](#subtract-12)

##### toJSON()

```ts
toJSON(): XYObject;
```

Serializes the vector to a JSON-friendly format.

###### Returns

[`XYObject`](#xyobject)

A JSON-friendly object representation of the vector.

###### Implementation of

[`Vec2Like`](#vec2like).[`toJSON`](#tojson-9)

##### toObject()

```ts
toObject(): XYObject;
```

Converts the vector to a plain object.

###### Returns

[`XYObject`](#xyobject)

An object with x and y properties.

###### Implementation of

[`Vec2Like`](#vec2like).[`toObject`](#toobject-9)

##### toString()

```ts
toString(): string;
```

Returns a string representation of the vector.

###### Returns

`string`

A string in the format "ArrayProxyVec2(x, y)".

###### Implementation of

[`Vec2Like`](#vec2like).[`toString`](#tostring-9)

##### turnLeft()

```ts
turnLeft(): this;
```

Rotates this vector 90 degrees to the left.

###### Returns

`this`

`this` instance for method chaining.

###### Implementation of

[`Vec2Like`](#vec2like).[`turnLeft`](#turnleft-3)

##### turnRight()

```ts
turnRight(): this;
```

Rotates this vector 90 degrees to the right.

###### Returns

`this`

`this` instance for method chaining.

###### Implementation of

[`Vec2Like`](#vec2like).[`turnRight`](#turnright-3)

##### zero()

```ts
zero(): this;
```

Sets this vector to zero.

###### Returns

`this`

`this` instance for method chaining.

###### Implementation of

[`Vec2Like`](#vec2like).[`zero`](#zero-12)

***

### ArrayProxyVec3

Proxying 3D vector into an interleaved array.

#### Type Parameters

| Type Parameter |
| ------ |
| <a id="type-parameter-t-1"></a> `T` *extends* [`ProxyArrayVectorTarget`](#proxyarrayvectortarget) |

#### Implements

- [`Vec3Like`](#vec3like)

#### Constructors

##### Constructor

```ts
new ArrayProxyVec3<T>(
   target, 
   offset, 
   gap?
): ArrayProxyVec3<T>;
```

###### Parameters

| Parameter | Type | Default value | Description |
| ------ | ------ | ------ | ------ |
| `target` | `T` | `undefined` | The target array. |
| `offset` | `number` | `undefined` | The offset of the array. |
| `gap?` | `number` | `0` | The stride between indices. |

###### Returns

[`ArrayProxyVec3`](#arrayproxyvec3)\<`T`\>

###### Throws

Error when offset is negative, or not an integer.

###### Throws

Error when gap is negative, or not an integer.

###### Throws

Error when z-component is out of target array bounds.

#### Properties

| Property | Modifier | Type | Description |
| ------ | ------ | ------ | ------ |
| <a id="property-onchange-1"></a> `onChange?` | `public` | (`v`) => `void` | Callback to be invoked whenever properties change. |

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

[`Vec3Like`](#vec3like).[`angleX`](#property-anglex-1)

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

[`Vec3Like`](#vec3like).[`angleY`](#property-angley-1)

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

[`Vec3Like`](#vec3like).[`angleZ`](#property-anglez)

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

[`Vec3Like`](#vec3like).[`b`](#property-b)

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

[`Vec3Like`](#vec3like).[`g`](#property-g)

##### indexRange

###### Get Signature

```ts
get indexRange(): readonly [number, number];
```

Range of min and max component indices.

###### Returns

readonly \[`number`, `number`\]

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

[`Vec3Like`](#vec3like).[`magnitude`](#property-magnitude-1)

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

[`Vec3Like`](#vec3like).[`magnitudeSq`](#property-magnitudesq-1)

##### offset

###### Get Signature

```ts
get offset(): number;
```

Get the starting offset in the target array.

###### Returns

`number`

###### Set Signature

```ts
set offset(offset): void;
```

Set a new starting offset.

###### Throws

Error when offset is negative, or not an integer.

###### Throws

Error when z-component is out of target bounds.

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `offset` | `number` | The offset in the target array. |

###### Returns

`void`

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

[`Vec3Like`](#vec3like).[`r`](#property-r)

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

[`Vec3Like`](#vec3like).[`rgb`](#property-rgb)

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

[`Vec3Like`](#vec3like).[`x`](#property-x-1)

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

[`Vec3Like`](#vec3like).[`xyz`](#property-xyz)

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

[`Vec3Like`](#vec3like).[`y`](#property-y-1)

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

[`Vec3Like`](#vec3like).[`z`](#property-z)

#### Methods

##### \[iterator\]()

```ts
[iterator](): IterableIterator<number>;
```

Iterator over this vector's components.

###### Returns

`IterableIterator`\<`number`\>

###### Yields

The x, y and z components of the vector.

###### Implementation of

[`Vec3Like`](#vec3like).[`[iterator]`](#iterator-10)

##### add()

```ts
add(v): this;
```

Adds another vector to this vector.

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `v` | [`Vec3Like`](#vec3like) | The vector to add. |

###### Returns

`this`

`this` instance for method chaining.

###### Implementation of

[`Vec3Like`](#vec3like).[`add`](#add-13)

##### angleBetween()

```ts
angleBetween(v): number;
```

Calculates the angle between this vector and another vector.

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `v` | [`Vec3Like`](#vec3like) | The other vector. |

###### Returns

`number`

The angle between the vectors in radians.

###### Implementation of

[`Vec3Like`](#vec3like).[`angleBetween`](#anglebetween-13)

##### bind()

```ts
bind(
   target, 
   offset, 
   gap
): void;
```

Set the proxy target.

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `target` | `T` | The target array. |
| `offset` | `number` | The offset in the array. |
| `gap` | `number` | The gap (stride) between positions. |

###### Returns

`void`

###### Throws

Error when offset is negative, or not an integer.

###### Throws

Error when gap is negative, or not an integer.

###### Throws

Error when z-component is out of target array bounds.

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

[`Vec3Like`](#vec3like).[`clamp`](#clamp-10)

##### clone()

```ts
clone(): Vec3;
```

Creates a copy of this vector.

###### Returns

[`Vec3`](#vec3)

A new Vec3 instance with the same components.

###### Implementation of

[`Vec3Like`](#vec3like).[`clone`](#clone-10)

##### copy()

```ts
copy(v): this;
```

Copies the components of another vector to this vector.

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `v` | [`Vec3Like`](#vec3like) | The vector to copy from. |

###### Returns

`this`

`this` instance for method chaining.

###### Implementation of

[`Vec3Like`](#vec3like).[`copy`](#copy-10)

##### cross()

```ts
cross(v): this;
```

Calculates cross product between this vector and another vector.

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `v` | [`Vec3Like`](#vec3like) | The other vector. |

###### Returns

`this`

`this` instance for method chaining.

###### Implementation of

[`Vec3Like`](#vec3like).[`cross`](#cross-9)

##### distance()

```ts
distance(v): number;
```

Calculates the distance between this vector and another vector.

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `v` | [`Vec3Like`](#vec3like) | The other vector. |

###### Returns

`number`

The distance between the vectors.

###### Implementation of

[`Vec3Like`](#vec3like).[`distance`](#distance-13)

##### distanceChebyshev()

```ts
distanceChebyshev(v): number;
```

Calculates the Chebyshev distance between vector and another vector.

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `v` | [`Vec3Like`](#vec3like) | The other vector. |

###### Returns

`number`

The Chebyshev distance between the vectors.

###### Implementation of

[`Vec3Like`](#vec3like).[`distanceChebyshev`](#distancechebyshev-13)

##### distanceManhattan()

```ts
distanceManhattan(v): number;
```

Calculates the Manhattan distance between vector and another vector.

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `v` | [`Vec3Like`](#vec3like) | The other vector. |

###### Returns

`number`

The Manhattan distance between the vectors.

###### Implementation of

[`Vec3Like`](#vec3like).[`distanceManhattan`](#distancemanhattan-13)

##### distanceMinkowski()

```ts
distanceMinkowski(v, p): number;
```

Calculates the Minkowski distance between this vector and another vector.

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `v` | [`Vec3Like`](#vec3like) | The other vector. |
| `p` | `number` | The order of the Minkowski distance. |

###### Returns

`number`

The Minkowski distance between the vectors.

###### Implementation of

[`Vec3Like`](#vec3like).[`distanceMinkowski`](#distanceminkowski-13)

##### distanceSq()

```ts
distanceSq(v): number;
```

Calculates the squared distance between this vector and another vector.

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `v` | [`Vec3Like`](#vec3like) | The other vector. |

###### Returns

`number`

The squared distance between the vectors.

###### Implementation of

[`Vec3Like`](#vec3like).[`distanceSq`](#distancesq-13)

##### divide()

```ts
divide(v): this;
```

Divides this vector with another vector.

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `v` | [`Vec3Like`](#vec3like) | The vector to divide with. |

###### Returns

`this`

`this` instance for method chaining.

###### Implementation of

[`Vec3Like`](#vec3like).[`divide`](#divide-13)

##### dot()

```ts
dot(v): number;
```

Calculates the dot product of this vector with another vector.

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `v` | [`Vec3Like`](#vec3like) | The other vector. |

###### Returns

`number`

The dot product of the vectors.

###### Implementation of

[`Vec3Like`](#vec3like).[`dot`](#dot-13)

##### equals()

```ts
equals(v, epsilon?): boolean;
```

Compares this vector with another vector using an epsilon value for floating-point comparison.

###### Parameters

| Parameter | Type | Default value | Description |
| ------ | ------ | ------ | ------ |
| `v` | [`Vec3Like`](#vec3like) | `undefined` | The vector to compare with. |
| `epsilon?` | `number` | `Number.EPSILON` | The maximum difference between components to consider them equal. |

###### Returns

`boolean`

`true` if the vectors are equal within epsilon, `false` otherwise.

###### Implementation of

[`Vec3Like`](#vec3like).[`equals`](#equals-13)

##### isInfinite()

```ts
isInfinite(): boolean;
```

Checks if this vector has infinite components.

###### Returns

`boolean`

`true` if the vector has infinite components, `false` otherwise.

###### Implementation of

[`Vec3Like`](#vec3like).[`isInfinite`](#isinfinite-13)

##### isNaN()

```ts
isNaN(): boolean;
```

Checks if this vector has NaN components.

###### Returns

`boolean`

`true` if the vector has NaN components, `false` otherwise.

###### Implementation of

[`Vec3Like`](#vec3like).[`isNaN`](#isnan-13)

##### isZero()

```ts
isZero(): boolean;
```

Checks if this vector is zero.

###### Returns

`boolean`

`true` if the vector is zero, `false` otherwise.

###### Implementation of

[`Vec3Like`](#vec3like).[`isZero`](#iszero-13)

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

[`Vec3Like`](#vec3like).[`limitMax`](#limitmax-10)

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

[`Vec3Like`](#vec3like).[`limitMin`](#limitmin-10)

##### lookAt()

```ts
lookAt(v): this;
```

Sets this vector to point towards another vector.

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `v` | [`Vec3Like`](#vec3like) | The vector to look at. |

###### Returns

`this`

`this` instance for method chaining.

###### Implementation of

[`Vec3Like`](#vec3like).[`lookAt`](#lookat-10)

##### multiply()

```ts
multiply(v): this;
```

Multiplies this vector with another vector.

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `v` | [`Vec3Like`](#vec3like) | The vector to multiply with. |

###### Returns

`this`

`this` instance for method chaining.

###### Implementation of

[`Vec3Like`](#vec3like).[`multiply`](#multiply-13)

##### negate()

```ts
negate(): this;
```

Negates this vector.

###### Returns

`this`

`this` instance for method chaining.

###### Implementation of

[`Vec3Like`](#vec3like).[`negate`](#negate-13)

##### normalize()

```ts
normalize(): this;
```

Normalizes this vector.

###### Returns

`this`

`this` instance for method chaining.

###### Implementation of

[`Vec3Like`](#vec3like).[`normalize`](#normalize-13)

##### project()

```ts
project(v): this;
```

Projects this vector onto another vector.

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `v` | [`Vec3Like`](#vec3like) | The vector to project onto. |

###### Returns

`this`

`this` instance for method chaining.

###### Implementation of

[`Vec3Like`](#vec3like).[`project`](#project-13)

##### random()

```ts
random(random?): this;
```

Sets this vector to a random direction with the same magnitude.

###### Parameters

| Parameter | Type | Default value | Description |
| ------ | ------ | ------ | ------ |
| `random?` | () => `number` | `Math.random` | A function that returns a random number between 0 and 1. |

###### Returns

`this`

`this` instance for method chaining.

###### Implementation of

[`Vec3Like`](#vec3like).[`random`](#random-13)

##### reflect()

```ts
reflect(normal): this;
```

Reflects this vector across a normal vector.

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `normal` | [`Vec3Like`](#vec3like) | The normal vector to reflect across (must be normalized). |

###### Returns

`this`

`this` instance for method chaining.

###### Implementation of

[`Vec3Like`](#vec3like).[`reflect`](#reflect-13)

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

[`Vec3Like`](#vec3like).[`rotateX`](#rotatex-3)

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

[`Vec3Like`](#vec3like).[`rotateY`](#rotatey-3)

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

[`Vec3Like`](#vec3like).[`rotateZ`](#rotatez-7)

##### satisfyEquality()

```ts
satisfyEquality(v): boolean;
```

Checks if this vector is equal to another vector.

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `v` | [`Vec3Like`](#vec3like) | The other vector. |

###### Returns

`boolean`

`true` if the vectors are equal, `false` otherwise.

###### Implementation of

[`Vec3Like`](#vec3like).[`satisfyEquality`](#satisfyequality-13)

##### satisfyOpposition()

```ts
satisfyOpposition(v): boolean;
```

Checks if this vector is opposite to another vector.

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `v` | [`Vec3Like`](#vec3like) | The other vector. |

###### Returns

`boolean`

`true` if the vectors are opposite, `false` otherwise.

###### Implementation of

[`Vec3Like`](#vec3like).[`satisfyOpposition`](#satisfyopposition-13)

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

[`Vec3Like`](#vec3like).[`scale`](#scale-13)

##### subtract()

```ts
subtract(v): this;
```

Subtracts another vector from this vector.

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `v` | [`Vec3Like`](#vec3like) | The vector to subtract. |

###### Returns

`this`

`this` instance for method chaining.

###### Implementation of

[`Vec3Like`](#vec3like).[`subtract`](#subtract-13)

##### toJSON()

```ts
toJSON(): XYZObject;
```

Serializes the vector to a JSON-friendly format.

###### Returns

[`XYZObject`](#xyzobject)

A JSON-friendly object representation of the vector.

###### Implementation of

[`Vec3Like`](#vec3like).[`toJSON`](#tojson-10)

##### toObject()

```ts
toObject(): XYZObject;
```

Converts the vector to a plain object.

###### Returns

[`XYZObject`](#xyzobject)

An object with x, y and z properties.

###### Implementation of

[`Vec3Like`](#vec3like).[`toObject`](#toobject-10)

##### toString()

```ts
toString(): string;
```

Returns a string representation of the vector.

###### Returns

`string`

A string in the format "ArrayProxyVec3(x, y, z)".

###### Implementation of

[`Vec3Like`](#vec3like).[`toString`](#tostring-10)

##### zero()

```ts
zero(): this;
```

Sets this vector to zero.

###### Returns

`this`

`this` instance for method chaining.

###### Implementation of

[`Vec3Like`](#vec3like).[`zero`](#zero-13)

***

### ArrayProxyVec4

A 4D vector backed by an interleaved array. Stride is the gap between components.

#### Type Parameters

| Type Parameter |
| ------ |
| <a id="type-parameter-t-2"></a> `T` *extends* [`ProxyArrayVectorTarget`](#proxyarrayvectortarget) |

#### Implements

- [`Vec4Like`](#vec4like)

#### Constructors

##### Constructor

```ts
new ArrayProxyVec4<T>(
   target, 
   offset, 
   gap
): ArrayProxyVec4<T>;
```

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `target` | `T` | The target array. |
| `offset` | `number` | The offset in the array. |
| `gap` | `number` | Gap between components (stride). |

###### Returns

[`ArrayProxyVec4`](#arrayproxyvec4)\<`T`\>

###### Throws

Error when offset is negative, or not an integer.

###### Throws

Error when gap is negative, or not an integer.

###### Throws

Error when w-component is out of target array bounds.

#### Properties

| Property | Modifier | Type | Description |
| ------ | ------ | ------ | ------ |
| <a id="property-onchange-2"></a> `onChange?` | `public` | (`v`) => `void` | Callback to be invoked whenever properties change. |

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

###### Implementation of

[`Vec4Like`](#vec4like).[`a`](#property-a)

##### angleW

###### Get Signature

```ts
get angleW(): number;
```

Gets the angle between the vector and the positive w-axis in radians.

###### Returns

`number`

The angle in radians, always in the range [0, 2π).

###### Implementation of

[`Vec4Like`](#vec4like).[`angleW`](#property-anglew)

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

[`Vec4Like`](#vec4like).[`angleX`](#property-anglex-2)

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

[`Vec4Like`](#vec4like).[`angleY`](#property-angley-2)

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

[`Vec4Like`](#vec4like).[`angleZ`](#property-anglez-1)

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

[`Vec4Like`](#vec4like).[`b`](#property-b-1)

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

[`Vec4Like`](#vec4like).[`g`](#property-g-1)

##### indexRange

###### Get Signature

```ts
get indexRange(): readonly [number, number];
```

Range of min and max component indices.

###### Returns

readonly \[`number`, `number`\]

##### magnitude

###### Get Signature

```ts
get magnitude(): number;
```

Reads the current target components, including external changes.

###### Returns

`number`

###### Set Signature

```ts
set magnitude(m): void;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `m` | `number` |

###### Returns

`void`

###### Implementation of

[`Vec4Like`](#vec4like).[`magnitude`](#property-magnitude-2)

##### magnitudeSq

###### Get Signature

```ts
get magnitudeSq(): number;
```

###### Returns

`number`

###### Implementation of

[`Vec4Like`](#vec4like).[`magnitudeSq`](#property-magnitudesq-2)

##### offset

###### Get Signature

```ts
get offset(): number;
```

Get the starting offset in the target array.

###### Returns

`number`

###### Set Signature

```ts
set offset(offset): void;
```

Set a new starting offset.

###### Throws

Error when offset is negative, or not an integer.

###### Throws

Error when w-component is out of target bounds.

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `offset` | `number` | The offset in the target array. |

###### Returns

`void`

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

[`Vec4Like`](#vec4like).[`r`](#property-r-1)

##### rgba

###### Get Signature

```ts
get rgba(): ArrayVector4D;
```

Gets a copy of the vector's components as an array.

###### Returns

[`ArrayVector4D`](#arrayvector4d)

An array containing the Red, Green, Blue and Alpha components of the Color.

###### Set Signature

```ts
set rgba(rgba): void;
```

Sets all components of the Color at once.

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `rgba` | [`ArrayVector4D`](#arrayvector4d) | An array containing the new Red, Green, Blue and Alpha components. |

###### Returns

`void`

###### Implementation of

[`Vec4Like`](#vec4like).[`rgba`](#property-rgba)

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

###### Implementation of

[`Vec4Like`](#vec4like).[`w`](#property-w)

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

[`Vec4Like`](#vec4like).[`x`](#property-x-2)

##### xyzw

###### Get Signature

```ts
get xyzw(): ArrayVector4D;
```

Gets a copy of the vector's components as an array.

###### Returns

[`ArrayVector4D`](#arrayvector4d)

An array containing the x, y, z, and w components of the vector.

###### Set Signature

```ts
set xyzw(value): void;
```

Sets all components of the vector at once.

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `value` | [`ArrayVector4D`](#arrayvector4d) | An array containing the new x, y, z, and w components. |

###### Returns

`void`

###### Implementation of

[`Vec4Like`](#vec4like).[`xyzw`](#property-xyzw)

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

[`Vec4Like`](#vec4like).[`y`](#property-y-2)

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

[`Vec4Like`](#vec4like).[`z`](#property-z-1)

#### Methods

##### \[iterator\]()

```ts
[iterator](): IterableIterator<number>;
```

Makes the Vec4 instance iterable.

###### Returns

`IterableIterator`\<`number`\>

###### Yields

The x, y, z and w components of the vector.

###### Implementation of

[`Vec4Like`](#vec4like).[`[iterator]`](#iterator-11)

##### add()

```ts
add(v): this;
```

Adds another vector to this vector.

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `v` | [`Vec4Like`](#vec4like) | The vector to add. |

###### Returns

`this`

`this` instance for method chaining.

###### Implementation of

[`Vec4Like`](#vec4like).[`add`](#add-14)

##### angleBetween()

```ts
angleBetween(v): number;
```

Calculates the angle between this vector and another vector.

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `v` | [`Vec4Like`](#vec4like) | The other vector. |

###### Returns

`number`

The angle between the vectors in radians.

###### Implementation of

[`Vec4Like`](#vec4like).[`angleBetween`](#anglebetween-14)

##### bind()

```ts
bind(
   target, 
   offset, 
   gap
): void;
```

Set the proxy target.

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `target` | `T` | The target array. |
| `offset` | `number` | The offset in the array. |
| `gap` | `number` | - |

###### Returns

`void`

###### Throws

Error when w-component is out of target array bounds.

##### clamp()

```ts
clamp(min, max): ArrayProxyVec4<T>;
```

Clamps the magnitude of this vector between a minimum and maximum value.

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `min` | `number` | The minimum magnitude. |
| `max` | `number` | The maximum magnitude. |

###### Returns

[`ArrayProxyVec4`](#arrayproxyvec4)\<`T`\>

`this` instance for method chaining.

###### Implementation of

[`Vec4Like`](#vec4like).[`clamp`](#clamp-11)

##### clone()

```ts
clone(): Vec4;
```

Creates a copy of this vector.

###### Returns

[`Vec4`](#vec4)

A new Vec4 instance with the same components.

###### Implementation of

[`Vec4Like`](#vec4like).[`clone`](#clone-11)

##### copy()

```ts
copy(v): ArrayProxyVec4<T>;
```

Copies the components of another vector to this vector.

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `v` | [`Vec4Like`](#vec4like) | The vector to copy from. |

###### Returns

[`ArrayProxyVec4`](#arrayproxyvec4)\<`T`\>

`this` instance for method chaining.

###### Implementation of

[`Vec4Like`](#vec4like).[`copy`](#copy-11)

##### distance()

```ts
distance(v): number;
```

Calculates the distance between this vector and another vector.

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `v` | [`Vec4Like`](#vec4like) | The other vector. |

###### Returns

`number`

The distance between the vectors.

###### Implementation of

[`Vec4Like`](#vec4like).[`distance`](#distance-14)

##### distanceChebyshev()

```ts
distanceChebyshev(v): number;
```

Calculates the Chebyshev distance between this vector and another vector.

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `v` | [`Vec4Like`](#vec4like) | The other vector. |

###### Returns

`number`

The Chebyshev distance between the vectors.

###### Implementation of

[`Vec4Like`](#vec4like).[`distanceChebyshev`](#distancechebyshev-14)

##### distanceManhattan()

```ts
distanceManhattan(v): number;
```

Calculates the Manhattan distance between this vector and another vector.

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `v` | [`Vec4Like`](#vec4like) | The other vector. |

###### Returns

`number`

The Manhattan distance between the vectors.

###### Implementation of

[`Vec4Like`](#vec4like).[`distanceManhattan`](#distancemanhattan-14)

##### distanceMinkowski()

```ts
distanceMinkowski(v, p): number;
```

Calculates the Minkowski distance between this vector and another vector.

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `v` | [`Vec4Like`](#vec4like) | The other vector. |
| `p` | `number` | The order of the Minkowski distance. |

###### Returns

`number`

The Minkowski distance between the vectors.

###### Implementation of

[`Vec4Like`](#vec4like).[`distanceMinkowski`](#distanceminkowski-14)

##### distanceSq()

```ts
distanceSq(v): number;
```

Calculates the squared distance between this vector and another vector.

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `v` | [`Vec4Like`](#vec4like) | The other vector. |

###### Returns

`number`

The squared distance between the vectors.

###### Implementation of

[`Vec4Like`](#vec4like).[`distanceSq`](#distancesq-14)

##### divide()

```ts
divide(v): this;
```

Divides this vector with another vector.

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `v` | [`Vec4Like`](#vec4like) | The vector to divide with. |

###### Returns

`this`

`this` instance for method chaining.

###### Implementation of

[`Vec4Like`](#vec4like).[`divide`](#divide-14)

##### dot()

```ts
dot(v): number;
```

Calculates the dot product of this vector with another vector.

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `v` | [`Vec4Like`](#vec4like) | The other vector. |

###### Returns

`number`

The dot product of the vectors.

###### Implementation of

[`Vec4Like`](#vec4like).[`dot`](#dot-14)

##### equals()

```ts
equals(v, epsilon?): boolean;
```

Compares this vector with another vector using an epsilon value for floating-point comparison.

###### Parameters

| Parameter | Type | Default value | Description |
| ------ | ------ | ------ | ------ |
| `v` | [`Vec4Like`](#vec4like) | `undefined` | The vector to compare with. |
| `epsilon?` | `number` | `Number.EPSILON` | The maximum difference between components to consider them equal. |

###### Returns

`boolean`

`true` if the vectors are equal within epsilon, `false` otherwise.

###### Implementation of

[`Vec4Like`](#vec4like).[`equals`](#equals-14)

##### isInfinite()

```ts
isInfinite(): boolean;
```

Checks if this vector has infinite components.

###### Returns

`boolean`

`true` if the vector has infinite components, `false` otherwise.

###### Implementation of

[`Vec4Like`](#vec4like).[`isInfinite`](#isinfinite-14)

##### isNaN()

```ts
isNaN(): boolean;
```

Checks if this vector has NaN components.

###### Returns

`boolean`

`true` if the vector has NaN components, `false` otherwise.

###### Implementation of

[`Vec4Like`](#vec4like).[`isNaN`](#isnan-14)

##### isZero()

```ts
isZero(): boolean;
```

Checks if this vector is zero.

###### Returns

`boolean`

`true` if the vector is zero, `false` otherwise.

###### Implementation of

[`Vec4Like`](#vec4like).[`isZero`](#iszero-14)

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

[`Vec4Like`](#vec4like).[`limitMax`](#limitmax-11)

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

[`Vec4Like`](#vec4like).[`limitMin`](#limitmin-11)

##### lookAt()

```ts
lookAt(v): this;
```

Sets this vector to point towards another vector.

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `v` | [`Vec4Like`](#vec4like) | The vector to look at. |

###### Returns

`this`

`this` instance for method chaining.

###### Implementation of

[`Vec4Like`](#vec4like).[`lookAt`](#lookat-11)

##### multiply()

```ts
multiply(v): this;
```

Multiplies this vector with another vector.

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `v` | [`Vec4Like`](#vec4like) | The vector to multiply with. |

###### Returns

`this`

`this` instance for method chaining.

###### Implementation of

[`Vec4Like`](#vec4like).[`multiply`](#multiply-14)

##### negate()

```ts
negate(): this;
```

Negates this vector.

###### Returns

`this`

`this` instance for method chaining.

###### Implementation of

[`Vec4Like`](#vec4like).[`negate`](#negate-14)

##### normalize()

```ts
normalize(): this;
```

Normalizes this vector.

###### Returns

`this`

This Ve4 instance for method chaining.

###### Implementation of

[`Vec4Like`](#vec4like).[`normalize`](#normalize-14)

##### project()

```ts
project(v): this;
```

Projects this vector onto another vector.

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `v` | [`Vec4Like`](#vec4like) | The vector to project onto. |

###### Returns

`this`

`this` instance for method chaining.

###### Implementation of

[`Vec4Like`](#vec4like).[`project`](#project-14)

##### random()

```ts
random(random?): this;
```

Sets this vector to a random direction with the same magnitude.

###### Parameters

| Parameter | Type | Default value | Description |
| ------ | ------ | ------ | ------ |
| `random?` | () => `number` | `Math.random` | A function that returns a random number between 0 and 1. |

###### Returns

`this`

`this` instance for method chaining.

###### Implementation of

[`Vec4Like`](#vec4like).[`random`](#random-14)

##### reflect()

```ts
reflect(normal): this;
```

Reflects this vector across a normal vector.
The normal vector should be normalized (unit length).

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `normal` | [`Vec4Like`](#vec4like) | The normal vector to reflect across (must be normalized). |

###### Returns

`this`

`this` instance for method chaining.

###### Implementation of

[`Vec4Like`](#vec4like).[`reflect`](#reflect-14)

##### satisfyEquality()

```ts
satisfyEquality(v): boolean;
```

Checks if this vector is equal to another vector.

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `v` | [`Vec4Like`](#vec4like) | The other vector. |

###### Returns

`boolean`

`true` if the vectors are equal, `false` otherwise.

###### Implementation of

[`Vec4Like`](#vec4like).[`satisfyEquality`](#satisfyequality-14)

##### satisfyOpposition()

```ts
satisfyOpposition(v): boolean;
```

Checks if this vector is opposite to another vector.

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `v` | [`Vec4Like`](#vec4like) | The other vector. |

###### Returns

`boolean`

`true` if the vectors are opposite, `false` otherwise.

###### Implementation of

[`Vec4Like`](#vec4like).[`satisfyOpposition`](#satisfyopposition-14)

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

[`Vec4Like`](#vec4like).[`scale`](#scale-14)

##### subtract()

```ts
subtract(v): this;
```

Subtracts another vector from this vector.

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `v` | [`Vec4Like`](#vec4like) | The vector to subtract. |

###### Returns

`this`

`this` instance for method chaining.

###### Implementation of

[`Vec4Like`](#vec4like).[`subtract`](#subtract-14)

##### toJSON()

```ts
toJSON(): {
  w: number;
  x: number;
  y: number;
  z: number;
};
```

Serializes the vector to a JSON-friendly format.

###### Returns

```ts
{
  w: number;
  x: number;
  y: number;
  z: number;
}
```

A JSON-friendly object representation of the vector.

| Name | Type |
| ------ | ------ |
| `w` | `number` |
| `x` | `number` |
| `y` | `number` |
| `z` | `number` |

###### Implementation of

[`Vec4Like`](#vec4like).[`toJSON`](#tojson-11)

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

###### Implementation of

[`Vec4Like`](#vec4like).[`toObject`](#toobject-11)

##### toString()

```ts
toString(): string;
```

Returns a string representation of the vector.

###### Returns

`string`

A string in the format "ArrayProxyVec4(x, y, z, w)".

###### Implementation of

[`Vec4Like`](#vec4like).[`toString`](#tostring-11)

##### zero()

```ts
zero(): this;
```

Sets this vector to zero.

###### Returns

`this`

`this` instance for method chaining.

###### Implementation of

[`Vec4Like`](#vec4like).[`zero`](#zero-14)

***

### ProxyVec2

Proxying 2D vector.

#### Implements

- [`Vec2Like`](#vec2like)

#### Constructors

##### Constructor

```ts
new ProxyVec2(
   getX, 
   getY, 
   setX, 
   setY
): ProxyVec2;
```

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `getX` | () => `number` | Function that returns the x-component of the vector. |
| `getY` | () => `number` | Function that returns the y-component of the vector. |
| `setX` | (`x`) => `void` | Function to set the x-component of the vector. |
| `setY` | (`y`) => `void` | Function to set the y-component of the vector. |

###### Returns

[`ProxyVec2`](#proxyvec2)

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

[`Vec2Like`](#vec2like).[`angleX`](#property-anglex)

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

[`Vec2Like`](#vec2like).[`angleY`](#property-angley)

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

[`Vec2Like`](#vec2like).[`magnitude`](#property-magnitude)

##### magnitudeSq

###### Get Signature

```ts
get magnitudeSq(): number;
```

Gets the squared magnitude of the vector.

###### Returns

`number`

The squared magnitude of the vector.

###### Implementation of

[`Vec2Like`](#vec2like).[`magnitudeSq`](#property-magnitudesq)

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

[`Vec2Like`](#vec2like).[`x`](#property-x)

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

[`Vec2Like`](#vec2like).[`xy`](#property-xy)

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

[`Vec2Like`](#vec2like).[`y`](#property-y)

#### Methods

##### \[iterator\]()

```ts
[iterator](): IterableIterator<number>;
```

Iterator over this vector's components.

###### Returns

`IterableIterator`\<`number`\>

###### Yields

The x and y components of the vector.

###### Implementation of

[`Vec2Like`](#vec2like).[`[iterator]`](#iterator-9)

##### add()

```ts
add(v): this;
```

Adds another vector to this vector.

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `v` | [`Vec2Like`](#vec2like) | The vector to add. |

###### Returns

`this`

`this` instance for method chaining.

###### Implementation of

[`Vec2Like`](#vec2like).[`add`](#add-12)

##### angleBetween()

```ts
angleBetween(v): number;
```

Calculates the angle between this vector and another vector.

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `v` | [`Vec2Like`](#vec2like) | The other vector. |

###### Returns

`number`

The angle between the vectors in radians.

###### Implementation of

[`Vec2Like`](#vec2like).[`angleBetween`](#anglebetween-12)

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

[`Vec2Like`](#vec2like).[`clamp`](#clamp-9)

##### clone()

```ts
clone(): Vec2;
```

Creates a new Vec2 instance based on this vector.

###### Returns

[`Vec2`](#vec2)

A new Vec2 instance with the same components.

###### Implementation of

[`Vec2Like`](#vec2like).[`clone`](#clone-9)

##### copy()

```ts
copy(v): this;
```

Copies the components of another vector to this vector.

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `v` | [`Vec2Like`](#vec2like) | The vector to copy from. |

###### Returns

`this`

`this` instance for method chaining.

###### Implementation of

[`Vec2Like`](#vec2like).[`copy`](#copy-9)

##### cross()

```ts
cross(v): number;
```

Calculates the cross product of this vector with another vector.

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `v` | [`Vec2Like`](#vec2like) | The other vector. |

###### Returns

`number`

The cross product of the vectors.

###### Implementation of

[`Vec2Like`](#vec2like).[`cross`](#cross-8)

##### distance()

```ts
distance(v): number;
```

Calculates the distance between this vector and another vector.

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `v` | [`Vec2Like`](#vec2like) | The other vector. |

###### Returns

`number`

The distance between the vectors.

###### Implementation of

[`Vec2Like`](#vec2like).[`distance`](#distance-12)

##### distanceChebyshev()

```ts
distanceChebyshev(v): number;
```

Calculates the Chebyshev distance between this vector and another vector.

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `v` | [`Vec2Like`](#vec2like) | The other vector. |

###### Returns

`number`

The Chebyshev distance between the vectors.

###### Implementation of

[`Vec2Like`](#vec2like).[`distanceChebyshev`](#distancechebyshev-12)

##### distanceManhattan()

```ts
distanceManhattan(v): number;
```

Calculates the Manhattan distance between this vector and another vector.

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `v` | [`Vec2Like`](#vec2like) | The other vector. |

###### Returns

`number`

The Manhattan distance between the vectors.

###### Implementation of

[`Vec2Like`](#vec2like).[`distanceManhattan`](#distancemanhattan-12)

##### distanceMinkowski()

```ts
distanceMinkowski(v, p): number;
```

Calculates the Minkowski distance between this vector and another vector.

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `v` | [`Vec2Like`](#vec2like) | The other vector. |
| `p` | `number` | The order of the Minkowski distance. |

###### Returns

`number`

The Minkowski distance between the vectors.

###### Implementation of

[`Vec2Like`](#vec2like).[`distanceMinkowski`](#distanceminkowski-12)

##### distanceSq()

```ts
distanceSq(v): number;
```

Calculates the squared distance between this vector and another vector.

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `v` | [`Vec2Like`](#vec2like) | The other vector. |

###### Returns

`number`

The squared distance between the vectors.

###### Implementation of

[`Vec2Like`](#vec2like).[`distanceSq`](#distancesq-12)

##### divide()

```ts
divide(v): this;
```

Divides this vector with another vector.

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `v` | [`Vec2Like`](#vec2like) | The vector to divide with. |

###### Returns

`this`

`this` instance for method chaining.

###### Implementation of

[`Vec2Like`](#vec2like).[`divide`](#divide-12)

##### dot()

```ts
dot(v): number;
```

Calculates the dot product of this vector with another vector.

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `v` | [`Vec2Like`](#vec2like) | The other vector. |

###### Returns

`number`

The dot product of the vectors.

###### Implementation of

[`Vec2Like`](#vec2like).[`dot`](#dot-12)

##### equals()

```ts
equals(v, epsilon?): boolean;
```

Compares this vector with another vector using an epsilon value for floating-point comparison.

###### Parameters

| Parameter | Type | Default value | Description |
| ------ | ------ | ------ | ------ |
| `v` | [`Vec2Like`](#vec2like) | `undefined` | The vector to compare with. |
| `epsilon?` | `number` | `Number.EPSILON` | The maximum difference between components to consider them equal. |

###### Returns

`boolean`

True if the vectors are equal within epsilon, false otherwise.

###### Implementation of

[`Vec2Like`](#vec2like).[`equals`](#equals-12)

##### isInfinite()

```ts
isInfinite(): boolean;
```

Checks if this vector has infinite components.

###### Returns

`boolean`

True if the vector has infinite components, false otherwise.

###### Implementation of

[`Vec2Like`](#vec2like).[`isInfinite`](#isinfinite-12)

##### isNaN()

```ts
isNaN(): boolean;
```

Checks if this vector has NaN components.

###### Returns

`boolean`

True if the vector has NaN components, false otherwise.

###### Implementation of

[`Vec2Like`](#vec2like).[`isNaN`](#isnan-12)

##### isZero()

```ts
isZero(): boolean;
```

Checks if this vector is zero.

###### Returns

`boolean`

True if the vector is zero, false otherwise.

###### Implementation of

[`Vec2Like`](#vec2like).[`isZero`](#iszero-12)

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

[`Vec2Like`](#vec2like).[`limitMax`](#limitmax-9)

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

[`Vec2Like`](#vec2like).[`limitMin`](#limitmin-9)

##### lookAt()

```ts
lookAt(v): this;
```

Sets this vector to point towards another vector.

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `v` | [`Vec2Like`](#vec2like) | The vector to look at. |

###### Returns

`this`

`this` instance for method chaining.

###### Implementation of

[`Vec2Like`](#vec2like).[`lookAt`](#lookat-9)

##### multiply()

```ts
multiply(v): this;
```

Multiplies this vector with another vector.

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `v` | [`Vec2Like`](#vec2like) | The vector to multiply with. |

###### Returns

`this`

`this` instance for method chaining.

###### Implementation of

[`Vec2Like`](#vec2like).[`multiply`](#multiply-12)

##### negate()

```ts
negate(): this;
```

Negates this vector.

###### Returns

`this`

`this` instance for method chaining.

###### Implementation of

[`Vec2Like`](#vec2like).[`negate`](#negate-12)

##### normalize()

```ts
normalize(): this;
```

Normalizes this vector.

###### Returns

`this`

`this` instance for method chaining.

###### Implementation of

[`Vec2Like`](#vec2like).[`normalize`](#normalize-12)

##### project()

```ts
project(v): this;
```

Projects this vector onto another vector.

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `v` | [`Vec2Like`](#vec2like) | The vector to project onto. |

###### Returns

`this`

`this` instance for method chaining.

###### Implementation of

[`Vec2Like`](#vec2like).[`project`](#project-12)

##### random()

```ts
random(random?): this;
```

Sets this vector to a random direction with the same magnitude.

###### Parameters

| Parameter | Type | Default value | Description |
| ------ | ------ | ------ | ------ |
| `random?` | () => `number` | `Math.random` | A function that returns a random number between 0 and 1. |

###### Returns

`this`

`this` instance for method chaining.

###### Implementation of

[`Vec2Like`](#vec2like).[`random`](#random-12)

##### reflect()

```ts
reflect(normal): Vec2;
```

Reflects this vector across a normal vector.

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `normal` | [`Vec2Like`](#vec2like) | The normal vector to reflect across (must be normalized). |

###### Returns

[`Vec2`](#vec2)

A new Vec2Like instance representing the reflected vector.

###### Implementation of

[`Vec2Like`](#vec2like).[`reflect`](#reflect-12)

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

[`Vec2Like`](#vec2like).[`rotateZ`](#rotatez-6)

##### satisfyEquality()

```ts
satisfyEquality(v): boolean;
```

Checks if this vector is equal to another vector.

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `v` | [`Vec2Like`](#vec2like) | The other vector. |

###### Returns

`boolean`

True if the vectors are equal, false otherwise.

###### Implementation of

[`Vec2Like`](#vec2like).[`satisfyEquality`](#satisfyequality-12)

##### satisfyOpposition()

```ts
satisfyOpposition(v): boolean;
```

Checks if this vector is opposite to another vector.

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `v` | [`Vec2Like`](#vec2like) | The other vector. |

###### Returns

`boolean`

True if the vectors are opposite, false otherwise.

###### Implementation of

[`Vec2Like`](#vec2like).[`satisfyOpposition`](#satisfyopposition-12)

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

[`Vec2Like`](#vec2like).[`scale`](#scale-12)

##### subtract()

```ts
subtract(v): this;
```

Subtracts another vector from this vector.

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `v` | [`Vec2Like`](#vec2like) | The vector to subtract. |

###### Returns

`this`

`this` instance for method chaining.

###### Implementation of

[`Vec2Like`](#vec2like).[`subtract`](#subtract-12)

##### toJSON()

```ts
toJSON(): XYObject;
```

Serializes the vector to a JSON-friendly format.

###### Returns

[`XYObject`](#xyobject)

A JSON-friendly object representation of the vector.

###### Implementation of

[`Vec2Like`](#vec2like).[`toJSON`](#tojson-9)

##### toObject()

```ts
toObject(): XYObject;
```

Converts the vector to a plain object.

###### Returns

[`XYObject`](#xyobject)

An object with x and y properties.

###### Implementation of

[`Vec2Like`](#vec2like).[`toObject`](#toobject-9)

##### toString()

```ts
toString(): string;
```

Returns a string representation of the vector.

###### Returns

`string`

A string in the format "ProxyVec2(x, y)".

###### Implementation of

[`Vec2Like`](#vec2like).[`toString`](#tostring-9)

##### turnLeft()

```ts
turnLeft(): this;
```

Rotates this vector 90 degrees to the left.

###### Returns

`this`

`this` instance for method chaining.

###### Implementation of

[`Vec2Like`](#vec2like).[`turnLeft`](#turnleft-3)

##### turnRight()

```ts
turnRight(): this;
```

Rotates this vector 90 degrees to the right.

###### Returns

`this`

`this` instance for method chaining.

###### Implementation of

[`Vec2Like`](#vec2like).[`turnRight`](#turnright-3)

##### zero()

```ts
zero(): this;
```

Sets this vector to zero.

###### Returns

`this`

`this` instance for method chaining.

###### Implementation of

[`Vec2Like`](#vec2like).[`zero`](#zero-12)

***

### ProxyVec3

Proxying 3D vector.

#### Implements

- [`Vec3Like`](#vec3like)

#### Constructors

##### Constructor

```ts
new ProxyVec3(
   getX, 
   getY, 
   getZ, 
   setX, 
   setY, 
   setZ
): ProxyVec3;
```

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `getX` | () => `number` | Function that returns the x-component of the vector. |
| `getY` | () => `number` | Function that returns the y-component of the vector. |
| `getZ` | () => `number` | Function that returns the z-component of the vector. |
| `setX` | (`x`) => `void` | Function to set the x-component of the vector. |
| `setY` | (`y`) => `void` | Function to set the y-component of the vector. |
| `setZ` | (`z`) => `void` | Function to set the z-component of the vector. |

###### Returns

[`ProxyVec3`](#proxyvec3)

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

[`Vec3Like`](#vec3like).[`angleX`](#property-anglex-1)

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

[`Vec3Like`](#vec3like).[`angleY`](#property-angley-1)

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

[`Vec3Like`](#vec3like).[`angleZ`](#property-anglez)

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

[`Vec3Like`](#vec3like).[`b`](#property-b)

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

[`Vec3Like`](#vec3like).[`g`](#property-g)

##### magnitude

###### Get Signature

```ts
get magnitude(): number;
```

Gets the magnitude (length) of the vector.

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

[`Vec3Like`](#vec3like).[`magnitude`](#property-magnitude-1)

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

[`Vec3Like`](#vec3like).[`magnitudeSq`](#property-magnitudesq-1)

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

[`Vec3Like`](#vec3like).[`r`](#property-r)

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

[`Vec3Like`](#vec3like).[`rgb`](#property-rgb)

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

[`Vec3Like`](#vec3like).[`x`](#property-x-1)

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

[`Vec3Like`](#vec3like).[`xyz`](#property-xyz)

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

[`Vec3Like`](#vec3like).[`y`](#property-y-1)

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

[`Vec3Like`](#vec3like).[`z`](#property-z)

#### Methods

##### \[iterator\]()

```ts
[iterator](): IterableIterator<number>;
```

Iterator over this vector's components.

###### Returns

`IterableIterator`\<`number`\>

###### Yields

The x, y and z components of the vector.

###### Implementation of

[`Vec3Like`](#vec3like).[`[iterator]`](#iterator-10)

##### add()

```ts
add(v): ProxyVec3;
```

Adds another vector to this vector.

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `v` | [`Vec3Like`](#vec3like) | The vector to add. |

###### Returns

[`ProxyVec3`](#proxyvec3)

`this` instance for method chaining.

###### Implementation of

[`Vec3Like`](#vec3like).[`add`](#add-13)

##### angleBetween()

```ts
angleBetween(v): number;
```

Calculates the angle between this vector and another vector.

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `v` | [`Vec3Like`](#vec3like) | The other vector. |

###### Returns

`number`

The angle between the vectors in radians.

###### Implementation of

[`Vec3Like`](#vec3like).[`angleBetween`](#anglebetween-13)

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

[`Vec3Like`](#vec3like).[`clamp`](#clamp-10)

##### clone()

```ts
clone(): Vec3;
```

Creates a copy of this vector.

###### Returns

[`Vec3`](#vec3)

A new Vec3 instance with the same components.

###### Implementation of

[`Vec3Like`](#vec3like).[`clone`](#clone-10)

##### copy()

```ts
copy(v): this;
```

Copies the components of another vector to this vector.

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `v` | [`Vec3Like`](#vec3like) | The vector to copy from. |

###### Returns

`this`

`this` instance for method chaining.

###### Implementation of

[`Vec3Like`](#vec3like).[`copy`](#copy-10)

##### cross()

```ts
cross(v): this;
```

Calculates cross product between this vector and another vector.

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `v` | [`Vec3Like`](#vec3like) | The other vector. |

###### Returns

`this`

`this` instance for method chaining.

###### Implementation of

[`Vec3Like`](#vec3like).[`cross`](#cross-9)

##### distance()

```ts
distance(v): number;
```

Calculates the distance between this vector and another vector.

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `v` | [`Vec3Like`](#vec3like) | The other vector. |

###### Returns

`number`

The distance between the vectors.

###### Implementation of

[`Vec3Like`](#vec3like).[`distance`](#distance-13)

##### distanceChebyshev()

```ts
distanceChebyshev(v): number;
```

Calculates the Chebyshev distance between vector and another vector.

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `v` | [`Vec3Like`](#vec3like) | The other vector. |

###### Returns

`number`

The Chebyshev distance between the vectors.

###### Implementation of

[`Vec3Like`](#vec3like).[`distanceChebyshev`](#distancechebyshev-13)

##### distanceManhattan()

```ts
distanceManhattan(v): number;
```

Calculates the Manhattan distance between vector and another vector.

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `v` | [`Vec3Like`](#vec3like) | The other vector. |

###### Returns

`number`

The Manhattan distance between the vectors.

###### Implementation of

[`Vec3Like`](#vec3like).[`distanceManhattan`](#distancemanhattan-13)

##### distanceMinkowski()

```ts
distanceMinkowski(v, p): number;
```

Calculates the Minkowski distance between this vector and another vector.

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `v` | [`Vec3Like`](#vec3like) | The other vector. |
| `p` | `number` | The order of the Minkowski distance. |

###### Returns

`number`

The Minkowski distance between the vectors.

###### Implementation of

[`Vec3Like`](#vec3like).[`distanceMinkowski`](#distanceminkowski-13)

##### distanceSq()

```ts
distanceSq(v): number;
```

Calculates the squared distance between this vector and another vector.

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `v` | [`Vec3Like`](#vec3like) | The other vector. |

###### Returns

`number`

The squared distance between the vectors.

###### Implementation of

[`Vec3Like`](#vec3like).[`distanceSq`](#distancesq-13)

##### divide()

```ts
divide(v): this;
```

Divides this vector with another vector.

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `v` | [`Vec3Like`](#vec3like) | The vector to divide with. |

###### Returns

`this`

`this` instance for method chaining.

###### Implementation of

[`Vec3Like`](#vec3like).[`divide`](#divide-13)

##### dot()

```ts
dot(v): number;
```

Calculates the dot product of this vector with another vector.

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `v` | [`Vec3Like`](#vec3like) | The other vector. |

###### Returns

`number`

The dot product of the vectors.

###### Implementation of

[`Vec3Like`](#vec3like).[`dot`](#dot-13)

##### equals()

```ts
equals(v, epsilon?): boolean;
```

Compares this vector with another vector using an epsilon value for floating-point comparison.

###### Parameters

| Parameter | Type | Default value | Description |
| ------ | ------ | ------ | ------ |
| `v` | [`Vec3Like`](#vec3like) | `undefined` | The vector to compare with. |
| `epsilon?` | `number` | `Number.EPSILON` | The maximum difference between components to consider them equal. |

###### Returns

`boolean`

`true` if the vectors are equal within epsilon, `false` otherwise.

###### Implementation of

[`Vec3Like`](#vec3like).[`equals`](#equals-13)

##### isInfinite()

```ts
isInfinite(): boolean;
```

Checks if this vector has infinite components.

###### Returns

`boolean`

`true` if the vector has infinite components, `false` otherwise.

###### Implementation of

[`Vec3Like`](#vec3like).[`isInfinite`](#isinfinite-13)

##### isNaN()

```ts
isNaN(): boolean;
```

Checks if this vector has NaN components.

###### Returns

`boolean`

`true` if the vector has NaN components, `false` otherwise.

###### Implementation of

[`Vec3Like`](#vec3like).[`isNaN`](#isnan-13)

##### isZero()

```ts
isZero(): boolean;
```

Checks if this vector is zero.

###### Returns

`boolean`

`true` if the vector is zero, `false` otherwise.

###### Implementation of

[`Vec3Like`](#vec3like).[`isZero`](#iszero-13)

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

[`Vec3Like`](#vec3like).[`limitMax`](#limitmax-10)

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

[`Vec3Like`](#vec3like).[`limitMin`](#limitmin-10)

##### lookAt()

```ts
lookAt(v): this;
```

Sets this vector to point towards another vector.

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `v` | [`Vec3Like`](#vec3like) | The vector to look at. |

###### Returns

`this`

`this` instance for method chaining.

###### Implementation of

[`Vec3Like`](#vec3like).[`lookAt`](#lookat-10)

##### multiply()

```ts
multiply(v): this;
```

Multiplies this vector with another vector.

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `v` | [`Vec3Like`](#vec3like) | The vector to multiply with. |

###### Returns

`this`

`this` instance for method chaining.

###### Implementation of

[`Vec3Like`](#vec3like).[`multiply`](#multiply-13)

##### negate()

```ts
negate(): this;
```

Negates this vector.

###### Returns

`this`

`this` instance for method chaining.

###### Implementation of

[`Vec3Like`](#vec3like).[`negate`](#negate-13)

##### normalize()

```ts
normalize(): this;
```

Normalizes this vector.

###### Returns

`this`

`this` instance for method chaining.

###### Implementation of

[`Vec3Like`](#vec3like).[`normalize`](#normalize-13)

##### project()

```ts
project(v): this;
```

Projects this vector onto another vector.

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `v` | [`Vec3Like`](#vec3like) | The vector to project onto. |

###### Returns

`this`

`this` instance for method chaining.

###### Implementation of

[`Vec3Like`](#vec3like).[`project`](#project-13)

##### random()

```ts
random(random?): this;
```

Sets this vector to a random direction with the same magnitude.

###### Parameters

| Parameter | Type | Default value | Description |
| ------ | ------ | ------ | ------ |
| `random?` | () => `number` | `Math.random` | A function that returns a random number between 0 and 1. |

###### Returns

`this`

`this` instance for method chaining.

###### Implementation of

[`Vec3Like`](#vec3like).[`random`](#random-13)

##### reflect()

```ts
reflect(normal): this;
```

Reflects this vector across a normal vector.

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `normal` | [`Vec3Like`](#vec3like) | The normal vector to reflect across (must be normalized). |

###### Returns

`this`

`this` instance for method chaining.

###### Implementation of

[`Vec3Like`](#vec3like).[`reflect`](#reflect-13)

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

[`Vec3Like`](#vec3like).[`rotateX`](#rotatex-3)

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

[`Vec3Like`](#vec3like).[`rotateY`](#rotatey-3)

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

[`Vec3Like`](#vec3like).[`rotateZ`](#rotatez-7)

##### satisfyEquality()

```ts
satisfyEquality(v): boolean;
```

Checks if this vector is equal to another vector.

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `v` | [`Vec3Like`](#vec3like) | The other vector. |

###### Returns

`boolean`

`true` if the vectors are equal, `false` otherwise.

###### Implementation of

[`Vec3Like`](#vec3like).[`satisfyEquality`](#satisfyequality-13)

##### satisfyOpposition()

```ts
satisfyOpposition(v): boolean;
```

Checks if this vector is opposite to another vector.

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `v` | [`Vec3Like`](#vec3like) | The other vector. |

###### Returns

`boolean`

`true` if the vectors are opposite, `false` otherwise.

###### Implementation of

[`Vec3Like`](#vec3like).[`satisfyOpposition`](#satisfyopposition-13)

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

[`Vec3Like`](#vec3like).[`scale`](#scale-13)

##### subtract()

```ts
subtract(v): this;
```

Subtracts another vector from this vector.

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `v` | [`Vec3Like`](#vec3like) | The vector to subtract. |

###### Returns

`this`

`this` instance for method chaining.

###### Implementation of

[`Vec3Like`](#vec3like).[`subtract`](#subtract-13)

##### toJSON()

```ts
toJSON(): XYZObject;
```

Serializes the vector to a JSON-friendly format.

###### Returns

[`XYZObject`](#xyzobject)

A JSON-friendly object representation of the vector.

###### Implementation of

[`Vec3Like`](#vec3like).[`toJSON`](#tojson-10)

##### toObject()

```ts
toObject(): XYZObject;
```

Converts the vector to a plain object.

###### Returns

[`XYZObject`](#xyzobject)

An object with x, y and z properties.

###### Implementation of

[`Vec3Like`](#vec3like).[`toObject`](#toobject-10)

##### toString()

```ts
toString(): string;
```

Returns a string representation of the vector.

###### Returns

`string`

A string in the format "ProxyVec3(x, y, z)".

###### Implementation of

[`Vec3Like`](#vec3like).[`toString`](#tostring-10)

##### zero()

```ts
zero(): this;
```

Sets this vector to zero.

###### Returns

`this`

`this` instance for method chaining.

###### Implementation of

[`Vec3Like`](#vec3like).[`zero`](#zero-13)

***

### ProxyVec4

A 4D vector backed by getter and setter functions.

#### Implements

- [`Vec4Like`](#vec4like)

#### Constructors

##### Constructor

```ts
new ProxyVec4(
   getX, 
   getY, 
   getZ, 
   getW, 
   setX, 
   setY, 
   setZ, 
   setW
): ProxyVec4;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `getX` | () => `number` |
| `getY` | () => `number` |
| `getZ` | () => `number` |
| `getW` | () => `number` |
| `setX` | (`x`) => `void` |
| `setY` | (`y`) => `void` |
| `setZ` | (`z`) => `void` |
| `setW` | (`w`) => `void` |

###### Returns

[`ProxyVec4`](#proxyvec4)

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

###### Implementation of

[`Vec4Like`](#vec4like).[`a`](#property-a)

##### angleW

###### Get Signature

```ts
get angleW(): number;
```

Gets the angle between the vector and the positive w-axis in radians.

###### Returns

`number`

The angle in radians, always in the range [0, 2π).

###### Implementation of

[`Vec4Like`](#vec4like).[`angleW`](#property-anglew)

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

[`Vec4Like`](#vec4like).[`angleX`](#property-anglex-2)

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

[`Vec4Like`](#vec4like).[`angleY`](#property-angley-2)

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

[`Vec4Like`](#vec4like).[`angleZ`](#property-anglez-1)

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

[`Vec4Like`](#vec4like).[`b`](#property-b-1)

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

[`Vec4Like`](#vec4like).[`g`](#property-g-1)

##### magnitude

###### Get Signature

```ts
get magnitude(): number;
```

Reads the current target components, including external changes.

###### Returns

`number`

###### Set Signature

```ts
set magnitude(m): void;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `m` | `number` |

###### Returns

`void`

###### Implementation of

[`Vec4Like`](#vec4like).[`magnitude`](#property-magnitude-2)

##### magnitudeSq

###### Get Signature

```ts
get magnitudeSq(): number;
```

###### Returns

`number`

###### Implementation of

[`Vec4Like`](#vec4like).[`magnitudeSq`](#property-magnitudesq-2)

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

[`Vec4Like`](#vec4like).[`r`](#property-r-1)

##### rgba

###### Get Signature

```ts
get rgba(): ArrayVector4D;
```

Gets a copy of the vector's components as an array.

###### Returns

[`ArrayVector4D`](#arrayvector4d)

An array containing the Red, Green, Blue and Alpha components of the Color.

###### Set Signature

```ts
set rgba(rgba): void;
```

Sets all components of the Color at once.

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `rgba` | [`ArrayVector4D`](#arrayvector4d) | An array containing the new Red, Green, Blue and Alpha components. |

###### Returns

`void`

###### Implementation of

[`Vec4Like`](#vec4like).[`rgba`](#property-rgba)

##### w

###### Get Signature

```ts
get w(): number;
```

###### Returns

`number`

###### Set Signature

```ts
set w(w): void;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `w` | `number` |

###### Returns

`void`

###### Implementation of

[`Vec4Like`](#vec4like).[`w`](#property-w)

##### x

###### Get Signature

```ts
get x(): number;
```

###### Returns

`number`

###### Set Signature

```ts
set x(x): void;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `x` | `number` |

###### Returns

`void`

###### Implementation of

[`Vec4Like`](#vec4like).[`x`](#property-x-2)

##### xyzw

###### Get Signature

```ts
get xyzw(): ArrayVector4D;
```

###### Returns

[`ArrayVector4D`](#arrayvector4d)

###### Set Signature

```ts
set xyzw(value): void;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `value` | [`ArrayVector4D`](#arrayvector4d) |

###### Returns

`void`

###### Implementation of

[`Vec4Like`](#vec4like).[`xyzw`](#property-xyzw)

##### y

###### Get Signature

```ts
get y(): number;
```

###### Returns

`number`

###### Set Signature

```ts
set y(y): void;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `y` | `number` |

###### Returns

`void`

###### Implementation of

[`Vec4Like`](#vec4like).[`y`](#property-y-2)

##### z

###### Get Signature

```ts
get z(): number;
```

###### Returns

`number`

###### Set Signature

```ts
set z(z): void;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `z` | `number` |

###### Returns

`void`

###### Implementation of

[`Vec4Like`](#vec4like).[`z`](#property-z-1)

#### Methods

##### \[iterator\]()

```ts
[iterator](): IterableIterator<number>;
```

Makes the Vec4 instance iterable.

###### Returns

`IterableIterator`\<`number`\>

###### Yields

The x, y, z and w components of the vector.

###### Implementation of

[`Vec4Like`](#vec4like).[`[iterator]`](#iterator-11)

##### add()

```ts
add(v): ProxyVec4;
```

Adds another vector to this vector.

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `v` | [`Vec4Like`](#vec4like) | The vector to add. |

###### Returns

[`ProxyVec4`](#proxyvec4)

This Vec4 instance for method chaining.

###### Implementation of

[`Vec4Like`](#vec4like).[`add`](#add-14)

##### angleBetween()

```ts
angleBetween(v): number;
```

Calculates the angle between this vector and another vector.

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `v` | [`Vec4Like`](#vec4like) | The other vector. |

###### Returns

`number`

The angle between the vectors in radians.

###### Implementation of

[`Vec4Like`](#vec4like).[`angleBetween`](#anglebetween-14)

##### clamp()

```ts
clamp(min, max): ProxyVec4;
```

Clamps the magnitude of this vector between a minimum and maximum value.

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `min` | `number` | The minimum magnitude. |
| `max` | `number` | The maximum magnitude. |

###### Returns

[`ProxyVec4`](#proxyvec4)

This Vec4 instance for method chaining.

###### Implementation of

[`Vec4Like`](#vec4like).[`clamp`](#clamp-11)

##### clone()

```ts
clone(): Vec4;
```

Creates a copy of this vector.

###### Returns

[`Vec4`](#vec4)

A new Vec4 instance with the same components.

###### Implementation of

[`Vec4Like`](#vec4like).[`clone`](#clone-11)

##### copy()

```ts
copy(v): ProxyVec4;
```

Copies the components of another vector to this vector.

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `v` | [`Vec4Like`](#vec4like) | The vector to copy from. |

###### Returns

[`ProxyVec4`](#proxyvec4)

This Vec2 instance for method chaining.

###### Implementation of

[`Vec4Like`](#vec4like).[`copy`](#copy-11)

##### distance()

```ts
distance(v): number;
```

Calculates the distance between this vector and another vector.

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `v` | [`Vec4Like`](#vec4like) | The other vector. |

###### Returns

`number`

The distance between the vectors.

###### Implementation of

[`Vec4Like`](#vec4like).[`distance`](#distance-14)

##### distanceChebyshev()

```ts
distanceChebyshev(v): number;
```

Calculates the Chebyshev distance between this vector and another vector.

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `v` | [`Vec4Like`](#vec4like) | The other vector. |

###### Returns

`number`

The Chebyshev distance between the vectors.

###### Implementation of

[`Vec4Like`](#vec4like).[`distanceChebyshev`](#distancechebyshev-14)

##### distanceManhattan()

```ts
distanceManhattan(v): number;
```

Calculates the Manhattan distance between this vector and another vector.

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `v` | [`Vec4Like`](#vec4like) | The other vector. |

###### Returns

`number`

The Manhattan distance between the vectors.

###### Implementation of

[`Vec4Like`](#vec4like).[`distanceManhattan`](#distancemanhattan-14)

##### distanceMinkowski()

```ts
distanceMinkowski(v, p): number;
```

Calculates the Minkowski distance between this vector and another vector.

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `v` | [`Vec4Like`](#vec4like) | The other vector. |
| `p` | `number` | The order of the Minkowski distance. |

###### Returns

`number`

The Minkowski distance between the vectors.

###### Implementation of

[`Vec4Like`](#vec4like).[`distanceMinkowski`](#distanceminkowski-14)

##### distanceSq()

```ts
distanceSq(v): number;
```

Calculates the squared distance between this vector and another vector.

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `v` | [`Vec4Like`](#vec4like) | The other vector. |

###### Returns

`number`

The squared distance between the vectors.

###### Implementation of

[`Vec4Like`](#vec4like).[`distanceSq`](#distancesq-14)

##### divide()

```ts
divide(v): this;
```

Divides this vector with another vector.

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `v` | [`Vec4Like`](#vec4like) | The vector to divide with. |

###### Returns

`this`

This Vec4 instance for method chaining.

###### Implementation of

[`Vec4Like`](#vec4like).[`divide`](#divide-14)

##### dot()

```ts
dot(v): number;
```

Calculates the dot product of this vector with another vector.

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `v` | [`Vec4Like`](#vec4like) | The other vector. |

###### Returns

`number`

The dot product of the vectors.

###### Implementation of

[`Vec4Like`](#vec4like).[`dot`](#dot-14)

##### equals()

```ts
equals(v, epsilon?): boolean;
```

Compares this vector with another vector using an epsilon value for floating-point comparison.

###### Parameters

| Parameter | Type | Default value | Description |
| ------ | ------ | ------ | ------ |
| `v` | [`Vec4Like`](#vec4like) | `undefined` | The vector to compare with. |
| `epsilon?` | `number` | `Number.EPSILON` | The maximum difference between components to consider them equal. |

###### Returns

`boolean`

True if the vectors are equal within epsilon, false otherwise.

###### Implementation of

[`Vec4Like`](#vec4like).[`equals`](#equals-14)

##### isInfinite()

```ts
isInfinite(): boolean;
```

Checks if this vector has infinite components.

###### Returns

`boolean`

True if the vector has infinite components, false otherwise.

###### Implementation of

[`Vec4Like`](#vec4like).[`isInfinite`](#isinfinite-14)

##### isNaN()

```ts
isNaN(): boolean;
```

Checks if this vector has NaN components.

###### Returns

`boolean`

True if the vector has NaN components, false otherwise.

###### Implementation of

[`Vec4Like`](#vec4like).[`isNaN`](#isnan-14)

##### isZero()

```ts
isZero(): boolean;
```

Checks if this vector is zero.

###### Returns

`boolean`

True if the vector is zero, false otherwise.

###### Implementation of

[`Vec4Like`](#vec4like).[`isZero`](#iszero-14)

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

###### Implementation of

[`Vec4Like`](#vec4like).[`limitMax`](#limitmax-11)

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

###### Implementation of

[`Vec4Like`](#vec4like).[`limitMin`](#limitmin-11)

##### lookAt()

```ts
lookAt(v): this;
```

Sets this vector to point towards another vector.

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `v` | [`Vec4Like`](#vec4like) | The vector to look at. |

###### Returns

`this`

This Vec4 instance for method chaining.

###### Implementation of

[`Vec4Like`](#vec4like).[`lookAt`](#lookat-11)

##### multiply()

```ts
multiply(v): this;
```

Multiplies this vector with another vector.

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `v` | [`Vec4Like`](#vec4like) | The vector to multiply with. |

###### Returns

`this`

This Vec4 instance for method chaining.

###### Implementation of

[`Vec4Like`](#vec4like).[`multiply`](#multiply-14)

##### negate()

```ts
negate(): this;
```

Negates this vector.

###### Returns

`this`

This Vec4 instance for method chaining.

###### Implementation of

[`Vec4Like`](#vec4like).[`negate`](#negate-14)

##### normalize()

```ts
normalize(): this;
```

Normalizes this vector.

###### Returns

`this`

This Ve4 instance for method chaining.

###### Implementation of

[`Vec4Like`](#vec4like).[`normalize`](#normalize-14)

##### project()

```ts
project(v): this;
```

Projects this vector onto another vector.

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `v` | [`Vec4Like`](#vec4like) | The vector to project onto. |

###### Returns

`this`

This Vec4 instance for method chaining.

###### Implementation of

[`Vec4Like`](#vec4like).[`project`](#project-14)

##### random()

```ts
random(random?): this;
```

Sets this vector to a random direction with the same magnitude.

###### Parameters

| Parameter | Type | Default value | Description |
| ------ | ------ | ------ | ------ |
| `random?` | () => `number` | `Math.random` | A function that returns a random number between 0 and 1. |

###### Returns

`this`

This Vec4 instance for method chaining.

###### Implementation of

[`Vec4Like`](#vec4like).[`random`](#random-14)

##### reflect()

```ts
reflect(normal): this;
```

Reflects this vector across a normal vector.
The normal vector should be normalized (unit length).

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `normal` | [`Vec4Like`](#vec4like) | The normal vector to reflect across (must be normalized). |

###### Returns

`this`

This Vec4 instance for method chaining.

###### Implementation of

[`Vec4Like`](#vec4like).[`reflect`](#reflect-14)

##### satisfyEquality()

```ts
satisfyEquality(v): boolean;
```

Checks if this vector is equal to another vector.

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `v` | [`Vec4Like`](#vec4like) | The other vector. |

###### Returns

`boolean`

True if the vectors are equal, false otherwise.

###### Implementation of

[`Vec4Like`](#vec4like).[`satisfyEquality`](#satisfyequality-14)

##### satisfyOpposition()

```ts
satisfyOpposition(v): boolean;
```

Checks if this vector is opposite to another vector.

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `v` | [`Vec4Like`](#vec4like) | The other vector. |

###### Returns

`boolean`

True if the vectors are opposite, false otherwise.

###### Implementation of

[`Vec4Like`](#vec4like).[`satisfyOpposition`](#satisfyopposition-14)

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

###### Implementation of

[`Vec4Like`](#vec4like).[`scale`](#scale-14)

##### subtract()

```ts
subtract(v): this;
```

Subtracts another vector from this vector.

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `v` | [`Vec4Like`](#vec4like) | The vector to subtract. |

###### Returns

`this`

This Vec4 instance for method chaining.

###### Implementation of

[`Vec4Like`](#vec4like).[`subtract`](#subtract-14)

##### toJSON()

```ts
toJSON(): {
  w: number;
  x: number;
  y: number;
  z: number;
};
```

Serializes the vector to a JSON-friendly format.

###### Returns

```ts
{
  w: number;
  x: number;
  y: number;
  z: number;
}
```

A JSON-friendly object representation of the vector.

| Name | Type |
| ------ | ------ |
| `w` | `number` |
| `x` | `number` |
| `y` | `number` |
| `z` | `number` |

###### Implementation of

[`Vec4Like`](#vec4like).[`toJSON`](#tojson-11)

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

###### Implementation of

[`Vec4Like`](#vec4like).[`toObject`](#toobject-11)

##### toString()

```ts
toString(): string;
```

Returns a string representation of the vector.

###### Returns

`string`

A string in the format "Vec4(x, y, z, w)".

###### Implementation of

[`Vec4Like`](#vec4like).[`toString`](#tostring-11)

##### zero()

```ts
zero(): this;
```

Sets this vector to zero.

###### Returns

`this`

This Vec4 instance for method chaining.

###### Implementation of

[`Vec4Like`](#vec4like).[`zero`](#zero-14)

***

### Vec2

2D vector.

#### Implements

- [`Vec2Like`](#vec2like)

#### Constructors

##### Constructor

```ts
new Vec2(x?, y?): Vec2;
```

Creates a new Vec2 instance.

###### Parameters

| Parameter | Type | Default value | Description |
| ------ | ------ | ------ | ------ |
| `x?` | `number` | `0` | The x-coordinate of the vector. |
| `y?` | `number` | `x` | The y-coordinate of the vector. |

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

[`Vec2Like`](#vec2like).[`angleX`](#property-anglex)

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

[`Vec2Like`](#vec2like).[`angleY`](#property-angley)

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

[`Vec2Like`](#vec2like).[`magnitude`](#property-magnitude)

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

[`Vec2Like`](#vec2like).[`magnitudeSq`](#property-magnitudesq)

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

[`Vec2Like`](#vec2like).[`x`](#property-x)

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

[`Vec2Like`](#vec2like).[`xy`](#property-xy)

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

[`Vec2Like`](#vec2like).[`y`](#property-y)

#### Methods

##### \[iterator\]()

```ts
[iterator](): IterableIterator<number>;
```

Iterator over this vector's components.

###### Returns

`IterableIterator`\<`number`\>

###### Yields

The x and y components of the vector.

###### Implementation of

[`Vec2Like`](#vec2like).[`[iterator]`](#iterator-9)

##### add()

```ts
add(v): this;
```

Adds another vector to this vector.

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `v` | [`Vec2Like`](#vec2like) | The vector to add. |

###### Returns

`this`

`this` instance for method chaining.

###### Implementation of

[`Vec2Like`](#vec2like).[`add`](#add-12)

##### angleBetween()

```ts
angleBetween(v): number;
```

Calculates the angle between this vector and another vector.

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `v` | [`Vec2Like`](#vec2like) | The other vector. |

###### Returns

`number`

The angle between the vectors in radians.

###### Implementation of

[`Vec2Like`](#vec2like).[`angleBetween`](#anglebetween-12)

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

[`Vec2Like`](#vec2like).[`clamp`](#clamp-9)

##### clone()

```ts
clone(): Vec2;
```

Creates a copy of this vector.

###### Returns

[`Vec2`](#vec2)

A new Vec2 instance with the same components.

###### Implementation of

[`Vec2Like`](#vec2like).[`clone`](#clone-9)

##### copy()

```ts
copy(v): this;
```

Copies the components of another vector to this vector.

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `v` | [`Vec2Like`](#vec2like) | The vector to copy from. |

###### Returns

`this`

`this` instance for method chaining.

###### Implementation of

[`Vec2Like`](#vec2like).[`copy`](#copy-9)

##### cross()

```ts
cross(v): number;
```

Calculates the cross product of this vector with another vector.

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `v` | [`Vec2Like`](#vec2like) | The other vector. |

###### Returns

`number`

The cross product of the vectors.

###### Implementation of

[`Vec2Like`](#vec2like).[`cross`](#cross-8)

##### distance()

```ts
distance(v): number;
```

Calculates the distance between this vector and another vector.

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `v` | [`Vec2Like`](#vec2like) | The other vector. |

###### Returns

`number`

The distance between the vectors.

###### Implementation of

[`Vec2Like`](#vec2like).[`distance`](#distance-12)

##### distanceChebyshev()

```ts
distanceChebyshev(v): number;
```

Calculates the Chebyshev distance between this vector and another vector.

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `v` | [`Vec2Like`](#vec2like) | The other vector. |

###### Returns

`number`

The Chebyshev distance between the vectors.

###### Implementation of

[`Vec2Like`](#vec2like).[`distanceChebyshev`](#distancechebyshev-12)

##### distanceManhattan()

```ts
distanceManhattan(v): number;
```

Calculates the Manhattan distance between this vector and another vector.

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `v` | [`Vec2Like`](#vec2like) | The other vector. |

###### Returns

`number`

The Manhattan distance between the vectors.

###### Implementation of

[`Vec2Like`](#vec2like).[`distanceManhattan`](#distancemanhattan-12)

##### distanceMinkowski()

```ts
distanceMinkowski(v, p): number;
```

Calculates the Minkowski distance between this vector and another vector.

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `v` | [`Vec2Like`](#vec2like) | The other vector. |
| `p` | `number` | The order of the Minkowski distance. |

###### Returns

`number`

The Minkowski distance between the vectors.

###### Implementation of

[`Vec2Like`](#vec2like).[`distanceMinkowski`](#distanceminkowski-12)

##### distanceSq()

```ts
distanceSq(v): number;
```

Calculates the squared distance between this vector and another vector.

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `v` | [`Vec2Like`](#vec2like) | The other vector. |

###### Returns

`number`

The squared distance between the vectors.

###### Implementation of

[`Vec2Like`](#vec2like).[`distanceSq`](#distancesq-12)

##### divide()

```ts
divide(v): this;
```

Divides this vector with another vector.

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `v` | [`Vec2Like`](#vec2like) | The vector to divide with. |

###### Returns

`this`

`this` instance for method chaining.

###### Implementation of

[`Vec2Like`](#vec2like).[`divide`](#divide-12)

##### dot()

```ts
dot(v): number;
```

Calculates the dot product of this vector with another vector.

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `v` | [`Vec2Like`](#vec2like) | The other vector. |

###### Returns

`number`

The dot product of the vectors.

###### Implementation of

[`Vec2Like`](#vec2like).[`dot`](#dot-12)

##### equals()

```ts
equals(v, epsilon?): boolean;
```

Compares this vector with another vector using an epsilon value for floating-point comparison.

###### Parameters

| Parameter | Type | Default value | Description |
| ------ | ------ | ------ | ------ |
| `v` | [`Vec2Like`](#vec2like) | `undefined` | The vector to compare with. |
| `epsilon?` | `number` | `Number.EPSILON` | The maximum difference between components to consider them equal. |

###### Returns

`boolean`

`true` if the vectors are equal within epsilon, `false` otherwise.

###### Implementation of

[`Vec2Like`](#vec2like).[`equals`](#equals-12)

##### isInfinite()

```ts
isInfinite(): boolean;
```

Checks if this vector has infinite components.

###### Returns

`boolean`

`true` if the vector has infinite components, `false` otherwise.

###### Implementation of

[`Vec2Like`](#vec2like).[`isInfinite`](#isinfinite-12)

##### isNaN()

```ts
isNaN(): boolean;
```

Checks if this vector has NaN components.

###### Returns

`boolean`

`true` if the vector has NaN components, `false` otherwise.

###### Implementation of

[`Vec2Like`](#vec2like).[`isNaN`](#isnan-12)

##### isZero()

```ts
isZero(): boolean;
```

Checks if this vector is zero.

###### Returns

`boolean`

`true` if the vector is zero, `false` otherwise.

###### Implementation of

[`Vec2Like`](#vec2like).[`isZero`](#iszero-12)

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

[`Vec2Like`](#vec2like).[`limitMax`](#limitmax-9)

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

[`Vec2Like`](#vec2like).[`limitMin`](#limitmin-9)

##### lookAt()

```ts
lookAt(v): this;
```

Sets this vector to point towards another vector.

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `v` | [`Vec2Like`](#vec2like) | The vector to look at. |

###### Returns

`this`

`this` instance for method chaining.

###### Implementation of

[`Vec2Like`](#vec2like).[`lookAt`](#lookat-9)

##### multiply()

```ts
multiply(v): this;
```

Multiplies this vector with another vector.

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `v` | [`Vec2Like`](#vec2like) | The vector to multiply with. |

###### Returns

`this`

`this` instance for method chaining.

###### Implementation of

[`Vec2Like`](#vec2like).[`multiply`](#multiply-12)

##### negate()

```ts
negate(): this;
```

Negates this vector.

###### Returns

`this`

`this` instance for method chaining.

###### Implementation of

[`Vec2Like`](#vec2like).[`negate`](#negate-12)

##### normalize()

```ts
normalize(): this;
```

Normalizes this vector.

###### Returns

`this`

`this` instance for method chaining.

###### Implementation of

[`Vec2Like`](#vec2like).[`normalize`](#normalize-12)

##### project()

```ts
project(v): this;
```

Projects this vector onto another vector.

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `v` | [`Vec2Like`](#vec2like) | The vector to project onto. |

###### Returns

`this`

`this` instance for method chaining.

###### Implementation of

[`Vec2Like`](#vec2like).[`project`](#project-12)

##### random()

```ts
random(random?): this;
```

Sets this vector to a random direction with the same magnitude.

###### Parameters

| Parameter | Type | Default value | Description |
| ------ | ------ | ------ | ------ |
| `random?` | () => `number` | `Math.random` | A function that returns a random number between 0 and 1. |

###### Returns

`this`

`this` instance for method chaining.

###### Implementation of

[`Vec2Like`](#vec2like).[`random`](#random-12)

##### reflect()

```ts
reflect(normal): Vec2;
```

Reflects this vector across a normal vector.

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `normal` | [`Vec2Like`](#vec2like) | The normal vector to reflect across (must be normalized). |

###### Returns

[`Vec2`](#vec2)

A new Vec2 instance representing the reflected vector.

###### Implementation of

[`Vec2Like`](#vec2like).[`reflect`](#reflect-12)

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

[`Vec2Like`](#vec2like).[`rotateZ`](#rotatez-6)

##### satisfyEquality()

```ts
satisfyEquality(v): boolean;
```

Checks if this vector is equal to another vector.

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `v` | [`Vec2Like`](#vec2like) | The other vector. |

###### Returns

`boolean`

`true` if the vectors are equal, `false` otherwise.

###### Implementation of

[`Vec2Like`](#vec2like).[`satisfyEquality`](#satisfyequality-12)

##### satisfyOpposition()

```ts
satisfyOpposition(v): boolean;
```

Checks if this vector is opposite to another vector.

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `v` | [`Vec2Like`](#vec2like) | The other vector. |

###### Returns

`boolean`

`true` if the vectors are opposite, `false` otherwise.

###### Implementation of

[`Vec2Like`](#vec2like).[`satisfyOpposition`](#satisfyopposition-12)

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

[`Vec2Like`](#vec2like).[`scale`](#scale-12)

##### subtract()

```ts
subtract(v): this;
```

Subtracts another vector from this vector.

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `v` | [`Vec2Like`](#vec2like) | The vector to subtract. |

###### Returns

`this`

`this` instance for method chaining.

###### Implementation of

[`Vec2Like`](#vec2like).[`subtract`](#subtract-12)

##### toJSON()

```ts
toJSON(): XYObject;
```

Serializes the vector to a JSON-friendly format.

###### Returns

[`XYObject`](#xyobject)

A JSON-friendly object representation of the vector.

###### Implementation of

[`Vec2Like`](#vec2like).[`toJSON`](#tojson-9)

##### toObject()

```ts
toObject(): XYObject;
```

Converts the vector to a plain object.

###### Returns

[`XYObject`](#xyobject)

An object with x and y properties.

###### Implementation of

[`Vec2Like`](#vec2like).[`toObject`](#toobject-9)

##### toString()

```ts
toString(): string;
```

Returns a string representation of the vector.

###### Returns

`string`

A string in the format "Vec2(x, y)".

###### Implementation of

[`Vec2Like`](#vec2like).[`toString`](#tostring-9)

##### turnLeft()

```ts
turnLeft(): this;
```

Rotates this vector 90 degrees to the left.

###### Returns

`this`

`this` instance for method chaining.

###### Implementation of

[`Vec2Like`](#vec2like).[`turnLeft`](#turnleft-3)

##### turnRight()

```ts
turnRight(): this;
```

Rotates this vector 90 degrees to the right.

###### Returns

`this`

`this` instance for method chaining.

###### Implementation of

[`Vec2Like`](#vec2like).[`turnRight`](#turnright-3)

##### zero()

```ts
zero(): this;
```

Sets this vector to zero.

###### Returns

`this`

`this` instance for method chaining.

###### Implementation of

[`Vec2Like`](#vec2like).[`zero`](#zero-12)

##### add()

```ts
static add(v, w): Vec2;
```

Adds two vectors.

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `v` | [`Vec2Like`](#vec2like) | The first vector. |
| `w` | [`Vec2Like`](#vec2like) | The second vector. |

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
| `v` | [`Vec2Like`](#vec2like) | The first vector. |
| `w` | [`Vec2Like`](#vec2like) | The second vector. |

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
| `v` | [`Vec2Like`](#vec2like) | The first vector. |
| `w` | [`Vec2Like`](#vec2like) | The second vector. |

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
| `v` | [`Vec2Like`](#vec2like) | The first vector. |
| `w` | [`Vec2Like`](#vec2like) | The second vector. |

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
| `v` | [`Vec2Like`](#vec2like) | The first vector. |
| `w` | [`Vec2Like`](#vec2like) | The second vector. |

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
| `v` | [`Vec2Like`](#vec2like) | The first vector. |
| `w` | [`Vec2Like`](#vec2like) | The second vector. |

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
| `v` | [`Vec2Like`](#vec2like) | The first vector. |
| `w` | [`Vec2Like`](#vec2like) | The second vector. |
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
| `v` | [`Vec2Like`](#vec2like) | The first vector. |
| `w` | [`Vec2Like`](#vec2like) | The second vector. |

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
| `v` | [`Vec2Like`](#vec2like) | Divident. |
| `w` | [`Vec2Like`](#vec2like) | Divisor. |

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
| `v` | [`Vec2Like`](#vec2like) | The first vector. |
| `w` | [`Vec2Like`](#vec2like) | The second vector. |

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
| `v` | [`Vec2Like`](#vec2like) | `undefined` | The first vector. |
| `w` | [`Vec2Like`](#vec2like) | `undefined` | The second vector. |
| `epsilon?` | `number` | `Number.EPSILON` | The maximum difference between components to consider them equal. |

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
| `arr` | [`ArrayVector2D`](#arrayvector2d) \| `number`[] | An array containing the x and y coordinates. |

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
| `x?` | `number` | `0` | The x-coordinate of the vector. |
| `y?` | `number` | `0` | The y-coordinate of the vector. |

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
| `v` | [`Vec2Like`](#vec2like) | The vector to check. |

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
| `v` | [`Vec2Like`](#vec2like) | The vector to check. |

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
| `v` | [`Vec2Like`](#vec2like) | The vector to check. |

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
| `v` | [`Vec2Like`](#vec2like) | The first vector. |
| `w` | [`Vec2Like`](#vec2like) | The second vector. |
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
| `v` | [`Vec2Like`](#vec2like) | The first vector. |
| `w` | [`Vec2Like`](#vec2like) | The second vector. |

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
| `v` | [`Vec2Like`](#vec2like) | The vector to negate. |

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
| `v` | [`Vec2Like`](#vec2like) | The vector to normalize. |

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
| `v` | [`Vec2Like`](#vec2like) | The vector to project. |
| `w` | [`Vec2Like`](#vec2like) | The vector to project onto. |

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
| `random?` | () => `number` | `Math.random` | A function that returns a random number between 0 and 1. |

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
| `v` | [`Vec2Like`](#vec2like) | The vector to reflect. |
| `normal` | [`Vec2Like`](#vec2like) | The normal vector to reflect across (must be normalized). |

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
| `v` | [`Vec2Like`](#vec2like) | The first vector. |
| `w` | [`Vec2Like`](#vec2like) | The second vector. |

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
| `v` | [`Vec2Like`](#vec2like) | The first vector. |
| `w` | [`Vec2Like`](#vec2like) | The second vector. |

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
| `v` | [`Vec2Like`](#vec2like) | The vector to scale. |
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
| `v` | [`Vec2Like`](#vec2like) | The vector to subtract from. |
| `w` | [`Vec2Like`](#vec2like) | The vector to subtract. |

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

- [`Vec3Like`](#vec3like)

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
| `x?` | `number` | `0` | The x-coordinate of the vector. |
| `y?` | `number` | `0` | The y-coordinate of the vector. |
| `z?` | `number` | `0` | The z-coordinate of the vector. |

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

[`Vec3Like`](#vec3like).[`angleX`](#property-anglex-1)

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

[`Vec3Like`](#vec3like).[`angleY`](#property-angley-1)

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

[`Vec3Like`](#vec3like).[`angleZ`](#property-anglez)

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

[`Vec3Like`](#vec3like).[`b`](#property-b)

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

[`Vec3Like`](#vec3like).[`g`](#property-g)

##### magnitude

###### Get Signature

```ts
get magnitude(): number;
```

Gets the magnitude (length) of the vector.

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

[`Vec3Like`](#vec3like).[`magnitude`](#property-magnitude-1)

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

[`Vec3Like`](#vec3like).[`magnitudeSq`](#property-magnitudesq-1)

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

[`Vec3Like`](#vec3like).[`r`](#property-r)

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

[`Vec3Like`](#vec3like).[`rgb`](#property-rgb)

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

[`Vec3Like`](#vec3like).[`x`](#property-x-1)

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

[`Vec3Like`](#vec3like).[`xyz`](#property-xyz)

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

[`Vec3Like`](#vec3like).[`y`](#property-y-1)

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

[`Vec3Like`](#vec3like).[`z`](#property-z)

#### Methods

##### \[iterator\]()

```ts
[iterator](): IterableIterator<number>;
```

Iterator over this vector's components.

###### Returns

`IterableIterator`\<`number`\>

###### Yields

The x, y and z components of the vector.

###### Implementation of

[`Vec3Like`](#vec3like).[`[iterator]`](#iterator-10)

##### add()

```ts
add(v): this;
```

Adds another vector to this vector.

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `v` | [`Vec3Like`](#vec3like) | The vector to add. |

###### Returns

`this`

`this` instance for method chaining.

###### Implementation of

[`Vec3Like`](#vec3like).[`add`](#add-13)

##### angleBetween()

```ts
angleBetween(v): number;
```

Calculates the angle between this vector and another vector.

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `v` | [`Vec3Like`](#vec3like) | The other vector. |

###### Returns

`number`

The angle between the vectors in radians.

###### Implementation of

[`Vec3Like`](#vec3like).[`angleBetween`](#anglebetween-13)

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

[`Vec3Like`](#vec3like).[`clamp`](#clamp-10)

##### clone()

```ts
clone(): Vec3;
```

Creates a copy of this vector.

###### Returns

[`Vec3`](#vec3)

A new Vec3 instance with the same components.

###### Implementation of

[`Vec3Like`](#vec3like).[`clone`](#clone-10)

##### copy()

```ts
copy(v): this;
```

Copies the components of another vector to this vector.

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `v` | [`Vec3Like`](#vec3like) | The vector to copy from. |

###### Returns

`this`

`this` instance for method chaining.

###### Implementation of

[`Vec3Like`](#vec3like).[`copy`](#copy-10)

##### cross()

```ts
cross(v): this;
```

Calculates cross product between this vector and another vector.

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `v` | [`Vec3Like`](#vec3like) | The other vector. |

###### Returns

`this`

`this` instance for method chaining.

###### Implementation of

[`Vec3Like`](#vec3like).[`cross`](#cross-9)

##### distance()

```ts
distance(v): number;
```

Calculates the distance between this vector and another vector.

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `v` | [`Vec3Like`](#vec3like) | The other vector. |

###### Returns

`number`

The distance between the vectors.

###### Implementation of

[`Vec3Like`](#vec3like).[`distance`](#distance-13)

##### distanceChebyshev()

```ts
distanceChebyshev(v): number;
```

Calculates the Chebyshev distance between vector and another vector.

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `v` | [`Vec3Like`](#vec3like) | The other vector. |

###### Returns

`number`

The Chebyshev distance between the vectors.

###### Implementation of

[`Vec3Like`](#vec3like).[`distanceChebyshev`](#distancechebyshev-13)

##### distanceManhattan()

```ts
distanceManhattan(v): number;
```

Calculates the Manhattan distance between vector and another vector.

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `v` | [`Vec3Like`](#vec3like) | The other vector. |

###### Returns

`number`

The Manhattan distance between the vectors.

###### Implementation of

[`Vec3Like`](#vec3like).[`distanceManhattan`](#distancemanhattan-13)

##### distanceMinkowski()

```ts
distanceMinkowski(v, p): number;
```

Calculates the Minkowski distance between this vector and another vector.

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `v` | [`Vec3Like`](#vec3like) | The other vector. |
| `p` | `number` | The order of the Minkowski distance. |

###### Returns

`number`

The Minkowski distance between the vectors.

###### Implementation of

[`Vec3Like`](#vec3like).[`distanceMinkowski`](#distanceminkowski-13)

##### distanceSq()

```ts
distanceSq(v): number;
```

Calculates the squared distance between this vector and another vector.

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `v` | [`Vec3Like`](#vec3like) | The other vector. |

###### Returns

`number`

The squared distance between the vectors.

###### Implementation of

[`Vec3Like`](#vec3like).[`distanceSq`](#distancesq-13)

##### divide()

```ts
divide(v): this;
```

Divides this vector with another vector.

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `v` | [`Vec3Like`](#vec3like) | The vector to divide with. |

###### Returns

`this`

`this` instance for method chaining.

###### Implementation of

[`Vec3Like`](#vec3like).[`divide`](#divide-13)

##### dot()

```ts
dot(v): number;
```

Calculates the dot product of this vector with another vector.

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `v` | [`Vec3Like`](#vec3like) | The other vector. |

###### Returns

`number`

The dot product of the vectors.

###### Implementation of

[`Vec3Like`](#vec3like).[`dot`](#dot-13)

##### equals()

```ts
equals(v, epsilon?): boolean;
```

Compares this vector with another vector using an epsilon value for floating-point comparison.

###### Parameters

| Parameter | Type | Default value | Description |
| ------ | ------ | ------ | ------ |
| `v` | [`Vec3Like`](#vec3like) | `undefined` | The vector to compare with. |
| `epsilon?` | `number` | `Number.EPSILON` | The maximum difference between components to consider them equal. |

###### Returns

`boolean`

`true` if the vectors are equal within epsilon, `false` otherwise.

###### Implementation of

[`Vec3Like`](#vec3like).[`equals`](#equals-13)

##### isInfinite()

```ts
isInfinite(): boolean;
```

Checks if this vector has infinite components.

###### Returns

`boolean`

`true` if the vector has infinite components, `false` otherwise.

###### Implementation of

[`Vec3Like`](#vec3like).[`isInfinite`](#isinfinite-13)

##### isNaN()

```ts
isNaN(): boolean;
```

Checks if this vector has NaN components.

###### Returns

`boolean`

`true` if the vector has NaN components, `false` otherwise.

###### Implementation of

[`Vec3Like`](#vec3like).[`isNaN`](#isnan-13)

##### isZero()

```ts
isZero(): boolean;
```

Checks if this vector is zero.

###### Returns

`boolean`

`true` if the vector is zero, `false` otherwise.

###### Implementation of

[`Vec3Like`](#vec3like).[`isZero`](#iszero-13)

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

[`Vec3Like`](#vec3like).[`limitMax`](#limitmax-10)

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

[`Vec3Like`](#vec3like).[`limitMin`](#limitmin-10)

##### lookAt()

```ts
lookAt(v): this;
```

Sets this vector to point towards another vector.

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `v` | [`Vec3Like`](#vec3like) | The vector to look at. |

###### Returns

`this`

`this` instance for method chaining.

###### Implementation of

[`Vec3Like`](#vec3like).[`lookAt`](#lookat-10)

##### multiply()

```ts
multiply(v): this;
```

Multiplies this vector with another vector.

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `v` | [`Vec3Like`](#vec3like) | The vector to multiply with. |

###### Returns

`this`

`this` instance for method chaining.

###### Implementation of

[`Vec3Like`](#vec3like).[`multiply`](#multiply-13)

##### negate()

```ts
negate(): this;
```

Negates this vector.

###### Returns

`this`

`this` instance for method chaining.

###### Implementation of

[`Vec3Like`](#vec3like).[`negate`](#negate-13)

##### normalize()

```ts
normalize(): this;
```

Normalizes this vector.

###### Returns

`this`

`this` instance for method chaining.

###### Implementation of

[`Vec3Like`](#vec3like).[`normalize`](#normalize-13)

##### project()

```ts
project(v): this;
```

Projects this vector onto another vector.

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `v` | [`Vec3Like`](#vec3like) | The vector to project onto. |

###### Returns

`this`

`this` instance for method chaining.

###### Implementation of

[`Vec3Like`](#vec3like).[`project`](#project-13)

##### random()

```ts
random(random?): this;
```

Sets this vector to a random direction with the same magnitude.

###### Parameters

| Parameter | Type | Default value | Description |
| ------ | ------ | ------ | ------ |
| `random?` | () => `number` | `Math.random` | A function that returns a random number between 0 and 1. |

###### Returns

`this`

`this` instance for method chaining.

###### Implementation of

[`Vec3Like`](#vec3like).[`random`](#random-13)

##### reflect()

```ts
reflect(normal): this;
```

Reflects this vector across a normal vector.

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `normal` | [`Vec3Like`](#vec3like) | The normal vector to reflect across (must be normalized). |

###### Returns

`this`

`this` instance for method chaining.

###### Implementation of

[`Vec3Like`](#vec3like).[`reflect`](#reflect-13)

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

[`Vec3Like`](#vec3like).[`rotateX`](#rotatex-3)

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

[`Vec3Like`](#vec3like).[`rotateY`](#rotatey-3)

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

[`Vec3Like`](#vec3like).[`rotateZ`](#rotatez-7)

##### satisfyEquality()

```ts
satisfyEquality(v): boolean;
```

Checks if this vector is equal to another vector.

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `v` | [`Vec3Like`](#vec3like) | The other vector. |

###### Returns

`boolean`

`true` if the vectors are equal, `false` otherwise.

###### Implementation of

[`Vec3Like`](#vec3like).[`satisfyEquality`](#satisfyequality-13)

##### satisfyOpposition()

```ts
satisfyOpposition(v): boolean;
```

Checks if this vector is opposite to another vector.

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `v` | [`Vec3Like`](#vec3like) | The other vector. |

###### Returns

`boolean`

`true` if the vectors are opposite, `false` otherwise.

###### Implementation of

[`Vec3Like`](#vec3like).[`satisfyOpposition`](#satisfyopposition-13)

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

[`Vec3Like`](#vec3like).[`scale`](#scale-13)

##### subtract()

```ts
subtract(v): this;
```

Subtracts another vector from this vector.

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `v` | [`Vec3Like`](#vec3like) | The vector to subtract. |

###### Returns

`this`

`this` instance for method chaining.

###### Implementation of

[`Vec3Like`](#vec3like).[`subtract`](#subtract-13)

##### toJSON()

```ts
toJSON(): XYZObject;
```

Serializes the vector to a JSON-friendly format.

###### Returns

[`XYZObject`](#xyzobject)

A JSON-friendly object representation of the vector.

###### Implementation of

[`Vec3Like`](#vec3like).[`toJSON`](#tojson-10)

##### toObject()

```ts
toObject(): XYZObject;
```

Converts the vector to a plain object.

###### Returns

[`XYZObject`](#xyzobject)

An object with x, y and z properties.

###### Implementation of

[`Vec3Like`](#vec3like).[`toObject`](#toobject-10)

##### toString()

```ts
toString(): string;
```

Returns a string representation of the vector.

###### Returns

`string`

A string in the format "Vec3(x, y, z)".

###### Implementation of

[`Vec3Like`](#vec3like).[`toString`](#tostring-10)

##### zero()

```ts
zero(): this;
```

Sets this vector to zero.

###### Returns

`this`

`this` instance for method chaining.

###### Implementation of

[`Vec3Like`](#vec3like).[`zero`](#zero-13)

##### add()

```ts
static add(v, w): Vec3;
```

Adds two vectors.

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `v` | [`Vec3Like`](#vec3like) | The first vector. |
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
| `v` | [`Vec3Like`](#vec3like) | The first vector. |
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
| `v` | [`Vec3Like`](#vec3like) | The first vector. |
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
| `v` | [`Vec3Like`](#vec3like) | The first vector. |
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
| `v` | [`Vec3Like`](#vec3like) | The first vector. |
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
| `v` | [`Vec3Like`](#vec3like) | The first vector. |
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
| `v` | [`Vec3Like`](#vec3like) | The first vector. |
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
| `v` | [`Vec3Like`](#vec3like) | The first vector. |
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
| `v` | [`Vec3Like`](#vec3like) | Divident. |
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
| `v` | [`Vec3Like`](#vec3like) | The first vector. |
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
| `v` | [`Vec3Like`](#vec3like) | `undefined` | The first vector. |
| `w` | [`Vec3`](#vec3) | `undefined` | The second vector. |
| `epsilon?` | `number` | `Number.EPSILON` | The maximum difference between components to consider them equal. |

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
| `arr` | `number`[] \| [`ArrayVector3D`](#arrayvector3d) | An array containing the x, y, and z coordinates. |

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
| `x?` | `number` | `0` | The x-coordinate of the vector. |
| `y?` | `number` | `0` | The y-coordinate of the vector. |
| `z?` | `number` | `0` | The z-coordinate of the vector. |

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
| `v` | [`Vec3Like`](#vec3like) | The vector to check. |

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
| `v` | [`Vec3Like`](#vec3like) | The vector to check. |

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
| `v` | [`Vec3Like`](#vec3like) | The vector to check. |

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
| `v` | [`Vec3Like`](#vec3like) | The first vector. |
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
| `v` | [`Vec3Like`](#vec3like) | The first vector. |
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
| `v` | [`Vec3Like`](#vec3like) | The vector to negate. |

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
| `v` | [`Vec3Like`](#vec3like) | The vector to normalize. |

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
| `v` | [`Vec3Like`](#vec3like) | The vector to project. |
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
| `random?` | () => `number` | `Math.random` | A function that returns a random number between 0 and 1. |

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
| `v` | [`Vec3Like`](#vec3like) | The vector to reflect. |
| `normal` | [`Vec3Like`](#vec3like) | The normal vector to reflect across (must be normalized). |

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
| `v` | [`Vec3Like`](#vec3like) | The first vector. |
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
| `v` | [`Vec3Like`](#vec3like) | The first vector. |
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
| `v` | [`Vec3Like`](#vec3like) | The vector to scale. |
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
| `v` | [`Vec3Like`](#vec3like) | The vector to subtract from. |
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

#### Implements

- [`Vec4Like`](#vec4like)

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
| `x?` | `number` | `0` | The x-coordinate of the vector. |
| `y?` | `number` | `0` | The y-coordinate of the vector. |
| `z?` | `number` | `0` | The z-coordinate of the vector. |
| `w?` | `number` | `0` | The w-coordinate of the vector. |

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

###### Implementation of

[`Vec4Like`](#vec4like).[`a`](#property-a)

##### angleW

###### Get Signature

```ts
get angleW(): number;
```

Gets the angle between the vector and the positive w-axis in radians.

###### Returns

`number`

The angle in radians, always in the range [0, 2π).

###### Implementation of

[`Vec4Like`](#vec4like).[`angleW`](#property-anglew)

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

[`Vec4Like`](#vec4like).[`angleX`](#property-anglex-2)

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

[`Vec4Like`](#vec4like).[`angleY`](#property-angley-2)

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

[`Vec4Like`](#vec4like).[`angleZ`](#property-anglez-1)

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

[`Vec4Like`](#vec4like).[`b`](#property-b-1)

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

[`Vec4Like`](#vec4like).[`g`](#property-g-1)

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

[`Vec4Like`](#vec4like).[`magnitude`](#property-magnitude-2)

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

[`Vec4Like`](#vec4like).[`magnitudeSq`](#property-magnitudesq-2)

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

[`Vec4Like`](#vec4like).[`r`](#property-r-1)

##### rgba

###### Get Signature

```ts
get rgba(): ArrayVector4D;
```

Gets a copy of the vector's components as an array.

###### Returns

[`ArrayVector4D`](#arrayvector4d)

An array containing the Red, Green, Blue and Alpha components of the Color.

###### Set Signature

```ts
set rgba(rgba): void;
```

Sets all components of the Color at once.

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `rgba` | [`ArrayVector4D`](#arrayvector4d) | An array containing the new Red, Green, Blue and Alpha components. |

###### Returns

`void`

###### Implementation of

[`Vec4Like`](#vec4like).[`rgba`](#property-rgba)

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

###### Implementation of

[`Vec4Like`](#vec4like).[`w`](#property-w)

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

[`Vec4Like`](#vec4like).[`x`](#property-x-2)

##### xyzw

###### Get Signature

```ts
get xyzw(): ArrayVector4D;
```

Gets a copy of the vector's components as an array.

###### Returns

[`ArrayVector4D`](#arrayvector4d)

An array containing the x, y, z and w components of the vector.

###### Set Signature

```ts
set xyzw(xyzw): void;
```

Sets both components of the vector at once.

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `xyzw` | [`ArrayVector4D`](#arrayvector4d) | An array containing the new x, y, z and w components. |

###### Returns

`void`

###### Implementation of

[`Vec4Like`](#vec4like).[`xyzw`](#property-xyzw)

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

###### Implementation of

[`Vec4Like`](#vec4like).[`y`](#property-y-2)

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

[`Vec4Like`](#vec4like).[`z`](#property-z-1)

#### Methods

##### \[iterator\]()

```ts
[iterator](): IterableIterator<number>;
```

Makes the Vec4 instance iterable.

###### Returns

`IterableIterator`\<`number`\>

###### Yields

The x, y, z and w components of the vector.

###### Implementation of

[`Vec4Like`](#vec4like).[`[iterator]`](#iterator-11)

##### add()

```ts
add(v): Vec4;
```

Adds another vector to this vector.

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `v` | [`Vec4Like`](#vec4like) | The vector to add. |

###### Returns

[`Vec4`](#vec4)

`this` instance for method chaining.

###### Implementation of

[`Vec4Like`](#vec4like).[`add`](#add-14)

##### angleBetween()

```ts
angleBetween(v): number;
```

Calculates the angle between this vector and another vector.

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `v` | [`Vec4Like`](#vec4like) | The other vector. |

###### Returns

`number`

The angle between the vectors in radians.

###### Implementation of

[`Vec4Like`](#vec4like).[`angleBetween`](#anglebetween-14)

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

`this` instance for method chaining.

###### Implementation of

[`Vec4Like`](#vec4like).[`clamp`](#clamp-11)

##### clone()

```ts
clone(): Vec4;
```

Creates a copy of this vector.

###### Returns

[`Vec4`](#vec4)

A new Vec4 instance with the same components.

###### Implementation of

[`Vec4Like`](#vec4like).[`clone`](#clone-11)

##### copy()

```ts
copy(v): Vec4;
```

Copies the components of another vector to this vector.

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `v` | [`Vec4Like`](#vec4like) | The vector to copy from. |

###### Returns

[`Vec4`](#vec4)

This Vec2 instance for method chaining.

###### Implementation of

[`Vec4Like`](#vec4like).[`copy`](#copy-11)

##### distance()

```ts
distance(v): number;
```

Calculates the distance between this vector and another vector.

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `v` | [`Vec4Like`](#vec4like) | The other vector. |

###### Returns

`number`

The distance between the vectors.

###### Implementation of

[`Vec4Like`](#vec4like).[`distance`](#distance-14)

##### distanceChebyshev()

```ts
distanceChebyshev(v): number;
```

Calculates the Chebyshev distance between this vector and another vector.

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `v` | [`Vec4Like`](#vec4like) | The other vector. |

###### Returns

`number`

The Chebyshev distance between the vectors.

###### Implementation of

[`Vec4Like`](#vec4like).[`distanceChebyshev`](#distancechebyshev-14)

##### distanceManhattan()

```ts
distanceManhattan(v): number;
```

Calculates the Manhattan distance between this vector and another vector.

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `v` | [`Vec4Like`](#vec4like) | The other vector. |

###### Returns

`number`

The Manhattan distance between the vectors.

###### Implementation of

[`Vec4Like`](#vec4like).[`distanceManhattan`](#distancemanhattan-14)

##### distanceMinkowski()

```ts
distanceMinkowski(v, p): number;
```

Calculates the Minkowski distance between this vector and another vector.

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `v` | [`Vec4Like`](#vec4like) | The other vector. |
| `p` | `number` | The order of the Minkowski distance. |

###### Returns

`number`

The Minkowski distance between the vectors.

###### Implementation of

[`Vec4Like`](#vec4like).[`distanceMinkowski`](#distanceminkowski-14)

##### distanceSq()

```ts
distanceSq(v): number;
```

Calculates the squared distance between this vector and another vector.

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `v` | [`Vec4Like`](#vec4like) | The other vector. |

###### Returns

`number`

The squared distance between the vectors.

###### Implementation of

[`Vec4Like`](#vec4like).[`distanceSq`](#distancesq-14)

##### divide()

```ts
divide(v): this;
```

Divides this vector with another vector.

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `v` | [`Vec4Like`](#vec4like) | The vector to divide with. |

###### Returns

`this`

`this` instance for method chaining.

###### Implementation of

[`Vec4Like`](#vec4like).[`divide`](#divide-14)

##### dot()

```ts
dot(v): number;
```

Calculates the dot product of this vector with another vector.

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `v` | [`Vec4Like`](#vec4like) | The other vector. |

###### Returns

`number`

The dot product of the vectors.

###### Implementation of

[`Vec4Like`](#vec4like).[`dot`](#dot-14)

##### equals()

```ts
equals(v, epsilon?): boolean;
```

Compares this vector with another vector using an epsilon value for floating-point comparison.

###### Parameters

| Parameter | Type | Default value | Description |
| ------ | ------ | ------ | ------ |
| `v` | [`Vec4Like`](#vec4like) | `undefined` | The vector to compare with. |
| `epsilon?` | `number` | `Number.EPSILON` | The maximum difference between components to consider them equal. |

###### Returns

`boolean`

`true` if the vectors are equal within epsilon, `false` otherwise.

###### Implementation of

[`Vec4Like`](#vec4like).[`equals`](#equals-14)

##### isInfinite()

```ts
isInfinite(): boolean;
```

Checks if this vector has infinite components.

###### Returns

`boolean`

`true` if the vector has infinite components, `false` otherwise.

###### Implementation of

[`Vec4Like`](#vec4like).[`isInfinite`](#isinfinite-14)

##### isNaN()

```ts
isNaN(): boolean;
```

Checks if this vector has NaN components.

###### Returns

`boolean`

`true` if the vector has NaN components, `false` otherwise.

###### Implementation of

[`Vec4Like`](#vec4like).[`isNaN`](#isnan-14)

##### isZero()

```ts
isZero(): boolean;
```

Checks if this vector is zero.

###### Returns

`boolean`

`true` if the vector is zero, `false` otherwise.

###### Implementation of

[`Vec4Like`](#vec4like).[`isZero`](#iszero-14)

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

###### Implementation of

[`Vec4Like`](#vec4like).[`limitMax`](#limitmax-11)

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

[`Vec4Like`](#vec4like).[`limitMin`](#limitmin-11)

##### lookAt()

```ts
lookAt(v): this;
```

Sets this vector to point towards another vector.

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `v` | [`Vec4Like`](#vec4like) | The vector to look at. |

###### Returns

`this`

`this` instance for method chaining.

###### Implementation of

[`Vec4Like`](#vec4like).[`lookAt`](#lookat-11)

##### multiply()

```ts
multiply(v): this;
```

Multiplies this vector with another vector.

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `v` | [`Vec4Like`](#vec4like) | The vector to multiply with. |

###### Returns

`this`

`this` instance for method chaining.

###### Implementation of

[`Vec4Like`](#vec4like).[`multiply`](#multiply-14)

##### negate()

```ts
negate(): this;
```

Negates this vector.

###### Returns

`this`

`this` instance for method chaining.

###### Implementation of

[`Vec4Like`](#vec4like).[`negate`](#negate-14)

##### normalize()

```ts
normalize(): this;
```

Normalizes this vector.

###### Returns

`this`

This Ve4 instance for method chaining.

###### Implementation of

[`Vec4Like`](#vec4like).[`normalize`](#normalize-14)

##### project()

```ts
project(v): this;
```

Projects this vector onto another vector.

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `v` | [`Vec4Like`](#vec4like) | The vector to project onto. |

###### Returns

`this`

`this` instance for method chaining.

###### Implementation of

[`Vec4Like`](#vec4like).[`project`](#project-14)

##### random()

```ts
random(random?): this;
```

Sets this vector to a random direction with the same magnitude.

###### Parameters

| Parameter | Type | Default value | Description |
| ------ | ------ | ------ | ------ |
| `random?` | () => `number` | `Math.random` | A function that returns a random number between 0 and 1. |

###### Returns

`this`

`this` instance for method chaining.

###### Implementation of

[`Vec4Like`](#vec4like).[`random`](#random-14)

##### reflect()

```ts
reflect(normal): this;
```

Reflects this vector across a normal vector.
The normal vector should be normalized (unit length).

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `normal` | [`Vec4Like`](#vec4like) | The normal vector to reflect across (must be normalized). |

###### Returns

`this`

`this` instance for method chaining.

###### Implementation of

[`Vec4Like`](#vec4like).[`reflect`](#reflect-14)

##### satisfyEquality()

```ts
satisfyEquality(v): boolean;
```

Checks if this vector is equal to another vector.

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `v` | [`Vec4Like`](#vec4like) | The other vector. |

###### Returns

`boolean`

`true` if the vectors are equal, `false` otherwise.

###### Implementation of

[`Vec4Like`](#vec4like).[`satisfyEquality`](#satisfyequality-14)

##### satisfyOpposition()

```ts
satisfyOpposition(v): boolean;
```

Checks if this vector is opposite to another vector.

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `v` | [`Vec4Like`](#vec4like) | The other vector. |

###### Returns

`boolean`

`true` if the vectors are opposite, `false` otherwise.

###### Implementation of

[`Vec4Like`](#vec4like).[`satisfyOpposition`](#satisfyopposition-14)

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

[`Vec4Like`](#vec4like).[`scale`](#scale-14)

##### subtract()

```ts
subtract(v): this;
```

Subtracts another vector from this vector.

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `v` | [`Vec4Like`](#vec4like) | The vector to subtract. |

###### Returns

`this`

`this` instance for method chaining.

###### Implementation of

[`Vec4Like`](#vec4like).[`subtract`](#subtract-14)

##### toJSON()

```ts
toJSON(): XYZWObject;
```

Serializes the vector to a JSON-friendly format.

###### Returns

[`XYZWObject`](#xyzwobject)

A JSON-friendly object representation of the vector.

###### Implementation of

[`Vec4Like`](#vec4like).[`toJSON`](#tojson-11)

##### toObject()

```ts
toObject(): XYZWObject;
```

Converts the vector to a plain object.

###### Returns

[`XYZWObject`](#xyzwobject)

An object with x, y, z and w properties.

###### Implementation of

[`Vec4Like`](#vec4like).[`toObject`](#toobject-11)

##### toString()

```ts
toString(): string;
```

Returns a string representation of the vector.

###### Returns

`string`

A string in the format "Vec4(x, y, z, w)".

###### Implementation of

[`Vec4Like`](#vec4like).[`toString`](#tostring-11)

##### zero()

```ts
zero(): this;
```

Sets this vector to zero.

###### Returns

`this`

`this` instance for method chaining.

###### Implementation of

[`Vec4Like`](#vec4like).[`zero`](#zero-14)

##### add()

```ts
static add(v, w): Vec4;
```

Adds two vectors.

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `v` | [`Vec4Like`](#vec4like) | The first vector. |
| `w` | [`Vec4Like`](#vec4like) | The second vector. |

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
| `v` | [`Vec4Like`](#vec4like) | The first vector. |
| `w` | [`Vec4Like`](#vec4like) | The second vector. |

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
| `v` | [`Vec4Like`](#vec4like) | The first vector. |
| `w` | [`Vec4Like`](#vec4like) | The second vector. |

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
| `v` | [`Vec4Like`](#vec4like) | The first vector. |
| `w` | [`Vec4Like`](#vec4like) | The second vector. |

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
| `v` | [`Vec4Like`](#vec4like) | The first vector. |
| `w` | [`Vec4Like`](#vec4like) | The second vector. |

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
| `v` | [`Vec4Like`](#vec4like) | The first vector. |
| `w` | [`Vec4Like`](#vec4like) | The second vector. |
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
| `v` | [`Vec4Like`](#vec4like) | The first vector. |
| `w` | [`Vec4Like`](#vec4like) | The second vector. |

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
| `v` | [`Vec4Like`](#vec4like) | Divident. |
| `w` | [`Vec4Like`](#vec4like) | Divisor. |

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
| `v` | [`Vec4Like`](#vec4like) | The first vector. |
| `w` | [`Vec4Like`](#vec4like) | The second vector. |

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
| `v` | [`Vec4Like`](#vec4like) | `undefined` | The first vector. |
| `w` | [`Vec4Like`](#vec4like) | `undefined` | The second vector. |
| `epsilon?` | `number` | `Number.EPSILON` | The maximum difference between components to consider them equal. |

###### Returns

`boolean`

`true` if the vectors are equal within epsilon, `false` otherwise.

##### fromArray()

```ts
static fromArray(arr): Vec4;
```

Creates a Vec4 from an array.

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `arr` | `number`[] \| [`ArrayVector4D`](#arrayvector4d) | An array containing the x, y, z, and w coordinates. |

###### Returns

[`Vec4`](#vec4)

A new Vec4 instance.

##### fromJSON()

```ts
static fromJSON(json): Vec4;
```

Creates a Vec4 instance from a JSON-parsed object.

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `json` | [`XYZWObject`](#xyzwobject) | The JSON-parsed object containing x and y properties. |

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
| `obj` | [`XYZWObject`](#xyzwobject) | An object with x, y, z, and w properties. |

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
): Readonly<Vec4>;
```

Creates an immutable Vec4 instance.

###### Parameters

| Parameter | Type | Default value | Description |
| ------ | ------ | ------ | ------ |
| `x?` | `number` | `0` | The x-coordinate of the vector. |
| `y?` | `number` | `0` | The y-coordinate of the vector. |
| `z?` | `number` | `0` | The z-coordinate of the vector. |
| `w?` | `number` | `0` | The w-coordinate of the vector. |

###### Returns

`Readonly`\<[`Vec4`](#vec4)\>

A read-only Vec4 instance.

##### isInfinite()

```ts
static isInfinite(v): boolean;
```

Checks if a vector has infinite components.

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `v` | [`Vec4Like`](#vec4like) | The vector to check. |

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
| `v` | [`Vec4Like`](#vec4like) | The vector to check. |

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
| `v` | [`Vec4Like`](#vec4like) | The vector to check. |

###### Returns

`boolean`

`true` if the vector is zero, `false` otherwise.

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
| `v` | [`Vec4Like`](#vec4like) | The first vector. |
| `w` | [`Vec4Like`](#vec4like) | The second vector. |
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
| `v` | [`Vec4Like`](#vec4like) | The first vector. |
| `w` | [`Vec4Like`](#vec4like) | The second vector. |

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
| `v` | [`Vec4Like`](#vec4like) | The vector to negate. |

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
| `v` | [`Vec4Like`](#vec4like) | The vector to normalize. |

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
| `v` | [`Vec4Like`](#vec4like) | The vector to project. |
| `w` | [`Vec4Like`](#vec4like) | The vector to project onto. |

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
| `random?` | () => `number` | `Math.random` | A function that returns a random number between 0 and 1. |

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
| `v` | [`Vec4Like`](#vec4like) | The vector to reflect. |
| `normal` | [`Vec4Like`](#vec4like) | The normal vector to reflect across (must be normalized). |

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
| `v` | [`Vec4Like`](#vec4like) | The first vector. |
| `w` | [`Vec4Like`](#vec4like) | The second vector. |

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
| `v` | [`Vec4Like`](#vec4like) | The first vector. |
| `w` | [`Vec4Like`](#vec4like) | The second vector. |

###### Returns

`boolean`

`true` if the vectors are opposite, `false` otherwise.

##### scale()

```ts
static scale(v, c): Vec4;
```

Scales a vector by a scalar value.

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `v` | [`Vec4Like`](#vec4like) | The vector to scale. |
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
| `v` | [`Vec4Like`](#vec4like) | The vector to subtract from. |
| `w` | [`Vec4Like`](#vec4like) | The vector to subtract. |

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

### Vec2Like

#### Properties

| Property | Modifier | Type |
| ------ | ------ | ------ |
| <a id="property-anglex"></a> `angleX` | `public` | `number` |
| <a id="property-angley"></a> `angleY` | `public` | `number` |
| <a id="property-magnitude"></a> `magnitude` | `public` | `number` |
| <a id="property-magnitudesq"></a> `magnitudeSq` | `readonly` | `number` |
| <a id="property-x"></a> `x` | `public` | `number` |
| <a id="property-xy"></a> `xy` | `public` | [`ArrayVector2D`](#arrayvector2d) |
| <a id="property-y"></a> `y` | `public` | `number` |

#### Methods

##### \[iterator\]()

```ts
[iterator](): Iterable<number>;
```

###### Returns

`Iterable`\<`number`\>

##### add()

```ts
add(v): this;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `v` | [`Vec2Like`](#vec2like) |

###### Returns

`this`

##### angleBetween()

```ts
angleBetween(v): number;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `v` | [`Vec2Like`](#vec2like) |

###### Returns

`number`

##### clamp()

```ts
clamp(min, max): this;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `min` | `number` |
| `max` | `number` |

###### Returns

`this`

##### clone()

```ts
clone(): Vec2;
```

###### Returns

[`Vec2`](#vec2)

##### copy()

```ts
copy(v): this;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `v` | [`Vec2Like`](#vec2like) |

###### Returns

`this`

##### cross()

```ts
cross(v): number;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `v` | [`Vec2Like`](#vec2like) |

###### Returns

`number`

##### distance()

```ts
distance(v): number;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `v` | [`Vec2Like`](#vec2like) |

###### Returns

`number`

##### distanceChebyshev()

```ts
distanceChebyshev(v): number;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `v` | [`Vec2Like`](#vec2like) |

###### Returns

`number`

##### distanceManhattan()

```ts
distanceManhattan(v): number;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `v` | [`Vec2Like`](#vec2like) |

###### Returns

`number`

##### distanceMinkowski()

```ts
distanceMinkowski(v, p): number;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `v` | [`Vec2Like`](#vec2like) |
| `p` | `number` |

###### Returns

`number`

##### distanceSq()

```ts
distanceSq(v): number;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `v` | [`Vec2Like`](#vec2like) |

###### Returns

`number`

##### divide()

```ts
divide(v): this;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `v` | [`Vec2Like`](#vec2like) |

###### Returns

`this`

##### dot()

```ts
dot(v): number;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `v` | [`Vec2Like`](#vec2like) |

###### Returns

`number`

##### equals()

```ts
equals(v, epsilon?): boolean;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `v` | [`Vec2Like`](#vec2like) |
| `epsilon?` | `number` |

###### Returns

`boolean`

##### isInfinite()

```ts
isInfinite(): boolean;
```

###### Returns

`boolean`

##### isNaN()

```ts
isNaN(): boolean;
```

###### Returns

`boolean`

##### isZero()

```ts
isZero(): boolean;
```

###### Returns

`boolean`

##### limitMax()

```ts
limitMax(max): this;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `max` | `number` |

###### Returns

`this`

##### limitMin()

```ts
limitMin(min): this;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `min` | `number` |

###### Returns

`this`

##### lookAt()

```ts
lookAt(v): this;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `v` | [`Vec2Like`](#vec2like) |

###### Returns

`this`

##### multiply()

```ts
multiply(v): this;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `v` | [`Vec2Like`](#vec2like) |

###### Returns

`this`

##### negate()

```ts
negate(): this;
```

###### Returns

`this`

##### normalize()

```ts
normalize(): this;
```

###### Returns

`this`

##### project()

```ts
project(v): this;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `v` | [`Vec2Like`](#vec2like) |

###### Returns

`this`

##### random()

```ts
random(random?): this;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `random?` | () => `number` |

###### Returns

`this`

##### reflect()

```ts
reflect(normal): Vec2;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `normal` | [`Vec2Like`](#vec2like) |

###### Returns

[`Vec2`](#vec2)

##### rotateZ()

```ts
rotateZ(phi): this;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `phi` | `number` |

###### Returns

`this`

##### satisfyEquality()

```ts
satisfyEquality(v): boolean;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `v` | [`Vec2Like`](#vec2like) |

###### Returns

`boolean`

##### satisfyOpposition()

```ts
satisfyOpposition(v): boolean;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `v` | [`Vec2Like`](#vec2like) |

###### Returns

`boolean`

##### scale()

```ts
scale(c): this;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `c` | `number` |

###### Returns

`this`

##### subtract()

```ts
subtract(v): this;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `v` | [`Vec2Like`](#vec2like) |

###### Returns

`this`

##### toJSON()

```ts
toJSON(): XYObject;
```

###### Returns

[`XYObject`](#xyobject)

##### toObject()

```ts
toObject(): XYObject;
```

###### Returns

[`XYObject`](#xyobject)

##### toString()

```ts
toString(): string;
```

###### Returns

`string`

##### turnLeft()

```ts
turnLeft(): this;
```

###### Returns

`this`

##### turnRight()

```ts
turnRight(): this;
```

###### Returns

`this`

##### zero()

```ts
zero(): this;
```

###### Returns

`this`

***

### Vec3Like

#### Properties

| Property | Modifier | Type |
| ------ | ------ | ------ |
| <a id="property-anglex-1"></a> `angleX` | `readonly` | `number` |
| <a id="property-angley-1"></a> `angleY` | `readonly` | `number` |
| <a id="property-anglez"></a> `angleZ` | `readonly` | `number` |
| <a id="property-b"></a> `b` | `public` | `number` |
| <a id="property-g"></a> `g` | `public` | `number` |
| <a id="property-magnitude-1"></a> `magnitude` | `public` | `number` |
| <a id="property-magnitudesq-1"></a> `magnitudeSq` | `readonly` | `number` |
| <a id="property-r"></a> `r` | `public` | `number` |
| <a id="property-rgb"></a> `rgb` | `public` | [`ArrayVector3D`](#arrayvector3d) |
| <a id="property-x-1"></a> `x` | `public` | `number` |
| <a id="property-xyz"></a> `xyz` | `public` | [`ArrayVector3D`](#arrayvector3d) |
| <a id="property-y-1"></a> `y` | `public` | `number` |
| <a id="property-z"></a> `z` | `public` | `number` |

#### Methods

##### \[iterator\]()

```ts
[iterator](): IterableIterator<number>;
```

###### Returns

`IterableIterator`\<`number`\>

##### add()

```ts
add(v): this;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `v` | [`Vec3Like`](#vec3like) |

###### Returns

`this`

##### angleBetween()

```ts
angleBetween(v): number;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `v` | [`Vec3Like`](#vec3like) |

###### Returns

`number`

##### clamp()

```ts
clamp(min, max): this;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `min` | `number` |
| `max` | `number` |

###### Returns

`this`

##### clone()

```ts
clone(): Vec3;
```

###### Returns

[`Vec3`](#vec3)

##### copy()

```ts
copy(v): this;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `v` | [`Vec3Like`](#vec3like) |

###### Returns

`this`

##### cross()

```ts
cross(v): this;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `v` | [`Vec3Like`](#vec3like) |

###### Returns

`this`

##### distance()

```ts
distance(v): number;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `v` | [`Vec3Like`](#vec3like) |

###### Returns

`number`

##### distanceChebyshev()

```ts
distanceChebyshev(v): number;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `v` | [`Vec3Like`](#vec3like) |

###### Returns

`number`

##### distanceManhattan()

```ts
distanceManhattan(v): number;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `v` | [`Vec3Like`](#vec3like) |

###### Returns

`number`

##### distanceMinkowski()

```ts
distanceMinkowski(v, p): number;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `v` | [`Vec3Like`](#vec3like) |
| `p` | `number` |

###### Returns

`number`

##### distanceSq()

```ts
distanceSq(v): number;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `v` | [`Vec3Like`](#vec3like) |

###### Returns

`number`

##### divide()

```ts
divide(v): this;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `v` | [`Vec3Like`](#vec3like) |

###### Returns

`this`

##### dot()

```ts
dot(v): number;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `v` | [`Vec3Like`](#vec3like) |

###### Returns

`number`

##### equals()

```ts
equals(v, epsilon?): boolean;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `v` | [`Vec3Like`](#vec3like) |
| `epsilon?` | `number` |

###### Returns

`boolean`

##### isInfinite()

```ts
isInfinite(): boolean;
```

###### Returns

`boolean`

##### isNaN()

```ts
isNaN(): boolean;
```

###### Returns

`boolean`

##### isZero()

```ts
isZero(): boolean;
```

###### Returns

`boolean`

##### limitMax()

```ts
limitMax(max): this;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `max` | `number` |

###### Returns

`this`

##### limitMin()

```ts
limitMin(min): this;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `min` | `number` |

###### Returns

`this`

##### lookAt()

```ts
lookAt(v): this;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `v` | [`Vec3Like`](#vec3like) |

###### Returns

`this`

##### multiply()

```ts
multiply(v): this;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `v` | [`Vec3Like`](#vec3like) |

###### Returns

`this`

##### negate()

```ts
negate(): this;
```

###### Returns

`this`

##### normalize()

```ts
normalize(): this;
```

###### Returns

`this`

##### project()

```ts
project(v): this;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `v` | [`Vec3Like`](#vec3like) |

###### Returns

`this`

##### random()

```ts
random(random?): this;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `random?` | () => `number` |

###### Returns

`this`

##### reflect()

```ts
reflect(normal): this;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `normal` | [`Vec3Like`](#vec3like) |

###### Returns

`this`

##### rotateX()

```ts
rotateX(phi): this;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `phi` | `number` |

###### Returns

`this`

##### rotateY()

```ts
rotateY(phi): this;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `phi` | `number` |

###### Returns

`this`

##### rotateZ()

```ts
rotateZ(phi): this;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `phi` | `number` |

###### Returns

`this`

##### satisfyEquality()

```ts
satisfyEquality(v): boolean;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `v` | [`Vec3Like`](#vec3like) |

###### Returns

`boolean`

##### satisfyOpposition()

```ts
satisfyOpposition(v): boolean;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `v` | [`Vec3Like`](#vec3like) |

###### Returns

`boolean`

##### scale()

```ts
scale(c): this;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `c` | `number` |

###### Returns

`this`

##### subtract()

```ts
subtract(v): this;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `v` | [`Vec3Like`](#vec3like) |

###### Returns

`this`

##### toJSON()

```ts
toJSON(): XYZObject;
```

###### Returns

[`XYZObject`](#xyzobject)

##### toObject()

```ts
toObject(): XYZObject;
```

###### Returns

[`XYZObject`](#xyzobject)

##### toString()

```ts
toString(): string;
```

###### Returns

`string`

##### zero()

```ts
zero(): this;
```

###### Returns

`this`

***

### Vec4Like

#### Properties

| Property | Modifier | Type |
| ------ | ------ | ------ |
| <a id="property-a"></a> `a` | `public` | `number` |
| <a id="property-anglew"></a> `angleW` | `readonly` | `number` |
| <a id="property-anglex-2"></a> `angleX` | `readonly` | `number` |
| <a id="property-angley-2"></a> `angleY` | `readonly` | `number` |
| <a id="property-anglez-1"></a> `angleZ` | `readonly` | `number` |
| <a id="property-b-1"></a> `b` | `public` | `number` |
| <a id="property-g-1"></a> `g` | `public` | `number` |
| <a id="property-magnitude-2"></a> `magnitude` | `public` | `number` |
| <a id="property-magnitudesq-2"></a> `magnitudeSq` | `readonly` | `number` |
| <a id="property-r-1"></a> `r` | `public` | `number` |
| <a id="property-rgba"></a> `rgba` | `public` | [`ArrayVector4D`](#arrayvector4d) |
| <a id="property-w"></a> `w` | `public` | `number` |
| <a id="property-x-2"></a> `x` | `public` | `number` |
| <a id="property-xyzw"></a> `xyzw` | `public` | [`ArrayVector4D`](#arrayvector4d) |
| <a id="property-y-2"></a> `y` | `public` | `number` |
| <a id="property-z-1"></a> `z` | `public` | `number` |

#### Methods

##### \[iterator\]()

```ts
[iterator](): IterableIterator<number>;
```

###### Returns

`IterableIterator`\<`number`\>

##### add()

```ts
add(v): this;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `v` | [`Vec4Like`](#vec4like) |

###### Returns

`this`

##### angleBetween()

```ts
angleBetween(v): number;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `v` | [`Vec4Like`](#vec4like) |

###### Returns

`number`

##### clamp()

```ts
clamp(min, max): this;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `min` | `number` |
| `max` | `number` |

###### Returns

`this`

##### clone()

```ts
clone(): Vec4;
```

###### Returns

[`Vec4`](#vec4)

##### copy()

```ts
copy(v): this;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `v` | [`Vec4Like`](#vec4like) |

###### Returns

`this`

##### distance()

```ts
distance(v): number;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `v` | [`Vec4Like`](#vec4like) |

###### Returns

`number`

##### distanceChebyshev()

```ts
distanceChebyshev(v): number;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `v` | [`Vec4Like`](#vec4like) |

###### Returns

`number`

##### distanceManhattan()

```ts
distanceManhattan(v): number;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `v` | [`Vec4Like`](#vec4like) |

###### Returns

`number`

##### distanceMinkowski()

```ts
distanceMinkowski(v, p): number;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `v` | [`Vec4Like`](#vec4like) |
| `p` | `number` |

###### Returns

`number`

##### distanceSq()

```ts
distanceSq(v): number;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `v` | [`Vec4Like`](#vec4like) |

###### Returns

`number`

##### divide()

```ts
divide(v): this;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `v` | [`Vec4Like`](#vec4like) |

###### Returns

`this`

##### dot()

```ts
dot(v): number;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `v` | [`Vec4Like`](#vec4like) |

###### Returns

`number`

##### equals()

```ts
equals(v, epsilon?): boolean;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `v` | [`Vec4Like`](#vec4like) |
| `epsilon?` | `number` |

###### Returns

`boolean`

##### isInfinite()

```ts
isInfinite(): boolean;
```

###### Returns

`boolean`

##### isNaN()

```ts
isNaN(): boolean;
```

###### Returns

`boolean`

##### isZero()

```ts
isZero(): boolean;
```

###### Returns

`boolean`

##### limitMax()

```ts
limitMax(max): this;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `max` | `number` |

###### Returns

`this`

##### limitMin()

```ts
limitMin(min): this;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `min` | `number` |

###### Returns

`this`

##### lookAt()

```ts
lookAt(v): this;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `v` | [`Vec4Like`](#vec4like) |

###### Returns

`this`

##### multiply()

```ts
multiply(v): this;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `v` | [`Vec4Like`](#vec4like) |

###### Returns

`this`

##### negate()

```ts
negate(): this;
```

###### Returns

`this`

##### normalize()

```ts
normalize(): this;
```

###### Returns

`this`

##### project()

```ts
project(v): this;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `v` | [`Vec4Like`](#vec4like) |

###### Returns

`this`

##### random()

```ts
random(random?): this;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `random?` | () => `number` |

###### Returns

`this`

##### reflect()

```ts
reflect(normal): this;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `normal` | [`Vec4Like`](#vec4like) |

###### Returns

`this`

##### satisfyEquality()

```ts
satisfyEquality(v): boolean;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `v` | [`Vec4Like`](#vec4like) |

###### Returns

`boolean`

##### satisfyOpposition()

```ts
satisfyOpposition(v): boolean;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `v` | [`Vec4Like`](#vec4like) |

###### Returns

`boolean`

##### scale()

```ts
scale(c): this;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `c` | `number` |

###### Returns

`this`

##### subtract()

```ts
subtract(v): this;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `v` | [`Vec4Like`](#vec4like) |

###### Returns

`this`

##### toJSON()

```ts
toJSON(): XYZWObject;
```

###### Returns

[`XYZWObject`](#xyzwobject)

##### toObject()

```ts
toObject(): XYZWObject;
```

###### Returns

[`XYZWObject`](#xyzwobject)

##### toString()

```ts
toString(): string;
```

###### Returns

`string`

##### zero()

```ts
zero(): this;
```

###### Returns

`this`

***

### XYObject

#### Properties

| Property | Type |
| ------ | ------ |
| <a id="property-x-3"></a> `x` | `number` |
| <a id="property-y-3"></a> `y` | `number` |

***

### XYZObject

#### Properties

| Property | Type |
| ------ | ------ |
| <a id="property-x-4"></a> `x` | `number` |
| <a id="property-y-4"></a> `y` | `number` |
| <a id="property-z-2"></a> `z` | `number` |

***

### XYZWObject

#### Properties

| Property | Type |
| ------ | ------ |
| <a id="property-w-1"></a> `w` | `number` |
| <a id="property-x-5"></a> `x` | `number` |
| <a id="property-y-5"></a> `y` | `number` |
| <a id="property-z-3"></a> `z` | `number` |

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
| `m1?` | `number` | Optional first vector magnitude (default: `magnitude3D(xyz1)`) |
| `m2?` | `number` | Optional second vector magnitude (default: `magnitude3D(xyz2)`) |

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
| `m1?` | `number` | Optional magnitude of the first vector (default: `magnitude4D(xyzw1)`) |
| `m2?` | `number` | Optional magnitude of the second vector (default: `magnitude4D(xyzw2)`) |

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
| `m?` | `number` | Optional current magnitude (default: `magnitude2D(xy)`) |

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
| `m?` | `number` | Optional current magnitude (default: `magnitude3D(xyz)`) |

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
| `m?` | `number` | Optional current magnitude (default: `magnitude4D(xyzw)`) |

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
| `magnitude?` | `number` | `1` | Optional magnitude of the vector (default: `1`) |

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
| `magnitude?` | `number` | `1` | Optional magnitude of the vector (default: `1`) |

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
| `m?` | `number` | `1` | Optional magnitude (default: `1`) |

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
| `m?` | `number` | `1` | Optional magnitude (default: `1`) |

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
| `epsilon?` | `number` | `Number.EPSILON` | Maximum difference between components to consider them equal (default: `Number.EPSILON`) |

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
| `epsilon?` | `number` | `Number.EPSILON` | Tolerance for comparison (default: `Number.EPSILON`) |

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
| `epsilon?` | `number` | `Number.EPSILON` | Maximum difference (default: `Number.EPSILON`) |

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
| `m?` | `number` | Optional current magnitude (default: `magnitude2D(xy)`) |

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
| `m?` | `number` | Optional current magnitude (default: `magnitude3D(xyz)`) |

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
| `m?` | `number` | Optional current magnitude (default: `magnitude4D(xyzw)`) |

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
| `m?` | `number` | Optional current magnitude (default: `magnitude2D(xy)`) |

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
| `m?` | `number` | Optional current magnitude (default: `magnitude3D(xyz)`) |

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
| `m?` | `number` | Optional current magnitude (default: `magnitude4D(xyzw)`) |

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
| `m1?` | `number` | Optional current magnitude of the first vector (default: magnitude2D(xy1)) |
| `m2?` | `number` | Optional current magnitude of the second vector (default: magnitude2D(xy2)) |

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
| `m1?` | `number` | Optional current magnitude of the first vector (default: `magnitude3D(xyz1)`) |
| `m2?` | `number` | Optional current magnitude of the second vector (default: `magnitude3D(xyz2)`) |

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
| `m1?` | `number` | Optional current magnitude of the first vector (default: `magnitude4D(xyzw1)`) |
| `m2?` | `number` | Optional current magnitude of the second vector (default: `magnitude4D(xyzw2)`) |

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
| `m?` | `number` | Optional current magnitude (default: `magnitude2D(xy)`) |

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
| `m?` | `number` | Optional current magnitude (default: `magnitude3D(xyz)`) |

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
| `m?` | `number` | Optional current magnitude (default: `magnitude4D(xyzw)`) |

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
| `m1?` | `number` | Optional magnitude of the first vector (default: `magnitude2D(xy1)`) |
| `m2?` | `number` | Optional magnitude of the second vector (default: `magnitude2D(xy2)`) |

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
| `m1?` | `number` | Optional magnitude of the vector to project (default: `magnitude3D(xyz1)`) |
| `m2?` | `number` | Optional magnitude of the vector to project onto (default: `magnitude3D(xyz2)`) |

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
| `m1?` | `number` | Optional current magnitude (default: `magnitude4D(xyzw1)`) |
| `m2?` | `number` | Optional current magnitude (default: `magnitude4D(xyzw2)`) |

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
| `random?` | () => `number` | `Math.random` | A function that returns a random number between 0 and 1 (default: `Math.random`) |

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
| `random?` | () => `number` | `Math.random` | A function that returns a random number between 0 and 1 (default: `Math.random`) |

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
| `random?` | () => `number` | `Math.random` | A function that returns a random number between 0 and 1 (default: `Math.random`) |

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
| `axis?` | [`ArrayVector2D`](#arrayvector2d) | Rotation axis point (default: `[0, 0]`) |

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
| `axis?` | [`ArrayVector3D`](#arrayvector3d) | Rotation axis point (default: `[0, 0, 0]`) |

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
| `axis?` | [`ArrayVector3D`](#arrayvector3d) | Rotation axis point (default: `[0, 0, 0]`) |

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
| `axis?` | [`ArrayVector3D`](#arrayvector3d) | Rotation axis point (default: `[0, 0, 0]`) |

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
| `m?` | `number` | Optional current magnitude (default: `magnitude2D(xy)`) |

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
| `m?` | `number` | Optional current magnitude (default: `magnitude3D(xyz)`) |

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
| `m?` | `number` | Optional current magnitude (default: `magnitude4D(xyzw)`) |

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
