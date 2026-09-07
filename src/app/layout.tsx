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
  title: "Lincoln Coaching Centre | Best Coaching Pilibhit UP – Class 1 to 12 & B.Sc",
  description:
    "Lincoln Coaching Centre — Pilibhit's trusted coaching for Class 1st to 10th (All Subjects), Class 11th–12th (PCMB & Agriculture) & B.Sc (PCM/ZBC). CBSE, ICSE, U.P. Board. Free demo classes. JRRF+267, Officer's Colony, Pilibhit. Call: 91 96275 97251.",
  keywords:
    "coaching Pilibhit, Lincoln Coaching Centre, Class 1 to 10 coaching Pilibhit, Class 11 12 PCMB coaching, BSc coaching Pilibhit, CBSE ICSE UP board coaching, best coaching Pilibhit UP",
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
