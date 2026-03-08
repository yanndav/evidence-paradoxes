import "./globals.css";
import type { Metadata } from "next";
import { Inter, Epilogue } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  weight: ["100", "200", "400", "500", "600", "700"],
  variable: "--font-sans", // variable CSS pour body
});

const epilogue = Epilogue({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-title", // variable CSS pour titres
});

export const metadata: Metadata = {
  title: "evidence paradoxes",
  description:
    "A personal blog about some challenges of evidence-based policies",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${epilogue.variable}`}>
        {children}
      </body>
    </html>
  );
}
