"use client";

import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import FadeIn from "@/components/ui/FadeIn";
import Image from "next/image";
import { Check } from "lucide-react";
import { trackEvent } from "@/lib/analytics/events";

export function Hero() {
    const benefits = [
        "顔出し不要・手元だけでOK",
        "24時間受付・原則24時間以内に返信",
        "登録無料｜しつこい勧誘なし"
    ];

    return (
        <Section fullWidth className="hidden md:flex min-h-[100dvh] items-center justify-center p-0 relative overflow-hidden">
            {/* Background Image */}
            <div className="absolute inset-0 z-0">
                <Image
                    src="/assets/hero.webp"
                    alt="ピアノとスマートフォン"
                    fill
                    className="object-cover"
                    priority
                />
                <div className="absolute inset-0 bg-primary-navy/70 mix-blend-multiply" />
                <div className="absolute inset-0 bg-black/40" />
                <div className="absolute inset-0 bg-cinematic-light opacity-30" />
            </div>

            {/* Content */}
            <div className="relative z-10 text-center px-4 md:px-6 max-w-4xl mx-auto w-full py-12 md:py-20">
                <FadeIn direction="up">
                    <div className="inline-block mb-6 px-5 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-accent-gold/50">
                        <span className="text-accent-gold font-bold text-sm">🎹 LINEで完結するピアノレッスン</span>
                    </div>
                    <h1 className="font-serif font-bold text-white mb-6 leading-tight">
                        <span className="block text-4xl lg:text-6xl mb-4">
                            あなたの練習に、<br />
                            「正解」をくれる。
                        </span>
                    </h1>
                    <p className="text-xl lg:text-2xl text-gray-100 mb-4 leading-relaxed">
                        LINE1通で届く、桐朋卒プロの添削。<br className="hidden lg:block" />
                        「今日やるべきこと」が24時間以内にわかります。
                    </p>
                    <p className="text-lg lg:text-xl bg-gradient-to-r from-accent-gold via-yellow-300 to-accent-gold bg-clip-text text-transparent font-bold mb-8">
                        100本のYouTube動画より、プロのたった1通のアドバイス。
                    </p>
                </FadeIn>

                {/* サービス概要 */}
                <FadeIn direction="up" delay={0.15}>
                    <div className="mb-8 px-6 py-4 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20 max-w-2xl mx-auto">
                        <p className="text-accent-gold font-bold text-lg mb-2">🎹 初回無料 ── まずは1曲、聴かせてください。</p>
                        <p className="text-base text-white font-medium leading-relaxed">
                            演奏動画を1本LINEで送るだけ。<br />
                            「ここを直せば一気に変わる」ポイントを
                            テキストで具体的にお伝えします。
                        </p>
                    </div>
                </FadeIn>

                {/* チェックリスト */}
                <FadeIn direction="up" delay={0.2}>
                    <div className="mb-10 flex justify-center gap-6">
                        {benefits.map((benefit, index) => (
                            <div key={index} className="flex items-center gap-2">
                                <Check className="w-5 h-5 text-accent-gold shrink-0" />
                                <span className="text-base text-gray-200">{benefit}</span>
                            </div>
                        ))}
                    </div>
                </FadeIn>

                {/* 講師ミニプロフィール */}
                <FadeIn direction="up" delay={0.25}>
                    <div className="flex items-center justify-center gap-4 mb-8">
                        <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-accent-gold shadow-lg shrink-0">
                            <Image
                                src="/assets/instructor.webp"
                                alt="前野 真奈"
                                width={64}
                                height={64}
                                className="w-full h-full object-cover"
                            />
                        </div>
                        <div className="text-left">
                            <p className="text-white font-bold text-base">前野 真奈</p>
                            <p className="text-gray-300 text-sm">桐朋学園大学 卒</p>
                            <p className="text-accent-gold text-xs mt-1 italic">「あなたの演奏、もっと好きになれますよ」</p>
                        </div>
                    </div>
                </FadeIn>

                {/* CTA */}
                <FadeIn direction="up" delay={0.3} className="flex flex-col items-center justify-center">
                    <a
                        href="https://lin.ee/pcfImvr"
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={() => trackEvent('line_button_click_fv')}
                    >
                        <Button size="xl" className="px-12 py-6 mb-4">
                            <div className="flex flex-col items-center gap-1">
                                <span className="text-lg font-bold">【初回無料】プロの添削を体験する</span>
                                <span className="text-sm opacity-90">＊ LINE友だち追加は1タップで完了</span>
                            </div>
                        </Button>
                    </a>
                </FadeIn>
            </div>
        </Section>
    );
}
