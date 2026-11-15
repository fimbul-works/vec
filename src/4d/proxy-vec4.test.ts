import { describe, expect, test } from "vitest";
import { ArrayProxyVec4, ProxyVec4, Vec4, type Vec4Like } from "./index.js";

function callbackVector(values: number[]): ProxyVec4 {
  return new ProxyVec4(
    () => values[0],
    () => values[1],
    () => values[2],
    () => values[3],
    (x) => {
      values[0] = x;
    },
    (y) => {
      values[1] = y;
    },
    (z) => {
      values[2] = z;
    },
    (w) => {
      values[3] = w;
    },
  );
}

const factories: [string, (values: number[]) => Vec4Like][] = [
  ["ProxyVec4", callbackVector],
  ["ArrayProxyVec4", (values) => new ArrayProxyVec4(values, 0, 0)],
];

for (const [name, create] of factories) {
  describe(name, () => {
    test("reads and writes all components and color aliases", () => {
      const target = [1, 2, 3, 4];
      const v = create(target);
      expect(v.xyzw).toEqual(target);
      v.r = 5;
      v.g = 6;
      v.b = 7;
      v.a = 8;
      expect(target).toEqual([5, 6, 7, 8]);
      v.rgba = [4, 3, 2, 1];
      expect([...v]).toEqual([4, 3, 2, 1]);
      expect(v.toJSON()).toEqual({ x: 4, y: 3, z: 2, w: 1 });
      expect(v.toString()).toBe(`${name}(4, 3, 2, 1)`);
      const copy = v.xyzw;
      copy[0] = 99;
      expect(v.x).toBe(4);
    });

    test("refreshes magnitude after external writes", () => {
      const target = [0, 0, 0, 0];
      const v = create(target);
      expect(v.magnitude).toBe(0);
      target[3] = 5;
      expect(v.magnitude).toBe(5);
      expect(v.magnitudeSq).toBe(25);
      v.magnitude = 10;
      expect(target).toEqual([0, 0, 0, 10]);
    });

    test("interoperates with every storage implementation", () => {
      for (const other of [
        new Vec4(2, 3, 4, 5),
        callbackVector([2, 3, 4, 5]),
        new ArrayProxyVec4(new Float32Array([2, 3, 4, 5]), 0, 0),
      ]) {
        const v = create([1, 2, 3, 4]);
        expect(v.add(other)).toBe(v);
        expect(v.xyzw).toEqual([3, 5, 7, 9]);
        v.subtract(other).multiply(other).divide(other);
        expect(v.xyzw).toEqual([1, 2, 3, 4]);
        expect(Vec4.add(v, other).xyzw).toEqual([3, 5, 7, 9]);
        expect(new Vec4(1, 2, 3, 4).multiply(other).xyzw).toEqual([2, 6, 12, 20]);
        expect(new Vec4().copy(v).equals(v)).toBe(true);
        expect(v.dot(other)).toBe(40);
        expect(v.distanceSq(other)).toBe(4);
        expect(v.distanceManhattan(other)).toBe(4);
        expect(v.distanceChebyshev(other)).toBe(1);
        expect(v.distanceMinkowski(other, 2)).toBe(2);
      }
    });

    test("geometric operations include the fourth component", () => {
      const v = create([1, 2, 3, 4]);
      v.reflect(new Vec4(0, 0, 0, 1));
      expect(v.xyzw).toEqual([1, 2, 3, -4]);
      const clone = v.clone();
      expect(clone).toBeInstanceOf(Vec4);
      v.normalize();
      expect(v.magnitude).toBeCloseTo(1);
      expect(clone.w).toBe(-4);
      v.copy(new Vec4(0, 0, 0, 2)).project(new Vec4(0, 0, 0, 1));
      expect(v.w).toBeCloseTo(2);
      expect(v.angleW).toBe(0);
      expect(v.angleBetween(new Vec4(1, 0, 0, 0))).toBeCloseTo(Math.PI / 2);
      v.scale(3).limitMax(4).limitMin(5).clamp(1, 3);
      expect(v.magnitude).toBeCloseTo(3);
      v.lookAt(new Vec4(1, 0, 0, 0));
      expect(v.x).toBeCloseTo(3);
      expect(v.zero()).toBe(v);
      expect(v.isZero()).toBe(true);
      v.w = Infinity;
      expect(v.isInfinite()).toBe(true);
      v.w = NaN;
      expect(v.isNaN()).toBe(true);
    });
  });
}

describe("ArrayProxyVec4 indexing", () => {
  test("uses offset and gaps without changing unrelated entries", () => {
    const target = new Float32Array([99, 1, 99, 2, 99, 3, 99, 4, 99]);
    const original = target.slice();
    const v = new ArrayProxyVec4(target, 1, 1);
    expect(target).toEqual(original);
    expect(v.xyzw).toEqual([1, 2, 3, 4]);
    v.scale(2);
    expect([...target]).toEqual([99, 2, 99, 4, 99, 6, 99, 8, 99]);
  });

  test("can move and retarget while keeping magnitude current", () => {
    const v = new ArrayProxyVec4([0, 0, 0, 5, 12], 0, 0);
    expect(v.magnitude).toBe(5);
    v.offset = 1;
    expect(v.xyzw).toEqual([0, 0, 5, 12]);
    expect(v.magnitude).toBe(13);
    v.bind([0, 0, 0, 2], 0, 0);
    expect(v.magnitude).toBe(2);
    expect(() => {
      v.offset = 1;
    }).toThrow("Index out of bounds");
    expect(v.offset).toBe(0);
    expect(() => v.bind([1], 0, 0)).toThrow();
    expect(v.w).toBe(2);
  });

  test("rejects indices outside the array", () => {
    for (const [offset, stride] of [
      [0, 0],
      [-1, 0],
      [0, -1],
      [0.5, 0],
      [0, NaN],
    ]) {
      expect(() => new ArrayProxyVec4([1, 2, 3], offset, stride)).toThrow();
    }
  });
});
