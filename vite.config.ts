import path from "path"
import react from "@vitejs/plugin-react"
import { defineConfig } from "vite"

export default defineConfig({
  plugins: [react()],
  base: "/",
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
      "@SandalsSlabRegular": path.resolve(__dirname, "./public/assets/fonts/SandalsSlab-Regular.woff2"),
      "@SandalsScriptRegular": path.resolve(__dirname, "./public/assets/fonts/SandalsScript-Regular.woff2"),
      "@SandalsSansRegular": path.resolve(__dirname, "./public/assets/fonts/SandalsSans-Regular.woff2"),
      "@SandalsSansMedium": path.resolve(__dirname, "./public/assets/fonts/SandalsSans-Medium.woff2"), 
      "@images":  path.resolve(__dirname, "./public/assets/images")
    },
  },
})
