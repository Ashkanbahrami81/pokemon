"use client";

import { Inter } from "next/font/google";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import "./globals.css";
import { Navbar } from "@/components/layout";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const queryClient = new QueryClient();

  return (
    <html lang="en">
      <body className={`${inter.className} bg-black`}>
        <QueryClientProvider client={queryClient}>
          <Navbar />
          <div className="pt-14 md:pt-16"></div>
          {children}
        </QueryClientProvider>
      </body>
    </html>
  );
}
