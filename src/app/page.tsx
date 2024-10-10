import { Heading } from '@/components/ui/heading'

import { css } from 'styled-system/css'

export default function HomePage() {
	return (
		<main className={css({ background: 'accent.default', height: 'full' })}>
			<Heading as="h1" textAlign="center" fontFamily="handwriting">
				¡Nos casamos!
			</Heading>
		</main>
	)
}
