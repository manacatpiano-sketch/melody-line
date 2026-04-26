"use client";

import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import FadeIn from "@/components/ui/FadeIn";
import Image from "next/image";
import { Check } from "lucide-react";
import { trackEvent } from "@/lib/analytics/events";

export function HeroMobile() {
    const benefits = [
        "顔出し不要・手元だけでOK",
        "24時間受付・原則24時間以内に返信",
        "登録無料｜しつこい勧誘なし"
    ];

    return (
        <Section fullWidth className="md:hidden min-h-[100svh] flex items-center justify-start p-0 relative overflow-hidden pb-[80px]">
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
            <div className="relative z-10 text-center px-4 w-full flex flex-col justify-start pt-16">
                <FadeIn direction="up">
                    <div className="inline-block mb-4 px-4 py-1.5 bg-white/10 backdrop-blur-sm rounded-full border border-accent-gold/50">
                        <span className="text-accent-gold font-bold text-xs">🎹 LINEで完結するピアノレッスン</span>
                    </div>
                    <h1 className="font-serif font-bold text-white mb-4 leading-tight">
                        <span className="block text-3xl mb-2">
                            あなたの練習に、
                        </span>
                        <span className="block text-2xl">
                            「正解」をくれる。
                        </span>
                    </h1>
                </FadeIn>

                <FadeIn direction="up" delay={0.1}>
                    <p className="text-base text-gray-100 mb-2 leading-relaxed px-2">
                        LINE1通で届く、桐朋卒プロの添削。<br />「今日やるべきこと」が24時間以内にわかります。
                    </p>
                    <p className="text-base bg-gradient-to-r from-accent-gold via-yellow-300 to-accent-gold bg-clip-text text-transparent font-bold mb-4 px-2">
                        100本のYouTube動画より、<br />プロのたった1通のアドバイス。
                    </p>
                </FadeIn>

                {/* サービス概要 */}
                <FadeIn direction="up" delay={0.15}>
                    <div className="mb-4 px-4 py-3 bg-white/10 backdrop-blur-sm rounded-lg border border-white/20 max-w-sm mx-auto">
                        <p className="text-accent-gold font-bold text-sm mb-1">🎹 初回無料 ── まずは1曲、聴かせてください。</p>
                        <p className="text-sm text-white font-medium leading-relaxed">
                            演奏動画を1本LINEで送るだけ。<br />
                            「ここを直せば一気に変わる」ポイントを
                            テキストでお伝えします。
                        </p>
                    </div>
                </FadeIn>

                {/* Benefits */}
                <FadeIn direction="up" delay={0.2}>
                    <div className="backdrop-blur-sm bg-white/10 rounded-xl p-4 mb-4 mx-auto max-w-sm border border-white/20">
                        <ul className="space-y-2 text-left">
                            {benefits.map((benefit, i) => (
                                <li key={i} className="flex items-start gap-2 text-sm text-white">
                                    <Check className="w-4 h-4 text-accent-gold mt-0.5 shrink-0" />
                                    <span>{benefit}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </FadeIn>

                {/* 講師ミニプロフィール */}
                <FadeIn direction="up" delay={0.25}>
                    <div className="flex items-center justify-center gap-3 mb-4">
                        <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-accent-gold shadow-lg shrink-0">
                            <Image
                                src="/assets/instructor.webp"
                                alt="前野 真奈"
                                width={48}
                                height={48}
                                className="w-full h-full object-cover"
                            />
                        </div>
                        <div className="text-left">
                            <p className="text-white font-bold text-sm">前野 真奈</p>
                            <p className="text-gray-300 text-xs">桐朋学園大学 卒</p>
                            <p className="text-accent-gold text-xs mt-0.5 italic">「あなたの演奏、もっと好きになれますよ」</p>
                        </div>
                    </div>
                </FadeIn>

                {/* CTA */}
                <FadeIn direction="up" delay={0.3} className="flex flex-col items-center justify-center">
                    <a
                        href="https://lin.ee/pcfImvr"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full px-4"
                        onClick={() => trackEvent('line_button_click_fv')}
                    >
                        <Button size="xl" className="w-full mb-3 py-6">
                            <div className="flex flex-col items-center gap-1">
                                <span className="text-base font-bold">【初回無料】プロの添削を体験する</span>
                                <span className="text-xs opacity-90">＊ LINE友だち追加は1タップで完了</span>
                            </div>
                        </Button>
                    </a>
                </FadeIn>
            </div>
        </Section>
    );
}
