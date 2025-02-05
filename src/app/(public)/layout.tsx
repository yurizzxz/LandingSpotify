import type { Metadata } from "next";
import "../globals.css";
import NavBar from "../_components/navBar";
import Footer from "../_components/Footer";

export const metadata: Metadata = {
  title: "Spotify | Descubra Sua Trilha Sonora Perfeita",
  description:
    "Mergulhe em um mundo de música infinita. Crie playlists personalizadas, descubra novos artistas e aproveite uma experiência de áudio imersiva como nunca antes. Comece sua jornada musical agora com o Spotify.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <head>
        <link
          href="https://fonts.googleapis.com/icon?family=Material+Icons"
          rel="stylesheet"
        />
      </head>
      <body>
        <NavBar />

        {children}

        <Footer />
      </body>
    </html>
  );
}
