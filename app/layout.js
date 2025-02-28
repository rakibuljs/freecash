import { Inter } from "next/font/google";
import "./globals.css";
import PopunderAndSocialBar from "@/components/PopunderAndSocialBar";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Earn Free Cash",
  description: "Claim Now Free $100 USDT",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>
        <PopunderAndSocialBar />
        {children}
      </body>
    </html>
  );
}
