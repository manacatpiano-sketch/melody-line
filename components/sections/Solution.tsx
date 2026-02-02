import { Section } from "@/components/ui/Section";
import FadeIn from "@/components/ui/FadeIn";
import Image from "next/image";

export function Solution() {
    const features = [
        {
            image: "/assets/smartphone-sending.png",
            title: "スマホひとつで完結",
            desc: "撮影してLINEで送るだけ。移動時間ゼロで、自宅がレッスン室になります。"
        },
        {
            image: "/assets/sheet-annotation.png",
            title: "楽譜に残る、プロの添削",
            desc: "感覚的な言葉だけでなく、楽譜への具体的な書き込みで指示。何度でも見返せます。"
        },
        {
            image: "/assets/available-24h.png",
            title: "24時間いつでも受付",
            desc: "思い立った時にすぐ送信。あなたの練習ペースを崩しません。"
        }
    ];

    return (
        <Section className="bg-white">
            <div className="text-center mb-16">
                <FadeIn direction="up">
                    <h2 className="text-2xl md:text-3xl lg:text-4xl font-serif font-bold text-primary-navy">
                        そのモヤモヤ、<br />プロの「客観的な視点」が<br className="md:hidden" />解決します。
                    </h2>
                </FadeIn>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
                {features.map((feature, i) => (
                    <FadeIn key={i} direction="up" delay={i * 0.1} className="h-full">
                        <div className="group p-8 rounded-2xl bg-bg-cream border border-gray-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 h-full flex flex-col items-center text-center">
                            <div className="w-40 h-40 rounded-xl overflow-hidden shadow-lg mb-6">
                                <Image
                                    src={feature.image}
                                    alt={feature.title}
                                    width={160}
                                    height={160}
                                    className="w-full h-full object-cover"
                                />
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
