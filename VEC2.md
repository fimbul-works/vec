# Vec2

A 2D vector implementation with comprehensive mathematical operations and utility methods.

## Constructor

### Vec2

- `constructor(x: number = 0, y: number = x)`: Creates a new vector with the given x and y coordinates

## Static Methods

### Creation and Conversion

- `fromArray(arr: [number, number] | number[])`: Creates a Vec2 from an array
- `fromObject(obj: { x: number; y: number })`: Creates a Vec2 from an object with x and y properties
- `fromJSON(json: { x: number; y: number })`: Creates a Vec2 from a JSON object
- `fromPolarCoords(r: number, theta: number)`: Creates a Vec2 from polar coordinates
- `immutable(x: number = 0, y: number = 0)`: Creates an immutable Vec2-like object
- `one()`: Creates a vector with all components set to 1.0
- `random(random: () => number = Math.random)`: Creates a random unit vector
- `zero()`: Creates a zero vector

### Vector Operations

- `add(v: Vec2, w: Vec2)`: Adds two vectors
- `subtract(v: Vec2, w: Vec2)`: Subtracts one vector from another
- `multiply(v: Vec2, w: Vec2)`: Multiplies two vectors component-wise
- `divide(v: Vec2, w: Vec2)`: Divides two vectors component-wise
- `dot(v: Vec2, w: Vec2)`: Calculates the dot product
- `cross(v: Vec2, w: Vec2)`: Calculates the cross product
- `scale(v: Vec2, c: number)`: Scales a vector by a scalar value
- `negate(v: Vec2)`: Negates a vector
- `normalize(v: Vec2)`: Normalizes a vector
- `project(v: Vec2, w: Vec2)`: Projects one vector onto another
- `reflect(v: Vec2, normal: Vec2)`: Reflects a vector across a normal vector
- `lerp(v: Vec2, w: Vec2, t: number)`: Performs linear interpolation between vectors

### Distance Calculations

- `distance(v: Vec2, w: Vec2)`: Calculates Euclidean distance between vectors
- `distanceSq(v: Vec2, w: Vec2)`: Calculates squared Euclidean distance
- `distanceChebyshev(v: Vec2, w: Vec2)`: Calculates Chebyshev distance
- `distanceManhattan(v: Vec2, w: Vec2)`: Calculates Manhattan distance
- `distanceMinkowski(v: Vec2, w: Vec2, p: number)`: Calculates Minkowski distance

### Comparison and State

- `angleBetween(v: Vec2, w: Vec2)`: Calculates angle between vectors
- `equals(v: Vec2, w: Vec2, epsilon?: number)`: Compares vectors with optional epsilon
- `isInfinite(v: Vec2)`: Checks if vector has infinite components
- `isNaN(v: Vec2)`: Checks if vector has NaN components
- `isZero(v: Vec2)`: Checks if vector is zero
- `satisfyEquality(v: Vec2, w: Vec2)`: Checks if vectors are equal
- `satisfyOpposition(v: Vec2, w: Vec2)`: Checks if vectors are opposite

## Instance Properties

### Getters and Setters

- `x`: Gets or sets the x-component
- `y`: Gets or sets the y-component
- `xy`: Gets or sets both components as an array
- `magnitude`: Gets or sets the vector's magnitude
- `magnitudeSq`: Gets the squared magnitude (read-only)
- `angleX`: Gets or sets the angle with positive x-axis
- `angleY`: Gets or sets the angle with positive y-axis

## Instance Methods

### Vector Operations

- `add(v: Vec2)`: Adds another vector
- `subtract(v: Vec2)`: Subtracts another vector
- `multiply(v: Vec2)`: Multiplies with another vector
- `divide(v: Vec2)`: Divides by another vector
- `scale(c: number)`: Scales by a scalar value
- `normalize()`: Normalizes the vector
- `negate()`: Negates the vector
- `project(v: Vec2)`: Projects onto another vector
- `reflect(normal: Vec2)`: Reflects across a normal vector
- `rotateZ(phi: number)`: Rotates around Z-axis
- `turnLeft()`: Rotates 90 degrees left
- `turnRight()`: Rotates 90 degrees right
- `zero()`: Sets to zero vector
- `random(random?: () => number)`: Sets to random direction

### Distance Calculations

- `distance(v: Vec2)`: Calculates Euclidean distance to another vector
- `distanceSq(v: Vec2)`: Calculates squared Euclidean distance
- `distanceChebyshev(v: Vec2)`: Calculates Chebyshev distance
- `distanceManhattan(v: Vec2)`: Calculates Manhattan distance
- `distanceMinkowski(v: Vec2, p: number)`: Calculates Minkowski distance

### Comparison and State

- `angleBetween(v: Vec2)`: Calculates angle to another vector
- `equals(v: Vec2, epsilon?: number)`: Compares with another vector
- `isInfinite()`: Checks for infinite components
- `isNaN()`: Checks for NaN components
- `isZero()`: Checks if zero vector
- `satisfyEquality(v: Vec2)`: Checks equality with another vector
- `satisfyOpposition(v: Vec2)`: Checks opposition with another vector

### Magnitude Operations

- `clamp(min: number, max: number)`: Clamps magnitude between values
- `limitMax(max: number)`: Limits maximum magnitude
- `limitMin(min: number)`: Limits minimum magnitude

### Utility Methods

- `clone()`: Creates a copy of the vector
- `copy(v: Vec2)`: Copies components from another vector
- `lookAt(v: Vec2)`: Points towards another vector
- `toString()`: Returns string representation
- `toObject()`: Converts to plain object
- `toJSON()`: Converts to JSON format

## Iteration

Vec2 implements the iterator protocol, allowing it to be used with for...of loops and spread operators. The iterator yields the x and y components in order.

## Example Usage

```typescript
// Create vectors
const v1 = new Vec2(3, 4);
const v2 = new Vec2(1, 2);

// Basic operations
const sum = Vec2.add(v1, v2);
const dot = Vec2.dot(v1, v2);

// Method chaining
v1.normalize()
  .scale(2)
  .rotate(Math.PI / 4);

// Get properties
console.log(v1.magnitude);
console.log(v1.angleX);

// Convert to array
const [x, y] = v1;
```
