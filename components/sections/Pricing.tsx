"use client";

import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import FadeIn from "@/components/ui/FadeIn";
import { GlassCard } from "@/components/ui/GlassCard";
import { Check, Sparkles, Crown, Star } from "lucide-react";

export function Pricing() {
    return (
        <Section className="bg-gradient-to-b from-primary-navy via-primary-navy to-slate-900 relative overflow-hidden py-20 md:py-32">
            {/* シネマティック背景 */}
            <div className="absolute inset-0 bg-cinematic-light opacity-50" />

            <div className="relative z-10">
                <div className="text-center mb-16 md:mb-20">
                    <FadeIn direction="up">
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-white mb-6 leading-tight">
                            対面レッスンの1/5の価格で、<br className="md:hidden" />プロが見てくれる
                        </h2>
                        <p className="text-gray-300 text-lg md:text-xl">
                            桐朋の研鑽を、<br className="md:hidden" />あなたの日常の練習に。
                        </p>
                    </FadeIn>
                </div>

                {/* 3プランレイアウト */}
                <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto px-4">

                    {/* 梅プラン - トライアル */}
                    <FadeIn direction="up" delay={0.1}>
                        <GlassCard className="p-8 h-full flex flex-col">
                            <div className="flex items-center gap-2 mb-4">
                                <Star className="w-5 h-5 text-accent-gold" />
                                <h3 className="text-xl font-bold text-white">ライトプラン</h3>
                            </div>

                            <div className="mb-2">
                                <span className="text-4xl font-bold text-white">¥1,480</span>
                                <span className="text-gray-400 ml-2">/ 1回（税込）</span>
                            </div>

                            <p className="text-accent-gold font-medium mb-6 text-sm">
                                まずはお気軽に、プロの視点を体験
                            </p>

                            <ul className="space-y-3 mb-8 flex-1">
                                <li className="flex items-start gap-3 text-sm text-gray-200">
                                    <Check className="w-4 h-4 text-accent-gold mt-0.5 shrink-0" />
                                    <span>プロの視点によるワンポイント診断</span>
                                </li>
                                <li className="flex items-start gap-3 text-sm text-gray-200">
                                    <Check className="w-4 h-4 text-accent-gold mt-0.5 shrink-0" />
                                    <span>動画1本・300文字程度のアドバイス</span>
                                </li>
                                <li className="flex items-start gap-3 text-sm text-gray-200">
                                    <Check className="w-4 h-4 text-accent-gold mt-0.5 shrink-0" />
                                    <span>まずは気軽に試せる<br className="md:hidden" />はじめの一歩に最適</span>
                                </li>
                            </ul>

                            <p className="text-xs text-gray-400 mb-4">
                                ※申込み・料金の詳細はLINE内でご案内します
                            </p>

                            <a href="https://lin.ee/pcfImvr" target="_blank" rel="noopener noreferrer" className="w-full">
                                <Button variant="outline" className="w-full border-white text-white hover:bg-white hover:text-primary-navy py-5">
                                    <div className="flex flex-col items-center gap-1">
                                        <span className="font-bold">まずは1回試してみる</span>
                                    </div>
                                </Button>
                            </a>
                        </GlassCard>
                    </FadeIn>

                    {/* 竹プラン - 人気No.1 */}
                    <FadeIn direction="up" delay={0.2}>
                        <div className="relative">
                            {/* 人気バッジ */}
                            <div className="absolute -top-5 md:-top-6 left-1/2 -translate-x-1/2 z-20 bg-gradient-to-r from-accent-gold to-yellow-500 text-white text-sm font-bold px-6 py-2 rounded-full shadow-gold-glow animate-gentle-glow whitespace-nowrap">
                                ★ 人気 No.1 ★
                            </div>

                            <GlassCard className="p-8 h-full flex flex-col border-2 border-accent-gold shadow-gold-glow-lg" glow>
                                <div className="flex items-center gap-2 mb-4">
                                    <Sparkles className="w-6 h-6 text-accent-gold" />
                                    <h3 className="text-xl font-bold text-white">スタンダード</h3>
                                </div>

                                <div className="mb-4">
                                    <span className="text-5xl font-bold bg-gradient-to-r from-accent-gold to-yellow-300 bg-clip-text text-transparent">¥5,980</span>
                                    <span className="text-gray-300 ml-2">/ 月（税込）</span>
                                </div>

                                <p className="text-accent-gold font-bold mb-2 text-lg">
                                    月4回、プロに見てもらえる<br className="md:hidden" />安心感。
                                </p>
                                <p className="text-sm text-gray-300 mb-6">
                                    ※1回あたり約1,500円。対面レッスンの約1/5の価格です。
                                </p>

                                <ul className="space-y-4 mb-8 flex-1">
                                    <li className="flex items-start gap-3 text-base text-white font-medium">
                                        <Check className="w-5 h-5 text-accent-gold mt-0.5 shrink-0" />
                                        <span>月4回までの徹底分析レッスン</span>
                                    </li>
                                    <li className="flex items-start gap-3 text-base text-white font-medium">
                                        <Check className="w-5 h-5 text-accent-gold mt-0.5 shrink-0" />
                                        <span>1,000文字超の詳細テキストアドバイス</span>
                                    </li>
                                    <li className="flex items-start gap-3 text-base text-white font-medium">
                                        <Check className="w-5 h-5 text-accent-gold mt-0.5 shrink-0" />
                                        <span>表現力・技術を深く分析</span>
                                    </li>
                                    <li className="flex items-start gap-3 text-base text-accent-gold font-bold">
                                        <Check className="w-5 h-5 text-accent-gold mt-0.5 shrink-0" />
                                        <span>ほとんどの方がこのプランから始めています</span>
                                    </li>
                                </ul>

                                <p className="text-xs text-gray-300 mb-4">
                                    ※申込み・料金の詳細はLINE内でご案内します
                                </p>

                                <a href="https://lin.ee/pcfImvr" target="_blank" rel="noopener noreferrer" className="w-full">
                                    <Button variant="primary" size="lg" className="w-full py-5">
                                        <div className="flex flex-col items-center gap-1">
                                            <span className="font-bold">このプランで始める</span>
                                        </div>
                                    </Button>
                                </a>
                            </GlassCard>
                        </div>
                    </FadeIn>

                    {/* 松プラン - プレミアム */}
                    <FadeIn direction="up" delay={0.3}>
                        <GlassCard className="p-8 h-full flex flex-col bg-gradient-to-br from-white/5 to-white/10">
                            <div className="flex items-center gap-2 mb-4">
                                <Crown className="w-6 h-6 text-accent-gold" />
                                <h3 className="text-xl font-bold text-white">プレミアム</h3>
                            </div>

                            <div className="flex items-center gap-3 mb-2">
                                <span className="text-4xl font-bold text-white">¥19,800</span>
                                <span className="bg-red-500 text-white text-xs font-bold px-2 py-1 rounded">限定3名</span>
                            </div>
                            <p className="text-gray-400 mb-2">/ 月（税込）</p>

                            <p className="text-yellow-300 font-bold mb-6 text-base leading-relaxed">
                                前野 真奈が、<br className="md:hidden" />あなたの上達を直接サポートします。
                            </p>

                            <ul className="space-y-3 mb-8 flex-1">
                                <li className="flex items-start gap-3 text-sm text-gray-200 font-medium">
                                    <Check className="w-4 h-4 text-accent-gold mt-0.5 shrink-0" />
                                    <span>動画添削が回数無制限</span>
                                </li>
                                <li className="flex items-start gap-3 text-sm text-gray-200 font-medium">
                                    <Check className="w-4 h-4 text-accent-gold mt-0.5 shrink-0" />
                                    <span>月1回の15分オンライン（Zoom）カウンセリング</span>
                                </li>
                                <li className="flex items-start gap-3 text-sm text-gray-200 font-medium">
                                    <Check className="w-4 h-4 text-accent-gold mt-0.5 shrink-0" />
                                    <span>徹底的な個別サポート</span>
                                </li>
                                <li className="flex items-start gap-3 text-sm text-yellow-300 font-bold">
                                    <Check className="w-4 h-4 text-accent-gold mt-0.5 shrink-0" />
                                    <span>あなただけの上達プランを一緒に設計</span>
                                </li>
                            </ul>

                            <p className="text-xs text-gray-300 mb-4">
                                ※申込み・料金の詳細はLINE内でご案内します
                            </p>

                            <a href="https://lin.ee/pcfImvr" target="_blank" rel="noopener noreferrer" className="w-full">
                                <Button variant="outline" className="w-full border-white text-white hover:bg-white hover:text-primary-navy py-5">
                                    <div className="flex flex-col items-center gap-1">
                                        <span className="font-bold">詳しく相談する</span>
                                    </div>
                                </Button>
                            </a>
                        </GlassCard>
                    </FadeIn>
                </div>

                {/* 安心メッセージ */}
                <FadeIn direction="up" delay={0.4}>
                    <div className="text-center mt-12 md:mt-16">
                        <p className="text-gray-400 text-sm mb-2">※LINE登録は無料です</p>
                        <p className="text-gray-400 text-sm">※毎月の指導枠は5名限定です</p>
                    </div>
                </FadeIn>
            </div>
        </Section>
    );
}
