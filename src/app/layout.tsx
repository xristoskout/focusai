import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Focus AI | Digital Excellence",
  description: "Modern websites, targeted digital marketing, and AI assistance solutions for your business with Focus AI.",
  icons: { icon: "/favicon.ico" },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <body>{children}</body>
    </html>
  );
}
