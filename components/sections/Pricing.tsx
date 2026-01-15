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
                            あなたに合わせた指導プラン
                        </h2>
                        <p className="text-gray-300 text-lg md:text-xl">
                            桐朋の研鑽を、あなたの日常の練習に。
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
                                まずは一度、世界を知る耳に預けてみる
                            </p>

                            <ul className="space-y-3 mb-8 flex-1">
                                <li className="flex items-start gap-3 text-sm text-gray-200">
                                    <Check className="w-4 h-4 text-accent-gold mt-0.5 shrink-0" />
                                    <span>プロの視点によるワンポイント診断</span>
                                </li>
                                <li className="flex items-start gap-3 text-sm text-gray-200">
                                    <Check className="w-4 h-4 text-accent-gold mt-0.5 shrink-0" />
                                    <span>動画1本・200文字程度のアドバイス</span>
                                </li>
                                <li className="flex items-start gap-3 text-sm text-gray-200">
                                    <Check className="w-4 h-4 text-accent-gold mt-0.5 shrink-0" />
                                    <span>心理的障壁を下げる「体験」の入り口</span>
                                </li>
                            </ul>


                            <a href="https://buy.stripe.com/test_00weVd9Bm7TxfN4fGp5c400" target="_blank" rel="noopener noreferrer" className="w-full">
                                <Button variant="outline" className="w-full border-white text-white hover:bg-white hover:text-primary-navy py-5">
                                    今すぐ体験する
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

                                <div className="mb-2">
                                    <span className="text-5xl font-bold bg-gradient-to-r from-accent-gold to-yellow-300 bg-clip-text text-transparent">¥5,980</span>
                                    <span className="text-gray-300 ml-2">/ 月（税込）</span>
                                </div>

                                <p className="text-accent-gold font-bold mb-2 text-lg">
                                    桐朋の研鑽を、あなたの日常の練習に。
                                </p>
                                <p className="text-sm text-gray-300 mb-6">
                                    ※1回あたり約1,500円という圧倒的価値
                                </p>

                                <ul className="space-y-4 mb-8 flex-1">
                                    <li className="flex items-start gap-3 text-base text-white font-medium">
                                        <Check className="w-5 h-5 text-accent-gold mt-0.5 shrink-0" />
                                        <span>月4回までの徹底分析レッスン</span>
                                    </li>
                                    <li className="flex items-start gap-3 text-base text-white font-medium">
                                        <Check className="w-5 h-5 text-accent-gold mt-0.5 shrink-0" />
                                        <span>1,000文字超のアドバイス＋楽譜書き込み添削</span>
                                    </li>
                                    <li className="flex items-start gap-3 text-base text-white font-medium">
                                        <Check className="w-5 h-5 text-accent-gold mt-0.5 shrink-0" />
                                        <span>表現力・技術を深く分析</span>
                                    </li>
                                    <li className="flex items-start gap-3 text-base text-accent-gold font-bold">
                                        <Check className="w-5 h-5 text-accent-gold mt-0.5 shrink-0" />
                                        <span>上達を実感し、理想の音へ近づく。最も選ばれている継続プラン</span>
                                    </li>
                                </ul>

                                <a href="https://buy.stripe.com/test_7sY4gzeVGa1FdEW8dX5c402" target="_blank" rel="noopener noreferrer" className="w-full">
                                    <Button variant="primary" size="lg" className="w-full py-5">
                                        今すぐ始める
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
                                前野 真奈を、あなたの専属講師として独占する。
                            </p>

                            <ul className="space-y-3 mb-8 flex-1">
                                <li className="flex items-start gap-3 text-sm text-gray-200 font-medium">
                                    <Check className="w-4 h-4 text-accent-gold mt-0.5 shrink-0" />
                                    <span>優先動画添削（回数無制限）</span>
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
                                    <span>最高級のブランド価値を提示</span>
                                </li>
                            </ul>

                            <a href="#" className="w-full">
                                <Button variant="outline" className="w-full border-white text-white hover:bg-white hover:text-primary-navy py-5">
                                    LINEで相談する
                                </Button>
                            </a>
                        </GlassCard>
                    </FadeIn>
                </div>

                {/* 安心メッセージ */}
                <FadeIn direction="up" delay={0.4}>
                    <div className="text-center mt-12 md:mt-16">
                        <p className="text-gray-400 text-sm mb-2">※登録は無料です</p>
                        <p className="text-gray-400 text-sm">※月間の指導枠には限りがございます</p>
                    </div>
                </FadeIn>
            </div>
        </Section>
    );
}
