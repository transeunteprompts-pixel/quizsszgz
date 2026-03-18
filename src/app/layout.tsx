import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Semana Santa Zaragoza - Quiz",
  description: "Juego de preguntas y respuestas sobre la Semana Santa de Zaragoza.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body className="antialiased">{children}</body>
    </html>
  );
}
