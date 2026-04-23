"use client";

import { Section } from "@/components/ui/Section";
import FadeIn from "@/components/ui/FadeIn";
import { X as XIcon } from "lucide-react";
import Image from "next/image";

export function Problem() {
    const problems = [
        {
            fact: "昔弾けたはずの曲が、もう指が追いつかない。",
            emotion: "あの頃の自分に戻れない気がして、悔しい。"
        },
        {
            fact: "YouTubeのレッスン動画を何本も見た。",
            emotion: "でも「自分の場合はどうすればいいの？」がわからない。"
        },
        {
            fact: "近くにピアノ教室がない。時間も合わない。",
            emotion: "大人が気軽に通える場所が、見つからない。"
        },
        {
            fact: "毎日30分は練習してるのに、上手くなってる気がしない。",
            emotion: "このまま続けていいのか、誰にも聞けない。"
        },
        {
            fact: "本当は誰かに聴いてほしい。",
            emotion: "でも、今さら教室に通うのは恥ずかしい。"
        },
    ];

    return (
        <Section className="bg-bg-cream py-16 md:py-24 relative overflow-hidden">
            {/* 背景画像 */}
            <div className="absolute inset-0 z-0">
                <Image
                    src="/assets/problem-bg.webp"
                    alt=""
                    fill
                    className="object-cover opacity-[0.08]"
                    aria-hidden="true"
                />
            </div>
            <div className="relative z-10">
            <FadeIn direction="up">
                <div className="text-center mb-12">
                    <h2 className="text-2xl md:text-3xl font-serif font-bold text-primary-navy mb-4">
                        ピアノを再開した人が、<br className="md:hidden" />必ずぶつかる壁。
                    </h2>
                </div>
            </FadeIn>

            <div className="max-w-2xl mx-auto space-y-4">
                {problems.map((problem, index) => (
                    <FadeIn key={index} direction="up" delay={index * 0.08}>
                        <div className="flex items-start gap-3 bg-white p-4 md:p-5 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                            <XIcon className="w-5 h-5 text-red-400 mt-0.5 shrink-0" />
                            <div>
                                <p className="text-gray-800 text-base font-medium leading-relaxed">{problem.fact}</p>
                                <p className="text-gray-500 text-sm mt-1 leading-relaxed">{problem.emotion}</p>
                            </div>
                        </div>
                    </FadeIn>
                ))}
            </div>

            <FadeIn direction="up" delay={0.5}>
                <div className="text-center mt-12">
                    <p className="text-lg md:text-2xl font-bold text-primary-navy leading-relaxed">
                        独学では、自分の<span className="text-accent-gold">「何が間違っているか」</span>に<br className="md:hidden" />気づけません。<br />
                        <span className="text-base md:text-lg font-medium text-gray-600 block mt-2">たった1通のLINEで、あなたの練習が変わります。</span>
                    </p>
                </div>
            </FadeIn>
            </div>
        </Section>
    );
}
