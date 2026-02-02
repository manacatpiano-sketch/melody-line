"use client";

import { Section } from "@/components/ui/Section";
import FadeIn from "@/components/ui/FadeIn";
import Image from "next/image";

export function LinePreview() {
    return (
        <Section className="bg-gradient-to-b from-bg-cream to-white py-16 md:py-20">
            <div className="container mx-auto px-4">
                <FadeIn direction="up">
                    <div className="text-center mb-8">
                        <h2 className="text-2xl md:text-3xl font-serif font-bold text-primary-navy">
                            スマホひとつでプロの添削が受けられます
                        </h2>
                    </div>
                </FadeIn>

                <FadeIn direction="up" delay={0.2}>
                    <div className="max-w-md mx-auto">
                        {/* LINEチャット画面のイメージ */}
                        <div className="relative">
                            <Image
                                src="/assets/line-feedback-sample.png"
                                alt="LINEでのやり取りイメージ"
                                width={600}
                                height={800}
                                className="mx-auto rounded-2xl shadow-2xl"
                            />
                        </div>

                        {/* 3つの特徴 */}
                        <div className="mt-8 space-y-3">
                            <div className="flex items-center gap-3 bg-white rounded-lg p-4 shadow-sm">
                                <div className="flex-shrink-0 w-6 h-6 bg-accent-gold rounded-full flex items-center justify-center">
                                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                    </svg>
                                </div>
                                <p className="text-primary-navy font-medium">改善点がすぐにわかる</p>
                            </div>
                            <div className="flex items-center gap-3 bg-white rounded-lg p-4 shadow-sm">
                                <div className="flex-shrink-0 w-6 h-6 bg-accent-gold rounded-full flex items-center justify-center">
                                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                    </svg>
                                </div>
                                <p className="text-primary-navy font-medium">次にやるべき練習が明確</p>
                            </div>
                            <div className="flex items-center gap-3 bg-white rounded-lg p-4 shadow-sm">
                                <div className="flex-shrink-0 w-6 h-6 bg-accent-gold rounded-full flex items-center justify-center">
                                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                    </svg>
                                </div>
                                <p className="text-primary-navy font-medium">LINEで届くから見返しやすい</p>
                            </div>
                        </div>

                        {/* メッセージ */}
                        <div className="mt-6 bg-blue-50 rounded-lg p-5 border border-blue-100">
                            <p className="text-primary-navy font-bold mb-2">
                                添削はLINEで届きます
                            </p>
                            <p className="text-sm text-gray-600">
                                改善点と次の練習を、具体的にお伝えします。
                            </p>
                        </div>
                    </div>
                </FadeIn>
            </div>
        </Section>
    );
}
