import { ReactNode } from "react";
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

interface SectionProps {
    children: ReactNode;
    className?: string;
    id?: string;
    fullWidth?: boolean; // If true, max-w won't be applied to container (for hero etc)
}

export function Section({ children, className, id, fullWidth = false }: SectionProps) {
    return (
        <section id={id} className={twMerge("py-24 md:py-32 relative overflow-hidden", className)}>
            <div className={twMerge("mx-auto px-4 md:px-8", fullWidth ? "w-full max-w-none p-0" : "max-w-5xl")}>
                {children}
            </div>
        </section>
    );
}
