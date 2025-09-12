# Vec4

A 4D vector implementation with comprehensive mathematical operations and utility methods.

## Constructor

### Vec4

- `constructor(x: number = 0, y: number = 0, z: number = 0, w: number = 0)`: Creates a new vector with the given x, y, z, and w coordinates

## Static Methods

### Creation and Conversion

- `fromArray(arr: [number, number, number, number] | number[])`: Creates a Vec4 from an array
- `fromObject(obj: { x: number; y: number; z: number; w: number })`: Creates a Vec4 from an object with x, y, z, and w properties
- `fromJSON(json: { x: number; y: number; z: number; w: number })`: Creates a Vec4 from a JSON object
- `immutable(x: number = 0, y: number = 0, z: number = 0, w: number = 0)`: Creates an immutable Vec4-like object
- `one()`: Creates a vector with all components set to 1.0
- `random(random: () => number = Math.random)`: Creates a random unit vector
- `zero()`: Creates a zero vector

### Vector Operations

- `add(v: Vec4, w: Vec4)`: Adds two vectors
- `subtract(v: Vec4, w: Vec4)`: Subtracts one vector from another
- `multiply(v: Vec4, w: Vec4)`: Multiplies two vectors component-wise
- `divide(v: Vec4, w: Vec4)`: Divides two vectors component-wise
- `dot(v: Vec4, w: Vec4)`: Calculates the dot product
- `scale(v: Vec4, c: number)`: Scales a vector by a scalar value
- `negate(v: Vec4)`: Negates a vector
- `normalize(v: Vec4)`: Normalizes a vector
- `project(v: Vec4, w: Vec4)`: Projects one vector onto another
- `reflect(v: Vec4, normal: Vec4)`: Reflects a vector across a normal vector
- `lerp(v: Vec4, w: Vec4, t: number)`: Performs linear interpolation between vectors

### Distance Calculations

- `distance(v: Vec4, w: Vec4)`: Calculates Euclidean distance between vectors
- `distanceSq(v: Vec4, w: Vec4)`: Calculates squared Euclidean distance
- `distanceChebyshev(v: Vec4, w: Vec4)`: Calculates Chebyshev distance
- `distanceManhattan(v: Vec4, w: Vec4)`: Calculates Manhattan distance
- `distanceMinkowski(v: Vec4, w: Vec4, p: number)`: Calculates Minkowski distance

### Comparison and State

- `angleBetween(v: Vec4, w: Vec4)`: Calculates angle between vectors
- `equals(v: Vec4, w: Vec4, epsilon?: number)`: Compares vectors with optional epsilon
- `isInfinite(v: Vec4)`: Checks if vector has infinite components
- `isNaN(v: Vec4)`: Checks if vector has NaN components
- `isZero(v: Vec4)`: Checks if vector is zero
- `satisfyEquality(v: Vec4, w: Vec4)`: Checks if vectors are equal
- `satisfyOpposition(v: Vec4, w: Vec4)`: Checks if vectors are opposite

## Instance Properties

### Getters and Setters

- `x`: Gets or sets the x-component
- `y`: Gets or sets the y-component
- `z`: Gets or sets the z-component
- `w`: Gets or sets the w-component
- `xyzw`: Gets or sets all components as an array
- `r`: Gets or sets the red component (alias for x)
- `g`: Gets or sets the green component (alias for y)
- `b`: Gets or sets the blue component (alias for z)
- `a`: Gets or sets the alpha component (alias for w)
- `rgba`: Gets or sets all color components as an array (alias for xyzw)
- `magnitude`: Gets or sets the vector's magnitude
- `magnitudeSq`: Gets the squared magnitude (read-only)
- `angleX`: Gets the angle with positive x-axis
- `angleY`: Gets the angle with positive y-axis
- `angleZ`: Gets the angle with positive z-axis
- `angleW`: Gets the angle with positive w-axis

## Instance Methods

### Vector Operations

- `add(v: Vec4)`: Adds another vector
- `subtract(v: Vec4)`: Subtracts another vector
- `multiply(v: Vec4)`: Multiplies with another vector
- `divide(v: Vec4)`: Divides by another vector
- `scale(c: number)`: Scales by a scalar value
- `normalize()`: Normalizes the vector
- `negate()`: Negates the vector
- `project(v: Vec4)`: Projects onto another vector
- `reflect(normal: Vec4)`: Reflects across a normal vector
- `zero()`: Sets to zero vector
- `random(random?: () => number)`: Sets to random direction

### Distance Calculations

- `distance(v: Vec4)`: Calculates Euclidean distance to another vector
- `distanceSq(v: Vec4)`: Calculates squared Euclidean distance
- `distanceChebyshev(v: Vec4)`: Calculates Chebyshev distance
- `distanceManhattan(v: Vec4)`: Calculates Manhattan distance
- `distanceMinkowski(v: Vec4, p: number)`: Calculates Minkowski distance

### Comparison and State

- `angleBetween(v: Vec4)`: Calculates angle to another vector
- `equals(v: Vec4, epsilon?: number)`: Compares with another vector
- `isInfinite()`: Checks for infinite components
- `isNaN()`: Checks for NaN components
- `isZero()`: Checks if zero vector
- `satisfyEquality(v: Vec4)`: Checks equality with another vector
- `satisfyOpposition(v: Vec4)`: Checks opposition with another vector

### Magnitude Operations

- `clamp(min: number, max: number)`: Clamps magnitude between values
- `limitMax(max: number)`: Limits maximum magnitude
- `limitMin(min: number)`: Limits minimum magnitude

### Utility Methods

- `clone()`: Creates a copy of the vector
- `copy(v: Vec4)`: Copies components from another vector
- `lookAt(v: Vec4)`: Points towards another vector
- `toString()`: Returns string representation
- `toObject()`: Converts to plain object
- `toJSON()`: Converts to JSON format

## Iteration

Vec4 implements the iterator protocol, allowing it to be used with for...of loops and spread operators. The iterator yields the x, y, z, and w components in order.

## Example Usage

```typescript
// Create vectors
const v1 = new Vec4(1, 2, 3, 1);  // Homogeneous coordinates
const v2 = new Vec4(0, 1, 0, 0);  // Direction vector

// Basic operations
const sum = Vec4.add(v1, v2);
const dot = Vec4.dot(v1, v2);

// Method chaining
v1.normalize()
  .scale(2)
  .limitMax(5);

// Get properties
console.log(v1.magnitude);
console.log(v1.angleX);

// Convert to array
const [x, y, z, w] = v1;

// RGBA color with transparency
const color = new Vec4(1.0, 0.5, 0.2, 0.8); // RGBA color
color.r = 0.8; // Modify red channel
color.g *= 0.9; // Darken green channel
color.a = 1.0; // Make fully opaque

// Access as RGBA array
const [red, green, blue, alpha] = color.rgba;
color.rgba = [0.2, 0.7, 0.9, 0.6]; // Set new RGBA values
```
