import path from "path";
import { defineConfig } from "vite";
import svgr from "vite-plugin-svgr";

export default defineConfig({
 resolve: {
  alias: {
   "@": path.resolve(__dirname, "./src"),
  },
 },

 plugins: [
  svgr({
   svgrOptions: {
    svgo: true,
    svgoConfig: {
     plugins: [
      { name: "removeDimensions", active: true },
      { name: "removeViewBox", active: false },
     ],
    },
   },
  }),
 ],
});
