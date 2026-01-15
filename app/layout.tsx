import type { Metadata, Viewport } from "next";
import { Noto_Serif_JP, Noto_Sans_JP } from "next/font/google";
import "./globals.css";

export const viewport: Viewport = {
    width: "device-width",
    initialScale: 1,
    maximumScale: 1,
};

const notoSerif = Noto_Serif_JP({
    subsets: ["latin"],
    weight: ["400", "700"],
    variable: "--font-serif",
});
const notoSans = Noto_Sans_JP({
    subsets: ["latin"],
    weight: ["400", "500", "700"],
    variable: "--font-sans",
});

export const metadata: Metadata = {
    title: "Melody Line - あなただけの音楽室",
    description: "ピアノ学習者向けLINE非同期レッスンサービス",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="ja">
            <body className={`${notoSerif.variable} ${notoSans.variable} font-sans text-text-body bg-bg-cream antialiased`}>
                {children}
            </body>
        </html>
    );
}
