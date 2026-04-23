"use client";

import { Hero } from "@/components/sections/Hero";
import { HeroMobile } from "@/components/sections/HeroMobile";
import { Problem } from "@/components/sections/Problem";
import { Solution } from "@/components/sections/Solution";
import { Proof } from "@/components/sections/Proof";
import { Pricing } from "@/components/sections/Pricing";
import { Closing } from "@/components/sections/Closing";
import { Header } from "@/components/ui/Header";

import { Instructor } from "@/components/sections/Instructor";
import { Testimonials } from "@/components/sections/Testimonials";
import { Process } from "@/components/sections/Process";
import { Comparison } from "@/components/sections/Comparison";
import { FAQ } from "@/components/sections/FAQ";
import { StickyCTA } from "@/components/ui/StickyCTA";
import { MidCTA } from "@/components/sections/MidCTA";
import { StructuredData } from "@/components/seo/StructuredData";
import { ExitIntentPopup } from "@/components/ui/ExitIntentPopup";
import { useEffect } from "react";
import { setupScrollTracking } from "@/lib/analytics/events";

export default function Home() {
    // スクロール計測のセットアップ
    useEffect(() => {
        const cleanup = setupScrollTracking();
        return cleanup;
    }, []);

    return (
        <main className="min-h-screen bg-primary-navy selection:bg-accent-gold selection:text-white">
            <StructuredData />
            <Header />

            {/* 1. ファーストビュー — 「もう一度、弾きたい」 */}
            <HeroMobile />
            <Hero />

            {/* 2. 悩みへの共感（PAS: Problem） */}
            <Problem />

            {/* 3. 解決策の提示（PAS: Solution） */}
            <Solution />

            {/* 4. 講師紹介（信頼構築の要 — 早めに見せる） */}
            <Instructor />

            {/* 5. 利用の流れ（撮影ポイント統合済み） */}
            <Process />

            {/* 6. フィードバックのイメージ（LINE風チャットUI） */}
            <Proof />

            {/* 中間CTA — フィードバック例を見た直後が最もCVが高い */}
            <MidCTA />

            {/* 7. こんな方におすすめ */}
            <Testimonials />

            {/* 8. 料金プラン */}
            <Pricing />

            {/* 8.5 選ばれる理由（料金を見た後の「迷い」を解消） */}
            <Comparison />

            {/* 9. よくあるご質問 */}
            <FAQ />

            {/* 10. 最終CTA */}
            <Closing />

            {/* UI: 追従CTA & 離脱防止ポップアップ */}
            <StickyCTA />
            <ExitIntentPopup />

            <footer className="bg-primary-navy text-white py-8 pb-36 md:pb-32 border-t border-accent-gold/20">
                <div className="container mx-auto px-4 text-center space-y-4">
                    <nav className="flex flex-wrap items-center justify-center gap-4 text-sm">
                        <a href="/tokutei" className="text-gray-400 hover:text-accent-gold transition-colors">
                            特定商取引法に基づく表記
                        </a>
                    </nav>
                    <p className="text-gray-500 text-xs">© 2026 Melody LINE. All Rights Reserved.</p>
                </div>
            </footer>
        </main>
    );
}
