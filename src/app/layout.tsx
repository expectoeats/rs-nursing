import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-display",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-body",
});

export const metadata: Metadata = {
  title: "Rama Coaching Center And Computer Education Center | Best Coaching & Computer Education Fatehpur UP",
  description:
    "Rama Coaching Center And Computer Education Center — Fatehpur's trusted coaching for SSC, Railway, UP Police, Bank exams & computer education. Expert faculty, complete library facility, 4.9 ⭐ rated. UPHC, Andauli Puliya, Ghazipur Rd, Radha Nagar, Harihar Ganj, Fatehpur. Visit ramaedu.co.in",
  keywords:
    "competitive exam coaching Fatehpur, computer education Fatehpur, SSC coaching Fatehpur, Railway coaching Fatehpur UP, UP Police coaching Fatehpur, Bank exam coaching Fatehpur, Rama Coaching Center, best coaching Fatehpur UP, ramaedu.co.in",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${poppins.variable} ${inter.variable}`}>
      <body className="font-body bg-white text-navy antialiased">
        {children}
      </body>
    </html>
  );
}
