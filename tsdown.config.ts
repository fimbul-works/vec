import { defineConfig, type UserConfig } from "tsdown";

const entryPoints = {
  bundle: "src/index.ts",
  fn2d: "src/2d/index.ts",
  fn3d: "src/3d/index.ts",
  fn4d: "src/4d/index.ts",
  vec2: "src/vec2.ts",
  vec3: "src/vec3.ts",
  vec4: "src/vec4.ts",
  slerp: "src/slerp.ts",
};

const commonConfig: UserConfig = {
  platform: "browser",
  format: ["esm"],
  target: "es2022",
  dts: true,
  treeshake: true,
  outDir: "bundles",
  inputOptions: {
    optimization: {
      inlineConst: false,
    },
    experimental: {
      attachDebugInfo: "none",
    },
  },
};

export default defineConfig(
  Object.entries(entryPoints).map(([key, entry]) => ({
    entry: {
      [key]: entry,
    },
    ...commonConfig,
  })),
);
