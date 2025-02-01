import type { Config } from "tailwindcss";

export default {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                background: "var(--background)",
                foreground: "var(--foreground)",
                orange: '#F3603C',
                'dark-blue': '#242D52',
                'black-800': '#1D1E25',
                cream: '#FFF0EC',
            },
        },
    },
    plugins: [],
} satisfies Config;
