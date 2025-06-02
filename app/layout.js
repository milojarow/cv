import "./globals.css";

export const metadata = {
  title: "Rolando Ahuja Martínez - CV",
  description: "Mechatronics Engineer | Process Optimization Specialist",
  keywords: "mechatronics engineer, manufacturing, process optimization, Rolando Ahuja",
  authors: [{ name: "Rolando Ahuja Martínez" }],
  openGraph: {
    title: "Rolando Ahuja Martínez - CV",
    description: "Mechatronics Engineer with experience in manufacturing process optimization",
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
