/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    container: {
      center: true,
      padding: "1.25rem",
    },
    extend: {
      colors: {
        ink: {
          DEFAULT: "#1B1815",
          50: "#F5F3F1",
          100: "#E8E4DF",
          200: "#C7BFB5",
          300: "#9C9186",
          400: "#5F564C",
          500: "#3A342C",
          600: "#2A251F",
          700: "#1B1815",
          800: "#131110",
          900: "#0B0A09",
        },
        cream: {
          DEFAULT: "#F7F2E9",
          50: "#FFFFFF",
          100: "#FDFBF7",
          200: "#F7F2E9",
          300: "#EFE6D5",
        },
        tabby: {
          DEFAULT: "#E1631F",
          50: "#FDECE1",
          100: "#FAD4B9",
          200: "#F3A66C",
          300: "#EC831F",
          400: "#E1631F",
          500: "#C24F16",
          600: "#9B3E11",
        },
        moss: {
          DEFAULT: "#4C5A3F",
          100: "#DDE3D3",
          200: "#B6C2A4",
          300: "#8A9A73",
          400: "#657850",
          500: "#4C5A3F",
          600: "#374029",
        },
        sand: "#C9BFA8",
      },
      fontFamily: {
        display: ["'Fraunces'", "serif"],
        body: ["'Inter'", "sans-serif"],
      },
      fontSize: {
        "display-xl": ["clamp(3rem, 7vw, 6.5rem)", { lineHeight: "0.95", letterSpacing: "-0.02em" }],
        "display-lg": ["clamp(2.25rem, 5vw, 4.25rem)", { lineHeight: "1.0", letterSpacing: "-0.02em" }],
        "display-md": ["clamp(1.75rem, 3.4vw, 2.75rem)", { lineHeight: "1.05", letterSpacing: "-0.01em" }],
      },
      borderRadius: {
        blob: "2rem 2rem 2rem 0",
        "blob-alt": "0 2rem 2rem 2rem",
      },
      boxShadow: {
        crisp: "6px 6px 0 0 #1B1815",
        "crisp-sm": "4px 4px 0 0 #1B1815",
      },
      keyframes: {
        pawtrail: {
          "0%": { opacity: "0", transform: "scale(0.6) rotate(-8deg)" },
          "60%": { opacity: "1", transform: "scale(1.05) rotate(2deg)" },
          "100%": { opacity: "1", transform: "scale(1) rotate(0deg)" },
        },
        floaty: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" },
        },
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
      animation: {
        floaty: "floaty 4s ease-in-out infinite",
        marquee: "marquee 24s linear infinite",
      },
    },
  },
  plugins: [],
};
