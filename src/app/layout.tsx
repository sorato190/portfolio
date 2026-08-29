import type { Metadata } from "next";
import { Inter, Fraunces } from "next/font/google";
import "./globals.css";
import SideNav from "@/components/layouts/sideNav";
import SceneBackground from "@/components/three/SceneBackground";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });
const fraunces = Fraunces({
  subsets: ["latin"],
  weight: ["500", "600"],
  style: ["normal", "italic"],
  variable: "--font-display",
});

export const metadata: Metadata = {
  title: "Sorato Ozaki | Portfolio",
  description:
    "Sorato Ozaki のポートフォリオサイト。インフラ・クラウドからフルスタック開発までのスキルと制作サイトを紹介しています。",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="ja"
      className={`scroll-smooth ${inter.variable} ${fraunces.variable}`}
    >
      <body className="min-h-screen bg-ink font-sans text-cocoa antialiased">
        <SceneBackground />
        <SideNav />
        <div className="sm:pl-64">
          <main
            id="content"
            className="mx-auto flex min-h-screen w-full max-w-5xl flex-col gap-24 px-5 py-20 sm:px-8 lg:py-24"
          >
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}
