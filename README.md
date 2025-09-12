# @fimbul-works/vec

A high-performance TypeScript vector math library providing 2D, 3D, and 4D vector operations with a focus on performance and type safety.

[![npm version](https://badge.fury.io/js/%40fimbul-works%2Fvec.svg)](https://www.npmjs.com/package/@fimbul-works/vec)
[![TypeScript](https://badges.frapsoft.com/typescript/code/typescript.svg?v=101)](https://github.com/microsoft/TypeScript)

## Features

- 🚀 **Optimized Performance**: Uses `Float64Array` with magnitude caching and private fields
- 🛡️ **Type Safety**: Full TypeScript support with strict typing and readonly options
- 📏 **Multiple Distance Metrics**: Euclidean, Manhattan, Chebyshev, and Minkowski
- 🔒 **Immutability Support**: Both mutable and immutable operation modes
- 🎮 **Graphics Ready**: Homogeneous coordinates and transformation support
- 🧮 **Math Features**: Comprehensive geometric and arithmetic operations
- ⚡ **Memory Efficient**: Zero-allocation options for performance-critical code
- 🎨 **Color Support**: RGB/RGBA accessors for seamless color manipulation

## Installation

```bash
npm install @fimbul-works/vec
```

## Quick Start

```typescript
import { Vec2, Vec3, Vec4 } from "@fimbul-works/vec";

// Create and manipulate vectors
const position = new Vec2(100, 200);
const direction = new Vec2(1, 0).rotate(Math.PI / 4);
const movement = Vec2.scale(direction, 5);

position.add(movement);

// 3D graphics with homogeneous coordinates
const point = new Vec4(x, y, z, 1);    // Point in 3D space
const vector = new Vec4(dx, dy, dz, 0); // Direction in 3D space

// Color manipulation with RGB accessors
const color = new Vec3(0.8, 0.2, 0.4); // RGB values
color.r = 1.0; // Set red component
const [red, green, blue] = color.rgb;

// RGBA colors with transparency
const colorWithAlpha = new Vec4(0.8, 0.2, 0.4, 0.9);
colorWithAlpha.a = 0.5; // Set alpha to 50%
```

## Zero-Allocation Usage

```typescript
// Reuse vectors to avoid garbage collection
const result = new Vec2();
const temp = new Vec2();

// Chain operations without creating intermediates
position
  .add(velocity.scale(deltaTime, temp))
  .clamp(0, 100);
```

## Core Operations

```typescript
// Static operations (immutable)
const sum = Vec2.add(v1, v2);
const dot = Vec3.dot(v1, v2);
const cross = Vec3.cross(v1, v2);

// Method chaining (mutable)
const result = new Vec3(1, 0, 0)
  .rotate(angle)
  .scale(2)
  .normalize();

// Distance calculations
const dist = v1.distance(v2);
const manhattan = v1.distanceManhattan(v2);
```

## Complete API Documentation

- [Vec2 API Documentation](./VEC2.md)
- [Vec3 API Documentation](./VEC3.md)
- [Vec4 API Documentation](./VEC4.md)

## License

MIT License - See [LICENSE](LICENSE) file for details.

---

Built with ⚡ by [FimbulWorks](https://github.com/fimbul-works)
