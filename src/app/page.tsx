import { PropsWithChildren } from 'react'
import { FiHeart } from 'react-icons/fi'
import { MdOutlineCelebration, MdOutlineTapas } from 'react-icons/md'

import { headingIds, HomeNavBar } from '@/app/HomeNavBar'
import { InteractiveLogo } from '@/components/interactive-logo'
import { LocationMap } from '@/components/location-map'
import { Heading } from '@/components/ui/heading'
import { Link } from '@/components/ui/link'
import { Text } from '@/components/ui/text'

import { css } from 'styled-system/css'
import type { ContainerProps } from 'styled-system/jsx'
import { Box, Container, VStack } from 'styled-system/jsx'

const Section = ({ children, ...props }: PropsWithChildren<ContainerProps>) => (
	<Container maxW="xl" py="8" fontSize="lg" {...props}>
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
		<main className={css({ height: '100vh' })}>
			<HomeNavBar />
			<Section>
				<VStack height="full" justifyContent="space-around" gap={12}>
					<Heading
						id={headingIds.home}
						as="h1"
						size="3xl"
						fontFamily="heading"
						color="fg.default"
					>
						¡Nos casamos!
					</Heading>
					<InteractiveLogo />
					<VStack>
						<Heading
							fontSize="2xl"
							fontFamily="heading"
							color="fg.default"
							as="h2"
						>
							21 Diciembre 2024
						</Heading>
						<Text fontSize="2xl" fontFamily="heading" color="fg.default">
							Málaga
						</Text>
					</VStack>
				</VStack>
			</Section>

			<Box bgColor="bg.muted">
				<Section>
					<VStack alignItems="flex-start">
						<Heading
							id={headingIds.celebration}
							as="h2"
							size="2xl"
							fontFamily="heading"
						>
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
						<Heading
							id={headingIds.location}
							as="h2"
							size="2xl"
							fontFamily="heading"
						>
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

			<Box bgColor="bg.muted">
				<Section>
					<VStack alignItems="flex-start">
						<Heading
							id={headingIds.info}
							as="h2"
							size="2xl"
							fontFamily="heading"
						>
							Otra información
						</Heading>
						<ul
							className={css({
								listStyleType: 'disc',
								listStylePosition: 'inside',
							})}
						>
							<li>
								<strong>Código de vestimenta.</strong> ¡No hay ningún protocolo!
								Viste como te apetezca, serás bienvenido igualmente.
							</li>
							<li>
								<strong>Fecha de confirmación.</strong> Se ruega confirmación
								antes del 4 de diciembre.
							</li>
							<li>
								<strong>Regalo.</strong> El regalo es opcional, la asistencia
								obligatoria. Pero si queréis tener un detalle con nosotros,
								podéis hacerlo a través de Bizum (en nuestros números de móvil
								habituales), o en el siguiente número de cuenta: <br />
								ES20 1465 0100 94 1746596946
							</li>
						</ul>

						<Text>¡Muchas gracias por acompañarnos!</Text>
					</VStack>
				</Section>
			</Box>
		</main>
	)
}
