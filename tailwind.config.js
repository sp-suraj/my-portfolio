/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			backgroundColor: {
				primary: "#ebf0f3",
				dark: "#212328",
				typeRed: "#ff014f",
			},
			textColor: {
				primary: "#202428",
				secondary: "#666c77",
				inactive: "#575d66",
				inactive_dark: "#575d66",
				typeRed: "#ff014f",
			},
			backgroundImage: {
				lightDark: "linear-gradient(145deg, #1e2024, #23272b)",
			},
		},
	},
	plugins: [],
	darkMode: "class",
};
