import './index.css'
import type { Metadata } from 'next'
import { Merienda, Outfit, Exo } from 'next/font/google'
import { PropsWithChildren } from 'react'

import { HomeNavBar } from '@/app/HomeNavBar'
import { DEFAULT_TITLE, openGraph } from '@/app/base-metadata'

import { css } from 'styled-system/css'
import { Box, Flex } from 'styled-system/jsx'

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

export default function RootLayout({ children }: PropsWithChildren) {
	return (
		<html
			lang="es"
			suppressHydrationWarning
			className={`${meriendaFont.variable} ${outfitFont.variable} ${exoFont.variable}`}
		>
			<body suppressHydrationWarning>
				<HomeNavBar />
				<Flex h="100vh" direction="column">
					{/* TODO: Header */}
					<main
						className={css({
							flex: '1 0 auto',
						})}
					>
						{children}
					</main>

					{/* Footer */}
					<Box
						bgColor="colorPalette.5"
						color="fg.default"
						fontWeight="bold"
						fontSize={{ base: 'sm', xl: 'xl' }}
						px={{ base: '2', xl: '8' }}
						py="4"
						textAlign="center"
					>
						¡Muchas gracias por acompañarnos!
					</Box>
				</Flex>
			</body>
		</html>
	)
}
