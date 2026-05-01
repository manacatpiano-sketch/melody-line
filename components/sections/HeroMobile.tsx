"use client";

import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import FadeIn from "@/components/ui/FadeIn";
import Image from "next/image";
import { trackEvent } from "@/lib/analytics/events";

export function HeroMobile() {
    return (
        <Section fullWidth className="md:hidden min-h-[100svh] flex items-center justify-center p-0 relative overflow-hidden">
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
            <div className="relative z-10 text-center px-5 w-full">
                <FadeIn direction="up">
                    <h1 className="font-serif font-bold text-white mb-5 leading-tight">
                        <span className="block text-3xl mb-2">
                            あなたの練習に、
                        </span>
                        <span className="block text-2xl">
                            「正解」をくれる。
                        </span>
                    </h1>
                </FadeIn>

                <FadeIn direction="up" delay={0.1}>
                    <p className="text-base text-gray-100 mb-8 leading-relaxed px-2">
                        LINEで完結するピアノ添削サービス。<br />
                        桐朋学園大学卒のプロ講師が<br />
                        <span className="text-accent-gold font-bold">24時間以内</span>に丁寧な添削を返します。
                    </p>
                </FadeIn>

                {/* CTA */}
                <FadeIn direction="up" delay={0.15} className="flex flex-col items-center justify-center">
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

