import type { Config } from 'tailwindcss';

const config: Config = {
    content: [
        './pages/**/*.{js,ts,jsx,tsx,mdx}',
        './components/**/*.{js,ts,jsx,tsx,mdx}',
        './app/**/*.{js,ts,jsx,tsx,mdx}',
        './node_modules/flowbite/**/*.js',
    ],
    theme: {
        extend: {
            backgroundImage: {
                'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
                'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
            },
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
            },
        },
    },
    plugins: [require('@tailwindcss/forms'), require('flowbite/plugin')],
};
export default config;
