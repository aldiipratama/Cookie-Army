import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/Providers/ThemeProvider";
import TopLoader from "@/components/TopLoader";
import QueryProvider from "@/components/Providers/QueryProvider";
import { ToastContainer as Toaster } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap'
})

export const metadata: Metadata = {
  title: "ShareFly",
  description: "This website media social from Cookie-Army",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`antialiased ${inter.className} scrollbar scrollbar-thumb-foreground scrollbar-w-2 scrollbar-thumb-rounded-lg`}
      >
        <QueryProvider>
          <ThemeProvider attribute={'class'} defaultTheme="system" enableSystem>
            <TopLoader />
            {children}
            <Toaster />
          </ThemeProvider>
        </QueryProvider>
      </body>
    </html>
  );
}
