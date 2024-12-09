import 'react-notion-x/src/styles.css'
import type { Metadata } from 'next'
import NextImage from 'next/image'
import NextLink from 'next/link'

import { openGraph } from '@/app/base-metadata'
import { notionApi } from '@/notionApi'

import { NotionClientRenderer } from './NotionClientRenderer'

export const revalidate = 600 // 10 minutes

const title = 'Guía de Málaga'
const description = 'Recomendaciones para tu estancia en Málaga'
export const metadata: Metadata = {
	title,
	description,
	openGraph: { ...openGraph, title, description, url: '/guia-malaga' },
}

export default async function GuidePage() {
	const notionPageId = process.env.NOTION_GUIDE_PAGE_ID ?? 'unknown'

	const notionPage = await notionApi.getPage(notionPageId)

	return (
		<NotionClientRenderer
			recordMap={notionPage}
			fullPage
			disableHeader
			darkMode={false}
			components={{
				nextImage: NextImage,
				nextLink: NextLink,
			}}
		/>
	)
}
