const path = require('path')
const { createVuePlugin } = require("vite-plugin-vue2");

module.exports = {
  plugins: [createVuePlugin()],
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@import "@/styling/variables.scss";`,
      },
    },
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, ''),
    }
  },
};
