"use client";

import { useState, useEffect } from "react";
import { Button } from "./Button";
import { motion, AnimatePresence } from "framer-motion";

export function StickyCTA() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            // ページを少しスクロールしたら表示
            if (window.scrollY > 500) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.div
                    initial={{ y: 100, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: 100, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeOut" }}
                    className="fixed bottom-0 left-0 right-0 z-50 pb-3 md:pb-4 px-4"
                >
                    <div className="max-w-2xl mx-auto">
                        {/* ガラスモーフィズム背景 */}
                        <div className="relative backdrop-blur-xl bg-primary-navy/80 rounded-2xl p-3 md:p-4 border border-accent-gold/50 shadow-gold-glow-lg">
                            <div className="flex flex-col md:flex-row items-center gap-4 md:gap-6">
                                <div className="text-center md:text-left flex-1">
                                    <p className="text-white font-bold text-sm md:text-base mb-1">
                                        限定枠が埋まる前に
                                    </p>
                                    <p className="text-gray-300 text-xs md:text-sm">
                                        ※月間の指導枠には限りがあります
                                    </p>
                                </div>
                                <a href="https://lin.ee/pcfImvr" target="_blank" rel="noopener noreferrer" className="inline-block shrink-0">
                                    <Button size="lg" className="w-full md:w-auto shrink-0 md:min-w-[280px]">
                                        <div className="flex flex-col items-center gap-0.5">
                                            <span className="font-bold">無料で相談してみる</span>
                                            <span className="text-xs opacity-90">LINE登録30秒</span>
                                        </div>
                                    </Button>
                                </a>
                            </div>
                        </div>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
