import type { Metadata } from "next";
import { Poppins, Allison } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  subsets: ["latin"],
  variable: "--font-poppins",
});

const allison = Allison({
  weight: ['400'],
  subsets: ["latin"],
  variable: "--font-allison",
});

export const metadata: Metadata = {
  title: "Homework Hub",
  description: "Listing App",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${poppins.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
