import type { Config } from "tailwindcss"

const config = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
	],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
         pri: '#AC3400',
         'on-pri': '#FFFFFF',
          'pri-cont': '#FF7E53',
                'on-pri-cont': '#340900',
                sec: '#1E1F26',
                'on-sec': '#FFFFFF',
                'sec-cont': '#3E3F47',
                'on-sec-cont': '#D4D3DE',
                tert: '#5D5F5F',
                'on-tert': '#FFFFFF',
                'tert-cont': '#F6F6F6',
                'on-tert-cont': '#525354',
                err: '#98000B',
                'on-err': '#FFFFFF',
                'err-cont': '#FFFFFF',
                'on-err-cont': '#FFFFFF',
                surf: '#FCF8F8',
                'surf-cont': '#F1EDEC',
                'on-surf': '#1C1B1B',
                'surf-cont-low': '#F7F3F2',
                'surf-cont-lowest': '#FFFFFF',
                'surf-cont-high': '#EBE7E7',
                'surf-cont-highest': '#E5E2E1',
                'surf-var': '#E0E3E3',
                'on-surf-cont': '#444748',
                outline: '#747878',
                'outline-var': '#C4C7C8',
                'on-back-16': '#1D1B20',
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config

export default config