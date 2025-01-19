# Vec3

A 3D vector implementation with comprehensive mathematical operations and utility methods.

## Constructor

### Vec3

- `constructor(x: number = 0, y: number = 0, z: number = 0)`: Creates a new vector with the given x, y and z coordinates

## Static Methods

### Creation and Conversion

- `fromArray(arr: [number, number, number] | number[])`: Creates a Vec3 from an array
- `fromObject(obj: { x: number; y: number; z: number })`: Creates a Vec3 from an object with x, y and z properties
- `fromJSON(json: { x: number; y: number; z: number })`: Creates a Vec3 from a JSON object
- `fromCylindricalCoords(r: number, phi: number, z: number)`: Creates a Vec3 from cylindrical coordinates
- `fromSphericalCoords(r: number, theta: number, phi: number)`: Creates a Vec3 from spherical coordinates
- `immutable(x: number = 0, y: number = 0, z: number = 0)`: Creates an immutable Vec3-like object
- `one()`: Creates a vector with all components set to 1.0
- `random(random: () => number = Math.random)`: Creates a random unit vector
- `zero()`: Creates a zero vector

### Vector Operations

- `add(v: Vec3, w: Vec3)`: Adds two vectors
- `subtract(v: Vec3, w: Vec3)`: Subtracts one vector from another
- `multiply(v: Vec3, w: Vec3)`: Multiplies two vectors component-wise
- `divide(v: Vec3, w: Vec3)`: Divides two vectors component-wise
- `dot(v: Vec3, w: Vec3)`: Calculates the dot product
- `cross(v: Vec3, w: Vec3)`: Calculates the cross product
- `scale(v: Vec3, c: number)`: Scales a vector by a scalar value
- `negate(v: Vec3)`: Negates a vector
- `normalize(v: Vec3)`: Normalizes a vector
- `project(v: Vec3, w: Vec3)`: Projects one vector onto another
- `reflect(v: Vec3, normal: Vec3)`: Reflects a vector across a normal vector
- `lerp(v: Vec3, w: Vec3, t: number)`: Performs linear interpolation between vectors

### Distance Calculations

- `distance(v: Vec3, w: Vec3)`: Calculates Euclidean distance between vectors
- `distanceSq(v: Vec3, w: Vec3)`: Calculates squared Euclidean distance
- `distanceChebyshev(v: Vec3, w: Vec3)`: Calculates Chebyshev distance
- `distanceManhattan(v: Vec3, w: Vec3)`: Calculates Manhattan distance
- `distanceMinkowski(v: Vec3, w: Vec3, p: number)`: Calculates Minkowski distance

### Comparison and State

- `angleBetween(v: Vec3, w: Vec3)`: Calculates angle between vectors
- `equals(v: Vec3, w: Vec3, epsilon?: number)`: Compares vectors with optional epsilon
- `isInfinite(v: Vec3)`: Checks if vector has infinite components
- `isNaN(v: Vec3)`: Checks if vector has NaN components
- `isZero(v: Vec3)`: Checks if vector is zero
- `satisfyEquality(v: Vec3, w: Vec3)`: Checks if vectors are equal
- `satisfyOpposition(v: Vec3, w: Vec3)`: Checks if vectors are opposite

## Instance Properties

### Getters and Setters

- `x`: Gets or sets the x-component
- `y`: Gets or sets the y-component
- `z`: Gets or sets the z-component
- `xyz`: Gets or sets all components as an array
- `magnitude`: Gets or sets the vector's magnitude
- `magnitudeSq`: Gets the squared magnitude (read-only)
- `angleX`: Gets the angle with positive x-axis
- `angleY`: Gets the angle with positive y-axis
- `angleZ`: Gets the angle with positive z-axis

## Instance Methods

### Vector Operations

- `add(v: Vec3)`: Adds another vector
- `subtract(v: Vec3)`: Subtracts another vector
- `multiply(v: Vec3)`: Multiplies with another vector
- `divide(v: Vec3)`: Divides by another vector
- `scale(c: number)`: Scales by a scalar value
- `normalize()`: Normalizes the vector
- `negate()`: Negates the vector
- `project(v: Vec3)`: Projects onto another vector
- `reflect(normal: Vec3)`: Reflects across a normal vector
- `rotateX(phi: number)`: Rotates around X-axis
- `rotateY(phi: number)`: Rotates around Y-axis
- `rotateZ(phi: number)`: Rotates around Z-axis
- `zero()`: Sets to zero vector
- `random(random?: () => number)`: Sets to random direction

### Distance Calculations

- `distance(v: Vec3)`: Calculates Euclidean distance to another vector
- `distanceSq(v: Vec3)`: Calculates squared Euclidean distance
- `distanceChebyshev(v: Vec3)`: Calculates Chebyshev distance
- `distanceManhattan(v: Vec3)`: Calculates Manhattan distance
- `distanceMinkowski(v: Vec3, p: number)`: Calculates Minkowski distance

### Cross Product

- `cross(v: Vec3)`: Calculates the cross product with another vector

### Comparison and State

- `angleBetween(v: Vec3)`: Calculates angle to another vector
- `equals(v: Vec3, epsilon?: number)`: Compares with another vector
- `isInfinite()`: Checks for infinite components
- `isNaN()`: Checks for NaN components
- `isZero()`: Checks if zero vector
- `satisfyEquality(v: Vec3)`: Checks equality with another vector
- `satisfyOpposition(v: Vec3)`: Checks opposition with another vector

### Magnitude Operations

- `clamp(min: number, max: number)`: Clamps magnitude between values
- `limitMax(max: number)`: Limits maximum magnitude
- `limitMin(min: number)`: Limits minimum magnitude

### Utility Methods

- `clone()`: Creates a copy of the vector
- `copy(v: Vec3)`: Copies components from another vector
- `lookAt(v: Vec3)`: Points towards another vector
- `toString()`: Returns string representation
- `toObject()`: Converts to plain object
- `toJSON()`: Converts to JSON format

## Iteration

Vec3 implements the iterator protocol, allowing it to be used with for...of loops and spread operators. The iterator yields the x, y, and z components in order.

## Example Usage

```typescript
// Create vectors
const v1 = new Vec3(3, 4, 5);
const v2 = new Vec3(1, 2, 3);

// Basic operations
const sum = Vec3.add(v1, v2);
const crossProduct = Vec3.cross(v1, v2);
const dot = Vec3.dot(v1, v2);

// Method chaining
v1.normalize()
  .scale(2)
  .rotateX(Math.PI / 4);

// Get properties
console.log(v1.magnitude);
console.log(v1.angleX);

// Convert to array
const [x, y, z] = v1;

// Create from special coordinates
const cylindrical = Vec3.fromCylindricalCoords(2, Math.PI/4, 5);
const spherical = Vec3.fromSphericalCoords(2, Math.PI/3, Math.PI/4);
```
