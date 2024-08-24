import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/styles/globals.css";
import { Header } from "@/components/header";
import { Canvas } from "@/components/canvas";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Portfolio - Didier",
  description: "My personal portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className=" antialiased flex min-h-screen bg-[radial-gradient(circle_at_bottom_left,_var(--tw-gradient-stops))] from-[#020005] via-[#060607] to-black">
        <div className="fixed -z-10 h-full w-full backdrop-blur-lg"></div>
        <Canvas/>
        <Header />
        <main className="flex-1 px-16 pt-12 lg:px-40">{children}</main>
      </body>
    </html>
  );
}
