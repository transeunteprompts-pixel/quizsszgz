import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Semana Santa Zaragoza - Quiz",
    short_name: "SSZ Quiz",
    description: "Juego de preguntas y respuestas sobre la Semana Santa de Zaragoza.",
    start_url: "/",
    display: "standalone",
    background_color: "#F6F7F9",
    theme_color: "#111827",
    icons: [
      { src: "/icons/icon-192.png", sizes: "192x192", type: "image/png" },
      { src: "/icons/icon-512.png", sizes: "512x512", type: "image/png" }
    ],
  };
}
