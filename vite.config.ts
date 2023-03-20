import { defineConfig, UserConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

export default defineConfig({
  define: {
    // eslint-disable-next-line @typescript-eslint/naming-convention
    "process.env.NODE_ENV": `"production"`, // dark black magic
  },
  build: {
    outDir: "dist",
    target: "es2015",
    minify: true,
    sourcemap: false,
    emptyOutDir: true,
    lib: {
      entry: "src/index.tsx",
      name: "mylib",
      fileName: "index.js",
    },
  },
  plugins: [react()],
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".jsx"],
  },
}) as UserConfig;
