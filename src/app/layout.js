// app/layout.js
import "./globals.css";

import Navbar from "@/app/(home)/_components/navbar/navbar";
import FooterResp from "@/app/(home)/_components/footer/FooterResp";
import SkipLinkClient from "@/app/(home)/_components/skiplink/SkipLinkClient";
import AutoBreadcrumbs from '@/app/(home)/_components/breadcrumbs/autoBreadcrumbs';

export const metadata = {
  title: "Domovská stránka | IDSK",
  description: "IDSK domovská stránka",
};

export default function RootLayout({ children }) {
  return (
    <html lang="sk">
      <body className="flex flex-col min-h-screen">
        <SkipLinkClient />
        <Navbar />
        <AutoBreadcrumbs />
        
        <div className="flex-grow">
          {children} 
        </div>
        
        <FooterResp />
      </body>
    </html>
  );
}