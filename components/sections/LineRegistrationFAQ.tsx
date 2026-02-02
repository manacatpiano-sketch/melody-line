"use client";

import { Section } from "@/components/ui/Section";
import FadeIn from "@/components/ui/FadeIn";
import { ChevronDown } from "lucide-react";
import { useState } from "react";

export function LineRegistrationFAQ() {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const faqs = [
        {
            q: "本当に無料？どこまで無料？",
            a: "無料添削は完全無料です。料金が発生する場合は事前にご案内します。"
        },
        {
            q: "勧誘・配信はある？頻度は？",
            a: "しつこい配信は一切ありません。お知らせも必要最小限です。配信が不要な場合はLINEでお伝えください。"
        },
        {
            q: "解約は簡単ですか？",
            a: "はい、いつでも簡単に解約できます。LINEで「解約希望」とお伝えいただくだけで、手続きを進めます。引き止めや追加料金は一切ありません。"
        },
        {
            q: "顔や部屋が映るのが不安（手元だけでOK？）",
            a: "手元（鍵盤と手）だけで大丈夫です。顔出しや部屋の撮影は不要です。"
        },
        {
            q: "動画はどのくらいの長さ?",
            a: "短い動画（30秒〜1分程度）が理想ですが、演奏によっては長くてもOKです。"
        },
        {
            q: "楽譜は必須？",
            a: "楽譜があればより詳しい添削が可能ですが、なくても添削できます。"
        },
        {
            q: "返信はいつ来る？",
            a: "原則24時間以内、平均12時間でお返事します。"
        },
        {
            q: "動画データは保存される？削除できる？",
            a: "動画データは添削完了後、原則として削除いたします。長期保存が必要な場合のみ、ご相談の上保管します。"
        },
        {
            q: "先着に漏れたらどうなる？",
            a: "優先案内リストに登録し、枠が空き次第すぐにご連絡します。月の入れ替わりでも優先的にご案内いたします。"
        },
        {
            q: "どんな形式で添削が届く？",
            a: "楽譜への書き込み画像 + テキストコメントをLINEで送ります。"
        }
    ];

    return (
        <Section className="bg-bg-cream py-16 md:py-20">
            <FadeIn direction="up">
                <div className="text-center mb-12">
                    <h2 className="text-2xl md:text-3xl font-serif font-bold text-primary-navy mb-4">
                        LINE登録前のよくある質問
                    </h2>
                    <p className="text-text-body">不安な点を解消してから、安心してご登録ください</p>
                </div>
            </FadeIn>

            <div className="max-w-3xl mx-auto space-y-3">
                {faqs.map((faq, index) => (
                    <FadeIn key={index} direction="up" delay={index * 0.05}>
                        <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
                            <button
                                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                                className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
                            >
                                <span className="font-bold text-primary-navy pr-4">{faq.q}</span>
                                <ChevronDown
                                    className={`w-5 h-5 text-accent-gold shrink-0 transition-transform duration-300 ${openIndex === index ? 'rotate-180' : ''
                                        }`}
                                />
                            </button>
                            <div
                                className={`overflow-hidden transition-all duration-300 ${openIndex === index ? 'max-h-96' : 'max-h-0'
                                    }`}
                            >
                                <div className="px-6 py-4 bg-gray-50 border-t border-gray-200">
                                    <p className="text-gray-700 leading-relaxed">{faq.a}</p>
                                </div>
                            </div>
                        </div>
                    </FadeIn>
                ))}
            </div>
        </Section>
    );
}
