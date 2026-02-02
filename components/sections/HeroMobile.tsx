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
        "受付は24時間／返信は原則24時間以内"
    ];

    return (
        <Section fullWidth className="md:hidden h-[100svh] flex items-center justify-center p-0 relative overflow-hidden pb-[80px]">
            {/* Background Image */}
            <div className="absolute inset-0 z-0">
                <Image
                    src="/assets/hero.png"
                    alt="Piano and smartphone"
                    fill
                    className="object-cover"
                    priority
                />
                {/* シネマティック・ブレンドオーバーレイ */}
                <div className="absolute inset-0 bg-primary-navy/70 mix-blend-multiply" />
                <div className="absolute inset-0 bg-black/40" />
                <div className="absolute inset-0 bg-cinematic-light opacity-30" />
            </div>

            {/* Content */}
            <div className="relative z-10 text-center px-4 w-full h-full flex flex-col justify-center">
                <FadeIn direction="up">
                    <p className="text-accent-gold font-bold text-sm mb-3 tracking-widest animate-gentle-glow">
                        ＼ 今月限定！先着10名様 キャンペーン ／
                    </p>
                    <div className="mb-4">
                        <p className="text-2xl font-bold text-white mb-2 leading-tight">
                            LINEで動画を送るだけ♪
                        </p>
                        <p className="text-xl font-bold text-accent-gold">
                            あなたの演奏をプロが添削！
                        </p>
                    </div>
                    <h1 className="font-serif font-bold text-white mb-4 leading-tight">
                        <span className="block text-2xl mb-2">
                            ピアノLINEレッスン
                        </span>
                        <span className="block text-xl bg-gradient-to-r from-accent-gold via-yellow-300 to-accent-gold bg-clip-text text-transparent">
                            <span className="text-accent-gold">無料体験</span>（ワンフレーズ添削1回）
                        </span>
                    </h1>
                </FadeIn>

                <FadeIn direction="up" delay={0.1}>
                    <p className="text-base text-gray-100 mb-4 leading-relaxed px-2">
                        短い動画でOK。<br />
                        直すべき1点と今日の練習がわかります。
                    </p>
                </FadeIn>

                {/* サービス概要 */}
                <FadeIn direction="up" delay={0.15}>
                    <div className="mb-6 px-4 py-3 bg-white/10 backdrop-blur-sm rounded-lg border border-white/20 max-w-sm mx-auto">
                        <p className="text-sm text-white font-medium leading-relaxed">
                            プロのピアノ講師による個別添削。<br />
                            LINEで動画を送るだけ、添削がすぐ届きます。
                        </p>
                    </div>
                </FadeIn>

                {/* Benefits - 3つの箇条書き */}
                <FadeIn direction="up" delay={0.2}>
                    <div className="backdrop-blur-sm bg-white/10 rounded-xl p-4 mb-6 mx-auto max-w-sm border border-white/20">
                        <ul className="space-y-3 text-left">
                            {benefits.map((benefit, i) => (
                                <li key={i} className="flex items-start gap-2 text-sm text-white">
                                    <Check className="w-4 h-4 text-accent-gold mt-0.5 shrink-0" />
                                    <span>{benefit}</span>
                                </li>
                            ))}
                        </ul>
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
                                <span className="text-base font-bold">無料添削の枠を確保する</span>
                                <span className="text-xs opacity-90">（LINE追加）</span>
                            </div>
                        </Button>
                    </a>
                    <p className="text-xs text-gray-300 font-medium px-4">
                        登録無料｜しつこい配信なし
                    </p>
                </FadeIn>
            </div>
        </Section>
    );
}
