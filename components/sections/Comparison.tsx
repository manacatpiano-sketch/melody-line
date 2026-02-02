"use client";

import { Section } from "@/components/ui/Section";
import { GlassCard } from "@/components/ui/GlassCard";
import FadeIn from "@/components/ui/FadeIn";
import { Check } from "lucide-react";
import Image from "next/image";

export function Comparison() {
    const features = [
        {
            image: "/assets/feature-24h.png",
            title: "予約不要",
            desc: "思い立ったらすぐ送れる。<br />深夜でも早朝でもOK",
            highlight: "24時間受付"
        },
        {
            image: "/assets/feature-reply.png",
            title: "添削が届く",
            desc: "改善点と次の練習が明確。<br />何をすればいいかわかります",
            highlight: "具体的なアドバイス"
        },
        {
            image: "/assets/feature-text.png",
            title: "返信の形",
            desc: "テキスト/音声/ポイント指示。<br />いつでも見返せます",
            highlight: "LINEで完結"
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
                            LINE添削の特徴
                        </h2>
                        <p className="text-gray-300">スマホひとつで、プロの指導が受けられる</p>
                    </div>
                </FadeIn>

                {/* 3つの特徴カード */}
                <div className="grid md:grid-cols-3 gap-6 md:gap-8 max-w-6xl mx-auto px-4">
                    {features.map((feature, index) => (
                        <FadeIn key={index} direction="up" delay={index * 0.15}>
                            <GlassCard className="p-8 h-full flex flex-col items-center text-center hover:border-accent-gold/50 transition-colors duration-300">
                                {/* 画像 */}
                                <div className="w-48 h-48 mb-6 rounded-2xl overflow-hidden shadow-xl">
                                    <Image
                                        src={feature.image}
                                        alt={feature.title}
                                        width={192}
                                        height={192}
                                        className="w-full h-full object-cover"
                                    />
                                </div>

                                {/* タイトル */}
                                <h3 className="text-xl font-bold text-white mb-3">
                                    {feature.title}
                                </h3>

                                {/* ハイライト */}
                                <div className="inline-block px-4 py-1 bg-accent-gold/20 rounded-full mb-4">
                                    <span className="text-sm text-accent-gold font-bold">
                                        {feature.highlight}
                                    </span>
                                </div>

                                {/* 説明文 */}
                                <p
                                    className="text-gray-300 leading-relaxed flex-1"
                                    dangerouslySetInnerHTML={{ __html: feature.desc }}
                                />
                            </GlassCard>
                        </FadeIn>
                    ))}
                </div>
            </div>
        </Section>
    );
}
