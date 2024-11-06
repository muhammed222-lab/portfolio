import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./global.css";




const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Muhammed Olayemi",
  description: "Full stack website and software developer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">

      <body className={inter.className}>

        {children}
      </body>
    </html>
  );
}
