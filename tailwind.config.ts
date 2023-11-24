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
      '5xl': fluid(24, 58),
      '4xl': fluid(24, 42),
      '3xl': fluid(24, 42),
      '2xl': fluid(24, 42),
      'xl': fluid(17, 22),
      base: fluid(16, 20),
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
