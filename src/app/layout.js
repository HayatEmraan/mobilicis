import "./globals.css";
import { Inter } from "next/font/google";
import AuthContext from "@/context/AuthContext";
import { Toaster } from "react-hot-toast";
import NProgressComponent from "@/components/nprocess/nprogress";
const inter = Inter({ subsets: ["latin"] });


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <NProgressComponent />
        <Toaster />
        <AuthContext>{children}</AuthContext>
      </body>
    </html>
  );
}
