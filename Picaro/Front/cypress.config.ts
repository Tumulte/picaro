import {defineConfig} from "cypress";

export default defineConfig({
    screenshotsFolder: "Picaro/Front/integration/screenshots",
    videosFolder: "Picaro/Front/integration/videos",

    e2e: {
        setupNodeEvents(on, config) {
            // implement node event listeners here
        },
    },
    component: {
        specPattern: "**/*.cy.ts",
        devServer: {
            framework: "vue",
            bundler: "vite",
        },
    },
});
