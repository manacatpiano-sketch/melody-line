import { Hero } from "@/components/sections/Hero";
import { Problem } from "@/components/sections/Problem";
import { Solution } from "@/components/sections/Solution";
import { Proof } from "@/components/sections/Proof";
import { Pricing } from "@/components/sections/Pricing";
import { Closing } from "@/components/sections/Closing";

import { Instructor } from "@/components/sections/Instructor";
import { Testimonials } from "@/components/sections/Testimonials";
import { Comparison } from "@/components/sections/Comparison";
import { Process } from "@/components/sections/Process";
import { FAQ } from "@/components/sections/FAQ";
import { Roadmap } from "@/components/sections/Roadmap";
import { StickyCTA } from "@/components/ui/StickyCTA";
import { MidCTA } from "@/components/sections/MidCTA";

export default function Home() {
    return (
        <main className="min-h-screen bg-bg-cream selection:bg-accent-gold selection:text-white">
            <Hero />
            <Problem />
            <div id="flow">
                <Comparison />
                <MidCTA />
                <Roadmap />
                <Process />
                <Solution />
            </div>
            <Proof />
            <MidCTA />
            <Pricing />
            <Instructor />
            <Testimonials />
            <FAQ />
            <Closing />
            <StickyCTA />

            <footer className="bg-primary-navy text-white py-8 text-center text-sm">
                <p>© Melody Line. All Rights Reserved.</p>
            </footer>
        </main>
    );
}
