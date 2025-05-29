import "./globals.css";
import '../styles/index.css'


export const metadata = {
  title: "IDSK 3",
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
