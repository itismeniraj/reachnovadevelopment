import type { Metadata } from "next";
import { Poppins, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "./components/layout/Header";
import Cursor from "./components/Cursor";
import Footer from "./components/layout/Footer";
import { ThemeProvider } from "./components/ThemeProvider";


const poppins = Poppins({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-poppins",
  weight: ["300", "400", "500", "600", "700", "800"],
});



export const metadata: Metadata = {
  title: "ReachNova - Consultancy & IT Solutions",
  description:
    "ReachNova Consultancy Website built with Next.js and TypeScript",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html suppressHydrationWarning
      lang="en"
      className={`${poppins.variable}  h-full antialiased`}
    >
      <body className="bg-white text-slate-800 antialiased">

        <ThemeProvider>

        <Cursor />
        
        <Header />
        {children}
        <Footer />

        </ThemeProvider>
        
      </body>
    </html>
  );
}