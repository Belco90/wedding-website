import Image from 'next/image'
import { PropsWithChildren } from 'react'
import { FiHeart } from 'react-icons/fi'
import { MdOutlineTapas, MdOutlineCelebration } from 'react-icons/md'

import { LocationMap } from '@/components/location-map'
import { Heading } from '@/components/ui/heading'
import { Link } from '@/components/ui/link'
import { Text } from '@/components/ui/text'
import ampersandPic from '@/public/ampersand.png'

import { css } from 'styled-system/css'
import { Box, Container, VStack } from 'styled-system/jsx'
import type { ContainerProps } from 'styled-system/jsx'

const Section = ({ children, ...props }: PropsWithChildren<ContainerProps>) => (
	<Container maxW="xl" py="8" {...props}>
		{children}
	</Container>
)

const planningLiCss = css({
	display: 'flex',
	alignItems: 'center',
	gap: 2,
})

export default function HomePage() {
	return (
		<main
			className={css({ height: '100vh', pb: 'env(safe-area-inset-bottom)' })}
		>
			<Section h="80vh">
				<VStack height="full" justifyContent="space-around">
					<Heading as="h1" size="3xl" fontFamily="heading" color="fg.default">
						¡Nos casamos!
					</Heading>
					<VStack
						justifyContent="space-between"
						height="300px"
						width="300px"
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
								objectPosition: 'center',
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
							fontFamily="heading"
							color="fg.default"
							as="h2"
						>
							21 Diciembre 2024
						</Heading>
						<Text fontSize="xl" fontFamily="heading" color="fg.default">
							Jardines de San Telmo (Málaga)
						</Text>
					</VStack>
				</VStack>
			</Section>

			<Box bgColor="bg.muted">
				<Section>
					<VStack alignItems="flex-start">
						<Heading as="h2" size="2xl" fontFamily="heading">
							Ceremonia y celebración
						</Heading>
						<Text>
							¡Nos encantaría compartir contigo este día tan especial! La
							ceremonia y la celebración tendrán lugar en Jardines de San Telmo.
							Se ruega a los invitados llegar sobre las 12:30.
						</Text>
						<Box>
							<Text>La planificación del evento es la siguiente:</Text>
							<ul>
								<li className={planningLiCss}>
									<FiHeart />
									<span>12:30 - Bienvenida y ceremonia</span>
								</li>
								<li className={planningLiCss}>
									<MdOutlineTapas />
									<span>14:00 - Cóctel y comida</span>
								</li>
								<li className={planningLiCss}>
									<MdOutlineCelebration />
									<span>18:00 - Fiesta</span>
								</li>
							</ul>
						</Box>
					</VStack>
				</Section>
			</Box>

			<Box>
				<Section>
					<VStack alignItems="flex-start">
						<Heading as="h2" size="2xl" fontFamily="heading">
							Cómo llegar
						</Heading>

						<Text>
							La finca se encuentra cerca del Jardín Botánico (en dirección a
							Ciudad Jardín, pasada la Hacienda Nadales). Podéis llegar
							fácilmente desde el centro de Málaga, en aproximadamente 15
							minutos.
						</Text>

						<Text>
							Si necesitáis pedir un taxi, podéis hacerlo llamando al{' '}
							<Link href="tel:952333333">952 333 333 (Unitaxi)</Link> o al{' '}
							<Link href="tel:665827814">665 827 814 (Radiotaxi)</Link>.
						</Text>

						<Text>Aquí os dejamos la ubicación en Google Maps:</Text>
						<LocationMap />
					</VStack>
				</Section>
			</Box>
		</main>
	)
}
