import Image from 'next/image'

import { Heading } from '@/components/ui/heading'
import { Text } from '@/components/ui/text'
import ampersandPic from '@/public/ampersand.png'

import { css } from 'styled-system/css'
import { Flex } from 'styled-system/jsx'

export default function HomePage() {
	return (
		<main
			className={css({ background: 'bg.emphasized', height: 'full', p: '8' })}
		>
			<Flex
				flexDirection="column"
				justifyContent="space-between"
				alignItems="center"
				color="accent.fg"
				height="full"
			>
				<Heading
					as="h1"
					fontSize="4xl"
					fontFamily="handwriting"
					color="yellow.a8"
				>
					¡Nos casamos!
				</Heading>
				<Flex
					flexDirection="column"
					justifyContent="center"
					alignItems="center"
					p="20"
					my="10"
					position="relative"
					height="300px"
					width="200px"
				>
					<Text
						fontFamily="banner"
						fontSize="6xl"
						top="-6"
						position="absolute"
						color="accent.a11"
						zIndex="banner"
						textTransform="uppercase"
					>
						Marta
					</Text>
					<Image
						src={ampersandPic}
						alt="and"
						priority
						fill
						style={{ objectFit: 'cover', opacity: 0.6 }}
					/>
					<Text
						fontFamily="banner"
						fontSize="6xl"
						bottom="-4"
						position="absolute"
						color="accent.a11"
						zIndex="banner"
						textTransform="uppercase"
					>
						Mario
					</Text>
				</Flex>
				<Text fontSize="lg" fontFamily="body" color="fg.default">
					Más información próximamente
				</Text>
			</Flex>
		</main>
	)
}
