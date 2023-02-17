import { defineConfig } from "vite-plugin-windicss";

export default defineConfig({
  theme: {
    extend: {
      colors: {
        primary: "#00D208",
      },
      fontFamily: {
        roboto: '"Roboto", sans-serif',
        montserrat: '"Montserrat", sans-serif',
      },
    },
  },
});
