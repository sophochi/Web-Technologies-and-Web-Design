import { resolve } from "node:path";
import { defineConfig } from "vite";

export default defineConfig({
    root: "site",
    publicDir: "../public",
    base: "./",

    build: {
        outDir: "../dist",
        emptyOutDir: true,
        rollupOptions: {
            input: {
                home: resolve("site/index.html"),
                jobs: resolve("site/jobs.html"),
                details: resolve("site/job-details.html"),
                apply: resolve("site/apply.html")
            }
        }
    },

    server: {
        port: 5173
    }
});