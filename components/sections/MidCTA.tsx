"use client";

import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import FadeIn from "@/components/ui/FadeIn";
import { trackEvent } from "@/lib/analytics/events";

export function MidCTA() {
    return (
        <div className="bg-gradient-to-b from-bg-cream to-primary-navy/10 py-16">
            <div className="container mx-auto px-4 text-center">
                <FadeIn direction="up">
                    <a href="https://lin.ee/pcfImvr" target="_blank" rel="noopener noreferrer" onClick={() => trackEvent('line_button_click_mid')}>
                        <Button size="xl" className="w-full md:w-auto">
                            <div className="flex flex-col items-center gap-1">
                                <span className="text-lg font-bold">無料添削の枠を確保する</span>
                                <span className="text-xs opacity-90">（LINE追加）</span>
                            </div>
                        </Button>
                    </a>
                    <p className="text-xs text-gray-300 mt-3">
                        登録無料｜しつこい配信なし
                    </p>
                </FadeIn>
            </div>
        </div>
    );
}
