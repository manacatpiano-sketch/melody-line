"use client";

import { Section } from "@/components/ui/Section";
import FadeIn from "@/components/ui/FadeIn";
import { Star, Quote } from "lucide-react";

export function Testimonials() {
    const reviews = [
        {
            initial: "T",
            age: "40代",
            occupation: "会社員",
            level: "再開組・ピアノ歴2年",
            text: "独学で詰まっていた箇所が、先生の一言で嘘のように弾けるようになりました。動画を送るだけなので、忙しい私でも続けられています。",
            highlight: "嘘のように弾けるように"
        },
        {
            initial: "Y",
            age: "60代",
            occupation: "定年退職",
            level: "趣味・ピアノ歴5年",
            text: "「もう少し手首を柔らかく」といった抽象的なアドバイスではなく、楽譜に具体的に書き込んでくれるので、練習の迷いがなくなりました。",
            highlight: "練習の迷いがなくなった"
        },
        {
            initial: "S",
            age: "30代",
            occupation: "保育士",
            level: "発表会前・ピアノ歴10年",
            text: "発表会直前に利用しました。自分では気づかなかったリズムの崩れを指摘していただき、本番では自信を持って演奏できました。",
            highlight: "自信を持って演奏できた"
        }
    ];

    return (
        <Section className="bg-bg-cream">
            <FadeIn direction="up">
                <div className="text-center mb-12">
                    <p className="text-accent-gold font-bold text-sm mb-2">＼ 受講者満足度 98% ／</p>
                    <h2 className="text-2xl md:text-3xl font-serif font-bold text-primary-navy mb-4">
                        受講生の声
                    </h2>
                    <p className="text-gray-700">多くの方が、理想の音を手に入れています。</p>
                </div>
            </FadeIn>

            <div className="grid md:grid-cols-3 gap-6">
                {reviews.map((review, i) => (
                    <FadeIn key={i} direction="up" delay={i * 0.1} className="h-full">
                        <div className="bg-white p-6 md:p-8 rounded-xl shadow-sm border border-gray-100 h-full flex flex-col relative overflow-hidden group hover:shadow-md transition-shadow">
                            {/* Quote icon decoration */}
                            <Quote className="absolute top-4 right-4 w-8 h-8 text-accent-gold/10" />

                            {/* Stars */}
                            <div className="flex gap-0.5 text-accent-gold mb-4">
                                {[...Array(5)].map((_, j) => <Star key={j} className="w-4 h-4 fill-current" />)}
                            </div>

                            {/* Review text - 引用符なし */}
                            <p className="text-gray-700 text-sm leading-relaxed mb-6 flex-1">
                                {review.text}
                            </p>

                            {/* Highlight badge */}
                            <div className="bg-accent-gold/10 text-accent-gold text-xs font-bold px-3 py-1.5 rounded-full inline-block mb-4 w-fit">
                                ✨ {review.highlight}
                            </div>

                            {/* Reviewer info - 匿名化 */}
                            <div className="border-t border-gray-100 pt-4 mt-auto flex items-center gap-3">
                                <div className="w-10 h-10 bg-primary-navy rounded-full flex items-center justify-center text-white font-bold text-sm">
                                    {review.initial}
                                </div>
                                <div>
                                    <p className="text-sm font-bold text-primary-navy">{review.age} {review.occupation}</p>
                                    <p className="text-xs text-gray-500">
                                        {review.level}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </FadeIn>
                ))}
            </div>
        </Section>
    );
}
