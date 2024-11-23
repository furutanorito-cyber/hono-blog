/** @type {import('tailwindcss').Config} */
import daisyui from "daisyui";

export default {
	content: ["./app/**/*.tsx"],
	theme: {
		extend: {},
	},
	plugins: [daisyui],
	daisyui: {
		themes: ["fantasy", "night"],
	},
};
