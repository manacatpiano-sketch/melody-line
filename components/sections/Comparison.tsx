"use client";

import { Section } from "@/components/ui/Section";
import { GlassCard } from "@/components/ui/GlassCard";
import FadeIn from "@/components/ui/FadeIn";
import { Check, X } from "lucide-react";

export function Comparison() {
    const comparisonItems = [
        {
            label: "時間の制約",
            traditional: "毎週決まった時間",
            melodyLine: "24時間いつでも",
            traditionalBad: true
        },
        {
            label: "アドバイスの形",
            traditional: "その場限り（忘れる）",
            melodyLine: "楽譜に残る・見返せる",
            traditionalBad: false
        },
        {
            label: "費用",
            traditional: "月謝 10,000円〜",
            melodyLine: "1回 1,480円〜",
            traditionalBad: false
        }
    ];

    return (
        <Section className="bg-gradient-to-b from-primary-navy to-slate-900 relative overflow-hidden py-20 md:py-32">
            {/* シネマティック背景 */}
            <div className="absolute inset-0 bg-cinematic-light opacity-40" />

            <div className="relative z-10">
                <FadeIn direction="up">
                    <div className="text-center mb-12 md:mb-16">
                        <h2 className="text-3xl md:text-4xl font-serif font-bold text-white mb-4">
                            なぜ、Melody Lineなのか
                        </h2>
                        <p className="text-gray-300">一般的な教室との違い</p>
                    </div>
                </FadeIn>

                {/* Desktop: Table layout */}
                <div className="hidden md:block max-w-5xl mx-auto">
                    <FadeIn direction="up" delay={0.2} fullWidth>
                        <GlassCard className="p-0 overflow-hidden">
                            <div className="grid grid-cols-3 gap-0">
                                {/* Headers */}
                                <div className="bg-white/5 p-6 flex items-center justify-center font-bold text-gray-400 border-b border-white/10">
                                    項目
                                </div>
                                <div className="bg-white/5 p-6 flex flex-col items-center justify-center font-bold text-gray-400 border-l border-b border-white/10">
                                    一般的なピアノ教室
                                </div>
                                <div className="bg-accent-gold/20 p-6 flex flex-col items-center justify-center font-bold text-accent-gold relative border-l border-b border-accent-gold/50">
                                    Melody Line
                                    <div className="absolute top-2 right-2 bg-accent-gold text-primary-navy text-xs px-2 py-0.5 font-bold rounded">RECOMMEND</div>
                                </div>

                                {/* Rows */}
                                {comparisonItems.map((item, i) => (
                                    <>
                                        <div key={`label-${i}`} className="p-6 bg-white/5 border-b border-white/5 flex items-center justify-center font-bold text-white">
                                            {item.label}
                                        </div>
                                        <div key={`trad-${i}`} className="p-6 bg-white/5 border-l border-b border-white/10 flex items-center justify-center text-gray-400">
                                            <div className="flex flex-col items-center gap-2">
                                                {item.traditionalBad && <X className="w-5 h-5 text-red-400" />}
                                                <span>{item.traditional}</span>
                                            </div>
                                        </div>
                                        <div key={`ml-${i}`} className="p-6 bg-accent-gold/10 border-l border-b border-accent-gold/20 flex items-center justify-center text-white font-bold">
                                            <div className="flex flex-col items-center gap-2">
                                                <div className="bg-accent-gold rounded-full p-1.5">
                                                    <Check className="w-4 h-4 text-primary-navy" />
                                                </div>
                                                <span className="text-accent-gold">{item.melodyLine}</span>
                                            </div>
                                        </div>
                                    </>
                                ))}
                            </div>
                        </GlassCard>
                    </FadeIn>
                </div>

                {/* Mobile: Card layout */}
                <div className="md:hidden space-y-5 px-4">
                    {comparisonItems.map((item, i) => (
                        <FadeIn key={i} direction="up" delay={i * 0.1}>
                            <GlassCard className="p-5">
                                {/* Item Label */}
                                <div className="mb-4 pb-3 border-b border-white/20">
                                    <span className="font-bold text-white text-base">{item.label}</span>
                                </div>

                                {/* Traditional - smaller, muted */}
                                <div className="flex items-center gap-3 text-gray-400 text-sm mb-4 pb-4 border-b border-white/10">
                                    {item.traditionalBad && <X className="w-4 h-4 shrink-0 text-red-400" />}
                                    <span className="line-through">{item.traditional}</span>
                                    <span className="text-xs bg-white/10 px-2 py-1 rounded ml-auto shrink-0">一般的</span>
                                </div>

                                {/* Melody Line - prominent */}
                                <div className="flex items-center gap-3">
                                    <div className="bg-accent-gold rounded-full p-2 shrink-0">
                                        <Check className="w-4 h-4 text-primary-navy" />
                                    </div>
                                    <span className="text-white font-bold text-lg">{item.melodyLine}</span>
                                    <span className="text-xs bg-accent-gold text-primary-navy px-2 py-1 rounded ml-auto shrink-0 font-bold">Melody Line</span>
                                </div>
                            </GlassCard>
                        </FadeIn>
                    ))}
                </div>
            </div>
        </Section>
    );
}
