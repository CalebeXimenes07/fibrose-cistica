import type { Metadata } from "next";
import { Fraunces, Manrope } from "next/font/google";
import "./globals.css";

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--fonte-display",
  weight: ["400", "500", "600"],
});

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--fonte-corpo",
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Respirar & Cuidar | Fibrose Cística — Projeto de Extensão",
  description:
    "Informação confiável sobre Fibrose Cística: sintomas, diagnóstico, tratamento e pesquisas científicas. Um projeto de extensão universitária.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" className={`${fraunces.variable} ${manrope.variable}`}>
      <body>{children}</body>
    </html>
  );
}
