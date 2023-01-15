/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./src/pages/**/*.{js,ts,jsx,tsx}",
		"./src/components/**/*.{js,ts,jsx,tsx}",
	],
	theme: {
		extend: {
			screens: {
				xs: "475px",
			},
			fontSize: {
				"2xs": "10px",
			},
			colors: {
				"l-primary-color": "var(--primary-color)",
				"l-secondary-color": "var(--secondary-color)",
				"l-success-color": "var(--success-color)",
				"l-warning-color": "var(--warning-color)",
				"l-error-color": "var(--error-color)",
				"l-bg-color": "var(--bg-color)",
				"l-border-color-base": "var(--border-color-base)",
				"l-faded-primary-color": "var(--faded-primary-color)",
				"l-hovered-primary-color":
					"var(--primary-color-hovered)",
				"l-text-color": "var(--text-color)",
				"l-secondary-text-color": "var(--text-color-secondary)",
				"l-body-bg": "var(--body-bg)",
				"l-layer-bg-color": "var(--layer-bg-color)",
				"l-layer-bg-color-hovered":
					"var(--layer-bg-color-hovered)",
				"l-opposite-text-color": "var(--opposite-text-color)",
				"l-input-bg-color": "var(--input-bg-color)",
				"l-section-bg-color": "var(--section-bg-bolor)",
			},
		},
	},
	plugins: [],
};
