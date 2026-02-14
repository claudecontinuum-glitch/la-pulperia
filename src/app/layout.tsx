import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "La Pulpería - Tu negocio en el mapa",
  description: "La plataforma del comercio hondureño. Registrá tu negocio gratis y conectá con clientes por WhatsApp.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={`${inter.className} bg-pulp-cream min-h-screen`}>
        <Navbar />
        <main className="min-h-[calc(100vh-64px-120px)]">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
