import { Section } from "@/components/ui/Section";
import FadeIn from "@/components/ui/FadeIn";
import Image from "next/image";
import { Check } from "lucide-react";

export function FeedbackSample() {
    const points = [
        "改善点がすぐにわかる",
        "次にやるべき練習が明確",
        "LINEで届くから見返しやすい"
    ];

    return (
        <Section className="bg-gradient-to-b from-bg-cream to-white py-16 md:py-24">
            <div className="max-w-5xl mx-auto">
                <FadeIn direction="up">
                    <div className="text-center mb-12">
                        <h2 className="text-2xl md:text-3xl font-serif font-bold text-primary-navy mb-4">
                            こんな添削が届きます
                        </h2>
                        <p className="text-text-body">
                            LINEで届くから、いつでも見返せる
                        </p>
                    </div>
                </FadeIn>

                <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
                    {/* LINEトーク画面サンプル */}
                    <FadeIn direction="left" delay={0.2}>
                        <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-accent-gold/20 max-w-sm mx-auto">
                            <Image
                                src="/assets/line-feedback-sample.png"
                                alt="LINE添削サンプル - トーク画面"
                                width={400}
                                height={600}
                                className="w-full h-auto"
                            />
                        </div>
                    </FadeIn>

                    {/* 説明文 */}
                    <FadeIn direction="right" delay={0.3}>
                        <div className="space-y-6">
                            {points.map((point, index) => (
                                <div key={index} className="flex items-start gap-3">
                                    <div className="shrink-0 w-8 h-8 bg-accent-gold rounded-full flex items-center justify-center">
                                        <Check className="w-5 h-5 text-white" />
                                    </div>
                                    <p className="text-lg text-gray-800 font-medium leading-relaxed pt-1">
                                        {point}
                                    </p>
                                </div>
                            ))}

                            <div className="mt-8 p-6 bg-primary-navy/5 rounded-lg border-l-4 border-accent-gold">
                                <p className="text-sm text-gray-700 leading-relaxed">
                                    <span className="font-bold text-primary-navy">添削はLINEで届きます</span><br />
                                    改善点と次の練習を、具体的にお伝えします。
                                </p>
                            </div>
                        </div>
                    </FadeIn>
                </div>
            </div>
        </Section>
    );
}
