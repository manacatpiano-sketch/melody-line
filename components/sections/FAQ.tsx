"use client";

import { Section } from "@/components/ui/Section";
import { GlassCard } from "@/components/ui/GlassCard";
import FadeIn from "@/components/ui/FadeIn";
import { Plus, Minus } from "lucide-react";
import { useState } from "react";

const faqs = [
    {
        q: "撮影するための特別な機材は必要ですか？",
        a: "いいえ、必要ありません。現在お使いのスマートフォンのカメラ機能で十分です。ピアノの横に置いて手元が映るように撮影してください。"
    },
    {
        q: "電子ピアノやキーボードでも受講できますか？",
        a: "はい、可能です。打鍵の強弱やニュアンスも、電子ピアノであっても十分に分析・指導が可能ですのでご安心ください。"
    },
    {
        q: "家の中が映るのが恥ずかしいのですが…",
        a: "手元（鍵盤）さえ映っていれば、お部屋の背景は映らなくても問題ありません。また、動画は講師のみが閲覧し、厳重に管理されます。"
    },
    {
        q: "特殊な楽譜を使っていますが大丈夫ですか？",
        a: "もちろんです。動画と一緒に楽譜の写真を送っていただければ、その内容に即してアドバイスいたします。版ごとの解釈の違いも踏まえた、プロならではの指導をお楽しみください。"
    },
    {
        q: "全くの初心者ですが、大丈夫でしょうか？",
        a: "もちろんです。楽譜の読み方や指の置き方など、基礎中の基礎から丁寧にサポートいたします。独学の第一歩に最適です。"
    },
    {
        q: "料金の支払い方法は何がありますか？",
        a: "クレジットカード（VISA, Mastercard, JCB, AMEX）、PayPay、銀行振込に対応しております。LINEでご希望をお伝えください。"
    },
    {
        q: "返信が届くまでどのくらいかかりますか？",
        a: "通常、動画をお送りいただいてから24時間以内に添削済み楽譜をお返しいたします。混雑時でも48時間以内を目標としています。"
    },
    {
        q: "一度申し込んだ後、キャンセルはできますか？",
        a: "添削作業開始前であれば、全額返金いたします。作業開始後のキャンセルについては、個別にご相談ください。"
    },
    {
        q: "どんな曲でも添削してもらえますか？",
        a: "クラシック、ポップス、映画音楽など、ピアノで演奏できる曲であれば基本的に対応可能です。事前にLINEでご相談いただければ、より適切なアドバイスが可能です。"
    }
];

function FAQItem({ q, a }: { q: string, a: string }) {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="border-b border-white/10 last:border-0">
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="w-full py-7 flex items-center justify-between text-left focus:outline-none group"
            >
                <span className="font-bold text-white text-sm md:text-base group-hover:text-accent-gold transition-colors pr-4">
                    {q}
                </span>
                <span className="ml-4 shrink-0 text-gray-400 group-hover:text-accent-gold transition-colors">
                    {isOpen ? <Minus className="w-5 h-5" /> : <Plus className="w-5 h-5" />}
                </span>
            </button>
            <div
                className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? "max-h-48 opacity-100 mb-7" : "max-h-0 opacity-0"}`}
            >
                <p className="text-gray-100 text-sm leading-relaxed bg-white/5 p-5 rounded-lg backdrop-blur-sm">
                    {a}
                </p>
            </div>
        </div>
    );
}

export function FAQ() {
    return (
        <Section className="bg-gradient-to-b from-slate-900 to-primary-navy relative overflow-hidden py-20 md:py-32">
            {/* シネマティック背景 */}
            <div className="absolute inset-0 bg-cinematic-light opacity-30" />

            <div className="relative z-10">
                <FadeIn direction="up">
                    <div className="text-center mb-14">
                        <h2 className="text-3xl md:text-4xl font-serif font-bold text-white mb-4">
                            よくあるご質問
                        </h2>
                        <p className="text-gray-300">不安な点があれば、お気軽にご相談ください。</p>
                    </div>
                </FadeIn>

                <div className="max-w-3xl mx-auto px-4">
                    <FadeIn direction="up" delay={0.2}>
                        <GlassCard className="p-6 md:p-10">
                            {faqs.map((item, i) => (
                                <FAQItem key={i} q={item.q} a={item.a} />
                            ))}
                        </GlassCard>
                    </FadeIn>
                </div>
            </div>
        </Section>
    );
}
