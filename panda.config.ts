import { defineConfig } from '@pandacss/dev'
import { createPreset } from '@park-ui/panda-preset'

const customPreset = createPreset({
	accentColor: 'lime',
	grayColor: 'olive',
	borderRadius: 'sm',
	additionalColors: ['*'],
})

export default defineConfig({
	preflight: true,
	presets: ['@pandacss/preset-base', customPreset],
	include: [
		'./src/components/**/*.{ts,tsx,js,jsx}',
		'./src/app/**/*.{ts,tsx,js,jsx}',
	],
	theme: {
		extend: {
			tokens: {
				fonts: {
					body: { value: 'var(--font-outfit)' },
					heading: { value: 'var(--font-merienda)' },
					banner: { value: 'var(--font-exo)' },
				},
			},
			recipes: {
				link: {
					base: {
						color: 'accent.text',
						textDecoration: 'underline',
						_hover: { color: 'accent.emphasized' },
					},
				},
			},
		},
	},
	jsxFramework: 'react',
	outdir: 'styled-system',
})
