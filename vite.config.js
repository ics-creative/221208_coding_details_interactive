import { defineConfig } from "vite";

export default defineConfig({
  root: "src",
  build: {
    outDir: "../docs",
    rollupOptions: {
      input: {
        main: "src/index.html",
      },
    },
  },
  base: "/221208_coding_details_interactive",
  server: {
    port: 3456,
  },
});
