// app/layout.js
import "./globals.css";
import '../styles/index.css';

import Navbar from "@/app/(home)/_components/navbar/navbar";
import FooterResp from "@/app/(home)/_components/footer/FooterResp";
import SkipLinkClient from "@/app/(home)/_components/skiplink/SkipLinkClient";

export const metadata = {
  title: "IDSK 3",
  description: "IDSK Frontend",
};

export default function RootLayout({ children }) {
  return (
    <html lang="sk">
      <body className="flex flex-col min-h-screen">
        <SkipLinkClient />
        <Navbar />
        
        <div className="flex-grow">
          {children} 
        </div>
        
        <FooterResp />
      </body>
    </html>
  );
}