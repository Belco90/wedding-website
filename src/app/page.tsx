import { css } from 'styled-system/css'

export default function HomePage() {
	return (
		<main className={css({ background: 'accent.default', height: 'full' })}>
			<h1
				className={css({
					color: 'accent.fg',
					fontWeight: 'bold',
					textAlign: 'center',
					pt: '16',
				})}
			>
				¡Nos casamos!
			</h1>
		</main>
	)
}
