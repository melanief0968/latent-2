const path = require("path");
const { createVuePlugin } = require("vite-plugin-vue2");
const mkcert = require("vite-plugin-mkcert");

module.exports = {
  plugins: [createVuePlugin(), mkcert.default()],
  server: {
    https: true,
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@import "@/styling/variables.scss";`,
      },
    },
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, ""),
    },
  },
};
