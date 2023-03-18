/** @type {import('vite').UserConfig} */
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

export default defineConfig({
  define: {
    "process.env": {},
  },
  build: {
    outDir: "dist",
    target: "es6",
    minify: false,
    sourcemap: true,
    emptyOutDir: true,
    lib: {
      entry: "src/index.tsx",
      name: "mylib",
      fileName: (_) => "index.js",
    },
  },
  plugins: [react()],
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".jsx"], // .jsx拡張子も有効にする
  },
});
