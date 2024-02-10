import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import { VitePWA } from "vite-plugin-pwa";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      includeAssets: ["favicon.ico", "apple-touch-icon.png", "mask-icon.svg"],
      manifest: {
        name: "MeowTube",
        short_name: "MeowTube",
        description:
          "Bienvenido a MeowTube, donde puedes disfrutar de las imágenes más divertidas de mascotas. Explora nuestra amplia colección de fotos de gatos, perros y otras adorables criaturas. ¡Prepárate para reír y alegrar tu día con nuestras adorables mascotas!",
        theme_color: "#1E1F25",
        icons: [
          {
            src: "pwa-64x64.png",
            sizes: "64x64",
            type: "image/png",
          },
          {
            src: "pwa-192x192.png",
            sizes: "192x192",
            type: "image/png",
          },
          {
            src: "pwa-512x512.png",
            sizes: "512x512",
            type: "image/png",
          },
          {
            src: "maskable-icon.png",
            sizes: "240x240",
            type: "image/png",
            purpose: "maskable",
          },
        ],
      },
    }),
  ],
});
