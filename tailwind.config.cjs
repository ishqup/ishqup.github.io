/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
    theme: {
        extend: {
            fontFamily: {
                IBM: ["IBM Plex Mono", "monospace"],
                Grotesk: ["Schibsted Grotesk", "sans-serif"],
                Verdana: ["Verdana", "sans-serif"],
            },
        },
    },
    plugins: [require("@tailwindcss/typography")],
};
