import { ReactNode } from "react";
import "./globals.css";

import {
  Roboto_Flex as Roboto,
  Bai_Jamjuree as BaiJamjuree,
} from "next/font/google";
import EmptyMemories from "@/components/EmptyMemories";
import Hero from "@/components/Hero";
import Profile from "@/components/Profile";

import { cookies } from "next/headers";
import Sign from "@/components/Sign";
import Home from "./page";
import NewMemory from "./memories/new/page";

const roboto = Roboto({ subsets: ["latin"], variable: "--font-roboto" });

const baiJamjuree = BaiJamjuree({
  subsets: ["latin"],
  variable: "--font-bai-jamjuree",
  weight: "700",
});

export const metadata = {
  title: "Spacetime",
  description: "Suas memórias sendo eternizadas",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  const isAuthenticated = cookies().has("token");

  return (
    <html lang="pt-BR">
      <body
        className={`${roboto.variable} ${baiJamjuree.variable} bg-gray-900 font-sans text-gray-100`}
      >
        <main className="grid min-h-screen grid-cols-2">
          {/* left */}
          <div className="relative flex flex-col items-start justify-between overflow-hidden border-r border-white/10 bg-[url(../assets/bg-stars.svg)] bg-cover px-28 py-16">
            {/* blur */}
            <div className="absolute right-0 top-1/2 h-[288px] w-[526px] -translate-y-1/2 translate-x-1/2 rounded-full bg-purple-700 opacity-50 blur-full" />

            <div className="absolute bottom-0 right-2 top-0 w-2 bg-stripes" />

            {isAuthenticated ? <Profile /> : <Sign />}

            <Hero />

            <div />
          </div>

          {/* right */}
          <div className="flex max-h-screen flex-col overflow-y-scroll bg-[url(../assets/bg-stars.svg)] bg-cover">
            {isAuthenticated ? <NewMemory /> : children}
          </div>
        </main>
      </body>
    </html>
  );
}
