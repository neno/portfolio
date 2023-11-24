import type { Config } from 'tailwindcss'
const {fluid} = require("./src/utils");

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    colors: {
      white: '#ffffff',
      neutral: '#111111',
      secondary: '#d51e2d'
    },
    fontSize: {
      '5xl': [
        fluid(32, 58),
        "1.1"
      ],
      '4xl': [
        fluid(28, 42),
        "1.1"
      ],
      '3xl': [
        fluid(24, 34),
        "1.2"
      ],
      '2xl': [
        fluid(20, 28),
        "1.4"
      ],
      'xl': [
        fluid(17, 22),
        "1.4"
      ],
      base: [
        fluid(16, 20),
        "1.5"
      ],
    },
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
}
export default config
