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
  title: "English Master Institute | Best English Coaching Mathura – Spoken English, IELTS, Grammar",
  description:
    "English Master Institute — Mathura's premier English coaching for Spoken English, IELTS, Basic to Advanced English, Grammar & Communication Skills. Advanced institute janakpuri colony, opposite ambedkar park, Aurangabad township, Mathura, Uttar Pradesh 281006. Call: 09761123527.",
  keywords:
    "English coaching Mathura, English Master Institute, Spoken English Mathura, IELTS coaching Mathura, English grammar classes, spoken English classes Mathura, best English coaching Mathura UP",
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
