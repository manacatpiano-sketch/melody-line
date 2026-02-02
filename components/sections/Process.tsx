"use client";

import { Section } from "@/components/ui/Section";
import FadeIn from "@/components/ui/FadeIn";
import { MessageCircle, FileText, Camera } from "lucide-react";

export function Process() {
    const steps = [
        {
            icon: MessageCircle,
            step: "Step 01",
            title: "LINE追加",
            desc: "友だち追加後「無料添削希望」と送信"
        },
        {
            icon: FileText,
            step: "Step 02",
            title: "悩みを伝える",
            desc: "リズム、指使い、強弱など、気になる点を教えてください"
        },
        {
            icon: Camera,
            step: "Step 03",
            title: "動画を送る",
            desc: "手元だけでOK"
        }
    ];

    return (
        <Section className="bg-bg-cream">
            <FadeIn direction="up">
                <div className="text-center mb-16">
                    <h2 className="text-2xl md:text-3xl font-serif font-bold text-primary-navy mb-4">
                        受講までの流れ
                    </h2>
                    <p className="text-text-body">スマホひとつで、驚くほど簡単。</p>
                </div>
            </FadeIn>

            <div className="max-w-6xl mx-auto">
                <div className="grid md:grid-cols-3 gap-8 relative">
                    {/* Connector Line (Desktop) */}
                    <div className="hidden md:block absolute top-[60px] left-[10%] right-[10%] h-[2px] bg-gray-200 z-0" />

                    {steps.map((item, i) => (
                        <FadeIn key={i} direction="up" delay={i * 0.15} className="relative z-10">
                            <div className="flex flex-col items-center text-center group">
                                <div className="w-20 h-20 bg-white rounded-full border-4 border-bg-cream shadow-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 relative group-hover:border-accent-gold">
                                    <div className="absolute -top-3 bg-primary-navy text-white text-xs font-bold px-2 py-1 rounded-full">
                                        {item.step}
                                    </div>
                                    <item.icon className="w-8 h-8 text-primary-navy group-hover:text-accent-gold transition-colors" />
                                </div>
                                <h3 className="text-lg font-bold text-primary-navy mb-2">{item.title}</h3>
                                <p className="text-sm text-gray-700 leading-relaxed">{item.desc}</p>
                            </div>
                        </FadeIn>
                    ))}
                </div>
            </div>
        </Section>
    );
}
