import { describe, expect, test } from "vitest";

import { Vec4 } from "./vec4.js";

describe("Vec4", () => {
  describe("constructor variations", () => {
    test("default constructor creates a zero vector", () => {
      const v = new Vec4();
      expect(v.x).toBe(0);
      expect(v.y).toBe(0);
      expect(v.z).toBe(0);
      expect(v.w).toBe(0);
      expect(v.magnitude).toBe(0);
    });

    test("constructor with parameters correctly sets x, y, z, w", () => {
      const v = new Vec4(1, 2, 3, 4);
      expect(v.x).toBe(1);
      expect(v.y).toBe(2);
      expect(v.z).toBe(3);
      expect(v.w).toBe(4);
      expect(v.magnitude).toBeCloseTo(Math.sqrt(1 + 4 + 9 + 16)); // √30
    });

    test("constructor with partial parameters", () => {
      const v1 = new Vec4(2);
      expect(v1.x).toBe(2);
      expect(v1.y).toBe(0);
      expect(v1.z).toBe(0);
      expect(v1.w).toBe(0);

      const v2 = new Vec4(2, 3);
      expect(v2.x).toBe(2);
      expect(v2.y).toBe(3);
      expect(v2.z).toBe(0);
      expect(v2.w).toBe(0);

      const v3 = new Vec4(2, 3, 4);
      expect(v3.x).toBe(2);
      expect(v3.y).toBe(3);
      expect(v3.z).toBe(4);
      expect(v3.w).toBe(0);
    });
  });

  describe("xyzw getters and setters", () => {
    test("x getter and setter work correctly", () => {
      const v = new Vec4(1, 2, 3, 4);
      expect(v.x).toBe(1);

      v.x = 10;
      expect(v.x).toBe(10);
      expect(v.y).toBe(2);
      expect(v.z).toBe(3);
      expect(v.w).toBe(4);
      expect(v.magnitude).toBeCloseTo(Math.sqrt(100 + 4 + 9 + 16));
    });

    test("y getter and setter work correctly", () => {
      const v = new Vec4(1, 2, 3, 4);
      expect(v.y).toBe(2);

      v.y = 10;
      expect(v.x).toBe(1);
      expect(v.y).toBe(10);
      expect(v.z).toBe(3);
      expect(v.w).toBe(4);
      expect(v.magnitude).toBeCloseTo(Math.sqrt(1 + 100 + 9 + 16));
    });

    test("z getter and setter work correctly", () => {
      const v = new Vec4(1, 2, 3, 4);
      expect(v.z).toBe(3);

      v.z = 10;
      expect(v.x).toBe(1);
      expect(v.y).toBe(2);
      expect(v.z).toBe(10);
      expect(v.w).toBe(4);
      expect(v.magnitude).toBeCloseTo(Math.sqrt(1 + 4 + 100 + 16));
    });

    test("w getter and setter work correctly", () => {
      const v = new Vec4(1, 2, 3, 4);
      expect(v.w).toBe(4);

      v.w = 10;
      expect(v.x).toBe(1);
      expect(v.y).toBe(2);
      expect(v.z).toBe(3);
      expect(v.w).toBe(10);
      expect(v.magnitude).toBeCloseTo(Math.sqrt(1 + 4 + 9 + 100));
    });

    test("xyzw getter returns correct array", () => {
      const v = new Vec4(1, 2, 3, 4);
      const [x, y, z, w] = v.xyzw;
      expect(x).toBe(1);
      expect(y).toBe(2);
      expect(z).toBe(3);
      expect(w).toBe(4);
      // Check that it's a new array (copy)
      expect(v.xyzw).not.toBe(v.xyzw);
    });

    test("xyzw setter updates all components and magnitude", () => {
      const v = new Vec4(1, 2, 3, 4);
      v.xyzw = [5, 6, 7, 8];
      expect(v.x).toBe(5);
      expect(v.y).toBe(6);
      expect(v.z).toBe(7);
      expect(v.w).toBe(8);
      expect(v.magnitude).toBeCloseTo(Math.sqrt(25 + 36 + 49 + 64));
    });
  });

  describe("RGBA color accessors", () => {
    test("r (red) getter and setter work as alias for x", () => {
      const color = new Vec4(0.5, 0.7, 0.9, 1.0);
      expect(color.r).toBe(0.5);
      expect(color.r).toBe(color.x);

      color.r = 0.8;
      expect(color.r).toBe(0.8);
      expect(color.x).toBe(0.8);
      expect(color.y).toBe(0.7);
      expect(color.z).toBe(0.9);
      expect(color.w).toBe(1.0);
    });

    test("g (green) getter and setter work as alias for y", () => {
      const color = new Vec4(0.5, 0.7, 0.9, 1.0);
      expect(color.g).toBe(0.7);
      expect(color.g).toBe(color.y);

      color.g = 0.6;
      expect(color.g).toBe(0.6);
      expect(color.y).toBe(0.6);
      expect(color.x).toBe(0.5);
      expect(color.z).toBe(0.9);
      expect(color.w).toBe(1.0);
    });

    test("b (blue) getter and setter work as alias for z", () => {
      const color = new Vec4(0.5, 0.7, 0.9, 1.0);
      expect(color.b).toBe(0.9);
      expect(color.b).toBe(color.z);

      color.b = 0.2;
      expect(color.b).toBe(0.2);
      expect(color.z).toBe(0.2);
      expect(color.x).toBe(0.5);
      expect(color.y).toBe(0.7);
      expect(color.w).toBe(1.0);
    });

    test("a (alpha) getter and setter work as alias for w", () => {
      const color = new Vec4(0.5, 0.7, 0.9, 1.0);
      expect(color.a).toBe(1.0);
      expect(color.a).toBe(color.w);

      color.a = 0.5;
      expect(color.a).toBe(0.5);
      expect(color.w).toBe(0.5);
      expect(color.x).toBe(0.5);
      expect(color.y).toBe(0.7);
      expect(color.z).toBe(0.9);
    });

    test("rgba getter returns correct array (alias for xyzw)", () => {
      const color = new Vec4(0.2, 0.4, 0.8, 0.6);
      const [r, g, b, a] = color.rgba;
      expect(r).toBe(0.2);
      expect(g).toBe(0.4);
      expect(b).toBe(0.8);
      expect(a).toBe(0.6);

      // Should match xyzw
      expect(color.rgba).toEqual(color.xyzw);
    });

    test("rgba setter updates all color components", () => {
      const color = new Vec4(0.1, 0.2, 0.3, 0.4);
      color.rgba = [0.8, 0.6, 0.4, 0.9];

      expect(color.r).toBe(0.8);
      expect(color.g).toBe(0.6);
      expect(color.b).toBe(0.4);
      expect(color.a).toBe(0.9);
      expect(color.x).toBe(0.8);
      expect(color.y).toBe(0.6);
      expect(color.z).toBe(0.4);
      expect(color.w).toBe(0.9);
    });

    test("color manipulation preserves vector properties", () => {
      const color = new Vec4(1.0, 0.0, 0.0, 1.0); // Pure red with full opacity
      expect(color.magnitude).toBeCloseTo(Math.sqrt(2));

      color.g = 1.0; // Add green
      expect(color.magnitude).toBeCloseTo(Math.sqrt(3));

      color.rgba = [0.6, 0.8, 0.0, 0.5]; // Yellow-green with transparency
      expect(color.magnitude).toBeCloseTo(Math.sqrt(0.36 + 0.64 + 0 + 0.25));
    });

    test("alpha channel operations for transparency", () => {
      const color = new Vec4(1.0, 0.5, 0.2, 1.0); // Opaque orange
      expect(color.a).toBe(1.0);

      color.a = 0.5; // 50% transparent
      expect(color.a).toBe(0.5);
      expect(color.r).toBe(1.0); // RGB unchanged
      expect(color.g).toBe(0.5);
      expect(color.b).toBe(0.2);

      color.a = 0.0; // Fully transparent
      expect(color.a).toBe(0.0);
    });
  });

  describe("angle getters", () => {
    test("angleX returns correct angle with x-axis", () => {
      const v1 = new Vec4(1, 0, 0, 0); // Along x-axis
      expect(v1.angleX).toBeCloseTo(0);

      const v2 = new Vec4(0, 1, 0, 0); // Along y-axis
      expect(v2.angleX).toBeCloseTo(Math.PI / 2);

      const v3 = new Vec4(0, 0, 1, 0); // Along z-axis
      expect(v3.angleX).toBeCloseTo(Math.PI / 2);

      const v4 = new Vec4(0, 0, 0, 1); // Along w-axis
      expect(v4.angleX).toBeCloseTo(Math.PI / 2);
    });

    test("angleY returns correct angle with y-axis", () => {
      const v1 = new Vec4(0, 1, 0, 0); // Along y-axis
      expect(v1.angleY).toBeCloseTo(0);

      const v2 = new Vec4(1, 0, 0, 0); // Along x-axis
      expect(v2.angleY).toBeCloseTo(Math.PI / 2);
    });

    test("angleZ returns correct angle with z-axis", () => {
      const v1 = new Vec4(0, 0, 1, 0); // Along z-axis
      expect(v1.angleZ).toBeCloseTo(0);

      const v2 = new Vec4(1, 0, 0, 0); // Along x-axis
      expect(v2.angleZ).toBeCloseTo(Math.PI / 2);
    });

    test("angleW returns correct angle with w-axis", () => {
      const v1 = new Vec4(0, 0, 0, 1); // Along w-axis
      expect(v1.angleW).toBeCloseTo(0);

      const v2 = new Vec4(1, 0, 0, 0); // Along x-axis
      expect(v2.angleW).toBeCloseTo(Math.PI / 2);
    });
  });

  describe("magnitude properties", () => {
    test("magnitude getter returns correct vector length", () => {
      const v1 = new Vec4(3, 4, 0, 0);
      expect(v1.magnitude).toBe(5); // 3-4-5 triangle

      const v2 = new Vec4(0, 0, 0, 0);
      expect(v2.magnitude).toBe(0);

      const v3 = new Vec4(1, 1, 1, 1);
      expect(v3.magnitude).toBe(2); // √(1² + 1² + 1² + 1²) = √4 = 2

      const v4 = new Vec4(2, 3, 6, 0); // 2² + 3² + 6² = 4 + 9 + 36 = 49
      expect(v4.magnitude).toBe(7);
    });

    test("magnitude setter updates components while preserving direction", () => {
      const v = new Vec4(3, 4, 0, 0);
      const originalDirection = [v.x / v.magnitude, v.y / v.magnitude, v.z / v.magnitude, v.w / v.magnitude];

      v.magnitude = 10;

      expect(v.magnitude).toBeCloseTo(10);
      expect(v.x / v.magnitude).toBeCloseTo(originalDirection[0]);
      expect(v.y / v.magnitude).toBeCloseTo(originalDirection[1]);
      expect(v.z / v.magnitude).toBeCloseTo(originalDirection[2]);
      expect(v.w / v.magnitude).toBeCloseTo(originalDirection[3]);
    });

    test("magnitudeSq getter returns squared magnitude", () => {
      const v = new Vec4(1, 2, 3, 4);
      expect(v.magnitudeSq).toBe(30); // 1² + 2² + 3² + 4²

      const u = new Vec4(2, 2, 2, 2);
      expect(u.magnitudeSq).toBe(16); // 2² + 2² + 2² + 2²
    });
  });

  describe("static creation methods", () => {
    test("fromArray creates vector correctly", () => {
      const v1 = Vec4.fromArray([1, 2, 3, 4]);
      expect(v1.x).toBe(1);
      expect(v1.y).toBe(2);
      expect(v1.z).toBe(3);
      expect(v1.w).toBe(4);

      const v2 = Vec4.fromArray([5, 6]); // Partial array
      expect(v2.x).toBe(5);
      expect(v2.y).toBe(6);
      expect(v2.z).toBe(0);
      expect(v2.w).toBe(0);
    });

    test("fromObject creates vector correctly", () => {
      const v = Vec4.fromObject({ x: 2, y: 4, z: 6, w: 8 });
      expect(v.x).toBe(2);
      expect(v.y).toBe(4);
      expect(v.z).toBe(6);
      expect(v.w).toBe(8);
    });

    test("zero creates zero vector", () => {
      const v = Vec4.zero();
      expect(v.x).toBe(0);
      expect(v.y).toBe(0);
      expect(v.z).toBe(0);
      expect(v.w).toBe(0);
      expect(v.magnitude).toBe(0);
    });

    test("one creates vector with all components as 1", () => {
      const v = Vec4.one();
      expect(v.x).toBe(1);
      expect(v.y).toBe(1);
      expect(v.z).toBe(1);
      expect(v.w).toBe(1);
    });
  });

  describe("state checking methods", () => {
    test("isInfinite correctly identifies infinite components", () => {
      const v1 = new Vec4(Number.POSITIVE_INFINITY, 1, 1, 1);
      expect(v1.isInfinite()).toBe(true);

      const v2 = new Vec4(1, Number.NEGATIVE_INFINITY, 1, 1);
      expect(v2.isInfinite()).toBe(true);

      const v3 = new Vec4(1, 1, Number.POSITIVE_INFINITY, 1);
      expect(v3.isInfinite()).toBe(true);

      const v4 = new Vec4(1, 1, 1, Number.NEGATIVE_INFINITY);
      expect(v4.isInfinite()).toBe(true);

      const v5 = new Vec4(1, 2, 3, 4);
      expect(v5.isInfinite()).toBe(false);
    });

    test("isNaN correctly identifies NaN components", () => {
      const v1 = new Vec4(Number.NaN, 1, 1, 1);
      expect(v1.isNaN()).toBe(true);

      const v2 = new Vec4(1, Number.NaN, 1, 1);
      expect(v2.isNaN()).toBe(true);

      const v3 = new Vec4(1, 1, Number.NaN, 1);
      expect(v3.isNaN()).toBe(true);

      const v4 = new Vec4(1, 1, 1, Number.NaN);
      expect(v4.isNaN()).toBe(true);

      const v5 = new Vec4(1, 2, 3, 4);
      expect(v5.isNaN()).toBe(false);
    });

    test("isZero correctly identifies zero vectors", () => {
      const v1 = new Vec4(0, 0, 0, 0);
      expect(v1.isZero()).toBe(true);

      const v2 = new Vec4(0, 1, 0, 0);
      expect(v2.isZero()).toBe(false);

      const v3 = new Vec4(1, 0, 0, 0);
      expect(v3.isZero()).toBe(false);

      const v4 = new Vec4(0, 0, 1, 0);
      expect(v4.isZero()).toBe(false);

      const v5 = new Vec4(0, 0, 0, 1);
      expect(v5.isZero()).toBe(false);
    });
  });

  describe("homogeneous coordinates for graphics", () => {
    test("point representation (w=1)", () => {
      const point = new Vec4(10, 20, 30, 1); // 3D point at (10, 20, 30)
      expect(point.w).toBe(1);
      expect(point.x).toBe(10);
      expect(point.y).toBe(20);
      expect(point.z).toBe(30);
    });

    test("direction vector representation (w=0)", () => {
      const direction = new Vec4(1, 0, 0, 0); // Direction along x-axis
      expect(direction.w).toBe(0);
      expect(direction.x).toBe(1);
      expect(direction.y).toBe(0);
      expect(direction.z).toBe(0);
    });

    test("color with alpha representation", () => {
      const color = new Vec4(0.8, 0.6, 0.2, 0.9); // Orange with 90% opacity
      expect(color.r).toBe(0.8);
      expect(color.g).toBe(0.6);
      expect(color.b).toBe(0.2);
      expect(color.a).toBe(0.9);
    });
  });

  describe("iteration and conversion", () => {
    test("vector is iterable", () => {
      const v = new Vec4(2, 4, 6, 8);
      const components = [...v];
      expect(components).toEqual([2, 4, 6, 8]);
    });

    test("toObject returns correct object", () => {
      const v = new Vec4(1, 2, 3, 4);
      const obj = v.toObject();
      expect(obj).toEqual({ x: 1, y: 2, z: 3, w: 4 });
    });

    test("toString returns correct string representation", () => {
      const v = new Vec4(1, 2, 3, 4);
      expect(v.toString()).toBe("Vec4(1, 2, 3, 4)");
    });
  });

  describe("basic vector operations", () => {
    test("add method works correctly", () => {
      const v1 = new Vec4(1, 2, 3, 4);
      const v2 = new Vec4(5, 6, 7, 8);
      v1.add(v2);

      expect(v1.x).toBe(6);
      expect(v1.y).toBe(8);
      expect(v1.z).toBe(10);
      expect(v1.w).toBe(12);
    });

    test("static add works correctly", () => {
      const v1 = new Vec4(1, 2, 3, 4);
      const v2 = new Vec4(5, 6, 7, 8);
      const result = Vec4.add(v1, v2);

      expect(result.x).toBe(6);
      expect(result.y).toBe(8);
      expect(result.z).toBe(10);
      expect(result.w).toBe(12);

      // Original vectors unchanged
      expect(v1.x).toBe(1);
      expect(v2.x).toBe(5);
    });

    test("clone creates independent copy", () => {
      const v1 = new Vec4(1, 2, 3, 4);
      const v2 = v1.clone();

      expect(v2.x).toBe(1);
      expect(v2.y).toBe(2);
      expect(v2.z).toBe(3);
      expect(v2.w).toBe(4);

      v1.x = 10;
      expect(v2.x).toBe(1); // v2 should be unchanged
    });

    test("dot product works correctly", () => {
      const v1 = new Vec4(1, 2, 3, 4);
      const v2 = new Vec4(5, 6, 7, 8);
      const dot = v1.dot(v2);

      expect(dot).toBe(70); // 1*5 + 2*6 + 3*7 + 4*8 = 5 + 12 + 21 + 32 = 70
    });

    test("static dot product works correctly", () => {
      const v1 = new Vec4(1, 2, 3, 4);
      const v2 = new Vec4(5, 6, 7, 8);
      const dot = Vec4.dot(v1, v2);

      expect(dot).toBe(70);
    });
  });
});
