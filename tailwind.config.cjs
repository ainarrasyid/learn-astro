/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
      colors: {
        primary: {
          blue: {
            '600': '#4085F3'
          }
        }
      },
      textColor: {
        white: '#FFFFFF',
      black: '#000000'
      }
    }
	},
	plugins: [],
}
