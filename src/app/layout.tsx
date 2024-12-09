import './index.css'
import type { Metadata, Viewport } from 'next'
import { Merienda, Outfit, Exo } from 'next/font/google'
import NextLink from 'next/link'
import { PropsWithChildren } from 'react'

import { HomeNavBar } from '@/app/HomeNavBar'
import { DEFAULT_TITLE, openGraph } from '@/app/base-metadata'
import { Text } from '@/components/ui/text'

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

export const viewport: Viewport = {
	colorScheme: 'light',
	themeColor: '#e2f0bd',
}

export default function RootLayout({ children }: PropsWithChildren) {
	return (
		<html
			lang="es"
			suppressHydrationWarning
			className={`${meriendaFont.variable} ${outfitFont.variable} ${exoFont.variable}`}
		>
			<body suppressHydrationWarning>
				<Flex h="100vh" direction="column">
					<HomeNavBar />

					{/* Header */}
					<Box
						bgColor="colorPalette.4"
						color="fg.default"
						fontWeight="bold"
						fontSize={{ base: 'sm', xl: 'xl' }}
						px={{ base: '2', xl: '8' }}
						py={{ base: '1', xl: '2' }}
						textAlign="center"
						zIndex="banner"
						shadow="xs"
						position="fixed"
						left="0"
						right="0"
						top="0"
					>
						<NextLink href="/">
							<Text as="span" fontFamily="heading">
								M
							</Text>
							<Text as="span">&</Text>
							<Text as="span" fontFamily="heading">
								M
							</Text>
						</NextLink>
					</Box>

					<main
						className={css({
							flex: '1 0 auto',
						})}
					>
						{children}
					</main>

					{/* Footer */}
					<Box
						bgColor="colorPalette.4"
						color="fg.default"
						fontWeight="bold"
						fontSize={{ base: 'sm', xl: 'xl' }}
						px={{ base: '2', xl: '8' }}
						py="2"
						textAlign="center"
						zIndex="banner"
					>
						¡Muchas gracias por acompañarnos!
					</Box>
				</Flex>
			</body>
		</html>
	)
}
