import Forms from '@tailwindcss/forms'
import Typography from '@tailwindcss/typography'

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class', // لدعم الوضع الداكن
	content: [
		'./app/**/*.{js,ts,jsx,tsx}',
		'./pages/**/*.{js,ts,jsx,tsx}',
		'./components/**/*.{js,ts,jsx,tsx}',
		'./node_modules/@shadcn/ui/dist/**/*.js',
	],
	theme: {
		extend: {},
	},
	plugins: [
		Forms,
		Typography,
],
}
