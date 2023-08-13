/** @type {import('tailwindcss').Config} */

const defaultTheme = require('tailwindcss/defaultTheme');
const colors = require('tailwindcss/colors');

module.exports = {
  content: [
    // Configure the path to all next.js files in the ./src folder.
    './src/**/*.{html,js,svelte,ts}',
  ],
  theme: {
    extend: {

      animation: {
        // Create a gradient animation for the background of the hero section.
        'gradient-hero-x': 'gradient-animation 3s ease infinite',
      },
      // backgroundImage: theme => ({
      //     'gradient-radial': 'radial-gradient(ellipse at center, var(--tw-gradient-stops))',
      //     'gradient-radial-at-t': 'radial-gradient(ellipse at top, var(--tw-gradient-stops))',
      // Add more gradients
      // }),
      colors: {
        'brand': {
          DEFAULT: colors.orange["600"],
          ...colors.sky
        },
        'secondary': {
          DEFAULT: colors.orange["400"],
          ...colors.green,
        },
        'accent': {
          DEFAULT: colors.orange["300"],
          ...colors.orange,
        },
      },
      fontFamily: {
        headings: ['var(--font-raleway)'],
        body: ['var(--font-raleway)'],
        code: ['var(--font-jetbrains-mono)'],
        sketch: ['var(--font-balsamiq-sans)'],
      },

      gridTemplateColumns: {
        // Site-specific column configuration for the hero section horizontal.
        // The first column should take up 1fr of the available space.
        // The second column should take up 1fr or a maximum available space.
        "homepage-hero-horizontal": "max-content max-content",

      },
      gridTemplateRows: {
        // Site-specific row configuration for the main layout of a webpage.
        "webpage-main-layout": "1fr minmax(40px, auto)",

      },
    },
  },
  safelist: [

    // Colors
    {
      pattern: /^(bg|text|border|ring)-(slate|gray|zinc|neutral|stone|red|orange|amber|yellow|lime|green|emerald|teal|cyan|sky|blue|indigo|violet|purple|fuchsia|pink|rose)-(50|100|200|300|400|500|600|700|800|900)$/,
      variants: ['responsive', 'hover', 'focus', 'active', 'dark'],
    },
    // Typography
    {
      pattern: /^(text|leading|tracking)-(xs|sm|base|lg|xl|2xl|3xl|4xl|5xl|6xl|7xl|8xl|9xl)$/,
      variants: ['responsive', 'hover', 'focus', 'active', 'dark'],
    },
    // Visibility and Display
    {
      pattern: /^(invisible|visible|hidden|block|inline-block|inline|flex|inline-flex|grid)$/,
      variants: ['responsive'],
    },
    // Flex
    {
      pattern: /^(flex-([row|col|wrap]|[row|col|wrap]-reverse|nowrap)|items-[start|end|center|baseline|stretch]|self-[auto|start|end|center|stretch]|justify-[start|end|center|between|around|evenly]|space-x-[0-6]|space-x-[8|10|12|16|20|24|32|40|48|56|64]|space-y-[0|1|2|3|4|5|6]|space-y-[8|10|12|16|20|24|32|40|48|56|64])$/,
      variants: ['responsive'],
    },
    // Grid
    {
      pattern: /^(grid-rows-[1-6]|gap-[0-6]|gap-[8|10|12|16|20|24|32|40|48|56|64])$/,
      variants: ['responsive'],
    },
    // Spacing
    {
      pattern: /^((m|p)(t|r|b|l|x|y)?-(0|0.5|1|1.5|2|2.5|3|3.5|4-12|14|16|20|24|28|32|36|40|44|48|52|56|60|64|72|80|96|px|auto))$/,
      variants: ['responsive', 'hover', 'focus', 'active'],
    },
    // Sizing
    {
      pattern: /^((w|h|min-w|min-h|max-w|max-h)-(0|0.5|1|1.5|2|2.5|3|3.5|4-12|14|16|20|24|28|32|36|40|44|48|52|56|60|64|72|80|96|px|full|screen|min|max|auto))$/,
      variants: ['responsive', 'hover', 'focus', 'active'],
    },
  ],
  plugins: [],
}

