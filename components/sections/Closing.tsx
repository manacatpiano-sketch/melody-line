"use client";

import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { GlassCard } from "@/components/ui/GlassCard";
import FadeIn from "@/components/ui/FadeIn";

export function Closing() {
    return (
        <Section className="bg-gradient-to-b from-primary-navy via-slate-900 to-primary-navy relative overflow-hidden py-24 md:py-40">
            {/* シネマティック背景 */}
            <div className="absolute inset-0 bg-cinematic-light opacity-60" />

            <div className="relative z-10 text-center max-w-3xl mx-auto px-4">
                <FadeIn direction="up">
                    <h2 className="text-2xl md:text-4xl lg:text-5xl font-serif font-bold text-white mb-8 leading-relaxed md:leading-tight">
                        あなたの演奏が変わるチャンスは、<br className="md:hidden" />たった1通のLINEから。
                    </h2>
                </FadeIn>

                <FadeIn direction="up" delay={0.2}>
                    <p className="text-gray-300 mb-10 text-base md:text-xl">
                        今なら、初回相談時の簡単なご質問は<span className="text-accent-gold font-bold">無料</span>でお答えします。
                    </p>
                </FadeIn>

                <FadeIn direction="up" delay={0.3}>
                    <GlassCard className="p-6 mb-8 inline-block">
                        <div className="space-y-2 text-sm md:text-base text-gray-300">
                            <p className="flex items-center gap-2 justify-center">
                                <span className="text-accent-gold">✓</span>
                                ご相談は無料です
                            </p>
                            <p className="flex items-center gap-2 justify-center">
                                <span className="text-accent-gold">✓</span>
                                無理な勧誘は一切ありません
                            </p>
                            <p className="flex items-center gap-2 justify-center">
                                <span className="text-red-400">⚠</span>
                                <span className="text-yellow-200 font-medium">月間の指導枠には限りがございます</span>
                            </p>
                        </div>
                    </GlassCard>
                </FadeIn>

                <FadeIn direction="up" delay={0.4}>
                    <Button
                        size="xl"
                        className="w-full md:w-auto mb-4"
                    >
                        <div className="flex flex-col items-center gap-1">
                            <span className="text-lg font-bold">上達の第一歩を踏み出す →</span>
                            <span className="text-xs opacity-90">LINE登録→無料相談→最短24時間で変化</span>
                        </div>
                    </Button>

                    <p className="text-sm text-gray-200 mt-3">
                        ※登録は無料です
                    </p>
                </FadeIn>
            </div>
        </Section>
    );
}
