import { defineConfig } from "cypress";

export default defineConfig({
  projectId: "64uhvt",
  component: {
    devServer: {
      framework: "create-react-app",
      bundler: "webpack",
    },
  },
});
