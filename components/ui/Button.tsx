"use client";

import { ButtonHTMLAttributes, ReactNode } from "react";
import { motion } from "framer-motion";
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    children: ReactNode;
    variant?: "primary" | "outline" | "text";
    size?: "sm" | "md" | "lg" | "xl";
    className?: string;
}

export function Button({
    children,
    variant = "primary",
    size = "md",
    className,
    ...props
}: ButtonProps) {
    const baseStyles = "rounded-full transition-all duration-300 font-bold items-center justify-center inline-flex cursor-pointer";

    const variants = {
        primary: "bg-gradient-to-r from-accent-gold to-yellow-500 text-white shadow-gold-glow hover:shadow-gold-glow-lg hover:from-yellow-500 hover:to-accent-gold",
        outline: "border-2 border-accent-gold text-accent-gold hover:bg-accent-gold hover:text-white hover:shadow-gold-glow",
        text: "text-primary-navy hover:text-accent-gold underline-offset-4 hover:underline p-0 bg-transparent shadow-none"
    };

    const sizes = {
        sm: "px-4 py-2 text-sm",
        md: "px-8 py-3 text-base",
        lg: "px-10 py-4 text-lg font-bold",
        xl: "px-12 py-6 text-xl min-w-[300px] font-bold"
    };

    return (
        <motion.button
            className={twMerge(baseStyles, variants[variant], sizes[size], className)}
            whileTap={{ scale: 0.95 }}
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            {...props}
        >
            {children}
        </motion.button>
    );
}
