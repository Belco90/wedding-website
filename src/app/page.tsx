import Image from 'next/image'

import { Heading } from '@/components/ui/heading'
import { Text } from '@/components/ui/text'
import ampersandPic from '@/public/ampersand.png'

import { css } from 'styled-system/css'
import { Box, Center } from 'styled-system/jsx'

export default function HomePage() {
	return (
		<main
			className={css({ background: 'bg.emphasized', height: 'full', p: '8' })}
		>
			<Center flexDirection="column" justifyContent="center" color="accent.fg">
				<Heading as="h1" fontSize="4xl" fontFamily="handwriting">
					¡Nos casamos!
				</Heading>
				<Box
					display="flex"
					flexDirection="column"
					justifyContent="center"
					alignItems="center"
					p="20"
					position="relative"
				>
					<Text
						fontSize="6xl"
						fontWeight="bold"
						top="12"
						position="absolute"
						color="accent.a11"
						zIndex="banner"
					>
						Marta
					</Text>
					<Image
						src={ampersandPic}
						alt="and"
						priority
						style={{ objectFit: 'cover', opacity: 0.6 }}
					/>
					<Text
						fontSize="6xl"
						fontWeight="bold"
						bottom="16"
						position="absolute"
						color="accent.a11"
						zIndex="banner"
					>
						Mario
					</Text>
				</Box>
			</Center>
		</main>
	)
}
