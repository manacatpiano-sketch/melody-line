"use client";

import { useEffect } from 'react';

export function StructuredData() {
    useEffect(() => {
        // Service Schema
        const serviceSchema = {
            "@context": "https://schema.org",
            "@type": "Service",
            "name": "Melody LINE",
            "description": "24時間以内にプロのピアノ講師が添削する非同期オンラインレッスン",
            "provider": {
                "@type": "Person",
                "name": "前野 真奈"
            },
            "serviceType": "ピアノオンラインレッスン",
            "areaServed": "JP",
            "hasOfferCatalog": {
                "@type": "OfferCatalog",
                "name": "ピアノレッスンプラン",
                "itemListElement": [
                    {
                        "@type": "Offer",
                        "itemOffered": {
                            "@type": "Service",
                            "name": "ライトプラン"
                        },
                        "price": "1480",
                        "priceCurrency": "JPY",
                        "description": "初回体験レッスン - プロによる1回限りの添削サービス"
                    },
                    {
                        "@type": "Offer",
                        "itemOffered": {
                            "@type": "Service",
                            "name": "スタンダード"
                        },
                        "price": "5980",
                        "priceCurrency": "JPY",
                        "description": "月2回の添削 - 継続的なサポートで確実に上達"
                    },
                    {
                        "@type": "Offer",
                        "itemOffered": {
                            "@type": "Service",
                            "name": "プレミアム"
                        },
                        "price": "19800",
                        "priceCurrency": "JPY",
                        "description": "無制限添削＋個別カリキュラム - 本格的に上達したい方向け"
                    }
                ]
            }
        };

        // Organization Schema
        const organizationSchema = {
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "Melody LINE",
            "url": "https://melodyline.jp",
            "logo": "https://melodyline.jp/logo.png",
            "contactPoint": {
                "@type": "ContactPoint",
                "email": "mana.cat.piano@gmail.com",
                "contactType": "Customer Service",
                "areaServed": "JP",
                "availableLanguage": "Japanese"
            },
            "founder": {
                "@type": "Person",
                "name": "前野 真奈"
            }
        };

        // Insert schemas into head
        const serviceScript = document.createElement('script');
        serviceScript.type = 'application/ld+json';
        serviceScript.text = JSON.stringify(serviceSchema);
        document.head.appendChild(serviceScript);

        const orgScript = document.createElement('script');
        orgScript.type = 'application/ld+json';
        orgScript.text = JSON.stringify(organizationSchema);
        document.head.appendChild(orgScript);

        return () => {
            // Cleanup on unmount
            if (serviceScript.parentNode) {
                serviceScript.parentNode.removeChild(serviceScript);
            }
            if (orgScript.parentNode) {
                orgScript.parentNode.removeChild(orgScript);
            }
        };
    }, []);

    return null;
}
