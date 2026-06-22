import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "BioLink — бир шилтемеде баары",
  description:
    "Linktree сыяктуу bio-link баракчаңды бир нече мүнөттө түз — күчтүү даяр дизайндар менен.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ky">
      <body>{children}</body>
    </html>
  );
}
