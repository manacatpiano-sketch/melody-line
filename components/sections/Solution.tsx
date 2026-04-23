import { Section } from "@/components/ui/Section";
import FadeIn from "@/components/ui/FadeIn";
import Image from "next/image";

export function Solution() {
    const features = [
        {
            image: "/assets/smartphone-sending.webp",
            title: "通わず上達。自宅がレッスン室に",
            desc: "撮影してLINEで送るだけ。\n移動時間ゼロで、あなたのペースで上達できます。"
        },
        {
            image: "/assets/available-24h.webp",
            title: "「ここを直せば変わる」が24時間で届く",
            desc: "あなたの演奏を見たプロが、\n具体的な改善ポイントをテキストでお伝えします。\n何度でも見返せます。"
        },
        {
            image: "/assets/video-thumbnail.webp",
            title: "思い立ったら、すぐ送れる",
            desc: "24時間いつでも受付。\n仕事帰りの深夜でも、休日の朝でも。\n練習ペースを崩しません。"
        }
    ];

    return (
        <Section className="bg-white">
            <div className="text-center mb-16">
                <FadeIn direction="up">
                    <h2 className="text-2xl md:text-3xl lg:text-4xl font-serif font-bold text-primary-navy">
                        「今日の練習メニュー」が、<br />プロから届く。
                    </h2>
                    <p className="text-text-body mt-4">もう、何を練習すればいいか迷わない。</p>
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
                            <p className="text-text-body leading-relaxed whitespace-pre-line">{feature.desc}</p>
                        </div>
                    </FadeIn>
                ))}
            </div>
        </Section>
    );
}
