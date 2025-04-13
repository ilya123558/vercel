import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-background": "linear-gradient(to bottom left, #1D1B31, #11101C)",
        "gradient-violet": "linear-gradient(to right, #6F4AE7, #A34AE7)",
        "gradient-gray": "linear-gradient(to right, #333341, rgba(44, 44, 65, 0.24))",
        "gradient-gray-to-bottom": "linear-gradient(#333341, rgba(44, 44, 65, 0.24))",
        "gradient-block": "linear-gradient(to bottom right, #252531, rgba(24, 24, 38, 0.06))",
        "gradient-default-button": "linear-gradient(to bottom right, #5C317C, rgba(24, 24, 38, 0.06))",
        "gradient-default-button-bottom": "linear-gradient(#5C317C, rgba(24, 24, 38, 0.06))",
        "gradient-list-item": "linear-gradient(#242430, rgba(44, 44, 65, 0.24))",
        "gradient-decor": "linear-gradient(to right, transparent, #364357, transparent)",
      },
      colors: {
        'violet': '#9E4AE7',
        'dark-violet': '#1A192A',
        'dark-blue': '#364357',
        'green': '#34C759'
      }
    },
  },
  plugins: [],
};
export default config;
