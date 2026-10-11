import { describe, expect, it } from "vitest";
import { findPermutations } from "./find-permutations.js";

describe("findPermutations", () => {
  it("should find swizzle permutations with repetition for 2D keys", () => {
    const permutations = findPermutations(["x", "y"]);
    expect(permutations).toEqual([["x"], ["x", "x"], ["x", "y"], ["y"], ["y", "x"], ["y", "y"]]);
  });

  it("should generate 39 swizzle permutations for 3D keys (3 + 9 + 27)", () => {
    const permutations = findPermutations(["x", "y", "z"]);
    expect(permutations).toHaveLength(39);

    const keysJoined = permutations.map((p) => p.join(""));
    // 1-component accessors
    expect(keysJoined).toContain("x");
    expect(keysJoined).toContain("y");
    expect(keysJoined).toContain("z");

    // 2-component accessors (including repeated)
    expect(keysJoined).toContain("xx");
    expect(keysJoined).toContain("yy");
    expect(keysJoined).toContain("zz");
    expect(keysJoined).toContain("xy");
    expect(keysJoined).toContain("xz");
    expect(keysJoined).toContain("yx");
    expect(keysJoined).toContain("yz");
    expect(keysJoined).toContain("zx");
    expect(keysJoined).toContain("zy");

    // 3-component accessors (including repeated)
    expect(keysJoined).toContain("xxx");
    expect(keysJoined).toContain("yyy");
    expect(keysJoined).toContain("zzz");
    expect(keysJoined).toContain("xyz");
    expect(keysJoined).toContain("zyx");
  });

  it("should generate 340 swizzle permutations for 4D keys", () => {
    const permutations = findPermutations(["x", "y", "z", "w"]);
    expect(permutations).toHaveLength(340);
  });

  it("should handle custom maxLength parameter", () => {
    const permutations = findPermutations(["x", "y"], 1);
    expect(permutations).toEqual([["x"], ["y"]]);
  });

  it("should return empty array for empty keys or maxLength <= 0", () => {
    expect(findPermutations([])).toEqual([]);
    expect(findPermutations(["x", "y"], 0)).toEqual([]);
  });
});
