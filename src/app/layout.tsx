import './index.css'
import type { Metadata } from 'next'
import { Merienda, Outfit, Exo } from 'next/font/google'
import { ReactNode } from 'react'

import { DEFAULT_TITLE, openGraph } from '@/app/base-metadata'

const meriendaFont = Merienda({
	subsets: ['latin'],
	variable: '--font-merienda',
})

const outfitFont = Outfit({
	subsets: ['latin'],
	variable: '--font-outfit',
})

const exoFont = Exo({
	subsets: ['latin'],
	variable: '--font-exo',
})

export const metadata: Metadata = {
	title: {
		template: `%s | ${DEFAULT_TITLE}`,
		default: DEFAULT_TITLE,
	},
	description: '¡Nos casamos!',
	openGraph: { ...openGraph },
}

export default function RootLayout({
	children,
}: Readonly<{
	children: ReactNode
}>) {
	return (
		<html
			lang="es"
			suppressHydrationWarning
			className={`${meriendaFont.variable} ${outfitFont.variable} ${exoFont.variable}`}
		>
			<body suppressHydrationWarning>{children}</body>
		</html>
	)
}
