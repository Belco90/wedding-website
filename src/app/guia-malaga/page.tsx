import 'react-notion-x/src/styles.css'

import { notionApi } from '@/notionApi'

import { NotionClientRenderer } from './NotionClientRenderer'

export const revalidate = 600 // 10 minutes

export default async function GuidePage() {
	const notionPageId = process.env.NOTION_GUIDE_PAGE_ID ?? 'unknown'

	const notionPage = await notionApi.getPage(notionPageId)

	return (
		<main>
			<NotionClientRenderer
				recordMap={notionPage}
				fullPage
				darkMode={false}
				disableHeader
			/>
		</main>
	)
}
