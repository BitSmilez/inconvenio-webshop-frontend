import { defineConfig } from "cypress";

export default defineConfig({
  projectId: "64uhvt",
  chromeWebSecurity: false,
  component: {
    devServer: {
      framework: "create-react-app",
      bundler: "webpack",
    },
  },
});
