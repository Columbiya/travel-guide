import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
    colors: {
      white: "#fff",
      primaryGreen: "#87BA2D",
      blueLightPrimary: "#5FCBEF",
      orangePrimary: "#EB640A",
      yellowPrimary: "#F3CB0A",
      purplePrimary: "#855DA4",
      bluePrimary: "#60A1EE",
      crimsonPrimary: "#D56DCA",
      black: "#000",
      "error-4": "#FFEFF1",
      "error-10": "#FCCECE",
      "error-20": "#FBAEAE",
      "error-30": "#F88585",
      "error-40": "#F65D5D",
      "error-50": "#F20C0C",
      "error-60": "#CA0A0A",
      "error-70": "#A10808",
      "error-80": "#790606",
      "error-90": "#510404",
      "error-100": "#300202",
      "warning-4": "#FFFCF5",
      "warning-10": "#FFFAEB",
      "warning-20": "#FEF0C7",
      "warning-30": "#FEDF89",
      "warning-40": "#FEC84B",
      "warning-50": "#FFA800",
      "warning-60": "#F79009",
      "warning-70": "#DC6803",
      "warning-80": "#B54708",
      "warning-90": "#93370D",
      "warning-100": "#7A2E0E",
      "success-4": "#F6FEF9",
      "success-10": "#ECFDF3",
      "success-20": "#ECFDF3",
      "success-30": "#A6F4C5",
      "success-40": "#6CE9A6",
      "success-50": "#32D583",
      "success-60": "#12B76A",
      "success-70": "#039855",
      "success-80": "#027A48",
      "success-90": "#05603A",
      "success-100": "#054F31",
      "gray-30": "#B3B3B3",
      "gray-60": "#666666",
      "gray-80": "#333333",
    },
  },
  plugins: [],
};
export default config;
