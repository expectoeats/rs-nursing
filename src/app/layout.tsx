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
  title: "Kautilya Study Circle | Best Competitive Exam Coaching Gonda UP",
  description:
    "Kautilya Study Circle — Gonda's #1 coaching center for SSC, Railway, UP Police, Bank exams. Expert faculty, complete library facility, 4.9 ⭐ rated. Opposite Bandhan Bank, Azad Nagar, Gonda.",
  keywords:
    "competitive exam coaching Gonda, SSC coaching Gonda, Railway coaching Gonda UP, UP Police coaching Gonda, Bank exam coaching Gonda, Kautilya Study Circle, best coaching Gonda UP",
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
