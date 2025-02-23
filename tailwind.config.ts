import type { Config } from "tailwindcss";

export default {
  content: [
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontFamily: {
      roboto: 'Roboto'
    },
    fontWeight: {
      light: '300',
      normal: '400',
      medium: '500',
      bold: '700',
    },
    extend: {
      colors: {
        navy: '#11405E',
        white: '#FFFFFF',
        grey: '#D7D7D7',
        darkGrey: '#707070',
        lightGrey: '#EBEBEB',
        blue: {
          light: '#EEF9FB',
          DEFAULT: '#52A3B7',
        }
      },
    },
  },
  plugins: [],
} satisfies Config;
