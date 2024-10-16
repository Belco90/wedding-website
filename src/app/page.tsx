import Image from 'next/image'

import { Heading } from '@/components/ui/heading'
import { Text } from '@/components/ui/text'
import ampersandPic from '@/public/ampersand.png'

import { css } from 'styled-system/css'
import { Container, Flex } from 'styled-system/jsx'

export default function HomePage() {
	return (
		<main className={css({ background: 'bg.emphasized', height: 'full' })}>
			<Container py="4" height="full" maxW="md">
				<Flex
					flexDirection="column"
					alignItems="center"
					height="full"
					justifyContent="space-around"
				>
					<Heading
						as="h1"
						fontSize="xl"
						fontFamily="handwriting"
						color="fg.default"
					>
						¡Nos casamos!
					</Heading>
					<Flex
						flexDirection="column"
						justifyContent="space-between"
						alignItems="center"
						height="300px"
						width="210px"
						borderWidth="4px"
						borderColor="amber.7"
						position="relative"
					>
						<Text
							fontFamily="banner"
							fontSize="5xl"
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
							style={{
								objectFit: 'contain',
								objectPosition: 'center',
								opacity: 0.2,
							}}
						/>
						<Text
							fontFamily="banner"
							fontSize="5xl"
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
			</Container>
		</main>
	)
}
