// app/layout.js
import "./globals.css";
import '../styles/index.css';

// Tu importni komponenty. Uprav si cesty podľa toho, kde ich presne máš.
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
        
        {/* Toto flex-grow zabezpečí, že ak má stránka málo obsahu, Footer ostane dole */}
        <main className="flex-grow">
          {children}  {/* Sem sa automaticky natiahne obsah tvojich page.js */}
        </main>
        
        <FooterResp />
      </body>
    </html>
  );
}