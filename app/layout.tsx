import type { Metadata } from "next";
import { Karla } from "next/font/google";
import "./globals.css";

const karla = Karla({
  variable: "--font-karla",
  subsets: ["latin"],
});

export const metadata = {
  title: 'Limited Edition Realty - Goa Investment Summary',
  description: 'Executive investment summary brochure for Limited Edition Realty (Goa).',
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${karla.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
