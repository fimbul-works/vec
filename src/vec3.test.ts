import { describe, expect, test } from "vitest";

import { Vec3 } from "./vec3.js";

describe("Vec3", () => {
  describe("constructor variations", () => {
    test("default constructor creates a zero vector", () => {
      const v = new Vec3();
      expect(v.x).toBe(0);
      expect(v.y).toBe(0);
      expect(v.z).toBe(0);
      expect(v.magnitude).toBe(0);
    });

    test("constructor with parameters correctly sets x, y, z", () => {
      const v = new Vec3(3, 4, 5);
      expect(v.x).toBe(3);
      expect(v.y).toBe(4);
      expect(v.z).toBe(5);
      expect(v.magnitude).toBeCloseTo(7.0710678118654755); // √(3² + 4² + 5²) = √50
    });

    test("constructor with partial parameters", () => {
      const v1 = new Vec3(2);
      expect(v1.x).toBe(2);
      expect(v1.y).toBe(0);
      expect(v1.z).toBe(0);

      const v2 = new Vec3(2, 3);
      expect(v2.x).toBe(2);
      expect(v2.y).toBe(3);
      expect(v2.z).toBe(0);
    });
  });

  describe("xyz getters and setters", () => {
    test("x getter and setter work correctly", () => {
      const v = new Vec3(3, 4, 5);
      expect(v.x).toBe(3);

      v.x = 10;
      expect(v.x).toBe(10);
      expect(v.y).toBe(4);
      expect(v.z).toBe(5);
      expect(v.magnitude).toBeCloseTo(Math.sqrt(100 + 16 + 25));
    });

    test("y getter and setter work correctly", () => {
      const v = new Vec3(3, 4, 5);
      expect(v.y).toBe(4);

      v.y = 10;
      expect(v.x).toBe(3);
      expect(v.y).toBe(10);
      expect(v.z).toBe(5);
      expect(v.magnitude).toBeCloseTo(Math.sqrt(9 + 100 + 25));
    });

    test("z getter and setter work correctly", () => {
      const v = new Vec3(3, 4, 5);
      expect(v.z).toBe(5);

      v.z = 10;
      expect(v.x).toBe(3);
      expect(v.y).toBe(4);
      expect(v.z).toBe(10);
      expect(v.magnitude).toBeCloseTo(Math.sqrt(9 + 16 + 100));
    });

    test("xyz getter returns correct array", () => {
      const v = new Vec3(3, 4, 5);
      const [x, y, z] = v.xyz;
      expect(x).toBe(3);
      expect(y).toBe(4);
      expect(z).toBe(5);
      // Check that it's a new array (copy)
      expect(v.xyz).not.toBe(v.xyz);
    });

    test("xyz setter updates all components and magnitude", () => {
      const v = new Vec3(3, 4, 5);
      v.xyz = [6, 8, 10];
      expect(v.x).toBe(6);
      expect(v.y).toBe(8);
      expect(v.z).toBe(10);
      expect(v.magnitude).toBeCloseTo(Math.sqrt(36 + 64 + 100));
    });
  });

  describe("RGB color accessors", () => {
    test("r (red) getter and setter work as alias for x", () => {
      const color = new Vec3(0.5, 0.7, 0.9);
      expect(color.r).toBe(0.5);
      expect(color.r).toBe(color.x);

      color.r = 0.8;
      expect(color.r).toBe(0.8);
      expect(color.x).toBe(0.8);
      expect(color.y).toBe(0.7);
      expect(color.z).toBe(0.9);
    });

    test("g (green) getter and setter work as alias for y", () => {
      const color = new Vec3(0.5, 0.7, 0.9);
      expect(color.g).toBe(0.7);
      expect(color.g).toBe(color.y);

      color.g = 0.6;
      expect(color.g).toBe(0.6);
      expect(color.y).toBe(0.6);
      expect(color.x).toBe(0.5);
      expect(color.z).toBe(0.9);
    });

    test("b (blue) getter and setter work as alias for z", () => {
      const color = new Vec3(0.5, 0.7, 0.9);
      expect(color.b).toBe(0.9);
      expect(color.b).toBe(color.z);

      color.b = 0.2;
      expect(color.b).toBe(0.2);
      expect(color.z).toBe(0.2);
      expect(color.x).toBe(0.5);
      expect(color.y).toBe(0.7);
    });

    test("rgb getter returns correct array (alias for xyz)", () => {
      const color = new Vec3(0.2, 0.4, 0.8);
      const [r, g, b] = color.rgb;
      expect(r).toBe(0.2);
      expect(g).toBe(0.4);
      expect(b).toBe(0.8);

      // Should match xyz
      expect(color.rgb).toEqual(color.xyz);
    });

    test("rgb setter updates all color components", () => {
      const color = new Vec3(0.1, 0.2, 0.3);
      color.rgb = [0.8, 0.6, 0.4];

      expect(color.r).toBe(0.8);
      expect(color.g).toBe(0.6);
      expect(color.b).toBe(0.4);
      expect(color.x).toBe(0.8);
      expect(color.y).toBe(0.6);
      expect(color.z).toBe(0.4);
    });

    test("color manipulation preserves vector properties", () => {
      const color = new Vec3(1.0, 0.0, 0.0); // Pure red
      expect(color.magnitude).toBe(1.0);

      color.g = 1.0; // Add green
      expect(color.magnitude).toBeCloseTo(Math.sqrt(2));

      color.rgb = [0.6, 0.8, 0.0]; // Yellow-green
      expect(color.magnitude).toBeCloseTo(Math.sqrt(0.36 + 0.64));
    });
  });

  describe("angle getters", () => {
    test("angleX returns correct angle with x-axis", () => {
      const v1 = new Vec3(1, 0, 0); // Along x-axis
      expect(v1.angleX).toBeCloseTo(0);

      const v2 = new Vec3(0, 1, 0); // Along y-axis
      expect(v2.angleX).toBeCloseTo(Math.PI / 2);

      const v3 = new Vec3(0, 0, 1); // Along z-axis
      expect(v3.angleX).toBeCloseTo(Math.PI / 2);
    });

    test("angleY returns correct angle with y-axis", () => {
      const v1 = new Vec3(0, 1, 0); // Along y-axis
      expect(v1.angleY).toBeCloseTo(0);

      const v2 = new Vec3(1, 0, 0); // Along x-axis
      expect(v2.angleY).toBeCloseTo(Math.PI / 2);

      const v3 = new Vec3(0, 0, 1); // Along z-axis
      expect(v3.angleY).toBeCloseTo(Math.PI / 2);
    });

    test("angleZ returns correct angle with z-axis", () => {
      const v1 = new Vec3(0, 0, 1); // Along z-axis
      expect(v1.angleZ).toBeCloseTo(0);

      const v2 = new Vec3(1, 0, 0); // Along x-axis
      expect(v2.angleZ).toBeCloseTo(Math.PI / 2);

      const v3 = new Vec3(0, 1, 0); // Along y-axis
      expect(v3.angleZ).toBeCloseTo(Math.PI / 2);
    });
  });

  describe("magnitude properties", () => {
    test("magnitude getter returns correct vector length", () => {
      const v1 = new Vec3(3, 4, 0);
      expect(v1.magnitude).toBe(5); // 3-4-5 triangle

      const v2 = new Vec3(0, 0, 0);
      expect(v2.magnitude).toBe(0);

      const v3 = new Vec3(1, 1, 1);
      expect(v3.magnitude).toBeCloseTo(Math.sqrt(3));
    });

    test("magnitude setter updates components while preserving direction", () => {
      const v = new Vec3(3, 4, 0);
      const originalDirection = [v.x / v.magnitude, v.y / v.magnitude, v.z / v.magnitude];

      v.magnitude = 10;

      expect(v.magnitude).toBeCloseTo(10);
      expect(v.x / v.magnitude).toBeCloseTo(originalDirection[0]);
      expect(v.y / v.magnitude).toBeCloseTo(originalDirection[1]);
      expect(v.z / v.magnitude).toBeCloseTo(originalDirection[2]);
    });

    test("magnitudeSq getter returns squared magnitude", () => {
      const v = new Vec3(3, 4, 5);
      expect(v.magnitudeSq).toBeCloseTo(50); // 3² + 4² + 5²

      const u = new Vec3(2, 2, 2);
      expect(u.magnitudeSq).toBeCloseTo(12); // 2² + 2² + 2²
    });
  });

  describe("static creation methods", () => {
    test("fromArray creates vector correctly", () => {
      const v1 = Vec3.fromArray([1, 2, 3]);
      expect(v1.x).toBe(1);
      expect(v1.y).toBe(2);
      expect(v1.z).toBe(3);

      const v2 = Vec3.fromArray([5]); // Partial array
      expect(v2.x).toBe(5);
      expect(v2.y).toBe(0);
      expect(v2.z).toBe(0);
    });

    test("fromObject creates vector correctly", () => {
      const v = Vec3.fromObject({ x: 2, y: 4, z: 6 });
      expect(v.x).toBe(2);
      expect(v.y).toBe(4);
      expect(v.z).toBe(6);
    });

    test("zero creates zero vector", () => {
      const v = Vec3.zero();
      expect(v.x).toBe(0);
      expect(v.y).toBe(0);
      expect(v.z).toBe(0);
      expect(v.magnitude).toBe(0);
    });

    test("one creates vector with all components as 1", () => {
      const v = Vec3.one();
      expect(v.x).toBe(1);
      expect(v.y).toBe(1);
      expect(v.z).toBe(1);
    });
  });

  describe("state checking methods", () => {
    test("isInfinite correctly identifies infinite components", () => {
      const v1 = new Vec3(Number.POSITIVE_INFINITY, 1, 1);
      expect(v1.isInfinite()).toBe(true);

      const v2 = new Vec3(1, Number.NEGATIVE_INFINITY, 1);
      expect(v2.isInfinite()).toBe(true);

      const v3 = new Vec3(1, 1, Number.POSITIVE_INFINITY);
      expect(v3.isInfinite()).toBe(true);

      const v4 = new Vec3(1, 2, 3);
      expect(v4.isInfinite()).toBe(false);
    });

    test("isNaN correctly identifies NaN components", () => {
      const v1 = new Vec3(Number.NaN, 1, 1);
      expect(v1.isNaN()).toBe(true);

      const v2 = new Vec3(1, Number.NaN, 1);
      expect(v2.isNaN()).toBe(true);

      const v3 = new Vec3(1, 1, Number.NaN);
      expect(v3.isNaN()).toBe(true);

      const v4 = new Vec3(1, 2, 3);
      expect(v4.isNaN()).toBe(false);
    });

    test("isZero correctly identifies zero vectors", () => {
      const v1 = new Vec3(0, 0, 0);
      expect(v1.isZero()).toBe(true);

      const v2 = new Vec3(0, 1, 0);
      expect(v2.isZero()).toBe(false);

      const v3 = new Vec3(1, 0, 0);
      expect(v3.isZero()).toBe(false);

      const v4 = new Vec3(0, 0, 1);
      expect(v4.isZero()).toBe(false);
    });
  });

  describe("iteration and conversion", () => {
    test("vector is iterable", () => {
      const v = new Vec3(2, 4, 6);
      const components = [...v];
      expect(components).toEqual([2, 4, 6]);
    });

    test("toObject returns correct object", () => {
      const v = new Vec3(1, 2, 3);
      const obj = v.toObject();
      expect(obj).toEqual({ x: 1, y: 2, z: 3 });
    });

    test("toString returns correct string representation", () => {
      const v = new Vec3(1, 2, 3);
      expect(v.toString()).toBe("Vec3(1, 2, 3)");
    });
  });

  describe("basic vector operations", () => {
    test("add method works correctly", () => {
      const v1 = new Vec3(1, 2, 3);
      const v2 = new Vec3(4, 5, 6);
      v1.add(v2);

      expect(v1.x).toBe(5);
      expect(v1.y).toBe(7);
      expect(v1.z).toBe(9);
    });

    test("static add works correctly", () => {
      const v1 = new Vec3(1, 2, 3);
      const v2 = new Vec3(4, 5, 6);
      const result = Vec3.add(v1, v2);

      expect(result.x).toBe(5);
      expect(result.y).toBe(7);
      expect(result.z).toBe(9);

      // Original vectors unchanged
      expect(v1.x).toBe(1);
      expect(v2.x).toBe(4);
    });

    test("clone creates independent copy", () => {
      const v1 = new Vec3(1, 2, 3);
      const v2 = v1.clone();

      expect(v2.x).toBe(1);
      expect(v2.y).toBe(2);
      expect(v2.z).toBe(3);

      v1.x = 10;
      expect(v2.x).toBe(1); // v2 should be unchanged
    });
  });
});
