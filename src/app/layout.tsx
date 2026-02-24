import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Novae Mobility — Solutions digitales pour les professionnels de l'automobile",
  description:
    "Novae Mobility conçoit et développe des solutions innovantes pour accompagner les acteurs de l'automobile dans la gestion, la conformité et l'optimisation de leurs activités.",
  keywords: [
    "solutions automobile",
    "gestion automobile",
    "conformité automobile",
    "logiciel automobile France",
    "professionnel automobile",
    "concessionnaire",
    "garage",
    "import export automobile",
  ],
  authors: [{ name: "Novae Mobility" }],
  creator: "Novae Mobility",
  publisher: "Novae Mobility",
  openGraph: {
    type: "website",
    locale: "fr_FR",
    title: "Novae Mobility — Solutions digitales automobile",
    description:
      "Des solutions digitales pensées pour les professionnels de l'automobile en France.",
    siteName: "Novae Mobility",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <body>{children}</body>
    </html>
  );
}
