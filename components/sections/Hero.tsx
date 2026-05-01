"use client";

import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import FadeIn from "@/components/ui/FadeIn";
import Image from "next/image";
import { trackEvent } from "@/lib/analytics/events";

export function Hero() {
    return (
        <Section fullWidth className="hidden md:flex min-h-[100dvh] items-center justify-center p-0 relative overflow-hidden">
            {/* Background Image */}
            <div className="absolute inset-0 z-0">
                <Image
                    src="/assets/hero.png"
                    alt="グランドピアノの鍵盤"
                    fill
                    className="object-cover"
                    priority
                />
                <div className="absolute inset-0 bg-primary-navy/50 mix-blend-multiply" />
                <div className="absolute inset-0 bg-black/30" />
            </div>

            {/* Content */}
            <div className="relative z-10 text-center px-4 md:px-6 max-w-4xl mx-auto w-full py-12 md:py-20">
                <FadeIn direction="up">
                    <h1 className="font-serif font-bold text-white mb-6 leading-tight">
                        <span className="block text-4xl lg:text-6xl mb-4">
                            あなたの練習に、<br />
                            「正解」をくれる。
                        </span>
                    </h1>
                    <p className="text-xl lg:text-2xl text-gray-100 mb-10 leading-relaxed">
                        LINEで完結するオンラインピアノ添削サービス。<br className="hidden lg:block" />
                        演奏動画を送るだけで、桐朋学園大学卒のプロ講師が<br className="hidden lg:block" />
                        <span className="text-accent-gold font-bold">24時間以内</span>に丁寧な添削を返します。
                    </p>
                </FadeIn>

                {/* CTA */}
                <FadeIn direction="up" delay={0.15} className="flex flex-col items-center justify-center">
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
