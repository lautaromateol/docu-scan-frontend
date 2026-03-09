import type { Metadata } from "next";
import { DM_Sans, DM_Serif_Display } from "next/font/google";
import "./globals.css";
import { ClientProvider } from "@/providers/query-client-provider";
import { Toaster } from "sonner";
import { ModalsProvider } from "@/providers/modals-provider";

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const dmSerifDisplay = DM_Serif_Display({
  variable: "--font-dm-serif",
  subsets: ["latin"],
  weight: ["400"],
  display: "swap",
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
        className={`${dmSans.variable} ${dmSerifDisplay.variable} antialiased font-sans`}
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
