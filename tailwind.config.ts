import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          DEFAULT: "#6000CD",
          50: "#F4ECFF",
          100: "#E5D2FF",
          200: "#C9A3FF",
          300: "#A66BFF",
          400: "#8232FF",
          500: "#6000CD",
          600: "#4D00A6",
          700: "#3A007F",
          800: "#280058",
          900: "#160031",
        },
        ink: {
          DEFAULT: "#0F172A",
          soft: "#454F5E",
          muted: "#7B8794",
        },
        surface: {
          DEFAULT: "#FFFFFF",
          slate: "#F1F5F9",
          cream: "#FAF9F5",
        },
      },
      fontFamily: {
        sans: ["var(--font-libre-franklin)", "system-ui", "sans-serif"],
        display: ["var(--font-libre-franklin)", "system-ui", "sans-serif"],
      },
      maxWidth: {
        prose: "65ch",
        page: "1200px",
      },
      container: {
        center: true,
        padding: {
          DEFAULT: "1rem",
          md: "2rem",
        },
        screens: {
          "2xl": "1200px",
        },
      },
    },
  },
  plugins: [],
};
export default config;
