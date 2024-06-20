import { Source_Sans_3 } from "next/font/google";
import "./globals.css";
import '../styles/index.css'


const sourceSansPro = Source_Sans_3({ subsets: ["latin"] });

export const metadata = {
  title: "IDSK v3",
  description: "ID-SK Frontend",
};

export default function RootLayout({ children }) {
  return (
    <html lang="sk">
      <body className={sourceSansPro.className}>
        {children}  
      </body>
    </html>
  );
}
