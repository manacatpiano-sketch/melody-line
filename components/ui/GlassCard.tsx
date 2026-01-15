"use client";

import { ReactNode } from "react";
import { motion } from "framer-motion";
import { twMerge } from "tailwind-merge";

interface GlassCardProps {
    children: ReactNode;
    className?: string;
    hover?: boolean;
    glow?: boolean;
}

export function GlassCard({ children, className, hover = true, glow = false }: GlassCardProps) {
    const baseStyles = `
        relative
        bg-white/10
        backdrop-blur-md
        border border-accent-gold/30
        rounded-2xl
        shadow-glass
        ${hover ? 'hover:bg-white/15 hover:border-accent-gold/50 hover:shadow-xl transition-all duration-300' : ''}
        ${glow ? 'shadow-gold-glow' : ''}
    `;

    return (
        <motion.div
            className={twMerge(baseStyles, className)}
            whileHover={hover ? { y: -4 } : undefined}
            transition={{ duration: 0.3, ease: "easeOut" }}
        >
            {children}
        </motion.div>
    );
}
