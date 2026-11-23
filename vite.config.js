
import { resolve } from "node:path";
import { defineConfig } from "vite";

export default defineConfig(({ command }) => ({
    root: "site",
    publicDir: "../public",

    // Локально — /, на GitHub Pages — шлях репозиторію
    base: command === "serve"
        ? "/"
        : "/Web-Technologies-and-Web-Design/",

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
        host: "0.0.0.0",
        port: 5173,
        strictPort: true
    },

    preview: {
        host: "0.0.0.0",
        port: 4173
    }
}));
