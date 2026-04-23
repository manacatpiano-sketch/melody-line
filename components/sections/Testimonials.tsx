"use client";

import { Section } from "@/components/ui/Section";
import FadeIn from "@/components/ui/FadeIn";
import { Music, UserCheck, Clock } from "lucide-react";

export function Testimonials() {
    const personas = [
        {
            icon: <Music className="w-6 h-6 text-accent-gold" />,
            label: "30代・子供と一緒に",
            desc: "親子で楽しむピアノ。子供への教え方も相談できる",
        },
        {
            icon: <UserCheck className="w-6 h-6 text-accent-gold" />,
            label: "40代・仕事帰りの独学",
            desc: "正しいフォームや練習法を、プロに確認したい",
        },
        {
            icon: <Clock className="w-6 h-6 text-accent-gold" />,
            label: "60代・定年後に再開",
            desc: "週1回のペースで、好きな曲をもう一度弾けるように",
        },
    ];

    return (
        <Section className="bg-bg-cream py-16 md:py-24">
            <FadeIn direction="up">
                <div className="text-center mb-12">
                    <h2 className="text-2xl md:text-3xl font-serif font-bold text-primary-navy mb-4">
                        こんな方におすすめです
                    </h2>
                    <p className="text-gray-600">
                        年齢も経験もさまざま。あなたのペースで始められます。
                    </p>
                </div>
            </FadeIn>

            <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
                {personas.map((persona, i) => (
                    <FadeIn key={i} direction="up" delay={i * 0.1} className="h-full">
                        <div className="bg-white p-6 md:p-8 rounded-xl shadow-sm border border-gray-100 h-full flex flex-col items-center text-center hover:shadow-md transition-shadow">
                            <div className="w-14 h-14 bg-accent-gold/10 rounded-full flex items-center justify-center mb-4">
                                {persona.icon}
                            </div>
                            <p className="text-lg font-bold text-primary-navy mb-2">
                                🎹 {persona.label}
                            </p>
                            <p className="text-gray-600 text-sm leading-relaxed">
                                {persona.desc}
                            </p>
                        </div>
                    </FadeIn>
                ))}
            </div>
        </Section>
    );
}
