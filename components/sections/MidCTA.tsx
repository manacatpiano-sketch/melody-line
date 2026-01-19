import { Button } from "@/components/ui/Button";
import FadeIn from "@/components/ui/FadeIn";

export function MidCTA() {
    return (
        <div className="bg-primary-navy py-12 md:py-16">
            <div className="max-w-4xl mx-auto px-4 text-center">
                <FadeIn direction="up">
                    <Button size="xl" className="w-full md:w-auto">
                        <div className="flex flex-col items-center gap-1">
                            <span className="text-lg font-bold">今すぐ枠を確保する →</span>
                            <span className="text-xs opacity-90">LINE登録30秒 / 無料相談OK</span>
                        </div>
                    </Button>
                    <p className="text-xs text-gray-400 mt-3">
                        ※登録は無料です
                    </p>
                </FadeIn>
            </div>
        </div>
    );
}
