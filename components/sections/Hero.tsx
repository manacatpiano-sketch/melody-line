"use client";

import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import FadeIn from "@/components/ui/FadeIn";
import Image from "next/image";
import { Clock, FileCheck, Users } from "lucide-react";

export function Hero() {
    const stats = [
        { icon: Users, value: "500+", label: "受講者数" },
        { icon: Clock, value: "12h", label: "平均返信" },
        { icon: FileCheck, value: "98%", label: "満足度" },
    ];

    return (
        <Section fullWidth className="min-h-[100dvh] flex items-center justify-center p-0 relative overflow-hidden">
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
            <div className="relative z-10 text-center px-4 md:px-6 max-w-4xl mx-auto w-full py-12 md:py-20">
                <FadeIn direction="up">
                    <p className="text-accent-gold font-bold text-sm md:text-lg mb-4 md:mb-6 tracking-widest animate-gentle-glow">
                        ＼ 累計500名以上が受講 ／
                    </p>
                    <h1 className="font-serif font-bold text-white mb-6 md:mb-10 leading-relaxed tracking-wide drop-shadow-2xl">
                        <span className="block text-xl md:text-3xl lg:text-4xl mb-3 md:mb-5">
                            あなたの演奏動画を送るだけ
                        </span>
                        <span className="block text-3xl md:text-5xl lg:text-6xl bg-gradient-to-r from-accent-gold via-yellow-300 to-accent-gold bg-clip-text text-transparent drop-shadow-[0_0_30px_rgba(203,161,53,0.8)]">
                            「なぜ上達しないのか」が、<br />24時間でわかる。
                        </span>
                    </h1>
                </FadeIn>

                <FadeIn direction="up" delay={0.2}>
                    <p className="text-base md:text-xl text-gray-100 mb-10 md:mb-14 max-w-2xl mx-auto font-medium drop-shadow-lg leading-relaxed">
                        あなたの演奏の「どこを直せば劇的に変わるか」を、プロが言語化。<br />
                        忘れない・見返せる・確実に上達。
                    </p>
                </FadeIn>

                {/* Stats - ガラスモーフィズム */}
                <FadeIn direction="up" delay={0.3}>
                    <div className="flex justify-center gap-6 md:gap-12 mb-10 md:mb-14">
                        {stats.map((stat, i) => (
                            <div key={i} className="text-center backdrop-blur-sm bg-white/10 rounded-xl px-4 py-3 border border-white/20">
                                <div className="flex items-center justify-center gap-2 mb-1">
                                    <stat.icon className="w-4 h-4 md:w-5 md:h-5 text-accent-gold" />
                                    <span className="text-2xl md:text-4xl font-bold text-white drop-shadow-lg">{stat.value}</span>
                                </div>
                                <span className="text-xs md:text-sm text-gray-200">{stat.label}</span>
                            </div>
                        ))}
                    </div>
                </FadeIn>

                {/* CTA */}
                <FadeIn direction="up" delay={0.4} className="flex flex-col items-center justify-center">
                    <Button size="xl" className="w-full md:w-auto mb-4">
                        <div className="flex flex-col items-center gap-1">
                            <span className="text-lg font-bold">30秒で相談スタート →</span>
                            <span className="text-xs opacity-90">今すぐLINE追加（無料）</span>
                        </div>
                    </Button>
                    <p className="text-xs md:text-sm text-gray-300 font-medium drop-shadow-sm">
                        ※しつこい勧誘は一切ありません
                    </p>
                </FadeIn>

                <FadeIn direction="up" delay={0.6}>
                    <div className="mt-8 md:mt-12">
                        <a href="#flow" className="text-white/90 hover:text-accent-gold transition-colors text-sm md:text-base font-medium border-b border-white/30 pb-1 hover:border-accent-gold">
                            サービスの流れを見る ↓
                        </a>
                    </div>
                </FadeIn>
            </div>
        </Section>
    );
}
