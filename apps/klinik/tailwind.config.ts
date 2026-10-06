import { brandColors } from "./src/lib/content";

const config = {
  theme: {
    extend: {
      colors: brandColors,
      fontFamily: {
        sans: ["var(--font-montserrat)", "sans-serif"],
        serif: ["var(--font-serif)", "Georgia", "serif"],
      },
    },
  },
};

export default config;
