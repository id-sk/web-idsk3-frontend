import "./globals.css";
import '../styles/index.css'


export const metadata = {
  title: "IDSK v3",
  description: "IDSK Frontend",
};

export default function RootLayout({ children }) {
  return (
    <html lang="sk">
      <body>
        {children}  
      </body>
    </html>
  );
}
