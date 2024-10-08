import './index.css'
import type { Metadata } from 'next'
import { ReactNode } from 'react'

import { DEFAULT_TITLE, openGraph } from '@/app/base-metadata'

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
		<html lang="es" suppressHydrationWarning>
			<body suppressHydrationWarning>{children}</body>
		</html>
	)
}
