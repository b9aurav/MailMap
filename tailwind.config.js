import { skeleton } from '@skeletonlabs/tw-plugin'
import { join } from 'path'
/** @type {import('tailwindcss').Config} */

export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    join(require.resolve(
			'@skeletonlabs/skeleton'),
			'../**/*.{html,js,svelte,ts}'
		)
  ],
  theme: {
    extend: {},
  },
  plugins: [
    skeleton({
      themes: { preset: [ "crimson" ] }
    })
  ],
}

