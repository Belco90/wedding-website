import Image from 'next/image'
import { PropsWithChildren } from 'react'

import { Heading } from '@/components/ui/heading'
import { Text } from '@/components/ui/text'
import ampersandPic from '@/public/ampersand.png'

import { css } from 'styled-system/css'
import { Container, VStack } from 'styled-system/jsx'
import type { ContainerProps } from 'styled-system/jsx'

const Section = ({ children, ...props }: PropsWithChildren<ContainerProps>) => (
	<Container maxW="md" h="90vh" {...props}>
		{children}
	</Container>
)

export default function HomePage() {
	return (
		<main className={css({ height: 'full' })}>
			<Section>
				<VStack height="full" justifyContent="space-around">
					<Heading
						as="h1"
						fontSize="xl"
						fontFamily="handwriting"
						color="fg.default"
					>
						¡Nos casamos!
					</Heading>
					<VStack
						justifyContent="space-between"
						height="400px"
						width="290px"
						borderWidth="6"
						borderColor="amber.7"
						position="relative"
					>
						<Text
							fontFamily="banner"
							fontSize="6xl"
							color="accent.a11"
							zIndex="banner"
							textTransform="uppercase"
						>
							Marta
						</Text>
						<Image
							src={ampersandPic}
							alt="y"
							priority
							fill
							className={css({
								objectFit: 'contain',
								objectPosition: 'bottom',
								opacity: 0.2,
							})}
						/>
						<Text
							fontFamily="banner"
							fontSize="6xl"
							color="accent.a11"
							zIndex="banner"
							textTransform="uppercase"
						>
							Mario
						</Text>
					</VStack>
					<VStack>
						<Heading
							fontSize="xl"
							fontFamily="handwriting"
							color="fg.default"
							as="h2"
						>
							21 Diciembre 2024
						</Heading>
						<Text fontSize="xl" fontFamily="handwriting" color="fg.default">
							Jardines de San Telmo (Málaga)
						</Text>
					</VStack>
				</VStack>
			</Section>

			<Section bgColor="bg.emphasized" h="auto">
				<VStack>
					<Heading as="h2" py="8">
						Más información próximamente
					</Heading>
				</VStack>
			</Section>
		</main>
	)
}
