import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "特定商取引法に基づく表記 - Melody LINE",
    description: "Melody LINEの特定商取引法に基づく表記ページ。販売業者名、代表者名、価格、支払方法、返品・キャンセルポリシーなどの法的情報を記載しています。",
    robots: {
        index: true,
        follow: false,
    },
};

export default function TokuteiLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
