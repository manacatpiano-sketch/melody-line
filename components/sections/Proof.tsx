import { Section } from "@/components/ui/Section";
import FadeIn from "@/components/ui/FadeIn";
import Image from "next/image";

export function Proof() {
    return (
        <Section className="bg-primary-navy relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-4xl bg-accent-gold/5 blur-[120px] rounded-full pointer-events-none" />

            <div className="relative z-10">
                <div className="text-center mb-16">
                    <FadeIn direction="up">
                        <h2 className="text-2xl md:text-3xl lg:text-4xl font-serif font-bold text-white">
                            読むだけで音が変わる。<br />
                            「魔法の処方箋」をお届けします。
                        </h2>
                    </FadeIn>
                </div>

                <div className="grid md:grid-cols-2 gap-12 items-center max-w-4xl mx-auto">
                    {/* Before */}
                    <FadeIn direction="right" className="flex justify-center md:justify-end">
                        <div className="relative bg-white/5 backdrop-blur-sm p-8 rounded-2xl border border-white/10 max-w-xs text-center transform -rotate-1 hover:rotate-0 transition-transform">
                            <p className="text-accent-gold text-lg font-bold mb-4 tracking-widest">BEFORE</p>
                            <div className="bg-white rounded-xl p-6 text-primary-navy font-bold relative shadow-lg">
                                <span className="text-xl">「ここが上手く<br />できない…」</span>
                                <div className="absolute top-full left-1/2 -translate-x-1/2 -mt-2 border-8 border-transparent border-t-white"></div>
                            </div>
                            <p className="text-gray-200 text-sm mt-6">どこを直せばいいか分からず、<br />ただ繰り返すだけの練習...</p>
                        </div>
                    </FadeIn>

                    {/* After */}
                    <FadeIn direction="left" className="relative group">
                        <div className="relative rounded-xl overflow-hidden shadow-2xl border-4 border-white/10 transform rotate-2 group-hover:rotate-0 transition-transform duration-500 bg-white">
                            <div className="absolute top-4 left-4 z-10 bg-accent-gold text-white px-4 py-1.5 text-sm font-bold rounded-full shadow-lg tracking-widest">
                                AFTER
                            </div>
                            <Image
                                src="/assets/proof.png"
                                alt="Sheet music with advice"
                                width={600}
                                height={400}
                                className="w-full h-auto object-cover"
                            />
                            <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/90 via-black/50 to-transparent p-6 pt-20">
                                <p className="text-white font-bold text-lg">プロの書き込みで「正解」が見える</p>
                            </div>
                        </div>
                    </FadeIn>
                </div>
            </div>
        </Section>
    );
}
