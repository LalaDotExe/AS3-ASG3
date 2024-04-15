import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

// https://vitejs.dev/config/
export default defineConfig({
  base: "/AS3-ASG3/",
  plugins: [vue()],
  assetsInclude: ["**/*.JPG"],
});
