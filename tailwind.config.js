/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./app/**/*.{js,jsx,ts,tsx}",
        "./components/**/*.{js,jsx,ts,tsx}",
        "./pages/**/*.{js,jsx,ts,tsx}",
        "./src/**/*.{js,jsx,ts,tsx}",
    ],
    darkMode: "class",
    theme: {
        extend: {
            colors: {
                blue: {
                    300: "#93c5fd",
                    400: "#60a5fa",
                    500: "#3b82f6",
                },
                indigo: {
                    300: "#a5b4fc",
                },
                violet: {
                    200: "#c4b5fd",
                },
            },
            animation: {
                "fade-down": "fadeDown 1s ease-out forwards",
                aurora: "aurora 60s linear infinite",
            },
            keyframes: {
                fadeDown: {
                    "0%": { opacity: "0", transform: "translateY(-20px)" },
                    "100%": { opacity: "1", transform: "translateY(0)" },
                },
                aurora: {
                    from: {
                        backgroundPosition: "50% 50%, 50% 50%",
                    },
                    to: {
                        backgroundPosition: "350% 50%, 350% 50%",
                    },
                },
            },
        },
    },
    plugins: [],
};
