import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary-navy': '#0F172A',
        'accent-gold': '#CBA135',
        'bg-cream': '#FDFCF8',
        'text-body': '#334155',
      },
      fontFamily: {
        serif: ['"Noto Serif JP"', 'serif'],
        sans: ['"Noto Sans JP"', 'sans-serif'],
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        // シネマティック・ライティング用グラデーション
        "cinematic-light": "radial-gradient(ellipse at top, rgba(203, 161, 53, 0.15) 0%, transparent 50%), radial-gradient(ellipse at bottom right, rgba(203, 161, 53, 0.1) 0%, transparent 50%)",
      },
      backdropBlur: {
        xs: '2px',
      },
      boxShadow: {
        // ガラスモーフィズム用シャドウ
        'glass': '0 8px 32px 0 rgba(31, 38, 135, 0.15)',
        // ゴールドグロー
        'gold-glow': '0 0 20px rgba(203, 161, 53, 0.4), 0 0 40px rgba(203, 161, 53, 0.2)',
        'gold-glow-lg': '0 0 30px rgba(203, 161, 53, 0.5), 0 0 60px rgba(203, 161, 53, 0.3)',
        // エンボス加工風
        'emboss': 'inset 0 1px 0 rgba(255, 255, 255, 0.5), inset 0 -1px 0 rgba(0, 0, 0, 0.3), 0 2px 4px rgba(0, 0, 0, 0.2)',
        // 金箔押し風
        'gold-foil': '0 1px 3px rgba(203, 161, 53, 0.5), 0 4px 12px rgba(203, 161, 53, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.6)',
      },
      animation: {
        'gentle-glow': 'gentleGlow 3s ease-in-out infinite',
        'piano-press': 'pianoPress 0.2s ease-out',
      },
      keyframes: {
        gentleGlow: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.8' },
        },
        pianoPress: {
          '0%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(0.95)' },
          '100%': { transform: 'scale(1)' },
        },
      },
    },
  },
  plugins: [],
};
export default config;
