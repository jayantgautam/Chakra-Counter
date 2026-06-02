import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { AppProviders } from "@/providers/AppProviders";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Yendou Counter",
  description: "A polished counter experience for the Yendou SWE assignment.",
};

type RootLayoutProps = {
  children: React.ReactNode;
};

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en" className={inter.variable}>
      <body>
        <AppProviders>{children}</AppProviders>
      </body>
    </html>
  );
}
