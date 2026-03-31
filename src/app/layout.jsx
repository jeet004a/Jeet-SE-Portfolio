import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/context/ThemeContext";
import Script from "next/script";
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Jeet Wasti",
  description: "Jeet Wasti",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>

        <Script src="https://unpkg.com/sheryjs/dist/Shery.js" strategy="afterInteractive" />

        <Script
          src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/ScrollTrigger.min.js"
          strategy="afterInteractive"
        />

        <Script
          src="https://cdn.jsdelivr.net/gh/automat/controlkit.js@master/bin/controlKit.min.js"
          strategy="afterInteractive"
        />
        <ThemeProvider>
          <div className="container">

            {children}

          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
