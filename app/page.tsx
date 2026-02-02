"use client";

import { Hero } from "@/components/sections/Hero";
import { HeroMobile } from "@/components/sections/HeroMobile";
import { Solution } from "@/components/sections/Solution";
import { Proof } from "@/components/sections/Proof";
import { Pricing } from "@/components/sections/Pricing";
import { Closing } from "@/components/sections/Closing";

import { Instructor } from "@/components/sections/Instructor";
import { Testimonials } from "@/components/sections/Testimonials";
import { Comparison } from "@/components/sections/Comparison";
import { Process } from "@/components/sections/Process";
import { FAQ } from "@/components/sections/FAQ";
import { StickyCTA } from "@/components/ui/StickyCTA";
import { MidCTA } from "@/components/sections/MidCTA";
import { StructuredData } from "@/components/seo/StructuredData";
import { ExitIntentPopup } from "@/components/ui/ExitIntentPopup";
import { LineRegistrationFAQ } from "@/components/sections/LineRegistrationFAQ";
import { FeedbackSample } from "@/components/sections/FeedbackSample";
import { LinePreview } from "@/components/sections/LinePreview";
import { useEffect } from "react";
import { setupScrollTracking } from "@/lib/analytics/events";

export default function Home() {
    // スクロール計測のセットアップ
    useEffect(() => {
        const cleanup = setupScrollTracking();
        return cleanup;
    }, []);

    return (
        <main className="min-h-screen bg-bg-cream selection:bg-accent-gold selection:text-white pb-24">
            <StructuredData />
            <HeroMobile />
            <Hero />
            <LinePreview />
            <div id="flow">
                <Comparison />
                <MidCTA />
                <Process />
                <Solution />
            </div>
            <Proof />
            <Testimonials />
            <Instructor />
            <Pricing />
            <FAQ />
            <Closing />
            <StickyCTA />
            <ExitIntentPopup />


            <footer className="bg-primary-navy text-white py-8 pb-36 md:pb-32 border-t border-accent-gold/20">
                <div className="container mx-auto px-4 text-center space-y-4">
                    <nav className="flex flex-wrap items-center justify-center gap-4 text-sm">
                        <a href="/tokutei" className="text-gray-400 hover:text-accent-gold transition-colors">
                            特定商取引法に基づく表記
                        </a>
                    </nav>
                    <p className="text-gray-500 text-xs">© 2026 Melody LINE. All Rights Reserved.</p>
                </div>
            </footer>
        </main>
    );
}
