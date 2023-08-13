"use client";
import "./globals.css";
import { Inter } from "next/font/google";
import { AppProgressBar as ProgressBar } from "next-nprogress-bar";
import AuthContext from "@/context/AuthContext";
import { Toaster } from "react-hot-toast";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ProgressBar
          height="4px"
          color="#401c2c"
          options={{ showSpinner: false }}
          shallowRouting
        />
        <Toaster />
        <AuthContext>{children}</AuthContext>
      </body>
    </html>
  );
}
