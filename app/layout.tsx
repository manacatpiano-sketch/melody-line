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
    title: "Melody LINE - あなただけの音楽室",
    description: "あなたの演奏動画を24時間以内にプロのピアノ講師が丁寧に添削。LINEで完結する非同期レッスンで、忙しい方でも自分のペースで確実に上達できます。初回体験レッスン¥1,480から。楽譜通り弾いているのに心に響かない演奏を、感動を呼ぶ演奏に変えましょう。",
    keywords: ["ピアノレッスン", "オンラインレッスン", "ピアノ添削", "LINEレッスン", "非同期レッスン", "ピアノ指導", "演奏添削", "音楽教室", "オンライン音楽教室"],
    authors: [{ name: "前野 真奈" }],
    creator: "Melody LINE",
    publisher: "Melody LINE",
    openGraph: {
        type: "website",
        locale: "ja_JP",
        url: "https://melodyline.jp/",
        siteName: "Melody LINE",
        title: "Melody LINE - あなただけの音楽室",
        description: "24時間以内にプロが添削するピアノレッスン。LINEで完結、初回¥1,480から。",
        images: [
            {
                url: "/og-image.png",
                width: 1200,
                height: 630,
                alt: "Melody LINE - ピアノオンラインレッスン",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "Melody LINE - あなただけの音楽室",
        description: "24時間以内にプロが添削するピアノレッスン。LINEで完結、初回¥1,480から。",
        images: ["/twitter-image.png"],
        creator: "@melodyline_jp",
    },
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            "max-video-preview": -1,
            "max-image-preview": "large",
            "max-snippet": -1,
        },
    },
    verification: {
        // Google Search Console verification (後で追加)
        // google: "your-verification-code",
    },
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
