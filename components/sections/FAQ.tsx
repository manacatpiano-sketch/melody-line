"use client";

import { Section } from "@/components/ui/Section";
import { GlassCard } from "@/components/ui/GlassCard";
import FadeIn from "@/components/ui/FadeIn";
import { Plus, Minus } from "lucide-react";
import { useState } from "react";

const faqs = [
    {
        q: "ピアノが下手すぎて動画を送るのが恥ずかしいのですが…",
        a: "ご安心ください。「下手な演奏だから見られない」と思ったことは一度もありません。むしろ「ここを直すだけで劇的に変わるのに！」とワクワクしながらアドバイスを書いています。手元だけ映して、気軽にお送りください。"
    },
    {
        q: "LINEだけで本当にピアノが上達しますか？",
        a: "はい。上達に必要なのは「正しい方向を指し示す的確なアドバイス」です。あなたの演奏を見たプロが「今日ここだけ練習してください」とピンポイントでお伝えするので、毎日の練習が確実に実りあるものに変わります。"
    },
    {
        q: "本当に効果がありますか？効果がなかったら？",
        a: "初回の添削で「具体的にどこを直せばよいか」が明確になります。初回は無料ですのでまずはお試しください。合わなければいつでも解約できます。"
    },
    {
        q: "全くの初心者ですが、大丈夫でしょうか？",
        a: "もちろんです。楽譜の読み方や指の置き方など、基礎から丁寧にサポートします。電子ピアノやキーボードでも受講可能です。"
    },
    {
        q: "返信が届くまでどのくらいかかりますか？",
        a: "通常24時間以内にテキストでアドバイスをお返しします。混雑時でも48時間以内を目標としています。"
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
