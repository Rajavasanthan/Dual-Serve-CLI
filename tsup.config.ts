import { defineConfig } from "tsup";

export default defineConfig({
  entry: ["src/cli.ts"],
  format: ["cjs", "esm"],
  splitting: false,
  sourcemap: true,
  clean: true,
  outDir: "dist",
  shims: false,
  banner: {
    js: "#!/usr/bin/env node" // Add shebang to CLI
  },
  external: ['esbuild'],
});