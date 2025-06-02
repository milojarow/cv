import "./globals.css";

export const metadata = {
  title: "Rolando Ahuja Martínez - CV",
  description: "Ingeniero Mecatrónico | Especialista en Optimización de Procesos",
  keywords: "ingeniero mecatrónico, manufactura, procesos, optimización, Rolando Ahuja",
  authors: [{ name: "Rolando Ahuja Martínez" }],
  openGraph: {
    title: "Rolando Ahuja Martínez - CV",
    description: "Ingeniero Mecatrónico con experiencia en optimización de procesos de manufactura",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="es" data-theme="corporate">
      <body>{children}</body>
    </html>
  );
}
