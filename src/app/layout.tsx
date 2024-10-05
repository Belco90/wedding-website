import './globals.css'
import type { Metadata } from 'next'
import localFont from 'next/font/local'
import { ReactNode } from 'react'

import { DEFAULT_TITLE, openGraph } from '@/app/base-metadata'

const geistSans = localFont({
	src: './fonts/GeistVF.woff',
	variable: '--font-geist-sans',
	weight: '100 900',
})
const geistMono = localFont({
	src: './fonts/GeistMonoVF.woff',
	variable: '--font-geist-mono',
	weight: '100 900',
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
		<html lang="es">
			<body className={`${geistSans.variable} ${geistMono.variable}`}>
				{children}
			</body>
		</html>
	)
}
