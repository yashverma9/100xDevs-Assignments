/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            colors: {
                "light-blue": "#146EB4",
                "dark-blue": "#0E4F82",
                "new-gray": "#FAFAFA",
                "gray-white": "#F2F2F2",
                "basic-gray": "#4D4D4D",
                "basic-black": "#1A181E",
                "side-blue": "#1E2640",
                "search-gray": "#808080",
                "icon-gray": "#E6E6E6",
                "brdr-gray": "#D9D9D9",
                "search-2-gray": "#999999",
                "light-white": "rgba(255, 255, 255, 0.1)",
                "another-white": "rgba(53, 60, 83, 1)",
                "font-white": "rgba(255, 255, 255, 1)",
            },
            fontFamily: {
                inter: ["Inter", "sans-serif"],
            },
            fontSize: {
                "number-large": "32px",
                15: "15px",
                13: "13px",
            },
            flexBasis: {
                "1/7": "14.28%",
                "1/8": "12.5%",
            },
        },
    },
    plugins: [],
};
