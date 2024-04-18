import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Providers } from "./provider";
import { ModeToggle } from "@/components/mode-toggle";
import { Header } from "./header";
import NextTopLoader from 'nextjs-toploader';
import { Toaster } from "@/components/ui/toaster";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "PiarProgramming",
  description: "An application to help pair programming with random devs online",
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <Providers>
          <Toaster/>
      <NextTopLoader />
          <Header/>
          {/* <ModeToggle/> */}
          <div className="container mx-auto">{children}</div>
        </Providers>
      </body>
    </html>
  );
}
