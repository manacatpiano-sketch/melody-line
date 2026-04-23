"use client";

import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import FadeIn from "@/components/ui/FadeIn";
import { trackEvent } from "@/lib/analytics/events";

export function MidCTA() {
    return (
        <div className="bg-gradient-to-b from-primary-navy to-bg-cream py-16">
            <div className="container mx-auto px-4 text-center">
                <FadeIn direction="up">
                    <a href="https://lin.ee/pcfImvr" target="_blank" rel="noopener noreferrer" onClick={() => trackEvent('line_button_click_mid')}>
                        <Button size="xl" className="w-full md:w-auto">
                            <div className="flex flex-col items-center gap-1">
                                <span className="text-lg font-bold">【初回無料】プロの添削を体験する</span>
                                <span className="text-xs opacity-90">＊ LINE友だち追加は1タップで完了</span>
                            </div>
                        </Button>
                    </a>
                    <p className="text-xs text-gray-500 mt-3">
                        登録無料｜しつこい勧誘なし
                    </p>
                </FadeIn>
            </div>
        </div>
    );
}
