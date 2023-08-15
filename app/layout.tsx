import { ReactNode } from "react";
import NavBar from "@/components/NavBar";
import "./globals.css";
import { exo2, orbitron } from "./fonts";

interface LayoutProps {
  children: ReactNode;
}

export default function RootLayout({ children }: LayoutProps) {
  return (
    <html lang="en" className={`${exo2.variable} ${orbitron.variable}`}>
      <body className="bg-orange-50 flex flex-col min-h-screen px-4 py-2">
        <header>
          <NavBar />
        </header>
        <main className="grow py-3">{children}</main>
        <footer className="border-t py-3 text-center text-xs text-slate-500">
          Games data and images courtesy of
          <a
            href="https://rawg.io/"
            target="_blank"
            className="text-orange-800 hover:font-bold"
          >
            {" "}
            RAWG
          </a>
        </footer>
      </body>
    </html>
  );
}
