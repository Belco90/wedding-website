import { defineConfig } from '@pandacss/dev'
import { createPreset } from '@park-ui/panda-preset'

const customPreset = createPreset({
	accentColor: 'mint',
	grayColor: 'olive',
	borderRadius: 'sm',
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
					handwriting: { value: 'var(--font-merienda)' },
				},
			},
		},
	},
	jsxFramework: 'react',
	outdir: 'styled-system',
})
