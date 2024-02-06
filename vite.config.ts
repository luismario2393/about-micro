import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
import federation from "@originjs/vite-plugin-federation";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    federation({
      name: "about-mfe",
      filename: "about-mfe.js",
      // shared: ["react", "react-dom", "react-router-dom", "zustand"],
      exposes: {
        "./Home": "./src/screens/Home/Home.tsx",
      },
    }),
  ],
  ssr: {
    noExternal: ["react-helmet-async"],
  },
  resolve: {
    alias: {
      "@assets": path.join(__dirname, "./src/assets"),
      "@public": path.join(__dirname, "./public"),
      "@core": path.join(__dirname, "./src/core"),
      "@screens": path.join(__dirname, "./src/screens"),
      "@components": path.join(__dirname, "./src/components"),
      "@client": path.join(__dirname, "./src"),
      "@server": path.join(__dirname, "./server"),
    },
  },
});
