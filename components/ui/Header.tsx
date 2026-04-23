"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

export function Header() {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <AnimatePresence>
            {isScrolled && (
                <motion.header
                    initial={{ y: -60, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: -60, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeOut" }}
                    className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl bg-primary-navy/85 border-b border-accent-gold/20"
                >
                    <div className="container mx-auto px-4 py-3 flex items-center justify-between">
                        <div className="flex items-center gap-3">
                            <div className="w-8 h-8 rounded-lg overflow-hidden shadow-gold-glow shrink-0">
                                <Image
                                    src="/logo.png"
                                    alt="Melody LINE"
                                    width={32}
                                    height={32}
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <div>
                                <p className="text-white font-serif font-bold text-sm leading-tight">Melody LINE</p>
                                <p className="text-gray-400 text-xs leading-tight">オンラインピアノレッスン</p>
                            </div>
                        </div>
                        <a
                            href="https://lin.ee/pcfImvr"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-accent-gold hover:bg-yellow-500 text-white text-xs font-bold px-4 py-2 rounded-full transition-colors shadow-gold-glow"
                        >
                            無料で体験
                        </a>
                    </div>
                </motion.header>
            )}
        </AnimatePresence>
    );
}
