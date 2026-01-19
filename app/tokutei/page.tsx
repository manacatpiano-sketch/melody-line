"use client";

import Link from "next/link";
import { GlassCard } from "@/components/ui/GlassCard";
import FadeIn from "@/components/ui/FadeIn";

export default function TokuteiPage() {
    return (
        <div className="font-sans">
            {/* ヘッダー */}
            <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl bg-primary-navy/80 border-b border-accent-gold/20">
                <div className="container mx-auto px-4 py-4">
                    <Link href="/" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
                        <div className="w-10 h-10 rounded-lg overflow-hidden shadow-gold-glow">
                            <img src="/logo.png" alt="Melody LINE" className="w-full h-full object-cover" />
                        </div>
                        <div>
                            <h1 className="text-xl font-serif font-bold text-white">Melody LINE</h1>
                            <p className="text-xs text-gray-400">あなただけの音楽室</p>
                        </div>
                    </Link>
                </div>
            </header>

            {/* メインコンテンツ */}
            <main className="min-h-screen bg-gradient-to-b from-primary-navy via-primary-navy to-black pt-24 pb-16">
                {/* 背景装飾 */}
                <div className="fixed inset-0 overflow-hidden pointer-events-none">
                    <div className="absolute top-20 right-10 w-96 h-96 bg-accent-gold/5 rounded-full blur-3xl"></div>
                    <div className="absolute bottom-20 left-10 w-96 h-96 bg-accent-gold/5 rounded-full blur-3xl"></div>
                </div>

                <div className="container mx-auto px-4 relative z-10">
                    <FadeIn direction="up">
                        <div className="text-center mb-12">
                            <h1 className="text-3xl md:text-4xl font-serif font-bold text-white mb-4">
                                特定商取引法に基づく表記
                            </h1>
                            <p className="text-gray-400 text-sm">
                                Specified Commercial Transaction Act
                            </p>
                        </div>
                    </FadeIn>

                    <FadeIn direction="up" delay={0.2}>
                        <div className="max-w-4xl mx-auto">
                            <GlassCard className="p-8 md:p-12">
                                <div className="space-y-8">
                                    {/* 各項目 */}
                                    <div className="border-b border-white/10 pb-6">
                                        <h2 className="text-accent-gold font-bold mb-3 text-lg">販売業者の名称</h2>
                                        <p className="text-white text-base">前野 真奈（Melody LINE）</p>
                                    </div>

                                    <div className="border-b border-white/10 pb-6">
                                        <h2 className="text-accent-gold font-bold mb-3 text-lg">代表責任者名</h2>
                                        <p className="text-white text-base">前野 真奈</p>
                                    </div>

                                    <div className="border-b border-white/10 pb-6">
                                        <h2 className="text-accent-gold font-bold mb-3 text-lg">メールアドレス</h2>
                                        <p className="text-white text-base">
                                            <a href="mailto:mana.cat.piano@gmail.com" className="hover:text-accent-gold transition-colors underline">
                                                mana.cat.piano@gmail.com
                                            </a>
                                        </p>
                                    </div>

                                    <div className="border-b border-white/10 pb-6">
                                        <h2 className="text-accent-gold font-bold mb-3 text-lg">販売価格</h2>
                                        <p className="text-white text-base mb-3">
                                            各プランの紹介ページに記載された価格に基づきます。
                                        </p>
                                        <ul className="text-gray-300 text-sm space-y-1 ml-4">
                                            <li>• ライトプラン：¥1,480（税込）</li>
                                            <li>• スタンダード：¥5,980 / 月（税込）</li>
                                            <li>• プレミアム：¥19,800 / 月（税込）</li>
                                        </ul>
                                        <p className="text-gray-400 text-sm mt-2">※表示価格は消費税を含みます。</p>
                                    </div>

                                    <div className="border-b border-white/10 pb-6">
                                        <h2 className="text-accent-gold font-bold mb-3 text-lg">商品代金以外の必要料金</h2>
                                        <p className="text-white text-base">
                                            サイト閲覧、お問い合わせ、レッスン動画の送受信等にかかる通信料。
                                        </p>
                                    </div>

                                    <div className="border-b border-white/10 pb-6">
                                        <h2 className="text-accent-gold font-bold mb-3 text-lg">支払方法・時期</h2>
                                        <p className="text-white text-base mb-2">クレジットカード決済（Stripe）</p>
                                        <p className="text-gray-300 text-sm">各カード会社の引き落とし日に準じます。</p>
                                    </div>

                                    <div className="border-b border-white/10 pb-6">
                                        <h2 className="text-accent-gold font-bold mb-3 text-lg">サービス提供時期</h2>
                                        <p className="text-white text-base">
                                            代金決済手続きの完了確認後、直ちに提供を開始します。
                                        </p>
                                    </div>

                                    <div>
                                        <h2 className="text-accent-gold font-bold mb-3 text-lg">返品・キャンセルについて</h2>
                                        <div className="text-white text-base space-y-2">
                                            <p>
                                                サービスの性質上、決済完了後のキャンセル・返金はお受けしておりません。
                                            </p>
                                            <p className="text-gray-300 text-sm">
                                                解約を希望される場合は、次回決済日の3日前までに公式LINEよりご連絡ください。
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                {/* トップに戻るリンク */}
                                <div className="mt-12 pt-8 border-t border-white/10 text-center">
                                    <Link
                                        href="/"
                                        className="inline-flex items-center gap-2 text-accent-gold hover:text-yellow-400 transition-colors font-medium"
                                    >
                                        <svg
                                            className="w-5 h-5"
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M10 19l-7-7m0 0l7-7m-7 7h18"
                                            />
                                        </svg>
                                        トップページに戻る
                                    </Link>
                                </div>
                            </GlassCard>
                        </div>
                    </FadeIn>
                </div>
            </main>

            {/* フッター */}
            <footer className="bg-black border-t border-accent-gold/20 py-8">
                <div className="container mx-auto px-4">
                    <div className="text-center space-y-4">
                        <div className="flex items-center justify-center gap-3">
                            <div className="w-8 h-8 rounded-lg overflow-hidden shadow-gold-glow">
                                <img src="/logo.png" alt="Melody LINE" className="w-full h-full object-cover" />
                            </div>
                            <h2 className="text-lg font-serif font-bold text-white">Melody LINE</h2>
                        </div>

                        <nav className="flex flex-wrap items-center justify-center gap-4 text-sm">
                            <Link href="/" className="text-gray-400 hover:text-accent-gold transition-colors">
                                トップページ
                            </Link>
                            <span className="text-gray-600">|</span>
                            <Link href="/tokutei" className="text-gray-400 hover:text-accent-gold transition-colors">
                                特定商取引法に基づく表記
                            </Link>
                        </nav>

                        <p className="text-gray-500 text-xs">
                            © 2024 Melody LINE. All rights reserved.
                        </p>
                    </div>
                </div>
            </footer>
        </div>
    );
}
