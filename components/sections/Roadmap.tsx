import { Section } from "@/components/ui/Section";
import FadeIn from "@/components/ui/FadeIn";
import { Flag, Music, Trophy } from "lucide-react";

export function Roadmap() {
    const steps = [
        {
            timing: "1ヶ月目",
            icon: Music,
            title: "自分のクセを知る",
            desc: "無意識についていた「良くない手癖」を解消し、クリアな音を出せるようになります。"
        },
        {
            timing: "3ヶ月目",
            icon: Flag,
            title: "表現の幅が広がる",
            desc: "強弱やテンポの揺らぎをコントロールできるようになり、棒読み演奏から卒業します。"
        },
        {
            timing: "6ヶ月目",
            icon: Trophy,
            title: "自信を持って弾ける",
            desc: "「ここはこう弾きたい」という意図が聴き手に伝わるようになり、人前での演奏が楽しくなります。"
        }
    ];

    return (
        <Section className="bg-primary-navy relative overflow-hidden text-white">
            {/* Background accent */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-accent-gold/10 rounded-full blur-[100px] pointer-events-none" />

            <FadeIn direction="up">
                <div className="text-center mb-16 relative z-10">
                    <h2 className="text-2xl md:text-3xl font-serif font-bold mb-4">
                        あなたが手に入れる未来
                    </h2>
                    <p className="text-gray-300">着実なステップアップをお約束します。</p>
                </div>
            </FadeIn>

            <div className="max-w-4xl mx-auto relative z-10">
                <div className="grid md:grid-cols-3 gap-8">
                    {steps.map((item, i) => (
                        <FadeIn key={i} direction="up" delay={i * 0.15} className="h-full">
                            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 h-full relative overflow-hidden group hover:bg-white/10 transition-colors duration-300">
                                <div className="absolute top-0 right-0 bg-accent-gold text-primary-navy text-xs font-bold px-3 py-1 rounded-bl-lg">
                                    {item.timing}
                                </div>

                                <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                                    <item.icon className="w-6 h-6 text-accent-gold" />
                                </div>

                                <h3 className="text-xl font-bold mb-4">{item.title}</h3>
                                <p className="text-gray-300 text-sm leading-relaxed">
                                    {item.desc}
                                </p>
                            </div>
                        </FadeIn>
                    ))}
                </div>
            </div>
        </Section>
    );
}
