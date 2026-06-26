import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "KRICT 한국화학연구원",
  description:
    "한국화학연구원(KRICT) - 화학으로 더 나은 미래를 여는 정부출연연구기관",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" className="h-full antialiased">
      <body className="min-h-full flex flex-col bg-white text-[#1a1a1a]">
        {children}
      </body>
    </html>
  );
}
