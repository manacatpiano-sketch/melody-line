"use client";

import { Section } from "@/components/ui/Section";
import FadeIn from "@/components/ui/FadeIn";
import Image from "next/image";

export function Proof() {
    return (
        <Section className="bg-primary-navy relative overflow-hidden py-16 md:py-24">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-4xl bg-accent-gold/5 blur-[120px] rounded-full pointer-events-none" />

            <div className="relative z-10">
                <div className="text-center mb-12">
                    <FadeIn direction="up">
                        <h2 className="text-2xl md:text-3xl lg:text-4xl font-serif font-bold text-white mb-4">
                            プロの視点が、<br className="md:hidden" />あなたの練習を変える。
                        </h2>
                        <p className="text-gray-300">実際のフィードバックイメージ</p>
                    </FadeIn>
                </div>

                <FadeIn direction="up" delay={0.1}>
                    <div className="max-w-lg mx-auto">
                        {/* LINE風チャットUI */}
                        <div className="bg-[#8cabd9] rounded-2xl p-4 md:p-6 shadow-2xl">
                            {/* ヘッダー */}
                            <div className="text-center mb-4 pb-3 border-b border-white/20">
                                <p className="text-white font-bold text-sm">まな🎹ピアノ講師</p>
                            </div>

                            {/* 生徒のメッセージ（右側） */}
                            <div className="flex justify-end mb-4">
                                <div className="bg-[#8de47a] rounded-2xl rounded-tr-sm px-4 py-3 max-w-[75%] shadow-sm">
                                    <p className="text-sm text-gray-800 leading-relaxed">
                                        久しぶりに「エリーゼのために」を弾いてみたのですが、中間部の右手がもたついてしまいます💦
                                    </p>
                                    <p className="text-xs text-gray-500 text-right mt-1">14:32</p>
                                </div>
                            </div>

                            {/* 先生のメッセージ（左側） */}
                            <div className="flex justify-start mb-3">
                                <div className="flex items-end gap-2">
                                    <div className="w-8 h-8 rounded-full overflow-hidden shrink-0 border border-accent-gold">
                                        <Image
                                            src="/assets/instructor.webp"
                                            alt="まな先生"
                                            width={32}
                                            height={32}
                                            className="w-full h-full object-cover"
                                        />
                                    </div>
                                    <div className="bg-white rounded-2xl rounded-tl-sm px-4 py-3 max-w-[75%] shadow-sm">
                                        <p className="text-sm text-gray-800 leading-relaxed">
                                            動画、拝見しました♪<br /><br />
                                            中間部は「3連符のグループ」で考えると弾きやすくなりますよ。<br /><br />
                                            まずは右手だけ、ゆっくり片手ずつで8小節だけ練習してみてください。<br /><br />
                                            手首をふわっと浮かせるイメージで🎹<br />
                                            明日の練習はここだけに集中してみてくださいね♪
                                        </p>
                                        <p className="text-xs text-gray-400 text-right mt-1">14:58</p>
                                    </div>
                                </div>
                            </div>

                            {/* 生徒の反応（右側） */}
                            <div className="flex justify-end">
                                <div className="bg-[#8de47a] rounded-2xl rounded-tr-sm px-4 py-3 max-w-[75%] shadow-sm">
                                    <p className="text-sm text-gray-800 leading-relaxed">
                                        すごくわかりやすいです！早速やってみます✨
                                    </p>
                                    <p className="text-xs text-gray-500 text-right mt-1">15:03</p>
                                </div>
                            </div>
                        </div>

                        {/* 補足テキスト */}
                        <div className="text-center mt-6">
                            <p className="text-gray-400 text-sm">
                                ※ フィードバックのイメージです。実際の内容は演奏内容に応じて変わります。
                            </p>
                        </div>
                    </div>
                </FadeIn>

                {/* Before / After */}
                <FadeIn direction="up" delay={0.3}>
                    <div className="max-w-2xl mx-auto mt-16">
                        <div className="rounded-2xl overflow-hidden shadow-2xl">
                            <Image
                                src="/assets/before-after.webp"
                                alt="添削前と添削後の変化イメージ"
                                width={1456}
                                height={816}
                                className="w-full h-auto"
                            />
                        </div>
                        <div className="flex justify-between mt-4 px-4">
                            <p className="text-gray-400 text-sm font-medium">Before — 独学で悩んでいた頃</p>
                            <p className="text-accent-gold text-sm font-medium">After — プロの添削を受けて</p>
                        </div>
                    </div>
                </FadeIn>
            </div>
        </Section>
    );
}
