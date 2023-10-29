import type { Metadata } from "next";
import { Inter } from "next/font/google";

import "@/lib/styles/globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Henrique GC",
  description: "Henrique GC's portfolio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <head>
        <link rel="icon" href="/brand/h-white.svg" />
      </head>
      <body className={`${inter.className} overflow-x-hidden`}>{children}</body>
    </html>
  );
}
