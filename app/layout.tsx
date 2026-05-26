import type { Metadata } from "next";
import "./globals.css";
import { business } from "@/data/business";

export const metadata: Metadata = {
  metadataBase: new URL("https://demo.nixo.local"),
  title: `${business.legalName} | Dentista em Montes Claros MG`,
  description: business.description,
  keywords: [
    "Sorridente Montes Claros",
    "Clínica odontológica Montes Claros",
    "Dentista no Centro de Montes Claros",
    "Implantes dentários Montes Claros",
    "Clareamento dental Montes Claros"
  ],
  openGraph: {
    title: `${business.legalName} | ${business.city}`,
    description: business.description,
    type: "website",
    locale: "pt_BR",
    images: [
      {
        url: "/assets/clinica-sorridente-maps.png",
        width: 1200,
        height: 900,
        alt: `Foto da ${business.legalName} no Google Maps`
      }
    ]
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
