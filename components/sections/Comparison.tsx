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
                            なぜ、<br className="md:hidden" />Melody LINEなのか
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
                                    Melody LINE
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

                {/* Mobile: Card layout - Improved */}
                <div className="md:hidden space-y-6 px-4">
                    {comparisonItems.map((item, i) => (
                        <FadeIn key={i} direction="up" delay={i * 0.1}>
                            <GlassCard className="p-6">
                                {/* Item Label - 大きく目立たせる */}
                                <div className="mb-5 text-center">
                                    <h3 className="font-bold text-white text-xl mb-1">{item.label}</h3>
                                    <div className="w-12 h-1 bg-accent-gold/50 mx-auto mt-2 rounded-full"></div>
                                </div>

                                {/* Traditional - 控えめに */}
                                <div className="mb-5 p-4 rounded-lg bg-white/5 border border-white/10">
                                    <div className="flex items-center justify-between mb-2">
                                        <span className="text-xs text-gray-500 font-medium">一般的な教室</span>
                                        {item.traditionalBad && <X className="w-4 h-4 text-red-400" />}
                                    </div>
                                    <p className="text-gray-400 text-base line-through">{item.traditional}</p>
                                </div>

                                {/* Melody LINE - 強調 */}
                                <div className="p-5 rounded-lg bg-gradient-to-br from-accent-gold/20 to-accent-gold/10 border-2 border-accent-gold/50">
                                    <div className="flex items-center justify-between mb-3">
                                        <span className="text-xs bg-accent-gold text-primary-navy px-3 py-1 rounded-full font-bold">Melody LINE</span>
                                        <div className="bg-accent-gold rounded-full p-1.5">
                                            <Check className="w-4 h-4 text-primary-navy" />
                                        </div>
                                    </div>
                                    <p className="text-white font-bold text-lg leading-relaxed">{item.melodyLine}</p>
                                </div>
                            </GlassCard>
                        </FadeIn>
                    ))}
                </div>
            </div>
        </Section>
    );
}
