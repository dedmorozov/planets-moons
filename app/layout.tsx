import type { Metadata } from "next";
import "./globals.scss";

export const metadata: Metadata = {
  title: "Planets & Moons",
  description: "Test task with rings around planets",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
