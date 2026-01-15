import { Section } from "@/components/ui/Section";
import FadeIn from "@/components/ui/FadeIn";
import Image from "next/image";
import { Check } from "lucide-react";

export function Problem() {
    const problems = [
        "自分の演奏を客観的に聴けず、改善点がわからない",
        "教室に通う時間はないが、独学では限界を感じている",
        "発表会前に、身近な先生以外の「プロの耳」で聴いてほしい",
    ];

    return (
        <Section className="bg-bg-cream">
            <div className="grid md:grid-cols-2 gap-12 items-center">
                {/* Left: Image */}
                <FadeIn direction="right" className="relative h-[300px] md:h-[500px] w-full rounded-2xl overflow-hidden shadow-2xl">
                    <Image
                        src="/assets/problem.png"
                        alt="Piano practice struggle"
                        fill
                        className="object-cover sepia-[0.3]"
                    />
                    <div className="absolute inset-0 bg-primary-navy/10 mix-blend-overlay" />
                </FadeIn>

                {/* Right: Content */}
                <div className="space-y-8">
                    <FadeIn direction="left">
                        <h2 className="text-2xl md:text-3xl lg:text-4xl font-serif font-bold text-primary-navy leading-relaxed">
                            楽譜通り弾いているはずなのに、<br />
                            なぜか心に響かない…。
                        </h2>
                    </FadeIn>

                    <div className="space-y-4">
                        {problems.map((item, i) => (
                            <FadeIn key={i} direction="up" delay={i * 0.1 + 0.2}>
                                <div className="flex items-start gap-4 p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
                                    <div className="bg-accent-gold/10 p-2 rounded-full shrink-0">
                                        <Check className="w-5 h-5 text-accent-gold" />
                                    </div>
                                    <p className="text-text-body font-medium leading-relaxed">{item}</p>
                                </div>
                            </FadeIn>
                        ))}
                    </div>
                </div>
            </div>
        </Section>
    );
}
