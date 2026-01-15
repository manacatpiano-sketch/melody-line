import { Button } from "@/components/ui/Button";
import FadeIn from "@/components/ui/FadeIn";

export function MidCTA() {
    return (
        <div className="bg-primary-navy py-12 md:py-16">
            <div className="max-w-4xl mx-auto px-4 text-center">
                <FadeIn direction="up">
                    <p className="text-white text-lg md:text-xl font-bold mb-6">
                        まずは気軽にLINEでご相談ください
                    </p>
                    <Button size="lg" className="w-full md:w-auto shadow-[0_4px_14px_0_rgba(203,161,53,0.39)]">
                        LINEで無料相談する
                    </Button>
                    <p className="text-xs text-gray-400 mt-3">
                        ※登録は無料です
                    </p>
                </FadeIn>
            </div>
        </div>
    );
}
