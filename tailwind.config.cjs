/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{html,js,svelte,ts}', './src/app.html'],
	theme: {
		colors: {
			mustard: 'rgba(var(--mustard), <alpha-value>)',
			orange: 'rgba(var(--orange), <alpha-value>)',
			retro: 'rgba(var(--retro), <alpha-value>)',
			black: 'rgba(var(--black), <alpha-value>)'
		},
		fontFamily: {
			fancy: ['"Alfa Slab One"', 'cursive'],
			mono: ['"Fira Code"', 'monospace']
		},
		extend: {
			boxShadow: {
				brutalist: '-0.75vmin -0.5vmin 0 0 rgba(var(--black), 1)'
			},
			gridTemplateRows: {
				'site-layout': '2fr 80% 1fr',
				'player-layout': '1fr minmax(10%,15%)'
			},
			gridTemplateColumns: {
				player_controls: '1fr'
			},
		}
	},
	plugins: [require('daisyui')]
};
