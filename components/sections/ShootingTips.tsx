"use client";

import { Section } from "@/components/ui/Section";
import FadeIn from "@/components/ui/FadeIn";
import { Camera, Hand, Smartphone } from "lucide-react";

export function ShootingTips() {
    const tips = [
        {
            icon: Hand,
            point: "POINT 1",
            title: "両手が見えるように",
            desc: "ピアノの横にスマホを置いて、両手の動きが映る角度で撮影してください。"
        },
        {
            icon: Camera,
            point: "POINT 2",
            title: "ミスタッチしても大丈夫",
            desc: "弾き直しや間違いがあっても、そのまま送ってください。むしろ「どこでつまずくか」が大切な情報です。"
        },
        {
            icon: Smartphone,
            point: "POINT 3",
            title: "30秒〜1分でOK",
            desc: "1曲まるごとでなくて大丈夫。気になる部分だけで十分です。長くても3分以内が目安です。"
        }
    ];

    return (
        <Section className="bg-white py-16 md:py-24">
            <FadeIn direction="up">
                <div className="text-center mb-12">
                    <h2 className="text-2xl md:text-3xl font-serif font-bold text-primary-navy mb-4">
                        撮影のポイント
                    </h2>
                    <p className="text-gray-600">
                        特別な機材は不要。スマホだけで、こう撮ればOKです。
                    </p>
                </div>
            </FadeIn>

            <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
                {tips.map((tip, i) => (
                    <FadeIn key={i} direction="up" delay={i * 0.1} className="h-full">
                        <div className="bg-bg-cream p-6 md:p-8 rounded-xl border border-gray-100 h-full text-center hover:shadow-md transition-shadow">
                            <div className="w-14 h-14 bg-primary-navy/10 rounded-full flex items-center justify-center mx-auto mb-4">
                                <tip.icon className="w-7 h-7 text-primary-navy" />
                            </div>
                            <span className="text-xs font-bold text-accent-gold tracking-widest">{tip.point}</span>
                            <h3 className="text-lg font-bold text-primary-navy mt-2 mb-3">{tip.title}</h3>
                            <p className="text-gray-600 text-sm leading-relaxed">{tip.desc}</p>
                        </div>
                    </FadeIn>
                ))}
            </div>

            <FadeIn direction="up" delay={0.4}>
                <div className="text-center mt-10">
                    <p className="text-sm text-gray-500 bg-gray-50 inline-block px-6 py-3 rounded-full">
                        💡 顔出し不要。手元だけ映ればOKです。練習着のまま、気軽に送ってください。
                    </p>
                </div>
            </FadeIn>
        </Section>
    );
}
