import { defineConfig } from "tsup";

export default defineConfig({
    dts: true,
    minify: true,
    entry: ['./index.ts'],
    splitting: true,
    format: ['cjs', 'esm'],
    target: 'esnext',
    platform: 'node',
    sourcemap: true,
    clean: true,
    bundle: true,
    outDir: 'dist',
})