import { Metadata } from 'next'

export const DEFAULT_TITLE = 'Mario y Marta'

export const openGraph: NonNullable<Metadata['openGraph']> = {
	type: 'website',
	locale: 'es_ES',
	url: '/',
	title: DEFAULT_TITLE,
}
