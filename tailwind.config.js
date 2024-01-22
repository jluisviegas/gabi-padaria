/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		'./pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./components/**/*.{js,ts,jsx,tsx,mdx}',
		'./app/**/*.{js,ts,jsx,tsx,mdx}',
	],
	theme: {
		extend: {
			fontSize: {
				clamp: 'clamp(3rem, 7vw, 7rem)',
			},
			colors: {
				primary: '#EBEBEB',
				primaryDark: '#d6d6d6',
				secondary: '#A68D67',
				accentRed: '#B52927',
				accentYellow: '#D3AC4D',
				darkGray: '#2A2A2A',
			},
			fontFamily: {
				gill: ['var(--font-gill)'],
				roboto: ['var(--font-roboto)'],
			},
		},
		screens: {
			xs: '480px',
			ss: '620px',
			sm: '768px',
			md: '1060px',
			lg: '1200px',
			xl: '1700px',
		},
	},
	plugins: [],
};
