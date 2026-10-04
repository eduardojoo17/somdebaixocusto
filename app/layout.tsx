import type { Metadata } from "next";
import { Oswald, Poppins } from "next/font/google";
import "./globals.css";

const oswald = Oswald({
  variable: "--font-oswald",
  subsets: ["latin"],
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://SEU-PROJETO.vercel.app"),
  title: "Som de Baixo Custo | Presets gratuitos para baixo",
  description:
    "Presets e IRs gratuitos para pedaleiras de baixo (Tank B, Zoom, Valeton), com testes e dicas de timbre sem gastar uma fortuna.",
  openGraph: {
    title: "Som de Baixo Custo",
    description: "Presets gratuitos e dicas de timbre para baixistas.",
    images: ["/logo.png"],
    type: "website",
    locale: "pt_BR",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="pt-BR"
      className={`${oswald.variable} ${poppins.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
