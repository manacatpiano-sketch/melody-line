"use client";

import { Section } from "@/components/ui/Section";
import FadeIn from "@/components/ui/FadeIn";
import Image from "next/image";
import { useState, useEffect } from "react";

export function Proof() {
    const [showAfter, setShowAfter] = useState(false);

    useEffect(() => {
        const interval = setInterval(() => {
            setShowAfter(prev => !prev);
        }, 3000); // Toggle every 3 seconds

        return () => clearInterval(interval);
    }, []);

    return (
        <Section className="bg-primary-navy relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-4xl bg-accent-gold/5 blur-[120px] rounded-full pointer-events-none" />

            <div className="relative z-10">
                <div className="text-center mb-16">
                    <FadeIn direction="up">
                        <h2 className="text-2xl md:text-3xl lg:text-4xl font-serif font-bold text-white">
                            読むだけで音が変わる。<br />「魔法の処方箋」を<br className="md:hidden" />お届けします。
                        </h2>
                    </FadeIn>
                </div>

                <div className="grid md:grid-cols-2 gap-12 items-center max-w-4xl mx-auto">
                    {/* Before/After Animation Container */}
                    <FadeIn direction="up" className="md:col-span-2 flex justify-center">
                        <div
                            className="relative w-full max-w-2xl cursor-pointer group"
                            onMouseEnter={() => setShowAfter(true)}
                            onMouseLeave={() => setShowAfter(false)}
                        >
                            {/* Before Image */}
                            <div className={`relative rounded-xl overflow-hidden shadow-2xl border-4 border-white/10 bg-white transition-all duration-700 transform ${showAfter ? 'opacity-0 scale-95' : 'opacity-100 scale-100'
                                }`}>
                                <div className="absolute top-4 left-4 z-10 bg-gray-500 text-white px-4 py-1.5 text-sm font-bold rounded-full shadow-lg tracking-widest">
                                    BEFORE
                                </div>
                                <Image
                                    src="/assets/proof_before.png"
                                    alt="Sheet music before - struggling with questions"
                                    width={600}
                                    height={400}
                                    className="w-full h-auto object-cover"
                                />
                                <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/90 via-black/50 to-transparent p-6 pt-20">
                                    <p className="text-white font-bold text-lg">「ここが上手くできない…」</p>
                                    <p className="text-gray-300 text-sm mt-2">どこを直せばいいか分からず、ただ繰り返すだけの練習...</p>
                                </div>
                            </div>

                            {/* After Image */}
                            <div className={`absolute top-0 left-0 w-full rounded-xl overflow-hidden shadow-2xl border-4 border-white/10 bg-white transition-all duration-700 transform ${showAfter ? 'opacity-100 scale-100' : 'opacity-0 scale-95 pointer-events-none'
                                }`}>
                                <div className="absolute top-4 left-4 z-10 bg-accent-gold text-white px-4 py-1.5 text-sm font-bold rounded-full shadow-lg tracking-widest">
                                    AFTER
                                </div>
                                <Image
                                    src="/assets/proof.png"
                                    alt="Sheet music with professional advice"
                                    width={600}
                                    height={400}
                                    className="w-full h-auto object-cover"
                                />
                                <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/90 via-black/50 to-transparent p-6 pt-20">
                                    <p className="text-white font-bold text-lg">プロの書き込みで「正解」が見える</p>
                                    <p className="text-gray-300 text-sm mt-2">魔法の処方箋があなたの演奏を変えます</p>
                                </div>
                            </div>
                        </div>
                    </FadeIn>
                </div>
            </div>
        </Section>
    );
}
