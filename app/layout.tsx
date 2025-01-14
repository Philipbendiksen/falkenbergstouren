import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Header from "../app/components/Header";
import Footer from "./components/footer";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "tourdefalkenberg",
  description: "tourdefalkenberg",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <html lang="en">
        <body className={inter.className}>
          <div className="min-h-screen flex flex-col">
            <Header />
            {children}
            <div className="mt-auto">
              <Footer />
            </div>
          </div>
        </body>
      </html>
    </>
  );
}
