import { Roboto } from "next/font/google";
import "./globals.css";

const roboto = Roboto({
  weight: ["300", "400", "500", "700", "900"],
  subsets: ['latin']
});
export const metadata = {
  title: "SICOESP",
  description: "Sistema integrado de convocatorias para personal de educación superior pedagógica",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body theme="light" className={roboto.className}>

          {children}

      </body>
    </html>

  );
}
