import { defineConfig, defineGlobalStyles } from '@pandacss/dev'
import { createPreset } from '@park-ui/panda-preset'
import amber from '@park-ui/panda-preset/colors/amber'
import lime from '@park-ui/panda-preset/colors/lime'
import olive from '@park-ui/panda-preset/colors/olive'

const customPreset = createPreset({
	accentColor: lime,
	grayColor: olive,
	radius: 'sm',
})

const globalCss = defineGlobalStyles({
	// Custom Notion styles
	'.notion-title, .notion-h-title': {
		fontFamily: 'heading !important',
	},
	'.notion': {
		fontFamily: 'body !important',
	},
	'.notion-link': {
		color: 'colorPalette.text !important',
	},
})

export default defineConfig({
	preflight: true,
	presets: [customPreset],
	include: [
		'./src/components/**/*.{ts,tsx,js,jsx}',
		'./src/app/**/*.{ts,tsx,js,jsx}',
	],
	globalCss,
	theme: {
		extend: {
			tokens: {
				colors: {
					amber: amber.tokens,
				},
				fonts: {
					body: { value: 'var(--font-outfit)' },
					heading: { value: 'var(--font-merienda)' },
					banner: { value: 'var(--font-exo)' },
				},
			},
			semanticTokens: {
				colors: {
					amber: amber.semanticTokens,
				},
			},
			recipes: {
				link: {
					base: {
						color: 'colorPalette.text',
						textDecoration: 'underline',
						_hover: {
							color: 'colorPalette.12',
							textDecorationColor: 'colorPalette.12',
						},
					},
				},
			},
			keyframes: {
				'shake-pause': {
					'0%': { transform: 'translateX(0)' },
					'70%': { transform: 'translateX(0)' },
					'75%': { transform: 'translateX(-15px)' },
					'80%': { transform: 'translateX(15px)' },
					'85%': { transform: 'translateX(-15px)' },
					'90%': { transform: 'translateX(15px)' },
					'95%': { transform: 'translateX(-15px)' },
					'100%': { transform: 'translateX(0)' },
				},
				flip: {
					'0%': { transform: 'rotateY(0)' },
					'100%': { transform: 'rotateY(180deg)' },
				},
			},
		},
	},
	jsxFramework: 'react',
	outdir: 'styled-system',
})
