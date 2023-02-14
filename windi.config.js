import { defineConfig } from "vite-plugin-windicss";

export default defineConfig({
  theme: {
    extend: {
      colors: {
        primary: "#008AFF",
      },
      fontFamily: {
        roboto: '"Roboto", sans-serif',
        montserrat: '"Montserrat", sans-serif',
      },
    },
  },
});
