"use client";

import { useState, useEffect } from "react";
import { Button } from "./Button";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

export function ExitIntentPopup() {
    const [isVisible, setIsVisible] = useState(false);
    const [hasShown, setHasShown] = useState(false);
    const [hasCTAClicked, setHasCTAClicked] = useState(false);

    useEffect(() => {
        // PC: マウスが画面上部に移動したときに検知（離脱の兆候）
        const handleMouseLeave = (e: MouseEvent) => {
            if (e.clientY <= 0 && !hasShown && !hasCTAClicked) {
                setIsVisible(true);
                setHasShown(true);
            }
        };

        // モバイル: ページの80%までスクロールしたが、CTAをクリックしていない
        const handleScroll = () => {
            if (hasShown || hasCTAClicked) return;

            const scrollHeight = document.documentElement.scrollHeight;
            const scrollTop = window.scrollY;
            const clientHeight = window.innerHeight;
            const scrollPercentage = (scrollTop + clientHeight) / scrollHeight;

            if (scrollPercentage >= 0.8) {
                setIsVisible(true);
                setHasShown(true);
            }
        };

        // CTAボタンのクリックを検知
        const handleCTAClick = () => {
            setHasCTAClicked(true);
        };

        // 全てのCTAボタンにイベントリスナーを追加
        const ctaButtons = document.querySelectorAll('button, a[href*="line"]');
        ctaButtons.forEach(button => {
            button.addEventListener('click', handleCTAClick);
        });

        document.addEventListener("mouseleave", handleMouseLeave);
        window.addEventListener("scroll", handleScroll);

        return () => {
            document.removeEventListener("mouseleave", handleMouseLeave);
            window.removeEventListener("scroll", handleScroll);
            ctaButtons.forEach(button => {
                button.removeEventListener('click', handleCTAClick);
            });
        };
    }, [hasShown, hasCTAClicked]);

    const handleClose = () => {
        setIsVisible(false);
    };

    return (
        <AnimatePresence>
            {isVisible && (
                <>
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[100]"
                        onClick={handleClose}
                    />

                    {/* Popup */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.9, y: 20 }}
                        transition={{ duration: 0.3, ease: "easeOut" }}
                        className="fixed inset-0 flex items-center justify-center z-[101] pointer-events-none"
                    >
                        <div className="w-[90%] max-w-md pointer-events-auto">
                            <div className="relative bg-gradient-to-br from-primary-navy to-slate-900 rounded-2xl p-8 border-2 border-accent-gold/50 shadow-gold-glow-lg">
                                {/* Close button */}
                                <button
                                    onClick={handleClose}
                                    className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors"
                                >
                                    <X className="w-6 h-6" />
                                </button>

                                {/* Content */}
                                <div className="text-center">
                                    <h3 className="text-2xl md:text-3xl font-serif font-bold text-white mb-4">
                                        ちょっと待ってください！
                                    </h3>
                                    <p className="text-gray-300 mb-6 leading-relaxed">
                                        まずは気軽に相談してみませんか？<br />
                                        あなたの演奏の課題が<span className="text-accent-gold font-bold">24時間でわかります</span>。
                                    </p>

                                    {/* CTA */}
                                    <Button
                                        size="lg"
                                        className="w-full mb-3"
                                    >
                                        無料で相談してみる
                                    </Button>
                                    <p className="text-xs text-gray-400">
                                        ※しつこい勧誘は一切ありません
                                    </p>

                                    <button
                                        onClick={handleClose}
                                        className="mt-4 text-gray-500 hover:text-gray-300 text-sm underline transition-colors"
                                    >
                                        今は結構です
                                    </button>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
}
