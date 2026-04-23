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
                        あなたの演奏が<br />変わるチャンスは、<br />たった1通のLINEから。
                    </h2>
                </FadeIn>

                <FadeIn direction="up" delay={0.15}>
                    <p className="text-gray-400 text-base md:text-lg mb-6 leading-relaxed italic">
                        完璧じゃなくていい。<br className="md:hidden" />今のあなたの演奏を、聴かせてください。
                    </p>
                </FadeIn>

                <FadeIn direction="up" delay={0.25}>
                    <p className="text-gray-300 mb-10 text-base md:text-xl">
                        初回の添削は<span className="text-accent-gold font-bold">無料</span>。<br className="md:hidden" />まずは1曲、聞かせてください。
                    </p>
                </FadeIn>

                <FadeIn direction="up" delay={0.3}>
                    <GlassCard className="p-6 mb-8 inline-block">
                        <div className="space-y-2 text-sm md:text-base text-gray-300">
                            <p className="flex items-center gap-2 justify-center">
                                <span className="text-accent-gold">✓</span>
                                初回の添削は無料です
                            </p>
                            <p className="flex items-center gap-2 justify-center">
                                <span className="text-accent-gold">✓</span>
                                無理な勧誘は一切ありません
                            </p>
                            <p className="flex items-center gap-2 justify-center">
                                <span className="text-accent-gold">✓</span>
                                合わなければいつでも解約OK
                            </p>
                            <div className="border-t border-white/10 pt-3 mt-3">
                                <p className="flex items-center gap-2 justify-center">
                                    <span className="text-red-400">⚠</span>
                                    <span className="text-yellow-200 font-bold">毎月の指導枠は5名限定です</span>
                                </p>
                            </div>
                        </div>
                    </GlassCard>
                </FadeIn>

                <FadeIn direction="up" delay={0.4}>
                    <a href="https://lin.ee/pcfImvr" target="_blank" rel="noopener noreferrer" className="inline-block">
                        <Button
                            size="xl"
                            className="w-full md:w-auto mb-4"
                        >
                            <div className="flex flex-col items-center gap-1">
                                <span className="text-lg font-bold">【初回無料】プロの添削を体験する</span>
                                <span className="text-xs opacity-90">＊ LINE友だち追加は1タップで完了</span>
                            </div>
                        </Button>
                    </a>

                    <div className="mt-6 text-sm text-gray-400 space-y-1">
                        <p>① LINEで友だち追加 → ② 「添削希望」と送信 → ③ 24時間以内に講師からご連絡</p>
                    </div>
                </FadeIn>
            </div>
        </Section>
    );
}
