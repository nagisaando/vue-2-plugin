import { defineConfig } from "vite";
const { createVuePlugin } = require("vite-plugin-vue2");
const path = require("path");
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [createVuePlugin()],
  test: {
    globals: true,
    environment: "jsdom",
  },
  resolve: {
    // alias: {
    //   "@": fileURLToPath(new URL("./src", import.meta.url)),
    //   // "~bootstrap": path.resolve(__dirname, "node_modules/bootstrap"),
    //   // "~bootstrap-vue": path.resolve(__dirname, "node_modules/bootstrap-vue"),
    // },
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
