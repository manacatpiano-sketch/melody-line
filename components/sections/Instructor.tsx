"use client";

import { Section } from "@/components/ui/Section";
import { GlassCard } from "@/components/ui/GlassCard";
import FadeIn from "@/components/ui/FadeIn";
import Image from "next/image";
import { Music, Award, Globe, BookOpen, GraduationCap } from "lucide-react";

export function Instructor() {
    return (
        <Section className="bg-gradient-to-b from-slate-900 to-primary-navy relative overflow-hidden py-20 md:py-32">
            {/* シネマティック背景 */}
            <div className="absolute inset-0 bg-cinematic-light opacity-40" />

            <div className="relative z-10">
                <FadeIn direction="up">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-serif font-bold text-white mb-4">
                            指導者紹介
                        </h2>
                        <p className="text-gray-300 text-lg">あなたの専属マエストロ</p>
                    </div>
                </FadeIn>

                <div className="max-w-5xl mx-auto">
                    <GlassCard className="overflow-hidden">
                        <div className="grid md:grid-cols-2 gap-0">
                            {/* 講師画像 */}
                            <FadeIn direction="right" className="relative h-[350px] md:h-auto">
                                <div className="absolute inset-0 bg-accent-gold/10 mix-blend-overlay z-10" />
                                <div className="w-full h-full relative">
                                    <Image
                                        src="/assets/instructor.png"
                                        alt="前野 真奈"
                                        fill
                                        className="object-contain"
                                    />
                                </div>
                            </FadeIn>

                            {/* 講師情報 */}
                            <div className="p-8 md:p-12 flex flex-col justify-center bg-gradient-to-br from-white/5 to-white/10">
                                <FadeIn direction="left" delay={0.2}>
                                    <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">
                                        前野 真奈
                                    </h3>
                                    <p className="text-gray-300 mb-8 tracking-widest">Mana Maeno</p>

                                    {/* ★★★ 桐朋学園大学バッジ - 金箔押し・エンボス加工風 ★★★ */}
                                    <div className="mb-10 relative">
                                        <div className="
                                            inline-block
                                            relative
                                            px-8 py-4
                                            bg-gradient-to-br from-yellow-200/30 via-accent-gold/25 to-yellow-400/30
                                            rounded-xl
                                            border-2 border-accent-gold
                                            shadow-[0_2px_8px_rgba(203,161,53,0.4),0_6px_20px_rgba(203,161,53,0.3),inset_0_1px_0_rgba(255,255,255,0.7),inset_0_-2px_0_rgba(0,0,0,0.2)]
                                            overflow-hidden
                                            animate-gentle-glow
                                        ">
                                            {/* 装飾的な輝き（四隅） - より明るく */}
                                            <div className="absolute top-0 left-0 w-3 h-3 border-t-2 border-l-2 border-yellow-200 rounded-tl-lg" />
                                            <div className="absolute top-0 right-0 w-3 h-3 border-t-2 border-r-2 border-yellow-200 rounded-tr-lg" />
                                            <div className="absolute bottom-0 left-0 w-3 h-3 border-b-2 border-l-2 border-yellow-200 rounded-bl-lg" />
                                            <div className="absolute bottom-0 right-0 w-3 h-3 border-b-2 border-r-2 border-yellow-200 rounded-br-lg" />

                                            {/* 内側のゴールド二重線フレーム */}
                                            <div className="absolute inset-2 border border-yellow-300/70 rounded-lg" />

                                            {/* テキスト */}
                                            <div className="relative z-10">
                                                <GraduationCap className="w-6 h-6 text-yellow-200 mx-auto mb-2 drop-shadow-[0_2px_6px_rgba(203,161,53,0.9)]" />
                                                <p className="
                                                    font-serif font-bold text-xl md:text-2xl tracking-wide
                                                    text-yellow-100
                                                    drop-shadow-[0_3px_6px_rgba(0,0,0,0.8)]
                                                    [text-shadow:_1px_1px_2px_rgba(0,0,0,0.5),_0_0_20px_rgba(255,215,0,0.6)]
                                                ">
                                                    桐朋学園大学 卒業
                                                </p>
                                            </div>
                                        </div>
                                    </div>

                                    {/* その他の経歴 */}
                                    <div className="space-y-5">
                                        <div className="flex items-start gap-4">
                                            <div className="w-10 h-10 bg-accent-gold/20 rounded-full flex items-center justify-center shrink-0 mt-0.5">
                                                <Music className="w-5 h-5 text-accent-gold" />
                                            </div>
                                            <div>
                                                <p className="text-base font-bold text-white mb-1">
                                                    四半世紀を超え、ピアノと共に歩む
                                                </p>
                                                <p className="text-sm text-gray-300">
                                                    25年以上の研鑽が生む、確かな指導力
                                                </p>
                                            </div>
                                        </div>

                                        <div className="flex items-start gap-4">
                                            <div className="w-10 h-10 bg-accent-gold/20 rounded-full flex items-center justify-center shrink-0 mt-0.5">
                                                <Award className="w-5 h-5 text-accent-gold" />
                                            </div>
                                            <div>
                                                <p className="text-base font-bold text-white mb-1">
                                                    ベートーヴェン協会管弦楽団とソリスト共演
                                                </p>
                                                <p className="text-sm text-gray-300">
                                                    プロの楽団と渡り合った、本物の演奏表現を伝授
                                                </p>
                                            </div>
                                        </div>

                                        <div className="flex items-start gap-4">
                                            <div className="w-10 h-10 bg-accent-gold/20 rounded-full flex items-center justify-center shrink-0 mt-0.5">
                                                <Globe className="w-5 h-5 text-accent-gold" />
                                            </div>
                                            <div>
                                                <p className="text-base font-bold text-white mb-1">
                                                    World Music Meeting 参加
                                                </p>
                                                <p className="text-sm text-gray-300">
                                                    ポルトガル・釜山にて、世界基準の音楽観を習得
                                                </p>
                                            </div>
                                        </div>

                                        <div className="flex items-start gap-4">
                                            <div className="w-10 h-10 bg-accent-gold/20 rounded-full flex items-center justify-center shrink-0 mt-0.5">
                                                <BookOpen className="w-5 h-5 text-accent-gold" />
                                            </div>
                                            <div>
                                                <p className="text-base font-bold text-white mb-1">
                                                    高等学校教諭一種免許状（音楽）保持
                                                </p>
                                                <p className="text-sm text-gray-300">
                                                    教育学的根拠に基づいた「わかりやすい言語化」が得意
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </FadeIn>
                            </div>
                        </div>
                    </GlassCard>
                </div>
            </div>
        </Section>
    );
}
