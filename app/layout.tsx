import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Dog Gallery",
  description: "Showcase dogs from The Dog API",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <nav className="flex items-center justify-between p-4 bg-gray-800 text-white">
          <div className="text-lg font-bold">Dog Gallery</div>
          <div className="flex items-center gap-4">
            <ul className="flex space-x-4">
              <li>
                <a href="/" className="hover:text-gray-300">
                  Home
                </a>
              </li>
            </ul>
          </div>
        </nav>
                  
        {children}
      </body>
    </html>
  );
}
