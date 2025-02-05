import type { Config } from "tailwindcss";

export default {
  content: ["./src/app/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        spotify: "#1DB954",
        spotifyHover: "#1AA34A", 
      },
    },
  },
  plugins: [],
} satisfies Config;
