import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ClientProvider } from "@/providers/query-client-provider";
import { Toaster } from "sonner";
import { ModalsProvider } from "@/providers/modals-provider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Docuscan",
  description: "Contract's scanning web application integrated with AI."
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased font-sans`}
      >
        <Toaster />
        <ClientProvider>
          <ModalsProvider />
          {children}
        </ClientProvider>
      </body>
    </html>
  );
}
