import { Section } from "@/components/ui/Section";
import FadeIn from "@/components/ui/FadeIn";
import { Smartphone, BookOpen, Clock } from "lucide-react";

export function Solution() {
    const features = [
        {
            icon: Smartphone,
            title: "スマホひとつで完結",
            desc: "撮影してLINEで送るだけ。移動時間ゼロで、自宅がレッスン室になります。"
        },
        {
            icon: BookOpen,
            title: "楽譜に残る、詳細アドバイス",
            desc: "感覚的な言葉だけでなく、楽譜への具体的な書き込みで指示。何度でも見返せます。"
        },
        {
            icon: Clock,
            title: "24時間いつでも受付",
            desc: "思い立った時にすぐ送信。あなたの練習ペースを崩しません。"
        }
    ];

    return (
        <Section className="bg-white">
            <div className="text-center mb-16">
                <FadeIn direction="up">
                    <h2 className="text-2xl md:text-3xl lg:text-4xl font-serif font-bold text-primary-navy">
                        そのモヤモヤ、<br className="md:hidden" />プロの「客観的な視点」が解決します。
                    </h2>
                </FadeIn>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
                {features.map((feature, i) => (
                    <FadeIn key={i} direction="up" delay={i * 0.1} className="h-full">
                        <div className="group p-8 rounded-2xl bg-bg-cream border border-gray-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 h-full flex flex-col items-center text-center">
                            <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-md mb-6 group-hover:bg-accent-gold group-hover:text-white transition-colors duration-300">
                                <feature.icon className="w-8 h-8 text-accent-gold group-hover:text-white transition-colors" />
                            </div>
                            <h3 className="text-xl font-bold text-primary-navy mb-4">{feature.title}</h3>
                            <p className="text-text-body leading-relaxed">{feature.desc}</p>
                        </div>
                    </FadeIn>
                ))}
            </div>
        </Section>
    );
}
