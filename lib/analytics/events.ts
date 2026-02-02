// Google Analytics イベント計測用ヘルパー関数

declare global {
    interface Window {
        gtag?: (...args: any[]) => void;
        dataLayer?: any[];
    }
}

type EventName =
    | 'line_button_click_fv'
    | 'line_button_click_sticky'
    | 'line_button_click_mid'
    | 'line_button_click_pricing'
    | 'line_button_click_closing'
    | 'line_button_click_exit_popup'
    | 'copy_free_text'
    | 'scroll_25'
    | 'scroll_50'
    | 'scroll_75'
    | 'scroll_100';

export const trackEvent = (eventName: EventName, params?: Record<string, any>) => {
    if (typeof window === 'undefined') return;

    // Google Analytics (gtag)
    if (window.gtag) {
        window.gtag('event', eventName, params);
    }

    // Google Tag Manager (dataLayer)
    if (window.dataLayer) {
        window.dataLayer.push({
            event: eventName,
            ...params
        });
    }

    // デバッグ用（開発環境のみ）
    if (process.env.NODE_ENV === 'development') {
        console.log('[Analytics Event]', eventName, params);
    }
};

// スクロール計測用のセットアップ
export const setupScrollTracking = () => {
    if (typeof window === 'undefined') return;

    const scrollThresholds = [25, 50, 75, 100];
    const triggered = new Set<number>();

    const handleScroll = () => {
        const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
        const scrollTop = window.scrollY;
        const scrollPercentage = (scrollTop / scrollHeight) * 100;

        scrollThresholds.forEach((threshold) => {
            if (scrollPercentage >= threshold && !triggered.has(threshold)) {
                triggered.add(threshold);
                trackEvent(`scroll_${threshold}` as EventName, {
                    scroll_percentage: threshold
                });
            }
        });
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
        window.removeEventListener('scroll', handleScroll);
    };
};
