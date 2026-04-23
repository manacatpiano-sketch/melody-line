"use client";

import { Section } from "@/components/ui/Section";
import FadeIn from "@/components/ui/FadeIn";
import { Check, X as XIcon } from "lucide-react";

export function Comparison() {
    return (
        <Section className="bg-bg-cream py-16 md:py-24">
            <FadeIn direction="up">
                <div className="text-center mb-12">
                    <h2 className="text-2xl md:text-3xl font-serif font-bold text-primary-navy mb-4">
                        なぜ、Melody LINEが選ばれるのか
                    </h2>
                    <p className="text-gray-600">
                        「検査結果の説明」ではなく、「処方箋」をお届けします。
                    </p>
                </div>
            </FadeIn>

            <FadeIn direction="up" delay={0.1}>
                <div className="max-w-4xl mx-auto overflow-x-auto">
                    <table className="w-full border-collapse bg-white rounded-xl shadow-sm mt-4">
                        <thead>
                            <tr>
                                <th className="text-left p-4 md:p-5 bg-gray-50 text-gray-500 text-sm font-medium w-1/4">比較ポイント</th>
                                <th className="text-center p-4 md:p-5 bg-gray-50 text-gray-500 text-sm font-medium w-1/4">独学<br /><span className="text-xs font-normal">(YouTube等)</span></th>
                                <th className="text-center p-4 md:p-5 bg-gray-50 text-gray-500 text-sm font-medium w-1/4">単発添削<br /><span className="text-xs font-normal">(他社サービス)</span></th>
                                <th className="text-center p-4 md:p-5 bg-primary-navy text-white text-sm font-bold w-1/4 relative">
                                    <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-accent-gold text-white text-xs font-bold px-3 py-1 rounded-full whitespace-nowrap">おすすめ</span>
                                    Melody LINE
                                </th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-100">
                            <tr>
                                <td className="p-4 md:p-5 text-sm font-medium text-gray-700">月額コスト</td>
                                <td className="p-4 md:p-5 text-center text-sm text-gray-600">無料</td>
                                <td className="p-4 md:p-5 text-center text-sm text-gray-600">¥770〜/回</td>
                                <td className="p-4 md:p-5 text-center text-sm font-bold text-primary-navy bg-accent-gold/10">¥1,480〜/月</td>
                            </tr>
                            <tr>
                                <td className="p-4 md:p-5 text-sm font-medium text-gray-700">プロの添削</td>
                                <td className="p-4 md:p-5 text-center"><XIcon className="w-5 h-5 text-gray-300 mx-auto" /></td>
                                <td className="p-4 md:p-5 text-center"><Check className="w-5 h-5 text-green-500 mx-auto" /></td>
                                <td className="p-4 md:p-5 text-center bg-accent-gold/10"><Check className="w-5 h-5 text-accent-gold mx-auto" /></td>
                            </tr>
                            <tr>
                                <td className="p-4 md:p-5 text-sm font-medium text-gray-700">練習メニュー</td>
                                <td className="p-4 md:p-5 text-center"><XIcon className="w-5 h-5 text-gray-300 mx-auto" /></td>
                                <td className="p-4 md:p-5 text-center"><XIcon className="w-5 h-5 text-gray-300 mx-auto" /></td>
                                <td className="p-4 md:p-5 text-center bg-accent-gold/10"><Check className="w-5 h-5 text-accent-gold mx-auto" /></td>
                            </tr>
                            <tr>
                                <td className="p-4 md:p-5 text-sm font-medium text-gray-700">あなたの成長を<br className="md:hidden" />覚えている</td>
                                <td className="p-4 md:p-5 text-center"><XIcon className="w-5 h-5 text-gray-300 mx-auto" /></td>
                                <td className="p-4 md:p-5 text-center"><XIcon className="w-5 h-5 text-gray-300 mx-auto" /></td>
                                <td className="p-4 md:p-5 text-center bg-accent-gold/10"><Check className="w-5 h-5 text-accent-gold mx-auto" /></td>
                            </tr>
                            <tr>
                                <td className="p-4 md:p-5 text-sm font-medium text-gray-700">自分のペースで</td>
                                <td className="p-4 md:p-5 text-center"><Check className="w-5 h-5 text-green-500 mx-auto" /></td>
                                <td className="p-4 md:p-5 text-center"><Check className="w-5 h-5 text-green-500 mx-auto" /></td>
                                <td className="p-4 md:p-5 text-center bg-accent-gold/10"><Check className="w-5 h-5 text-accent-gold mx-auto" /></td>
                            </tr>
                            <tr>
                                <td className="p-4 md:p-5 text-sm font-medium text-gray-700">講師の質</td>
                                <td className="p-4 md:p-5 text-center text-sm text-gray-600">ばらつきあり</td>
                                <td className="p-4 md:p-5 text-center text-sm text-gray-600">音大卒</td>
                                <td className="p-4 md:p-5 text-center text-sm font-bold text-primary-navy bg-accent-gold/10">桐朋学園大学卒</td>
                            </tr>
                            <tr>
                                <td className="p-4 md:p-5 text-sm font-medium text-gray-700">いつでも解約OK</td>
                                <td className="p-4 md:p-5 text-center text-gray-400">—</td>
                                <td className="p-4 md:p-5 text-center text-gray-400">—</td>
                                <td className="p-4 md:p-5 text-center bg-accent-gold/10"><Check className="w-5 h-5 text-accent-gold mx-auto" /></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </FadeIn>

            <FadeIn direction="up" delay={0.3}>
                <div className="text-center mt-10">
                    <p className="text-primary-navy font-bold text-lg md:text-xl">
                        1回きりの添削ではなく、<br className="md:hidden" />
                        <span className="text-accent-gold">あなたの上達を1ヶ月間見守ります。</span>
                    </p>
                </div>
            </FadeIn>
        </Section>
    );
}
