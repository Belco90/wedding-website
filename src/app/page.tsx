import { Heading } from '@/components/ui/heading'
import { Text } from '@/components/ui/text'

import { css } from 'styled-system/css'
import { Center } from 'styled-system/jsx'

export default function HomePage() {
	return (
		<main className={css({ background: 'bg.emphasized', height: 'full' })}>
			<Center
				flexDirection="column"
				justifyContent="center"
				height="full"
				color="accent.fg"
			>
				<Heading as="h1" fontSize="4xl" fontFamily="handwriting" mb="4">
					¡Nos casamos!
				</Heading>
				<Text fontSize="2xl">Marta</Text>
				<Text fontSize="2xl" fontFamily="handwriting">
					&
				</Text>
				<Text fontSize="2xl">Mario</Text>
			</Center>
		</main>
	)
}
